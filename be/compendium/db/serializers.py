from rest_framework import serializers
from .models import Daily_reports

class DailyReportSerializerPost(serializers.ModelSerializer):
    class Meta:
        model = Daily_reports
        fields = (
            'date_created',
            'progress',
            'problems',
            'learnings',
            'plans',
        )
