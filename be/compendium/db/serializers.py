from rest_framework import serializers

from .models import Daily_reports

class DailyReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Daily_reports
        fields = Daily_reports.get_fields()
