from django.shortcuts import render
from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Daily_reports, User
from .serializers import DailyReportSerializerPost, DailyReportSerializer

# Create your views here.


class DailyReportAPIView(GenericAPIView):
    serializer_class = DailyReportSerializerPost

    def post(self, request):
        serializer = DailyReportSerializerPost(data=request.data)
        if serializer.is_valid():
            userID = User.objects.get(id=serializer.data['user_id'])
            Daily_reports.objects.create(learnings=serializer.data['learnings'],
                    progress=serializer.data['progress'], problems=serializer.data['problems'],
                    user_id=userID, plans=serializer.data['plans'], rate_for_value_delivered=serializer.data['rate_for_value_delivered'])
            return Response({'status': 200})
        else:
            return Response(serializer.errors)

    def put(self, request, Daily_reports_id, *args, **kwargs):
        Daily_reports_instance = self.get_object(Daily_reports_id, request.user.id)
        if not Daily_reports_instance = return Response(
                {"res": "Object with todo id does not exists"}, 
                status=status.HTTP_400_BAD_REQUEST
            )
            data = {
                'user_id': request.user.id
                'progress': request.data.get('progress')
                'problems': request.data.get('problems')
                'plans':request.data.get('plans')
                'learnings':request.data.get('learnings')
            }

            serializer = DailyReportSerializer(instance = Daily_reports_instance, data=data, partial = True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DailyReportListAPIView(ListAPIView):
    queryset = Daily_reports.objects.all()
    serializer_class = DailyReportSerializer


class DailyReportRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Daily_reports.objects.all()
    serializer_class = DailyReportSerializer
    lookup_field = 'pk'
