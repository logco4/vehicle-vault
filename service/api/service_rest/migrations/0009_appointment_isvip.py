# Generated by Django 4.0.3 on 2023-03-08 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0008_remove_appointment_automobile_appointment_vin'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='isVip',
            field=models.BooleanField(default=False, null=True),
        ),
    ]