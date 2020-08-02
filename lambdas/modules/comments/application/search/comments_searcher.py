from ...domain.comments_repository import CommentsRepository
from ...domain.comment import Comment


class CommentsSearcher:

    def __init__(self, repository: CommentsRepository):
        self.repository = repository

    def search(self, post_slug: str):
        comments = self.repository.get_comments(post_slug)
        comments = Comment.sort(comments)
        return [
            comment.serialize()
            for comment in comments
        ]
