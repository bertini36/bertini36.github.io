# -*- coding: UTF-8 -*-


class BlogApiException(Exception):
    default_message = None

    def __init__(self, errors: any):
        self.errors = errors or self.default_message
        super().__init__(self.errors)


class PostNotFound(BlogApiException):
    default_message = 'Post not found'


class MultiplePostsFound(BlogApiException):
    default_message = 'Multiple posts found with this criteria'


class InvalidDataError(BlogApiException):
    default_message = 'Looks like something is wrong in data'
