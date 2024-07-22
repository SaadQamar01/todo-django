from django.http import HttpRequest, HttpResponse
from .models import User
from .serializer import UserSerializer
from rest_framework import generics

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def hellowWorld(HttpRequest):
    return HttpResponse("Hello world!")