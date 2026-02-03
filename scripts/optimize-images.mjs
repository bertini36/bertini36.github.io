
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { optimize } from 'svgo';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'public/images');

async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return files.flat();
}

async function optimizeImages() {
    console.log('Starting image optimization...');
    const files = await getFiles(IMAGES_DIR);
    let totalSaved = 0;

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const originalStats = await fs.stat(file);
        const originalSize = originalStats.size;
        let optimizedBuffer;

        try {
            if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                console.log(`Optimizing ${path.relative(ROOT_DIR, file)}...`);
                const image = sharp(file);
                const metadata = await image.metadata();

                if (ext === '.png') {
                    // Lossless compression for PNG is often best for diagrams/screenshots 
                    // but for web, a slight lossy compression is acceptable.
                    // Using adaptive filtering and palette compression can help.
                    optimizedBuffer = await image
                        .png({ quality: 80, compressionLevel: 9, palette: true })
                        .toBuffer();
                } else if (ext === '.jpg' || ext === '.jpeg') {
                    optimizedBuffer = await image
                        .jpeg({ quality: 80, mozjpeg: true })
                        .toBuffer();
                } else if (ext === '.webp') {
                    optimizedBuffer = await image
                        .webp({ quality: 80 })
                        .toBuffer();
                }
            } else if (ext === '.svg') {
                console.log(`Optimizing ${path.relative(ROOT_DIR, file)}...`);
                const data = await fs.readFile(file, 'utf8');
                const result = optimize(data, {
                    path: file,
                    multipass: true, // Optimize multiple times
                    plugins: [
                        {
                            name: 'preset-default',
                        },
                    ],
                });
                optimizedBuffer = Buffer.from(result.data);
            } else {
                continue;
            }

            if (optimizedBuffer) {
                const newSize = optimizedBuffer.length;
                if (newSize < originalSize) {
                    await fs.writeFile(file, optimizedBuffer);
                    const saved = originalSize - newSize;
                    totalSaved += saved;
                    console.log(`  Saved ${(saved / 1024).toFixed(2)} KB (${((saved / originalSize) * 100).toFixed(1)}%)`);
                } else {
                    console.log(`  Skipped (new size is larger)`);
                }
            }
        } catch (err) {
            console.error(`  Error optimizing ${file}:`, err.message);
        }
    }

    console.log(`\nOptimization complete!`);
    console.log(`Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();
