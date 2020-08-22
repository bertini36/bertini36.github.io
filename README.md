# 👩‍💻 Blog

In this blog I used to write posts about different technologies that I have 
found interesting.

Powered by [#svelte](https://github.com/sveltejs/svelte),
 [#sapper](https://github.com/sveltejs/sapper),
 [#tailwind](https://github.com/tailwindcss/tailwindcss) and
 [#serverless](https://www.serverless.com/).

## 🚀 Environment Setup

### 🐳 Required tools

1. [Install Docker and Docker Compose](https://www.docker.com/get-started)
2. Clone this project: `git clone https://github.com/bertini36/bertini36.github.io`
3. Move to the project folder: `bertini36.github.io`

### 🔥 Application execution

1. Install all the dependencies and bring up the project with Docker executing: `make build`
2. Run the server: `make up`

## ✈ Deploy

### Github deploy
Check configurations at `scripts/deploy.js` and then
```bash
make frontend-deploy
```
This script builds `develop` branch and allocates results on `master` branch. 
Finally just configure the custom domain on Github pages.

### Comments engine backend deploy
```bash
make backend-deploy
```

<p align="center">&mdash; Built with :heart: from Mallorca &mdash;</p>