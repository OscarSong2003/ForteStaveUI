from forte.data.data_pack import DataPack
from forte.pipeline import Pipeline
from forte.data.readers import RawDataDeserializeReader
from processor import LowerCaseProcessor
from threading import Thread

def LowerCasePipeline(
    input_format: str = "DataPack", service_name: str = "lowerCase"
) -> None :
    pipeline = Pipeline[DataPack]() 
    pipeline.set_reader(RawDataDeserializeReader())
    pipeline.add(LowerCaseProcessor())
    pipeline.serve(input_format=input_format, service_name=service_name, port=9000)

if __name__ == '__main__':
    Thread(target=LowerCasePipeline).start()