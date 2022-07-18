from django.urls import path

from . import views

urlpatterns = [
    path('', views.ConfigFileUpload, name='fileupload'),
    path('home', views.index, name='index'),
]