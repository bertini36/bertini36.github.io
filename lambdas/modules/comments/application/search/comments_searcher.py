from typing import List

from ...domain.comment import Comment
from ...domain.comments_repository import CommentsRepository


class CommentsSearcher:

    def __init__(self, repository: CommentsRepository):
        self.repository = repository

    def search(self, post_slug: str) -> List[dict]:
        comments = self.repository.get_comments(post_slug)
        comments = Comment.sort(comments)
        comments = [comment.serialize() for comment in comments]
        return comments
