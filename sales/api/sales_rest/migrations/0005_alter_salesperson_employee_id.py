# Generated by Django 4.0.3 on 2023-03-07 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_alter_salesrecord_automobile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesperson',
            name='employee_id',
            field=models.SmallIntegerField(unique=True),
        ),
    ]