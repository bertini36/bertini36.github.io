# -*- coding: UTF-8 -*-

from django.db import models

from blog.core.models import BaseModel
from .managers import CommentManager


class Post(BaseModel):
    name = models.CharField(max_length=200)
    slug = models.CharField(max_length=200)
    technology = models.CharField(max_length=200)
    published = models.BooleanField(default=True)
    main_photo_path = models.CharField(max_length=200, default='')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'
        ordering = ('created',)


class Contact(BaseModel):
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return f'{self.name} ({self.email})'

    class Meta:
        verbose_name = 'contact'
        verbose_name_plural = 'contacts'
        ordering = ('created',)


class Comment(BaseModel):
    text = models.TextField()
    post = models.ForeignKey(
        Post, related_name='comments', on_delete=models.CASCADE
    )
    contact = models.ForeignKey(
        Contact, null=True, on_delete=models.CASCADE
    )
    validated = models.BooleanField(default=False)

    objects = CommentManager()

    def __str__(self):
        return f'{self.post} - {self.contact}'

    class Meta:
        verbose_name = 'comment'
        verbose_name_plural = 'comments'
        ordering = ('created',)


class Message(BaseModel):
    text = models.TextField()
    contact = models.ForeignKey(Contact, on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.created} - {self.contact}'

    class Meta:
        verbose_name = 'message'
        verbose_name_plural = 'messages'
        ordering = ('created',)
