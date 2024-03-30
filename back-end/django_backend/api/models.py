from django.db import models


# Note: When making new models,  use (manage.py makemigrations & migrate) t


class Account(models.Model):
    username = models.CharField(max_length = 100)
    email_address = models.TextField()
    password = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
