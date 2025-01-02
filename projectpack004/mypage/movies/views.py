from django.shortcuts import render
from django.template import loader
from .models import Member

# Create your views here.
from django.http import HttpResponse

def home(request):
    return HttpResponse('Hello, Django!')
