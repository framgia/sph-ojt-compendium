from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from .models import User
from rest_framework import serializers
from .models import Daily_reports


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'middle_name',
            'last_name',
            'sex',
            'birth_date',
            'school',
            'email',
            'password',
        )


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


class DailyReportSerializer(serializers.ModelSerializer):
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
