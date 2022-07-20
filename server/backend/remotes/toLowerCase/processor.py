from forte.processors.base import PackProcessor
from forte.data.data_pack import DataPack

class LowerCaseProcessor(PackProcessor):
    def __init__(self):
        super().__init__()

    def _process(self, input_pack: DataPack):
        text = input_pack.text.lower()
        input_pack.set_text(text)
    