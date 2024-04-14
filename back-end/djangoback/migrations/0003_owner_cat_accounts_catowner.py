# Generated by Django 5.0.4 on 2024-04-12 15:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoback', '0002_accounts_email_address_accounts_password'),
    ]

    operations = [
        migrations.CreateModel(
            name='Owner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ownerName', models.CharField(max_length=200)),
                ('ownerFacebook', models.CharField(max_length=200)),
                ('ownerAddress', models.CharField(max_length=200)),
                ('ownerContact', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Cat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('catName', models.CharField(max_length=200)),
                ('catBreed', models.CharField(max_length=200)),
                ('catAge', models.IntegerField()),
                ('catLikes', models.CharField(max_length=200)),
                ('catDislikes', models.CharField(max_length=200)),
                ('catPersonality', models.CharField(max_length=200)),
                ('catOwner', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='djangoback.owner')),
            ],
        ),
        migrations.AddField(
            model_name='accounts',
            name='catOwner',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='djangoback.owner'),
        ),
    ]