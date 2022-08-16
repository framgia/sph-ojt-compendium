# Generated by Django 3.0.14 on 2022-08-08 11:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Accounts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=50)),
                ('password', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('middle_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('birth_date', models.DateTimeField(auto_now=True)),
                ('sex', models.CharField(max_length=6)),
                ('school', models.CharField(max_length=50)),
                ('account_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='db.Accounts')),
            ],
        ),
        migrations.CreateModel(
            name='Daily_reports',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('progress', models.TextField()),
                ('problems', models.TextField(default=0)),
                ('learnings', models.TextField()),
                ('plans', models.TextField()),
                ('date_created', models.DateTimeField(auto_now=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('date_deleted', models.DateTimeField(auto_now=True)),
                ('rate_for_value_delivered', models.IntegerField(default=0)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='db.Users')),
            ],
        ),
    ]
