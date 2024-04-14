from rest_framework import serializers
from .models import Accounts, Cat, Owner, CatImage

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accounts
        fields = ['id','username', 'password', 'email_address']

class CatSerializer (serializers.ModelSerializer):
    class Meta:
        model = Cat
        fields = '__all__'

        
class CatImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatImage
        fields = ['id', 'catImage']


class OwnerSerializer (serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = ['id', 'ownerFacebook', 'ownerAddress' , 'ownerContact']