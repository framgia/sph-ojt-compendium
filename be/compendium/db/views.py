from .models import Daily_reports
from .serializers import DailyReportSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view

# class DailyReportListAPIView(generics.ListAPIView):
#     queryset = Daily_reports.objects.all()
#     serializer_class = DailyReportSerializer

# daily_report_list_view = DailyReportListAPIView.as_view()

@api_view(["GET"])
def daily_report_list_view(request, *args, **kwargs):
    queryset = Daily_reports.objects.all()
    data = DailyReportSerializer(queryset, many=True).data
    return Response(data)


