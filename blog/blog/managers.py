# -*- coding: UTF-8 -*-

from django.db import models


class CommentManager(models.Manager):

    def validated(self, **kwargs):
        return self.filter(validated=True, **kwargs).order_by('-created')
