from django.contrib import admin
from .models import Post
# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
  list_display = ('title', 'author', 'created_date', 'updated_date')
  search_fields = ('title', 'author__username')
