# -*- coding: UTF-8 -*-

from abc import ABC, abstractmethod


class ResponseBuilderInterface(ABC):

    def __init__(self, data: any):
        self.data = data

    @abstractmethod
    def build(self):
        pass


class ErrorResponseBuilder(ResponseBuilderInterface):

    def build(self) -> dict:
        return {'error': True, 'data': self.data}


class ResponseBuilder(ResponseBuilderInterface):

    def get_vars(self) -> list:
        data = self.data
        if not data:
            return []
        if isinstance(data, list):
            element = data[0]
        else:
            element = data
        if type(element) == dict:
            return list(element.keys())
        return list(vars(element).keys())

    @staticmethod
    def serialize_object(obj: object, attrs: list) -> dict:
        return {
            attr: getattr(obj, attr)
            for attr in attrs
        }

    def build(self) -> dict:
        attrs = self.get_vars()
        if isinstance(self.data, list):
            data = [
                self.serialize_object(obj, attrs)
                if type(obj) != dict else obj
                for obj in self.data
            ]
        else:
            data = self.serialize_object(self.data, attrs)
        return {'error': False, 'data': data}
