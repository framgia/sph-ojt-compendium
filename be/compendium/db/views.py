from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from .models import Daily_reports
from .serializers import DailyReportSerializerPost

# Create your views here.

class DailyReportAPIView(GenericAPIView):
    serializer_class = DailyReportSerializerPost
    queryset = Daily_reports.objects.all()
    def post(self, request):
        serializer = DailyReportSerializerPost(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
            