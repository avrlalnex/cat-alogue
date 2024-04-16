from django.http import JsonResponse, HttpResponse
from django.shortcuts import redirect, render
from .models import Accounts, Cat
from .serializers import AccountSerializer, CatSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import FileResponse

@api_view(['GET', 'POST'])
def account_list(request):

    if request.method == 'GET':
        #getting accounts and serializer, return json
        accounts = Accounts.objects.all()
        serializer = AccountSerializer(accounts, many = True)
        return JsonResponse({"accounts": serializer.data})
    
    if request.method == 'POST':
        serializer = AccountSerializer(data = request.data)
        if serializer.is_valid():
            if Accounts.objects.filter(username = request.data['username']).exists() == True:
                if Accounts.objects.filter(email_address = request.data['email_address']).exists() == True:
                    return Response(data= {'username' : "username is already taken", 'email_address' : "email address is already taken"}, status=status.HTTP_404_NOT_FOUND)
                else:
                     return Response(data= {'username' : "username is already taken", 'email_address' : ""}, status=status.HTTP_404_NOT_FOUND)
            elif Accounts.objects.filter(email_address = request.data['email_address']).exists() == True:
                return Response(data= {'username' : "", 'email_address' : "email address is already taken"}, status=status.HTTP_404_NOT_FOUND)
            else:
                serializer.save()
                return Response(serializer.data, status = status.HTTP_201_CREATED)

class PostView(APIView):    
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
            cats = Cat.objects.all()
            #images = []

            #for instance in cats:
            #    if instance.CatImage:
            #        images.append(instance.CatImage.image)

          
            serializer = CatSerializer(cats, many=True)
            return Response(serializer.data)


    def post(self, request, *args, **kwargs):
            
            serializer = CatSerializer(data=request.data)
            print(serializer)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                print("not success")
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
                    
                    
@api_view(['GET', 'PUT', 'DELETE'])       
def account_detail(request, id):
    try:
        account = Accounts.objects.get(pk = id)
    except Accounts.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)

    if request.method == 'GET': #returns singular account
        serializer = AccountSerializer(account)
        return Response(serializer.data) 
    
    elif request.method == 'PUT':  #changes account details
        serializer = AccountSerializer(account, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE': #deletes account
        account.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def account_login(request):
    try:
        login_attempt = Accounts.objects.get(username = request.data['username'])
        print(request.data['username'])
    except Accounts.DoesNotExist:
        try:
            login_attempt = Accounts.objects.get(email_address = request.data['username'])
        except Accounts.DoesNotExist:
            return Response("Acccount was not found")
    
    if request.method == 'POST':
        serializer = AccountSerializer(login_attempt)
        if serializer.data['password'] ==  request.data['password']:
            return Response(serializer.data)
        else:
            return Response("Wrong password")
        


    