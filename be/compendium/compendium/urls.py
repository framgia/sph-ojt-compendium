from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from django.contrib import admin
from django.urls import path
from db.views import DailyReportAPIView
from db import views
from db.views import DailyReportListAPIView, DailyReportRetrieveUpdateDestroyAPIView


urlpatterns = [

    path('admin/', admin.site.urls),
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('dailyReports/', DailyReportListAPIView.as_view()),
    path('dailyReports/<int:pk>/',
         DailyReportRetrieveUpdateDestroyAPIView.as_view()),
    path('daily-report/create/', DailyReportAPIView.as_view()),
]
