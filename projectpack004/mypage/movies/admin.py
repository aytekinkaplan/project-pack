from django.contrib import admin

# Register your models here.
# movies/admin.py
from django.contrib import admin
from .models import Movie

admin.site.register(Movie)
