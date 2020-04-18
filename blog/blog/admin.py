# -*- coding: UTF-8 -*-

from django.contrib import admin

from .models import Comment, Post, Contact, Message


class PostAdmin(admin.ModelAdmin):
    list_filter = ('created',)
    list_display = ('created', 'name', 'published')


class ContactAdmin(admin.ModelAdmin):
    list_filter = ('created',)
    list_display = ('created', 'name', 'email')


class MessageAdmin(admin.ModelAdmin):
    list_filter = ('created',)
    list_display = ('created', 'contact', 'text')


class CommentAdmin(admin.ModelAdmin):
    list_filter = ('created',)
    list_display = ('created', 'post', 'contact', 'validated')


admin.site.register(Post, PostAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Message, MessageAdmin)
