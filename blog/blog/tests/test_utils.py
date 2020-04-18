# -*- coding: UTF-8 -*-

import pytest

from datetime import date
from dataclasses import dataclass

from mock import patch

from ..utils import (
    send_email,
    get_client_ip,
    captcha_is_real,
    format_date,
    filter_none_values_in_dict
)

@dataclass
class Request:
    META: dict


@dataclass
class Response:
    status_code: int


@pytest.mark.unit
class TestUtils:

    @patch('blog.blog.utils.EmailMultiAlternatives.send')
    @patch('blog.blog.utils.EmailMultiAlternatives.attach_alternative')
    def test_send_email(self, attach_alternative_mock, send_mock):
        send_email('dummy', 'dummy')

        attach_alternative_mock.assert_called_once()
        send_mock.assert_called_once()

    def test_get_client_ip_from_http_x_forwarder_for(self):
        expected_ip = '127.0.0.1'
        request = Request(META={'HTTP_X_FORWARDED_FOR': f'{expected_ip},'})

        ip = get_client_ip(request)

        assert ip == expected_ip

    def test_get_client_ip_from_remote_addr(self):
        expected_ip = '127.0.0.1'
        request = Request(META={'REMOTE_ADDR': f'{expected_ip}'})

        ip = get_client_ip(request)

        assert ip == expected_ip

    @patch('requests.post')
    def test_captcha_is_real(self, post_request_mock):
        post_request_mock.return_value = Response(status_code=200)

        is_real = captcha_is_real('x', '127.0.0.1')

        assert is_real is True

    @patch('requests.post')
    def test_captcha_is_not__real(self, post_request_mock):
        post_request_mock.return_value = Response(status_code=404)

        is_real = captcha_is_real('x', '127.0.0.1')

        assert is_real is False

    def test_format_date(self):
        str_date = format_date(date.today())

        assert isinstance(str_date, str)
        assert len(str_date.split('-')) == 3

    def test_filter_none_values_in_dict(self):
        dummy_dict = {'a': None}

        dummy_dict = filter_none_values_in_dict(dummy_dict)

        assert dummy_dict == {}

    def test_filter_no_none_values_in_dict(self):
        dummy_dict = {'a': 'a'}

        dummy_dict = filter_none_values_in_dict(dummy_dict)

        assert dummy_dict == {'a': 'a'}
