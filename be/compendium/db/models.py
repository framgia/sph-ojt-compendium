from contextlib import nullcontext
from tkinter import CASCADE
from django.db import models


# Create your models here.
class Accounts(models.Model):
    #id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=50)

class Users(models.Model):
    #id = models.AutoField(primary_key=True)
    account = models.ForeignKey(
        Accounts, on_delete=models.CASCADE, null=True)
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    birth_date = models.DateField()
    sex = models.CharField(max_length=6)
    school = models.CharField(max_length=50)


class Daily_reports(models.Model):
    #id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    progress = models.TextField()
    problems = models.TextField(default=0)
    learnings = models.TextField()
    plans = models.TextField()
    date_created = models.DateTimeField()
    last_updated = models.DateTimeField()
    date_deleted = models.DateTimeField()
    rate_for_value_delivered = models.IntegerField(default=0)
