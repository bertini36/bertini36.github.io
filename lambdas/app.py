from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from exceptions import RepositoryException
from repository import comments_repository

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/comments/<string:post_slug>', methods=['GET'])
@cross_origin()
def get_comments(post_slug):
    try:
        comments = comments_repository.get_comments(post_slug)
        if comments:
            return jsonify(comments), 200
        return jsonify({'error': 'Comments not found'}), 404
    except RepositoryException as e:
        return jsonify({'error': str(e)}), 500


@app.route('/comments/<string:post_slug>', methods=['POST'])
@cross_origin()
def add_comment(post_slug):
    try:
        comments_repository.add_comment(post_slug, request.get_json())
        return jsonify({}), 200
    except RepositoryException as e:
        return jsonify({'error': str(e)}), 500