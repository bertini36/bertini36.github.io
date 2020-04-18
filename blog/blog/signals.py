# -*- coding: UTF-8 -*-

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.urls import reverse

from .models import Comment, Message
from .utils import send_email


@receiver(post_save, sender=Comment)
def new_comment(sender, instance, created, **kwargs):
    if created:
        url = reverse('admin:blog_comment_change', args=[instance.id])
        send_email(
            f'Comment pending validation from '
            f'{instance.contact.name} in post {instance.post.name}',
            f'You can validate it at {url}'
        )


@receiver(post_save, sender=Message)
def new_message(sender, instance, created, **kwargs):
    if created:
        send_email(
            f'Direct message from '
            f'{instance.contact.name} ({instance.contact.email})',
            instance.text
        )
