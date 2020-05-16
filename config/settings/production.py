# -*- coding: utf-8 -*-

import django_heroku
import sentry_sdk
from loguru import logger
from sentry_sdk.integrations.django import DjangoIntegration

from .base import *

# SECRET CONFIGURATION
# https://docs.djangoproject.com/en/dev/ref/settings/#secret-key
# ------------------------------------------------------------------------------
SECRET_KEY = env(
    'DJANGO_SECRET_KEY',
    default='blog^rw9+t-h1msfhhnwx+-u0jnooyzbaqirzjk*b4&=nyv%_t=7lkalbertopou'
)

# DJANGO HEROKU
# https://github.com/heroku/django-heroku
# ------------------------------------------------------------------------------
django_heroku.settings(locals())

# SITE CONFIGURATION
# https://docs.djangoproject.com/en/1.6/ref/settings/#allowed-hosts
# ------------------------------------------------------------------------------
ALLOWED_HOSTS = (
    'albertopou.herokuapp.com',
)

# EMAIL CONFIGURATION
# ------------------------------------------------------------------------------
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')

# TEMPLATE CONFIGURATION
# https://docs.djangoproject.com/en/dev/ref/templates/api/#django.template.loaders.cached.Loader
# ------------------------------------------------------------------------------
TEMPLATES[0]['OPTIONS']['loaders'] = [
    ('django.template.loaders.cached.Loader', [
        'django.template.loaders.filesystem.Loader',
        'django.template.loaders.app_directories.Loader',
    ]),
]

# LOGURU
# https://github.com/Delgan/loguru
# ------------------------------------------------------------------------------
logger.add('logs/blog.log', rotation='500 MB')

# WHITENOISE
# https://github.com/evansd/whitenoise
# ------------------------------------------------------------------------------
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
MIDDLEWARE = (
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
) + MIDDLEWARE

# SENTRY
# https://docs.sentry.io/platforms/python/django
sentry_sdk.init(
    dsn=env('SENTRY_DSN'),
    integrations=[DjangoIntegration()],
    environment='prod'
)
