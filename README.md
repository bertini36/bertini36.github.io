![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)
[![Build Status](https://api.travis-ci.org/bertini36/blog.svg?branch=master)](https://travis-ci.org/bertini36/blog)

# Blog

In this blog I used to write posts about different technologies that I have 
found interesting. Also I usually use it to test new technologies. My last 
updates of it were to update the frontend using Svelte and to deploy using 
Terraform.

## Project structure

- Backend: [Django](https://www.djangoproject.com/)
- Frontend: [Svelte](https://svelte.dev/) & [Tailwind](https://tailwindcss.com/)
- Architecture deploy: [Terraform](https://www.terraform.io/)

## Download code

```bash
git clone https://github.com/bertini36/blog
```

## Build production environment

### Prerequisites

If you don’t have Terraform installed, download it for your OS from: 

- https://www.terraform.io/downloads.html

If you don't have an Heroku account, create it:

- https://www.heroku.com

and follow the instructions to install its client from:

- https://devcenter.heroku.com/articles/heroku-cli

### Configure access to Heroku

```bash
export APP_NAME=albertopou
heroku authorizations:create --description $APP_NAME
export HEROKU_API_KEY=<TOKEN> HEROKU_EMAIL=<EMAIL>
```

### Build environment

```bash
cd environments/prod/
cp infrastructure.tfsample infrastructure.tf
```

Set environment variables defined at `infrastructure.tf` and then execute terraform

```bash
terraform init
terraform apply
```

If the infrascture has been created correctly in Heroku you will have received the blog url as output
```
blog_url = https://albertopou.herokuapp.com
```

**Register posts**
```bash
heroku run python manage.py load_backup
```

## Build develop environment

### Prerequisites

If you don’t have Docker installed, follow the instructions for your OS:

- On Mac OS X, you’ll need [Docker for Mac](https://docs.docker.com/docker-for-mac/)
- On Windows, you’ll need [Docker for Windows](https://docs.docker.com/docker-for-windows/)
- On Linux, you’ll need [docker-engine](https://docs.docker.com/engine/installation/)

And aditionally install [Docker compose](https://docs.docker.com/compose/install/)

### Set project environ variables

```
cp .env-sample .env
```
Set environment variables defined at `.env`

### Build environment

**Build environment**
```bash
make build
```

**Create database tables**
```bash
make migrate
```

**Collect statics**
```bash
make collectstatic
```

**Register posts**
```bash
make loadbackup
```

**Create admin user**
```bash
make createsuperuser
```

**Generate frontend dependencies**
```bash
make npminstall
```

**Build Tailwind styles**
```bash
make tailwind_build
```

**Build Svelte app**
```bash
make svelte_build
```

## Run tests
```bash
make run_tests
```

<p align="center">&mdash; Built with :heart: from Mallorca &mdash;</p>
