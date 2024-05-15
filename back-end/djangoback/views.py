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
from django.shortcuts import get_object_or_404  
from rest_framework.decorators import api_view
import json

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

class CatView(APIView):    

    parser_classes = (MultiPartParser, FormParser)
    def get(self, request, *args, **kwargs):
           
            cats = Cat.objects.filter(CatAdoption = False)
            
            serializer = CatSerializer(cats, many=True)
            return Response(serializer.data)

    def put(self, request):
        print(request.data)
        #cat = Cat.objects.get(pk = pk)
        #serializer = CatSerializer(cat)
        #return Response(serializer.data)
        return Response("")

    def post(self, request):  
            requestData = request.data
            #print(request.data['CatOwner'])
            owner = Accounts.objects.get(id = request.data['CatOwner'])
            requestData['CatOwner'] = owner.id  
            print(requestData)

            serializer = CatSerializer(data=requestData)
            print(serializer)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                print("not success")
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
          
@api_view(['GET', 'PUT', 'DELETE'])       
def account_detail(request):
    
    if request.method == 'PUT': #returns singular account
        data = request.data
        accountDetail = Accounts.objects.get(username = request.data['account'])
        print(accountDetail)
        serializer = AccountSerializer(accountDetail, data=data, partial=True)
        if serializer.is_valid():
                serializer.save()
                return Response({'profile': serializer.data}, status=status.HTTP_200_OK)
        return Response("error")
        

    elif request.method == 'DELETE': #deletes account
        return Response(status = status.HTTP_204_NO_CONTENT)

    elif request.method == 'POST':
        serializer = AccountSerializer(data = request.data)
        hello = Accounts.objects.filter(username = request.data['username'])
        print(hello)
        return Response("post request")


@api_view(['POST', 'PUT'])
def account_login(request):
    try:
        login_attempt = Accounts.objects.get(username = request.data['username'])
        print(request.data['username'])
    except Accounts.DoesNotExist:
        try:
            login_attempt = Accounts.objects.get(email_address = request.data['username'])
        except Accounts.DoesNotExist:
            return Response("Account was not found")
    
    if request.method == 'POST':
        serializer = AccountSerializer(login_attempt)
        if serializer.data['password'] ==  request.data['password']:
            return Response(serializer.data)
        else:
            return Response("Wrong password")
        
@api_view(['GET','PUT', 'POST'])
def account_favorites(request):
    if(request.data =='GET'):
        print(request.data)
        return Response(request.data)

    if(request.method == 'POST'):
        serializer = AccountSerializer(data = request.data)
        favoriteCats = []
        hello = Accounts.objects.filter(username = request.data['user'])
        for account in hello:
            for cat in account.favoriteCats.all():
                favoriteCats.append(cat.id)
            print(favoriteCats)
        return Response(favoriteCats)


    elif (request.method == 'PUT'):
        serializer = AccountSerializer(data = request.data)
        user = Accounts.objects.filter(username = request.data['user'])
        for account in user:
            if (account.favoriteCats.filter(id=request.data['catID']).exists()) == True:
                favoriteCat = get_object_or_404(account.favoriteCats, id=request.data['catID'])
                account.favoriteCats.remove(favoriteCat)
            else:
                child1 = Cat.objects.get(id = request.data['catID'])
                account.favoriteCats.add(child1)
        return Response("put request")


@api_view(['PUT', 'POST'])
def catFilter(request):
    if request.method == 'PUT':
        if(request.data['filter'] == 'adopted'):
            cats = Cat.objects.filter(CatAdoption = True)
        elif(request.data['filter']) == 'non-adopted':
            cats = Cat.objects.filter(CatAdoption = False)
        serializer = CatSerializer(cats, many = True)
        print(serializer.data)
        return Response(serializer.data)

    if request.method == 'POST':
        hello = request.data['postForm']['user']
        account = Accounts.objects.get(username = hello)
        serializer = AccountSerializer(account)
        print(serializer.data['favoriteCats'])
        return Response(serializer.data['favoriteCats'])

@api_view(['GET','PUT', 'POST'])
def catProfile(request):  
    if request.method == 'GET':
            param1 = request.GET.get('param1')
            account = Accounts.objects.get(username = param1)
            cats = Cat.objects.filter(CatOwner = account)
            serializer = CatSerializer(cats, many=True)
            return Response(serializer.data)
    if request.method == 'POST':
        cat = Cat.objects.get(id = request.data['id'])
        cat.CatAdoption = True
        cat.save()
        return Response("")
    if request.method == 'PUT':
        try:
            # Parse the JSON data from the request
            data = request.data
            print(data)
            if 'id' not in data:
                return Response({'error': 'ID is required'}, status=status.HTTP_400_BAD_REQUEST)

            cat_id = data['id']
            hello = Cat.objects.get(id = cat_id)
            #owner = Accounts.objects.get(id = hello.CatOwner.id)
            print(hello.CatOwner)
           
            serializer = CatSerializer(hello, data=data, partial=True)
            accountSerializer = AccountSerializer(hello.CatOwner, data = data, partial = True)
  
            if serializer.is_valid():
                    serializer.save()
                    if accountSerializer.is_valid():
                        accountSerializer.save()
                        return Response({'cat': serializer.data, 'owner': accountSerializer.data}, status=status.HTTP_200_OK)
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)
        except json.JSONDecodeError:
            return Response({'error': 'Invalid JSON'}, status=status.HTTP_400_BAD_REQUEST)

    # This line ensures that a response is always returned
    return Response({'error': 'Unsupported method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


    