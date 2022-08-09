from django.urls import path

from . import views

urlpatterns = [
    path('dailyReports/', views.daily_report_list_view)
]