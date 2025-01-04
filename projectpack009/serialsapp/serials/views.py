from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')
def serials(request):
    return render(request, 'serials.html')
def serials_details(request):
    return render(request, 'serials_details.html')
    
def about(request):
    return render(request, 'about.html')