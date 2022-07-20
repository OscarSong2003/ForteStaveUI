from forte.data.data_pack import DataPack
from forte.pipeline import Pipeline
from forte.data.readers import RawDataDeserializeReader
from fortex.spacy import SpacyProcessor

from threading import Thread

def NERPipeline(
    input_format: str = "DataPack", service_name: str = "ner"
) -> None :
    pipeline = Pipeline[DataPack]() 
    pipeline.set_reader(RawDataDeserializeReader())
    pipeline.add(SpacyProcessor(), {"processors": ["ner"]})
    pipeline.serve(input_format=input_format, service_name=service_name, port=9001)

if __name__ == '__main__':
    Thread(target=NERPipeline).start()