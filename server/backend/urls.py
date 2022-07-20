from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.index, name='index'),
    path('newPack', views.initPack, name='newPack'),
    path('addText', views.addText, name='addText'),
    path('remoteProcessing', views.remoteProcessing, name='remoteProcessing'),
    path('getText', views.getText, name='getText'),
]