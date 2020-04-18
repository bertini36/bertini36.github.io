# -*- coding: utf-8 -*-

from django.conf import settings


def common(request):
    return {
        'DEBUG': settings.DEBUG,
        'RECAPTCHA_SITE_KEY': settings.RECAPTCHA_SITE_KEY,
        'GA_MEASUREMENT_ID': settings.GA_MEASUREMENT_ID,
    }
