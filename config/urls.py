# -*- coding: UTF-8 -*-

from django.conf import settings
from django.contrib import admin
from django.urls import path, include

urlpatterns = [

    # Fake admin
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),

    # Django Admin, use {% url 'admin:index' %}
    path(f'{settings.ADMIN_URL}', admin.site.urls),

    # Healthchecks
    path('ht/', include('health_check.urls')),

    # Internal apps
    path('', include('blog.blog.urls', namespace='blog')),

]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
