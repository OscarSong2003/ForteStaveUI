from django.db import models

# Create your models here.

class ConfigFile(models.Model): 
    configFile = models.FileField(upload_to='documents/')
    class Meta: 
        db_table = 'ConfigFile'
