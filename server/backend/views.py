from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from forte.data.data_pack import DataPack
from forte.pipeline import Pipeline
from forte.processors.base import PackProcessor
from forte.processors.misc import RemoteProcessor
from forte.data.readers import RawDataDeserializeReader
import json 
import os
import shutil

# Create your views here.
def index(request):
    return HttpResponse('This is server index')

def initPack(request):
    newPack = DataPack('pack')
    stringPack = newPack.to_string()
    print(newPack);
    response = JsonResponse(stringPack, safe=False)
    return response;

def addText(request):

    decodedBody = request.body.decode('utf-8')
    # print('decoded body: ', decodedBody)
    parsed = json.loads(decodedBody)
    # stringPack = json.dumps(json.loads(parsed['pack']));
    # stringPack = stringPack.to_string();
    pack = DataPack.from_string(parsed['pack'])
    pack.set_text(parsed['text'])
    # print('converted:', pack.to_string());
    return JsonResponse(pack.to_string(), safe=False)

def remoteProcessing(request):
    decodedBody = request.body.decode('utf-8')
    parsed = json.loads(decodedBody)
    print('parsed: ', parsed)
    # pack = DataPack.from_string(parsed['pack'])
    url = parsed['url']

    pipeline = Pipeline[DataPack](
        do_init_type_check=False
    )
    pipeline.set_reader(RawDataDeserializeReader())
    pipeline.add(RemoteProcessor(), config={
        "url": url
    })
    pipeline.initialize()

    # process
    processedPack = pipeline.process([parsed['pack']])
    stringPack = processedPack.to_string()
    print(stringPack)
    return JsonResponse(stringPack, safe=False)

def getText(request): 
    decodedBody = request.body.decode('utf-8')
    
    parsed = json.loads(decodedBody)
    print('parsed: ', parsed)
    
    pack = DataPack.from_string(parsed['pack'])
    return JsonResponse(pack.text, safe=False)
    