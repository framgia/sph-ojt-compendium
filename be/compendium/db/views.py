from .models import Daily_reports
from .serializers import DailyReportSerializer

from rest_framework import generics
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class DailyReportListCreateAPIView(generics.ListCreateAPIView):
    queryset = Daily_reports.objects.all()
    serializer_class = DailyReportSerializer

class DailyReportRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Daily_reports.objects.all()
    serializer_class = DailyReportSerializer
    lookup_field = 'pk'