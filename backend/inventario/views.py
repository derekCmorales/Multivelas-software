from django.shortcuts import render
from rest_framework import viewsets
from .models import Producto, MovimientoInventario
from .serializers import ProductoSerializer, MovimientoInventarioSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class MovimientoInventarioViewSet(viewsets.ModelViewSet):
    queryset = MovimientoInventario.objects.all()
    serializer_class = MovimientoInventarioSerializer