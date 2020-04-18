# -*- coding: UTF-8 -*-

import pytest

from ..adapters import DjangoDataAdapter


@pytest.mark.unit
class TestDjangoDataAdapter:

    def test_transform_normal_dict(self):
        kwargs = {'name': 'dummy', 'slug': 'dummy'}

        django_data = DjangoDataAdapter.transform(**kwargs)

        assert django_data == kwargs

    def test_transform_dict_with_id(self):
        kwargs = {'obj_id': 1}

        django_data = DjangoDataAdapter.transform(**kwargs)

        assert django_data == {'id': 1}

    def test_transform_dict_none_values(self):
        kwargs = {'name': None}

        django_data = DjangoDataAdapter.transform(**kwargs)

        assert django_data == {}
