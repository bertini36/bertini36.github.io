import os
from abc import ABC, abstractmethod
from datetime import datetime
from typing import List

import boto3
from botocore.exceptions import ClientError
from exceptions import DatabaseError, InvalidDataError


registered_post_slugs = (
    'profiling-on-social-networks',
    'automatic-differentiation',
    'distributed-matrix-product',
    'variational-inference-1'
)


class CommentsRepository(ABC):

    @abstractmethod
    def get_comments(self, post_slug: str):
        pass

    @abstractmethod
    def add_comment(self, post_slug: str, comment_data: dict):
        pass


class DynamoCommentsRepository(CommentsRepository):

    def __init__(self):
        self.client = boto3.resource('dynamodb', region_name='eu-west-1')
        self.table = self.client.Table(os.environ['COMMENTS_TABLE'])

    def get_comments(self, post_slug: str) -> List[dict]:
        try:
            response = self.table.get_item(Key={'postSlug': post_slug})
            comments = (
                response['Item']['comments'] if 'Item' in response else None
            )
            if comments:
                comments = self._sort_comments(comments)
            return comments
        except ClientError:
            raise DatabaseError('Database error')

    def add_comment(self, post_slug: str, comment_data: dict):
        try:
            self._validate_comment_data(post_slug, comment_data)
            comment_data['date'] = str(datetime.now())
            post_data = {
                'postSlug': post_slug,
                'comments': self.get_comments(post_slug) or []
            }
            post_data['comments'].append(comment_data)
            self.table.put_item(Item=post_data)
        except ClientError:
            raise DatabaseError('Database error')

    @staticmethod
    def _sort_comments(comments: List[dict]) -> List[dict]:
        return sorted(
            comments,
            key=lambda comment: datetime.strptime(
                comment['date'],
                '%Y-%m-%d %H:%M:%S.%f'
            )
        )

    @staticmethod
    def _validate_comment_data(post_slug: str, comment_data: dict):
        if post_slug not in registered_post_slugs:
            raise InvalidDataError('This post is not registered')
        required_keys = {'name', 'email', 'text'}
        if set(comment_data.keys()) != required_keys:
            raise InvalidDataError('Comment data is not valid')


comments_repository = DynamoCommentsRepository()
