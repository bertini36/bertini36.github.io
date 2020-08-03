from dependency_injector import containers
from dependency_injector.ext import flask
from flask import Flask

from .entrypoints.infrastructure import controllers


class ApplicationContainer(containers.DeclarativeContainer):
    app = flask.Application(Flask, __name__)

    get_comments_view = flask.View(controllers.get_comments)
    add_comment_view = flask.View(controllers.add_comment)
