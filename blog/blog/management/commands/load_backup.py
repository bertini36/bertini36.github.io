# -*- coding: utf-8 -*-

import json

from django.core.management.base import BaseCommand
from loguru import logger

from blog.blog.api import blog_api
from blog.blog.requests import CreatePostRequest


class Command(BaseCommand):
    help = 'Fill database with written posts'

    def handle(self, *args, **options):
        logger.info('Creating post instances')
        with open('blog/blog/management/commands/posts.json') as f:
            data = json.load(f)
            for post_kwargs in data['posts']:
                request = CreatePostRequest(**post_kwargs)
                blog_api.create_post(request)
