from django.db import models

# Create your models here.# movies/models.py
from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    release_year = models.IntegerField()

    def __str__(self):
        return self.title
