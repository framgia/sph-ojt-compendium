from tkinter import CASCADE
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Accounts(models.Model):
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=50)


class User(AbstractUser):
    # account = models.ForeignKey(
    #     Accounts, on_delete=models.CASCADE, null=True)
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, unique=True)
    birth_date = models.DateField(null=True, blank=True, default=0)
    sex = models.CharField(max_length=6, null=True, blank=True)
    school = models.CharField(max_length=50, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name', ]

    def get_username(self):
        return self.email


class Daily_reports(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    progress = models.TextField()
    problems = models.TextField(default=0)
    learnings = models.TextField()
    plans = models.TextField()
    date_created = models.DateTimeField(auto_now=True)
    last_updated = models.DateTimeField(auto_now=True)
    date_deleted = models.DateTimeField(auto_now=True)
    rate_for_value_delivered = models.IntegerField(default=0)
