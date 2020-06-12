# Blog

In this blog I used to write posts about different technologies that I have 
found interesting.

Powered by [#svelte](https://github.com/sveltejs/svelte),
 [#sapper](https://github.com/sveltejs/sapper) and 
 [#tailwind](https://github.com/tailwindcss/tailwindcss).

## Getting started

### Download the code

```bash
git clone https://github.com/bertini36/bertini36.github.io
```

### Running the project

When you get the code, you can install dependencies and run the project in development mode with:

```bash
cd bertini36.github.io
npm install
npm run dev
```

and in other console

```bash
npm run dev:tailwind
```

Open up [localhost:3000](http://localhost:3000) and start clicking around
and when you update the code you will see the changes directly in your browser.

### Deploy on Github
Check configurations at `scripts/deploy.js` and then
```bash
npm run deploy
```
This script builds `develop` branch and allocates results on `master` branch. 

Finally just configure Github pages.

<p align="center">&mdash; Built with :heart: from Mallorca &mdash;</p>