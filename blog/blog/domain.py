# -*- coding: UTF-8 -*-

from dataclasses import dataclass


@dataclass
class Comment:
    id: int
    created: str
    text: str
    validated: bool
    post_id: int
    contact_id: int
    contact_name: str


@dataclass
class Post:
    id: int
    name: str
    slug: str
    technology: str
    published: bool
    main_photo_path: str


@dataclass
class Contact:
    id: int
    name: str
    email: str


@dataclass
class Message:
    id: int
    text: str
    contact_id: int
