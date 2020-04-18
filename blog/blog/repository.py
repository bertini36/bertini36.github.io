# -*- coding: UTF-8 -*-

from abc import ABC, abstractmethod
from typing import List

from django.db import DatabaseError

from . import domain
from . import models
from .adapters import DjangoDataAdapter
from .exceptions import (
    PostNotFound,
    MultiplePostsFound,
    InvalidDataError
)
from .utils import format_date


class BlogRepository(ABC):

    @classmethod
    @abstractmethod
    def create_post(
        cls,
        name: str,
        slug: str,
        technology: str,
        main_photo_path: str
    ):
        pass

    @classmethod
    @abstractmethod
    def filter_posts(
        cls,
        obj_id: int = None,
        name: str = None,
        slug: str = None,
        published: bool = None
    ) -> List[domain.Post]:
        pass

    @classmethod
    @abstractmethod
    def get_post(cls, slug: str) -> domain.Post:
        pass

    @classmethod
    @abstractmethod
    def get_or_create_contact(cls, name: str, email: str) -> domain.Contact:
        pass

    @classmethod
    @abstractmethod
    def create_message(cls, contact_id: int, text: str) -> domain.Message:
        pass

    @classmethod
    @abstractmethod
    def get_post_comments(cls, slug: str) -> List[domain.Comment]:
        pass

    @classmethod
    @abstractmethod
    def create_comment(
        cls,
        text: str,
        contact_id: int,
        post_id: int
    ) -> domain.Comment:
        pass


class DjangoBlogRepository(BlogRepository):
    DATA_ADAPTER = DjangoDataAdapter

    @classmethod
    def create_post(
        cls,
        name: str,
        slug: str,
        technology: str,
        main_photo_path: str
    ):
        django_data = cls.DATA_ADAPTER.transform(
            name=name,
            slug=slug,
            technology=technology,
            main_photo_path=main_photo_path
        )
        try:
            post = models.Post.objects.create(**django_data)
        except DatabaseError:
            raise InvalidDataError
        return cls.transform_to_post_domain_object(post)

    @classmethod
    def filter_posts(
        cls,
        obj_id: int = None,
        name: str = None,
        slug: str = None,
        published: bool = None
    ) -> List[domain.Post]:
        django_filters = cls.DATA_ADAPTER.transform(
            obj_id=obj_id,
            name=name,
            slug=slug,
            published=published
        )
        posts = models.Post.objects.filter(
            **django_filters
        ).order_by('-created')
        return list(map(cls.transform_to_post_domain_object, posts))

    @classmethod
    def get_post(cls, slug: str) -> domain.Post:
        django_filters = cls.DATA_ADAPTER.transform(slug=slug)
        try:
            post = models.Post.objects.get(**django_filters)
        except models.Post.DoesNotExist:
            raise PostNotFound
        except models.Post.MultipleObjectsReturned:
            raise MultiplePostsFound
        return cls.transform_to_post_domain_object(post)

    @classmethod
    def get_or_create_contact(cls, name: str, email: str) -> domain.Contact:
        django_data = cls.DATA_ADAPTER.transform(name=name, email=email)
        try:
            contact, __ = models.Contact.objects.get_or_create(**django_data)
        except DatabaseError:
            raise InvalidDataError
        return cls.transform_to_contact_domain_object(contact)

    @classmethod
    def create_message(cls, contact_id: int, text: str) -> domain.Message:
        django_data = cls.DATA_ADAPTER.transform(
            contact_id=contact_id,
            text=text
        )
        try:
            message = models.Message.objects.create(**django_data)
        except DatabaseError:
            raise InvalidDataError
        return cls.transform_to_message_domain_object(message)

    @classmethod
    def get_post_comments(cls, slug: str) -> List[domain.Comment]:
        post = cls.get_post(slug=slug)
        comments = models.Comment.objects.validated(post_id=post.id)
        return list(map(cls.transform_to_comment_domain_object, comments))

    @classmethod
    @abstractmethod
    def create_comment(
        cls,
        text: str,
        contact_id: int,
        post_id: int
    ) -> domain.Comment:
        django_data = cls.DATA_ADAPTER.transform(
            contact_id=contact_id,
            post_id=post_id,
            text=text,
            validated=True
        )
        try:
            comment = models.Comment.objects.create(**django_data)
        except DatabaseError:
            raise InvalidDataError
        return cls.transform_to_comment_domain_object(comment)

    @classmethod
    def transform_to_post_domain_object(cls, post: models.Post) -> domain.Post:
        return domain.Post(
            id=post.id,
            name=post.name,
            slug=post.slug,
            technology=post.technology,
            published=post.published,
            main_photo_path=post.main_photo_path
        )

    @classmethod
    def transform_to_contact_domain_object(
        cls,
        contact: models.Contact
    ) -> domain.Contact:
        return domain.Contact(
            id=contact.id,
            name=contact.name,
            email=contact.email
        )

    @classmethod
    def transform_to_message_domain_object(
        cls,
        message: models.Message
    ) -> domain.Message:
        return domain.Message(
            id=message.id,
            text=message.text,
            contact_id=message.contact.id
        )

    @classmethod
    def transform_to_comment_domain_object(
        cls,
        comment: models.Comment
    ) -> domain.Comment:
        return domain.Comment(
            id=comment.id,
            created=format_date(comment.created),
            text=comment.text,
            validated=comment.validated,
            post_id=comment.post.id,
            contact_id=comment.contact.id,
            contact_name=comment.contact.name
        )
