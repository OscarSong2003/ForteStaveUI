from forte.data.data_pack import DataPack
from forte.pipeline import Pipeline
from forte.data.readers import RawDataDeserializeReader
from forte.processors.stave import StaveProcessor

from threading import Thread

def StavePipeline(
    input_format: str = "DataPack", service_name: str = "stave"
) -> None :
    pipeline = Pipeline[DataPack]() 
    pipeline.set_reader(RawDataDeserializeReader())
    pipeline.add(StaveProcessor(), {"port": 8880, "project_name": "finalOutput"} )
    pipeline.serve(input_format=input_format, service_name=service_name, port=9002)

if __name__ == '__main__':
    Thread(target=StavePipeline).start()