# -*- coding: UTF-8 -*-

from django.apps import AppConfig


class BlogConfig(AppConfig):
    name = 'blog.blog'
    verbose_name = 'Blog'

    def ready(self):
        import blog.blog.signals
