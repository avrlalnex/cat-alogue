# Generated by Django 5.0.4 on 2024-04-13 07:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoback', '0006_alter_cat_catimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cat',
            name='catImage',
        ),
        migrations.CreateModel(
            name='CatImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('catImage', models.ImageField(default=None, null=True, upload_to='')),
                ('Cat', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='djangoback.cat')),
            ],
        ),
    ]
