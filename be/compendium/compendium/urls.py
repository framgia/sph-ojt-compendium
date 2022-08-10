from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from db import views

router = routers.DefaultRouter()
router.register(r'create_report', views.create_reportView, 'create_report')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
