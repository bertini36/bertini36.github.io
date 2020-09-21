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
1. Check Github configurations at `scripts/deploy.js`
2. Find your comments base url and execute
```bash
make frontend-deploy COMMENTS_BASE_URL=[your-aws-url-or-whathever]
```
This script builds `develop` branch and allocates results on `master` branch. 
Finally just configure the custom domain on Github pages.

### Comments engine backend deploy
First configure your AWS credentials at `.env`. Including generated AWS Api Gateway
url `COMMENTS_BASE_URL`.
```bash
cp .env-sample .env
```

After this, to update your lambda functions
```bash
make backend-deploy
```

<p align="center">&mdash; Built with :heart: from Mallorca &mdash;</p>