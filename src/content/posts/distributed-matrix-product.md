---
title: "Distributed Matrix Product with MPI and CUDA"
date: 2016-11-02
description: "How to distribute and parallelize matrix multiplication across multiple nodes using MPI and CUDA"
---

![MareNostrum III](/images/posts/distributed_matrix_product/marenostrum_supercomputer_bsc.jpg)

One of the main challenges with any algorithm today is its ability to scale, whether that means running across multiple cores (parallelization) or across multiple nodes (distribution). The massive amounts of data available have driven the development of technologies that make parallelization and distribution easier and more automated. Virtually every computationally expensive algorithm now has a distributed version. Tasks like finding prime numbers, running complex simulations, or training statistical prediction models that would take years to complete can now produce results in hours thanks to the combined power of many computers.

This is exactly what supercomputing centers like the [Barcelona Supercomputing Center (BSC)](https://www.bsc.es/) specialize in. BSC operates a supercomputer called MareNostrum, which allows users to run computationally expensive algorithms or process massive datasets in a distributed manner. MareNostrum III, for example, has 3,108 nodes, each with 2 processors of 8 cores (over 49,728 cores in total).

In this post, I'll demonstrate how to distribute matrix multiplication across several nodes and parallelize the computation within each node. Matrix multiplication is an operation that, when performed with very large matrices, becomes computationally intensive.

$$
C_{ij} = \sum_{k} A_{ik} B_{kj}
$$

Since each element of the resulting matrix is independent of the others, we can distribute the computation without any restrictions. For this example with 4 nodes, each node is going to be responsible for computing a quarter of the resulting matrix. Matrices A and B are distributed to all nodes to ensure they have the data required for their computations.

For distribution, I'm using [MPI](https://www.open-mpi.org/) (Message Passing Interface). MPI functions allow data to be shared across nodes and specify, using process IDs, which part of the result matrix each node should calculate.

![Distributed matrix product](/images/posts/distributed_matrix_product/mpi_distributed_matrix_multiplication_diagram.svg)

For parallel computation within each node, we leverage GPUs. Each node of MareNostrum III has an NVIDIA K80 graphics card, which can be used for parallel computing via NVIDIA's [CUDA](https://en.wikipedia.org/wiki/CUDA) (Compute Unified Device Architecture) platform. GPUs are essentially large arrays of simple processors that can dramatically speed up certain computations.

The computation is decomposed into many threads that execute concurrently. Each thread calculates a single element of the resulting matrix. CUDA requires defining a block structure (groups of threads), with each thread's data domain determined by its `threadId` and `blockId`.

```c
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* MULTI-NODE AND PARALLEL MATRIX-MATRIX PRODUCT WITH MPI AND CUDA           */
/*                                                                           */
/* Description:  This program performs a matrix product (A * B = C)          */
/*               distributing the computation between multiple nodes         */
/*               with MPI technology and parallelizing the computation in    */
/*               every node with Nvidia CUDA technology                      */
/* Compilation:  nvcc -I/opt/mpi/bullxmpi/1.2.9.1/include                    */  
/*               -L/opt/mpi/bullxmpi/1.2.9.1/lib -lmpi -ldl -lm -lnuma       */
/*               -lrt -lnsl -lutil -lm -ldl mmpmpicuda.cu -o mmpmpicuda      */
/* Strategy:                                                                 */
/*                  Example 16x16 matrices with 4 nodes:                     */
/*                   _________________16________________                     */
/*                   |                                 |                     */
/*                   |               NODE 1            | 4                   */
/*                   |_________________________________|                     */
/*                   |                                 |                     */
/*                   |               NODE 2            | 4                   */
/*              C =  |_________________________________|    16               */ 
/*                   |                                 |                     */
/*                   |               NODE 3            | 4                   */
/*                   |_________________________________|                     */
/*                   |                                 |                     */ 
/*                   |               NODE 4            | 4                   */
/*                   |_________________________________|                     */
/*                                                                           */
/*                  Node 1 computes 4 rows of result matrix:                 */
/*                   __________________________________                      */
/*                   |                                 |                     */
/*                   |         4x16 CUDA block         |                     */
/*                   |_________________________________|                     */
/*                                                                           */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

#include <stdio.h>
#include <stdlib.h>
#include <mpi.h>
#include <cuda.h>

#define N 1024
#define err(format, ...) do { fprintf(stderr, format, ##__VA_ARGS__); exit(1); } while (0)

struct timeval start_time, end_time;

inline void checkCuda(cudaError_t e) {
    if (e != cudaSuccess) {
        err("CUDA Error %d: %s\n", e, cudaGetErrorString(e));
    }
}

__global__ void matrixProduct(double *matrix_a, double *matrix_b, 
                              double *matrix_c, int width, int nrows, int my_rank) {
    int row = threadIdx.y + blockDim.y * blockIdx.y;
    int col = threadIdx.x + blockDim.x * blockIdx.x; 
    matrix_c[row * width + col] = 0;
    for (int k = 0; k < width; k++) {
        matrix_c[row * width + col] += 
            matrix_a[(row * width) + (my_rank * nrows * width) + k] * 
            matrix_b[k * width + col];
    }
}

void initializeMatrices(double matrix_a[N][N], double matrix_b[N][N]) {
    srand(time(NULL));
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            matrix_a[i][j] = rand();
            matrix_b[i][j] = rand();
        }
    }
}

int main(int argc, char *argv[]) {
    double A[N][N], B[N][N], C[N][N];
    double *d_a, *d_b, *d_c;
    int my_rank, comm_sz, from, to, nrows;

    // MPI initialization
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &my_rank);
    MPI_Comm_size(MPI_COMM_WORLD, &comm_sz);

    if (N % comm_sz != 0) {
        if (my_rank == 0) 
            printf("Matrix size not divisible by number of processors\n");
        MPI_Finalize();
        exit(-1);
    }

    // Calculate interval lines to compute per node
    from = my_rank * N / comm_sz;
    to = (my_rank + 1) * N / comm_sz;
    nrows = to - from;

    if (my_rank == 0) { initializeMatrices(A, B); }

    // Broadcast A and B to every node
    MPI_Bcast(A, N*N, MPI_DOUBLE, 0, MPI_COMM_WORLD);
    MPI_Bcast(B, N*N, MPI_DOUBLE, 0, MPI_COMM_WORLD);

    // Allocate memory on device
    checkCuda(cudaMalloc((void **) &d_a, N*N*sizeof(double)));
    checkCuda(cudaMalloc((void **) &d_b, N*N*sizeof(double)));
    checkCuda(cudaMalloc((void **) &d_c, (N*N/comm_sz)*sizeof(double)));

    // Copy data to device
    checkCuda(cudaMemcpy(d_a, A, N*N*sizeof(double), cudaMemcpyHostToDevice));
    checkCuda(cudaMemcpy(d_b, B, N*N*sizeof(double), cudaMemcpyHostToDevice));

    // CUDA thread structure
    dim3 dimGrid(1);
    dim3 dimBlock(N, nrows);    

    MPI_Barrier(MPI_COMM_WORLD);
    if (my_rank == 0) { gettimeofday(&start_time, NULL); }

    // Launch kernel
    matrixProduct<<<dimGrid, dimBlock>>>(d_a, d_b, d_c, N, nrows, my_rank);
    checkCuda(cudaDeviceSynchronize());
    checkCuda(cudaGetLastError());

    // Calculate compute time
    MPI_Barrier(MPI_COMM_WORLD);
    if (my_rank == 0) { 
        gettimeofday(&end_time, NULL);
        printf("Compute time: %.1f ms\n", 
            (float)(end_time.tv_sec - start_time.tv_sec) * 1000 + 
            (end_time.tv_usec - start_time.tv_usec) / 1000);
    }

    // Get results from device
    checkCuda(cudaMemcpy(C[from], d_c, nrows*N*sizeof(double), cudaMemcpyDeviceToHost));

    // Gather results from all nodes
    MPI_Gather(C[from], N*N/comm_sz, MPI_DOUBLE, C, N*N/comm_sz, MPI_DOUBLE, 0, MPI_COMM_WORLD);

    checkCuda(cudaFree(d_a));
    checkCuda(cudaFree(d_b));
    checkCuda(cudaFree(d_c));

    MPI_Finalize();
    return 0;
}
```

One of the main challenges with CUDA is that achieving optimal performance requires understanding the technical specifications of the GPU running the code. Block size (number of threads) and memory hierarchy usage are critical factors to consider when programming with this technology.

You can find two versions of the matrix product implementation in this [GitHub repository](https://github.com/bertini36/distributedMatrixProduct). One using only MPI and another using only CUDA.
