from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('index', views.index),
    path('home', views.index),
    path('serials', views.serials),
    path('serials_details', views.serials_details),
    path('about', views.about),
]