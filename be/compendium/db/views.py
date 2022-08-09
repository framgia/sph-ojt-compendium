from rest_framework import generics

from .models import Daily_reports
from .serializers import DailyReportSerializer

class DailyReportListAPIView(generics.ListAPIView):
    queryset = Daily_reports.objects.all()
    serializer_class = DailyReportSerializer

daily_report_list_view = DailyReportListAPIView.as_view()
