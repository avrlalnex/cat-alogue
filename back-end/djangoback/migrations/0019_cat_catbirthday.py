# Generated by Django 5.0.4 on 2024-04-14 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoback', '0018_cat_catdescription'),
    ]

    operations = [
        migrations.AddField(
            model_name='cat',
            name='CatBirthday',
            field=models.DateField(blank=True, default=None, null=True),
        ),
    ]