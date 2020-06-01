# -*- coding: UTF-8 -*-

from mock import Mock, patch

from ..api import blog_api
from ..domain import Post, Contact, Message, Comment
from ..requests import (
    CreatePostRequest,
    FilterPostsRequest,
    GetPostRequest,
    SendMessageRequest,
    GetCommentsRequest,
    PublishCommentRequest
)
from ..validators import SendMessageRequestValidator


class TestCreatePost:

    dummy_post = Post(
        id=1,
        name='Dummy post',
        slug='dummy_post',
        technology='dummy',
        main_photo_path='dummy',
        published=True
    )

    def test_create_post(self):
        blog_api.blog_repository.create_post = Mock()
        blog_api.blog_repository.create_post.return_value = self.dummy_post
        request = CreatePostRequest(
            name='Dummy post',
            slug='dummy_post',
            technology='dummy',
            main_photo_path='dummy'
        )

        response = blog_api.create_post(request)

        assert response['error'] is False
        assert isinstance(response['data'], dict)
        assert response['data']['slug'] == 'dummy_post'

    def test_create_post_fails_when_required_param_is_not_sent(self):
        request = CreatePostRequest(
            slug='test',
            technology='test',
            main_photo_path='test'
        )

        response = blog_api.create_post(request)

        assert response['error'] is True
        assert isinstance(response['data'], dict)
        assert 'name' in response['data']


class TestFilterPosts:

    dummy_posts = [
        Post(
            id=1,
            name='Dummy post',
            slug='dummy_post',
            technology='dummy',
            main_photo_path='dummy',
            published=True
        ),
        Post(
            id=2,
            name='Dummy post 2',
            slug='dummy_post_2',
            technology='dummy',
            main_photo_path='dummy',
            published=True
        )
    ]

    def test_filter_posts(self):
        blog_api.blog_repository.filter_posts = Mock()
        blog_api.blog_repository.filter_posts.return_value = self.dummy_posts
        request = FilterPostsRequest()

        response = blog_api.filter_posts(request)

        assert response['error'] is False
        assert isinstance(response['data'], list)
        assert len(response['data']) == 2


class TestGetPost:

    dummy_post = Post(
        id=1,
        name='Dummy post',
        slug='dummy_post',
        technology='dummy',
        main_photo_path='dummy',
        published=True
    )

    def test_get_post(self):
        blog_api.blog_repository.get_post = Mock()
        blog_api.blog_repository.get_post.return_value = self.dummy_post
        request = GetPostRequest(slug='dummy_post')

        response = blog_api.get_post(request)

        assert response['error'] is False
        assert isinstance(response['data'], dict)
        assert response['data']['slug'] == 'dummy_post'

    def test_get_post_fails_when_required_param_is_not_sent(self):
        request = GetPostRequest()

        response = blog_api.get_post(request)

        assert response['error'] is True
        assert isinstance(response['data'], dict)
        assert 'slug' in response['data']


class TestSendMessage:

    dummy_contact = Contact(id=1, name='Dummy contact', email='dummy@dummy.com')
    dummy_message = Message(id=1, text='Dummy message', contact_id=1)

    def test_send_message_fails_when_required_param_is_not_sent(self):
        blog_api.blog_repository.get_or_create_contact = Mock()
        blog_api.blog_repository.create_message = Mock()
        request = SendMessageRequest(
            email='dummy@dummy.com',
            text='Dummy message',
            captcha='dummy',
            client_ip=''
        )

        response = blog_api.send_message(request)

        assert response['error'] is True
        assert isinstance(response['data'], dict)
        assert 'name' in response['data']

    @patch('blog.blog.validators.captcha_is_real', return_value=False)
    def test_send_message_fails_when_captcha_is_not_correct(self, __):
        blog_api.blog_repository.get_or_create_contact = Mock()
        blog_api.blog_repository.create_message = Mock()
        request = SendMessageRequest(
            name='Dummy contact',
            email='dummy@dummy.com',
            text='Dummy message',
            captcha='dummy',
            client_ip='127.0.0.1'
        )

        response = blog_api.send_message(request)

        assert response['error'] is True
        assert isinstance(response['data'], dict)
        assert 'captcha' in response['data']['__all__']

    def test_send_message(self):
        blog_api.blog_repository.get_or_create_contact = Mock()
        blog_api.blog_repository.create_message = Mock()
        SendMessageRequestValidator.validate = Mock()
        request = SendMessageRequest(
            name='Dummy contact',
            email='dummy@dummy.com',
            text='Dummy message',
            captcha='dummy',
            client_ip=''
        )

        response = blog_api.send_message(request)

        assert response['error'] is False
        assert isinstance(response['data'], dict)


class TestGetComments:

    dummy_comments = [
        Comment(
            id=1,
            created='18-4-2020',
            text='Dummy comment',
            validated=True,
            post_id=1,
            contact_id=1,
            contact_name='Dummy contact'
        ),
        Comment(
            id=1,
            created='18-4-2020',
            text='Dummy comment 2',
            validated=True,
            post_id=1,
            contact_id=1,
            contact_name='Dummy contact'
        )
    ]

    def test_get_comments(self):
        blog_api.blog_repository.get_post_comments = Mock()
        blog_api.blog_repository.get_post_comments.return_value = (
            self.dummy_comments
        )
        request = GetCommentsRequest(slug='dummy_post')

        response = blog_api.get_comments(request)

        assert response['error'] is False
        assert isinstance(response['data'], list)
        assert len(response['data']) == 2

    def test_get_comments_fails_when_required_param_is_not_sent(self):
        request = GetCommentsRequest()

        response = blog_api.get_comments(request)

        assert response['error'] is True
        assert isinstance(response['data'], dict)
        assert 'slug' in response['data']


class TestPublishComment:

    dummy_comment = Comment(
        id=1,
        created='18-4-2020',
        text='Dummy comment',
        validated=True,
        post_id=1,
        contact_id=1,
        contact_name='Dummy contact'
    )

    def test_publish_comment(self):
        blog_api.blog_repository.get_post = Mock()
        blog_api.blog_repository.get_or_create_contact = Mock()
        blog_api.blog_repository.create_comment = Mock()
        blog_api.blog_repository.create_comment.return_value = (
            self.dummy_comment
        )
        request = PublishCommentRequest(
            name='Dummy contact',
            email='dummy@dummy.com',
            text='dummy',
            post_slug='dummy_post'
        )

        response = blog_api.publish_comment(request)

        assert response['error'] is False
        assert isinstance(response['data'], dict)

    def test_publish_comment_fails_when_required_param_is_not_sent(self):
        request = PublishCommentRequest(
            email='dummy@dummy.com',
            text='dummy',
            post_slug='dummy_post'
        )

        response = blog_api.publish_comment(request)

        assert response['error'] is True
        assert isinstance(response['data'], dict)
        assert 'name' in response['data']
