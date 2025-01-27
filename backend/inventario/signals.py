from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import MovimientoInventario, Producto

@receiver(post_save, sender=MovimientoInventario)
def actualizar_stock(sender, instance, **kwargs):
    producto = instance.producto
    if instance.tipo == "ENTRADA":
        producto.stock_actual += instance.cantidad
    elif instance.tipo == "SALIDA":
        producto.stock_actual -= instance.cantidad
    producto.save()

    # Lógica para transferencias entre ubicaciones (si aplica)
    if instance.tipo == "TRANSFERENCIA":
        # Restar de ubicación origen y sumar a destino (implementar según necesidad)
        pass