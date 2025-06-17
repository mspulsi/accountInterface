from django.urls import path
from . import views

app_name = 'accounts'
# URL patterns for the posts app, app_name defined above then makes the URL's below
# available as posts:list and posts:page. it keeps you from having conflicts later on as the project grows.

urlpatterns = [
    path('new-account/', views.new_account, name='new-account'),
    path('login/', views.login, name='login'),
    path('', views.home, name='home'),
    path('edit/', views.edit_account, name='edit-account'),
]
