from django.db import models

class Accounts(models.Model):
    username = models.CharField(max_length = 200)
    password = models.CharField(max_length = 200, default='default_value')
    email_address = models.CharField(max_length = 200, default='default_value')
    catOwner = models.ForeignKey('Owner', null = True, default = None, on_delete = models.CASCADE )

class Cat (models.Model):
    CatName = models.CharField(max_length =200)
    CatGender = models.CharField(max_length = 200, default = "male")
    CatAge =  models.IntegerField()
    CatBreed = models.CharField(max_length = 200)
    CatColor =  models.CharField(max_length = 200, default = "orange")
    CatPersonality = models.CharField(max_length = 200)
    CatLikes = models.CharField(max_length = 200)
    CatDislikes = models.CharField(max_length =200)
    CatOwner = models.ForeignKey('Owner', on_delete = models.CASCADE, default = None, null = True, blank = True)
    CatImage = models.ImageField(upload_to = "post_images", default = None, null = True)
    CatDescription = models.CharField(max_length = 1000, default = "No Input")

class CatImage(models.Model):
    catImage = models.ImageField(upload_to = "", default = None, null = True)

class Owner (models.Model):
    ownerName = models.CharField(max_length = 200)
    ownerFacebook = models.CharField(max_length = 200)
    ownerAddress = models.CharField(max_length = 200)
    ownerContact = models.CharField(max_length = 200)



    


