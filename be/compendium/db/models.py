from contextlib import nullcontext
from tkinter import CASCADE
from django.db import models


# Create your models here.
class Accounts(models.Model):
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=50)

class Users(models.Model):
    account = models.ForeignKey(
        Accounts, on_delete=models.CASCADE, null=True)
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    birth_date = models.DateField(null=True, blank=True, default=0)
    sex = models.CharField(max_length=6, null=True, blank=True)
    school = models.CharField(max_length=50, null=True, blank=True)


class Daily_reports(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    progress = models.TextField()
    problems = models.TextField(blank=True, null=True)
    learnings = models.TextField()
    plans = models.TextField()
    date_created = models.DateTimeField(auto_now=True)
    last_updated = models.DateTimeField(auto_now=True, null=True)
    date_deleted = models.DateTimeField(null=True,blank=True )
    rate_for_value_delivered = models.IntegerField(default=0, null=True, blank=True)
