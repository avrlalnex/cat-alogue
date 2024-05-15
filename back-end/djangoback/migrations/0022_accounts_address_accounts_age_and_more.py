# Generated by Django 5.0.4 on 2024-05-15 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoback', '0021_alter_cat_catowner'),
    ]

    operations = [
        migrations.AddField(
            model_name='accounts',
            name='address',
            field=models.CharField(default='nothing', max_length=500),
        ),
        migrations.AddField(
            model_name='accounts',
            name='age',
            field=models.CharField(default='nothing', max_length=200),
        ),
        migrations.AddField(
            model_name='accounts',
            name='facebookAccount',
            field=models.CharField(default='facebook.com', max_length=500),
        ),
    ]