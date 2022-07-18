from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from forte.data.data_pack import DataPack
from forte.pipeline import Pipeline
from forte.processors.base import PackProcessor
from forte.processors.misc import RemoteProcessor
from forte.data.readers import RawDataDeserializeReader

# Create your views here.
def index(request):
    return HttpResponse('This is server index')

def initPack(request):
    newPack = DataPack('pack')
    stringPack = newPack.to_string()
    print(newPack);
    response = JsonResponse(stringPack, safe=False)
    return response;