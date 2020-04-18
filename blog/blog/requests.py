# -*- coding: UTF-8 -*-

from dataclasses import dataclass


@dataclass
class CreatePostRequest:
    name: str = None
    slug: str = None
    technology: str = None
    main_photo_path: str = None


@dataclass
class FilterPostsRequest:
    obj_id: int = None
    name: str = None
    slug: str = None
    published: bool = None


@dataclass
class SendMessageRequest:
    name: str = None
    email: str = None
    text: str = None
    captcha: str = None
    client_ip: str = None


@dataclass
class GetPostRequest:
    slug: str = None


@dataclass
class GetCommentsRequest:
    slug: str = None


@dataclass
class PublishCommentRequest:
    name: str = None
    email: str = None
    text: str = None
    post_slug: str = None
