from django import forms
from .models import *

class ConfigForm(forms.ModelForm):
    class Meta: 
        model=ConfigFile
        fields=['configFile']