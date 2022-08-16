from django.contrib import admin
from django.urls import path, include
from db.views import DailyReportAPIView
from db import views

from db.views import DailyReportListAPIView, DailyReportRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dailyReports/', DailyReportListAPIView.as_view()),
    path('dailyReports/<int:pk>/', DailyReportRetrieveUpdateDestroyAPIView.as_view()),
    path('daily-report/create/', DailyReportAPIView.as_view()),
]
