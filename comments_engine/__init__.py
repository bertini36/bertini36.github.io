from flask_cors import CORS

from .containers import ApplicationContainer


def create_app():
    container = ApplicationContainer()

    app = container.app()
    app.container = container
    app.config['CORS_HEADERS'] = 'Content-Type'

    app.add_url_rule(
        '/comments/',
        view_func=container.get_comments_view.as_view(),
        methods=('GET',)
    )
    app.add_url_rule(
        '/comments/',
        view_func=container.add_comment_view.as_view(),
        methods=('POST',)
    )

    return CORS(app)
