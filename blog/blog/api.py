# -*- coding: UTF-8 -*-

from dataclasses import asdict
from typing import Type

from blog.blog.responses import ErrorResponseBuilder, ResponseBuilder
from .exceptions import BlogApiException
from .repository import DjangoBlogRepository, BlogRepository
from .requests import (
    FilterPostsRequest,
    SendMessageRequest,
    GetPostRequest,
    GetCommentsRequest,
    PublishCommentRequest,
    CreatePostRequest
)
from .validators import (
    FilterPostsRequestValidator,
    SendMessageRequestValidator,
    GetPostRequestValidator,
    GetCommentsRequestValidator,
    PublishCommentRequestValidator,
    CreatePostRequestValidator
)


class BlogApi:

    def __init__(self, blog_repository: Type[BlogRepository]):
        self.blog_repository = blog_repository
        self.response_builder = ResponseBuilder
        self.error_builder = ErrorResponseBuilder

    def create_post(self, request: CreatePostRequest) -> dict:
        try:
            CreatePostRequestValidator.validate(request)
            post = self.blog_repository.create_post(**asdict(request))
            return self.response_builder(post).build()

        except BlogApiException as e:
            return self.error_builder(e).build()

    def filter_posts(self, request: FilterPostsRequest) -> dict:
        try:
            FilterPostsRequestValidator.validate(request)
            posts = self.blog_repository.filter_posts(**asdict(request))
            return self.response_builder(posts).build()

        except BlogApiException as e:
            return self.error_builder(e).build()

    def get_post(self, request: GetPostRequest):
        try:
            GetPostRequestValidator.validate(request)
            post = self.blog_repository.get_post(**asdict(request))
            return self.response_builder(post).build()

        except BlogApiException as e:
            return self.error_builder(e).build()

    def send_message(self, request: SendMessageRequest) -> dict:
        try:
            SendMessageRequestValidator.validate(request)
            contact = self.blog_repository.get_or_create_contact(
                name=request.name,
                email=request.email
            )
            self.blog_repository.create_message(
                contact_id=contact.id,
                text=request.text
            )
            return self.response_builder({}).build()

        except BlogApiException as e:
            return self.error_builder(e).build()

    def get_comments(self, request: GetCommentsRequest):
        try:
            GetCommentsRequestValidator.validate(request)
            comments = self.blog_repository.get_post_comments(**asdict(request))
            return self.response_builder(comments).build()

        except BlogApiException as e:
            return self.error_builder(e).build()

    def publish_comment(self, request: PublishCommentRequest):
        try:
            PublishCommentRequestValidator.validate(request)
            post = self.blog_repository.get_post(slug=request.post_slug)
            contact = self.blog_repository.get_or_create_contact(
                name=request.name,
                email=request.email
            )
            comment = self.blog_repository.create_comment(
                text=request.text,
                post_id=post.id,
                contact_id=contact.id
            )
            return self.response_builder(comment).build()

        except BlogApiException as e:
            return self.error_builder(e).build()


blog_api = BlogApi(DjangoBlogRepository)
