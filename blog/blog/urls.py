# -*- coding: utf-8 -*-

from django.urls import path

from .views import (
    send_message,
    get_posts,
    index,
    get_post_text,
    get_comments,
    publish_comment
)

app_name = 'blog'

urlpatterns = [
    path('', view=index, name='blog'),
    path('send/message/', send_message, name='send-message'),
    path('posts/', view=get_posts, name='get-posts'),
    path(
        'posts/<slug:post_slug>/text/',
        view=get_post_text,
        name='get-post-text'
    ),
    path(
        'posts/<slug:post_slug>/comments/',
        view=get_comments,
        name='get-comments'
    ),
    path(
        'posts/<slug:post_slug>/comments/publish/',
        view=publish_comment,
        name='publish-comment'
    )
]
