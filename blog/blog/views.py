# -*- coding: UTF-8 -*-

import json

from django.http import HttpRequest
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .api import blog_api
from .requests import (
    FilterPostsRequest,
    SendMessageRequest,
    GetPostRequest,
    GetCommentsRequest,
    PublishCommentRequest
)
from .utils import get_client_ip


@require_http_methods(['GET'])
def index(request: HttpRequest):
    return render(request, 'index.html')


@require_http_methods(['GET'])
def get_posts(request: HttpRequest):
    api_request = FilterPostsRequest(published=True)
    response = blog_api.filter_posts(api_request)
    status = 400 if response['error'] else 200
    return JsonResponse(status=status, data=response, safe=False)


@csrf_exempt
@require_http_methods(['POST'])
def send_message(request: HttpRequest):
    data = json.loads(request.body)
    data['client_ip'] = get_client_ip(request)
    api_request = SendMessageRequest(**data)
    response = blog_api.send_message(api_request)
    status = 400 if response['error'] else 200
    return JsonResponse(status=status, data=response)


@require_http_methods(['GET'])
def get_post_text(request: HttpRequest, post_slug: str):
    api_request = GetPostRequest(slug=post_slug)
    response = blog_api.get_post(api_request)
    status = 400 if response['error'] else 200
    if status == 400:
        return JsonResponse(status=status, data=response)
    response['data'] = render(
        request,
        f'posts/{post_slug}.html',
        context={'post': response['data']}
    ).content.decode()
    return JsonResponse(status=200, data=response)


@require_http_methods(['GET'])
def get_comments(request: HttpRequest, post_slug: str):
    api_request = GetCommentsRequest(slug=post_slug)
    response = blog_api.get_comments(api_request)
    status = 400 if response['error'] else 200
    return JsonResponse(status=status, data=response)


@csrf_exempt
@require_http_methods(['POST'])
def publish_comment(request: HttpRequest, post_slug: str):
    data = json.loads(request.body)
    data['post_slug'] = post_slug
    api_request = PublishCommentRequest(**data)
    response = blog_api.publish_comment(api_request)
    status = 400 if response['error'] else 200
    return JsonResponse(status=status, data=response)
