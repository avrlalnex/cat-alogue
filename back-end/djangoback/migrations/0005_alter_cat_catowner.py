# Generated by Django 5.0.4 on 2024-04-13 06:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoback', '0004_cat_catimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cat',
            name='catOwner',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='djangoback.owner'),
        ),
    ]
