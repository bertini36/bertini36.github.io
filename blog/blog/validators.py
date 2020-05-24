# coding: utf-8

from abc import ABC, abstractmethod
from dataclasses import asdict
from dataclasses import dataclass

from django import forms
from django.core.exceptions import ValidationError

from .exceptions import InvalidDataError
from .utils import captcha_is_real


class RequestValidatorInterface(ABC):
    """
    This validators are used to validate api requests types and if are required
    """

    @classmethod
    @abstractmethod
    def validate(cls, params: any):
        pass


class DjangoRequestValidator(RequestValidatorInterface):
    FORM = None

    @classmethod
    def validate(cls, request: dataclass):
        form = cls.FORM(data=asdict(request))
        if not form.is_valid():
            errors = cls.format_errors(form.errors)
            raise InvalidDataError(errors)

    @classmethod
    def format_errors(cls, errors):
        return {
            key: errors[key][0]
            for key in dict(errors)
        }


class DjangoCreatePostForm(forms.Form):
    name = forms.CharField(required=True)
    slug = forms.CharField(required=True)
    technology = forms.CharField(required=True)
    main_photo_path = forms.CharField(required=True)


class CreatePostRequestValidator(DjangoRequestValidator):
    FORM = DjangoCreatePostForm


class DjangoFilterPostsForm(forms.Form):
    obj_id = forms.IntegerField(required=False)
    name = forms.CharField(required=False)
    slug = forms.CharField(required=False)
    active = forms.BooleanField(required=False)


class FilterPostsRequestValidator(DjangoRequestValidator):
    FORM = DjangoFilterPostsForm


class DjangoSendMessageForm(forms.Form):
    name = forms.CharField(required=True)
    email = forms.CharField(required=True)
    text = forms.CharField(required=True)
    captcha = forms.CharField(required=True)
    client_ip = forms.CharField(required=True)

    def clean(self):
        captcha = self.cleaned_data.get('captcha')
        client_ip = self.cleaned_data.get('client_ip')
        if captcha != 'default' and not captcha_is_real(captcha, client_ip):
            raise ValidationError('Invalid captcha')


class SendMessageRequestValidator(DjangoRequestValidator):
    FORM = DjangoSendMessageForm


class DjangoGetPostForm(forms.Form):
    slug = forms.CharField(required=True)


class GetPostRequestValidator(DjangoRequestValidator):
    FORM = DjangoGetPostForm


class GetCommentsRequestValidator(DjangoRequestValidator):
    FORM = DjangoGetPostForm


class DjangoPublishCommentForm(forms.Form):
    name = forms.CharField(required=True)
    email = forms.CharField(required=True)
    text = forms.CharField(required=True)
    post_slug = forms.CharField(required=True)


class PublishCommentRequestValidator(DjangoRequestValidator):
    FORM = DjangoPublishCommentForm
