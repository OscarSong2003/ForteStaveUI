from http.client import HTTPResponse
from django.shortcuts import render
import yaml
from yaml.loader import SafeLoader
from yaml.loader import FullLoader
# Create your views here.
from .models import ConfigFile
from .forms import ConfigForm
from django.http import  HttpResponse, JsonResponse
import json 
def ConfigFileUpload(request):
    print('GOT HERE!1!')
    if (request.method == 'POST'):
        data = yaml.load(request.body, Loader=FullLoader)
        # print(data)
        # jsonData = json.dumps(data)
        return JsonResponse(data)
            
    return HttpResponse('/')

def index(request): 
    return HttpResponse("Hello, world. You're at the world.")
