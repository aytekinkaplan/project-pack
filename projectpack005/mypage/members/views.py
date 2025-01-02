# members/views.py
from django.http import HttpResponse

def members(request):
    return HttpResponse("Hello, world. You're at the members index.")
