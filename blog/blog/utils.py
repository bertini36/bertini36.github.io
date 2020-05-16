# -*- coding: UTF-8 -*-

from datetime import date

import requests
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.http import HttpRequest
from django.template.loader import render_to_string
from loguru import logger


def send_email(subject: str, text: str):
    logger.info(f'Sending email with subject {subject}')
    msg = EmailMultiAlternatives(
        subject=subject,
        from_email=settings.EMAIL_HOST_USER,
        to=[settings.TO_DEFAULT_EMAIL]
    )
    msg.attach_alternative(render_to_string(
        'emails/contact_email.html',
        {'text': text}
    ), 'text/html')
    msg.send()


def get_client_ip(request: HttpRequest):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def captcha_is_real(captcha_response: str, client_ip: str):
    if captcha_response:
        response = requests.post(settings.RECAPTCHA_URL, {
            'secret': settings.RECAPTCHA_SECRET_KEY,
            'response': captcha_response,
            'remoteip': client_ip
        })
        if response.status_code == 200:
            return True
    return False


def format_date(obj: date) -> str:
    return obj.strftime(settings.DATE_FORMAT)


def filter_none_values_in_dict(dict_):
    return dict((k, v) for k, v in dict_.items() if v is not None)
