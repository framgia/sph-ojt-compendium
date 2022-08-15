from rest_framework import serializers
from .models import Daily_reports

class DailyReportSerializerPost(serializers.ModelSerializer):
    user_id = serializers.IntegerField()
    class Meta:
        model = Daily_reports
        fields = (
            'user_id',
            'date_created',
            'progress',
            'problems',
            'learnings',
            'plans',
            'rate_for_value_delivered', 
        )
