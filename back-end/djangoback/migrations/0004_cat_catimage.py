# Generated by Django 5.0.4 on 2024-04-13 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoback', '0003_owner_cat_accounts_catowner'),
    ]

    operations = [
        migrations.AddField(
            model_name='cat',
            name='catImage',
            field=models.ImageField(default=None, null=True, upload_to='images/'),
        ),
    ]
