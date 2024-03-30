from django.shortcuts import render
from rest_framework import generics
from .models import Account #import and use from models class
from .serializers import AccountSerializer
from rest_framework.response import Response

class AccountListCreate(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    
    """def delete(self,request, *args, **kwargs):
        Account.objects.all().delete()
        return Response(status = status.HTTP_204_NO_CONTENT
        )
    """ #delete all function
    


class AccountRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    lookup_field = "pk"
    
