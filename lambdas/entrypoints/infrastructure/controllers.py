from flask import jsonify, request
from flask_cors import cross_origin

from ...app import app
from ...modules.comments.application.create.comments_creator import (
    CommentsCreator
)
from ...modules.comments.application.search.comments_searcher import (
    CommentsSearcher
)
from ...modules.comments.infrastructure.repository.dynamo_comments_repository import (  # noqa
    DynamoCommentsRepository
)


@app.route('/comments/<string:post_slug>', methods=['GET'])
@cross_origin()
def get_comments(post_slug):
    try:
        searcher = CommentsSearcher(DynamoCommentsRepository())
        comments = searcher.search(post_slug)
        if comments:
            return jsonify(comments), 200
        return jsonify({'error': 'Comments not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/comments/<string:post_slug>', methods=['POST'])
@cross_origin()
def add_comment(post_slug):
    try:
        creator = CommentsCreator(DynamoCommentsRepository())
        creator.create(post_slug, **request.get_json())
        return jsonify({}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
