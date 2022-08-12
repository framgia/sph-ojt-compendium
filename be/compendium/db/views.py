from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Daily_reports, Users
from .serializers import DailyReportSerializerPost

# Create your views here.

class DailyReportAPIView(GenericAPIView):
    serializer_class = DailyReportSerializerPost
    def post(self, request):
        serializer = DailyReportSerializerPost(data=request.data)
        if serializer.is_valid():
            userID = Users.objects.get(id=serializer.data['user_id'])
            Daily_reports.objects.create(learnings=serializer.data['learnings'], 
                progress=serializer.data['progress'], problems=serializer.data['problems'], 
                user_id=userID, plans=serializer.data['plans'], rate_for_value_delivered=serializer.data['rate_for_value_delivered'])
            return Response({'status': 200})
        else:
            return Response(serializer.errors)
            