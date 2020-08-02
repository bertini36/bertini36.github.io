from typing import List

from botocore.exceptions import ClientError

from ...domain.comment import Comment
from ...domain.comments_repository import CommentsRepository
from ...domain.exceptions import DatabaseError


class InmemoryCommentsRepository(CommentsRepository):
    REGION_NAME = 'eu-west-1'

    def __init__(self):
        self.data = {
            'recoding-my-blog': [
                Comment(
                    post_slug='recoding-my-blog',
                    name='Monkey D. Luffy',
                    email='luffy@op.com',
                    text='Great job!'
                ),
                Comment(
                    post_slug='recoding-my-blog',
                    name='Roronoa Zoro',
                    email='zoro@op.com',
                    text='...'
                ),
            ],
            'profiling-on-social-networks': [
                Comment(
                    post_slug='recoding-my-blog',
                    name='Vinsmoke Sanji',
                    email='sanji@op.com',
                    text='Cool!'
                ),
            ]
        }

    def get_comments(self, post_slug: str) -> List[Comment] or None:
        try:
            return self.data[post_slug]
        except KeyError:
            raise DatabaseError('Database error')

    def add_comment(self, comment: Comment):
        self.data[comment.post_slug].append(comment)
        try:
            self.data[comment.post_slug].append(comment)
        except ClientError:
            raise DatabaseError('Database error')
