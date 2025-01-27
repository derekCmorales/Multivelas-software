from django.db import models

class Ubicacion(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.TextField()
    es_almacen_principal = models.BooleanField(default=False)