from rest_framework import serializers
from .models import Daily_reports

class DailyReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Daily_reports
        fields = (
            'progress',
            'problems',
            'learnings',
            'plans',
            'date_created',
            'last_updated',
            'date_deleted',
            'rate_for_value_delivered',
        )