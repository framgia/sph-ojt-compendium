from django.contrib import admin
from django.urls import path, include
from db.views import DailyReportAPIView
from db import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('daily-report/create/', DailyReportAPIView.as_view()),
]
