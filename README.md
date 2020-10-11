<h3 align="center">
    bertini36/blog 👩‍💻 
</h3>
<p align="center">
  <a href="#-environment-setup" target="_blank">
    Installation
  </a>&nbsp;&nbsp;•&nbsp;
  <a href="tailwind.config.js" target="_blank">
    Tailwind config
  </a>&nbsp;&nbsp;•&nbsp;
  <a href="https://github.com/bertini36/comments-engine/blob/master/Makefile" target="_blank">
    Commands
  </a>
</p>
<p align="center">
In this blog I used to write posts about different technologies that I have 
found interesting. 
</p>
<p align="center">
Powered by <a href="https://github.com/sveltejs/svelte">#svelte</a>,
 <a href="https://github.com/sveltejs/sapper">#sapper</a> and
 <a href="https://github.com/tailwindcss/tailwindcss">#tailwind</a>
</p>

## ⚙️ Environment Setup

### 🐳 Required tools

1. [Install Docker and Docker Compose](https://www.docker.com/get-started)
2. Clone this project: `git clone https://github.com/bertini36/bertini36.github.io`
3. Move to the project folder: `bertini36.github.io`

### 🔥 Application execution

1. Install all the dependencies and bring up the project with Docker executing: `make build`
2. Run the server: `make serve` (by default Sapper runs applications at 3000 port)
3. Run [comments engine](https://github.com/bertini36/comments-engine)

## 🚀 Deploy

Check Github configurations at `scripts/deploy.js`

Set your comments url and execute
```bash
make deploy COMMENTS_URL=[your-aws-url-or-whathever]
```
This script builds `develop` branch and allocates results on `master` branch. 

Finally just configure yout custom domain on Github pages.

<p align="center">&mdash; Built with :heart: from Mallorca &mdash;</p>