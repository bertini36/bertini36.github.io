# -*- coding: utf-8 -*-

from .base import *

# APP CONFIGURATION
# ******************************************************************************

# SECRET CONFIGURATION
# https://docs.djangoproject.com/en/dev/ref/settings/#secret-key
# ------------------------------------------------------------------------------
SECRET_KEY = env(
    'DJANGO_SECRET_KEY',
    default='blog^rw9+t-h1msfhhnwx+-u0jnooyzbaqirzjk*b4&=nyv%_t=7lkalbertopou'
)

# EMAIL CONFIGURATION
# ------------------------------------------------------------------------------
EMAIL_HOST = 'mailhog'
EMAIL_PORT = 1025

# TEMPLATES
# ------------------------------------------------------------------------------
TEMPLATES[0]['OPTIONS']['debug'] = DEBUG

# ALLOWED HOSTS
# https://docs.djangoproject.com/en/dev/ref/settings/#allowed-hosts
# ------------------------------------------------------------------------------
ALLOWED_HOSTS = ['*']

# THIRD PARTY APPLICATIONS
# ******************************************************************************

# DJANGO DEBUG TOOLBAR
# https://github.com/jazzband/django-debug-toolbar
# ------------------------------------------------------------------------------
INSTALLED_APPS += ('debug_toolbar',)
MIDDLEWARE += ('debug_toolbar.middleware.DebugToolbarMiddleware',)
INTERNAL_IPS = ['127.0.0.1', ]
DEBUG_TOOLBAR_CONFIG = {
    'SHOW_TOOLBAR_CALLBACK': lambda _: True
}

# Django-extensions
# https://github.com/django-extensions/django-extensions
# ------------------------------------------------------------------------------
INSTALLED_APPS += ('django_extensions',)
