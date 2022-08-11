from contextlib import nullcontext
from tkinter import CASCADE
from typing import List
from django.db import models

from compendium.models import BaseModel

class Accounts(BaseModel):
    email = models.EmailField(blank=False, null=False)
    password = models.TextField(blank=False, null=False)

class Users(BaseModel):
    account_id = models.ForeignKey(Accounts, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    birth_date = models.DateTimeField(auto_now=True)
    sex = models.CharField(max_length=6)
    school = models.CharField(max_length=50)

class Daily_reports(BaseModel):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    progress = models.TextField()
    problems = models.TextField()
    learnings = models.TextField()
    plans = models.TextField()
    date_created = models.DateTimeField(auto_now=True)
    last_updated = models.DateTimeField(auto_now=True)
    date_deleted = models.DateTimeField(auto_now=True)
    rate_for_value_delivered = models.IntegerField(default=0)

    @staticmethod
    def get_fields() -> List[str]:
        return BaseModel.get_fields() + ['user_id', 'progress', 'problems', 'learnings', 'plans', 'date_created', 'last_updated', 'date_deleted', 'rate_for_value_delivered']
