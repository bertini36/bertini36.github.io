# 👩‍💻 Blog

In this blog I used to write posts about different technologies that I have 
found interesting.

Powered by [#svelte](https://github.com/sveltejs/svelte),
 [#sapper](https://github.com/sveltejs/sapper),
 [#tailwind](https://github.com/tailwindcss/tailwindcss) and
 [#serverless](https://www.serverless.com/).

## 🚀 Environment Setup

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

### Run lambdas in local
- Change use of `DynamoCommentsRepository` by `InMemoryCommentsRepository` at
dependency injector (`container.py`).
- Uncomment local url at `Comments.svelte` component
- Run flask from `lambdas/`: `flask run`

## 🔥 Deploy

### Github deploy
Check configurations at `scripts/deploy.js` and then
```bash
npm run deploy
```
This script builds `develop` branch and allocates results on `master` branch. 
Finally just configure the custom domain on Github pages.

### Lambdas deploy

First time you need to install dependencies
```bash
cd lambdas/
npm install 
sls plugin install -n serverless-python-requirements
sls plugin install -n serverless-wsgi
```

And then deploy lambdas at AWS
```bash
sls deploy
```

<p align="center">&mdash; Built with :heart: from Mallorca &mdash;</p>