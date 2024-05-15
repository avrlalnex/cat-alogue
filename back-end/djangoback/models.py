from django.db import models

class Accounts(models.Model):
    username = models.CharField(max_length = 200)
    password = models.CharField(max_length = 200, default='default_value')
    email_address = models.CharField(max_length = 200, default='default_value')
    catOwner = models.ForeignKey('Owner', null = True, default = None, blank = True, on_delete = models.CASCADE )
    favoriteCats = models.ManyToManyField('Cat', default = None, null = True, blank = True)
    facebookAccount = models.CharField(max_length = 500, default = "facebook.com")
    address = models.CharField(max_length = 500, default = "nothing")
    age = models.CharField(max_length = 200, default = "nothing")

class Cat (models.Model):
    CatName = models.CharField(max_length =200)
    CatGender = models.CharField(max_length = 200, default = "male")
    CatAge =  models.IntegerField()
    CatBreed = models.CharField(max_length = 200)
    CatColor =  models.CharField(max_length = 200, default = "orange")
    CatPersonality = models.CharField(max_length = 200)
    CatLikes = models.CharField(max_length = 200)
    CatDislikes = models.CharField(max_length =200)
    CatOwner = models.ForeignKey('Accounts', on_delete = models.CASCADE, default = None, null = True, blank = True)
    CatImage = models.ImageField(upload_to = "post_images", default = None, null = True)
    CatDescription = models.CharField(max_length = 1000, default = "No Input")
    CatBirthday = models.DateField(default = None, null = True, blank = True)
    CatAdoption = models.BooleanField(default=False)

class CatImage(models.Model):
    catImage = models.ImageField(upload_to = "", default = None, null = True)

class Owner (models.Model):
    ownerName = models.CharField(max_length = 200)
    ownerFacebook = models.CharField(max_length = 200)
    ownerAddress = models.CharField(max_length = 200)
    ownerContact = models.CharField(max_length = 200)

class Adopt(models.Model):
    ownerAccount = models.ForeignKey('Owner', null = True, default = None, on_delete = models.CASCADE)
    adoptedCat = models.ForeignKey('Cat', null = True, default = None, on_delete = models.CASCADE)



    


