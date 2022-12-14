# Generated by Django 4.1 on 2022-08-12 03:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='users',
            name='account_id',
        ),
        migrations.AddField(
            model_name='users',
            name='account',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='db.accounts'),
        ),
        migrations.AlterField(
            model_name='daily_reports',
            name='date_deleted',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='daily_reports',
            name='last_updated',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AlterField(
            model_name='daily_reports',
            name='problems',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='daily_reports',
            name='rate_for_value_delivered',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='users',
            name='birth_date',
            field=models.DateField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='users',
            name='middle_name',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='users',
            name='school',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='users',
            name='sex',
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]
