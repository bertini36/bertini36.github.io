from flask import jsonify, request
from flask_cors import cross_origin

from ...modules.comments.application.create.comments_creator import (
    CommentsCreator
)
from ...modules.comments.application.search.comments_searcher import (
    CommentsSearcher
)
from ...modules.comments.infrastructure.repository.dynamo_comments_repository import (  # noqa
    DynamoCommentsRepository
)
from ...modules.comments.infrastructure.repository.inmemory_comments_repository import (  # noqa
    InMemoryCommentsRepository
)


@cross_origin()
def get_comments(post_slug):
    try:
        searcher = CommentsSearcher(InMemoryCommentsRepository())
        comments = searcher.search(post_slug)
        return jsonify(comments), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@cross_origin()
def add_comment(post_slug):
    try:
        creator = CommentsCreator(InMemoryCommentsRepository())
        creator.create(post_slug, **request.get_json())
        return jsonify({}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
