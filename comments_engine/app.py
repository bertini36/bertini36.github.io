import os

from flask_cors import CORS

from containers.prod_container import ProdApplicationContainer
from containers.test_container import TestApplicationContainer

env = os.environ.get('FLASK_ENV')
container = ProdApplicationContainer()

if env == 'development':
    container = TestApplicationContainer()

app = container.app()
app.container = container

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.add_url_rule(
    '/comments/<string:post_slug>',
    view_func=container.get_comments_view.as_view(),
    methods=('GET',)
)
app.add_url_rule(
    '/comments/<string:post_slug>',
    view_func=container.add_comment_view.as_view(),
    methods=('POST',)
)
