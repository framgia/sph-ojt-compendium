from django.shortcuts import render
from rest_framework import viewsets
from .models import Daily_reports
from .serializers import DailyReportSerializer

# Create your views here.


class create_reportView(viewsets.ModelViewSet):
    queryset =  Daily_reports.objects.all()
    serializer_class = DailyReportSerializer
