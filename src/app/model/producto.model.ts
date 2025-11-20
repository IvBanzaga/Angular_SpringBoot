/* TODO: Modelo de datos para productos del inventario */
export class Producto {
  obtenerProductoPorId(id: number) {
    throw new Error('Method not implemented.');
  }
  /* TODO: Identificador único del producto */
  id_producto!: number;
  /* TODO: Descripción detallada del producto */
  descripcion!: string;
  /* TODO: Precio del producto */
  precio!: number;
  /* TODO: Cantidad disponible en inventario */
  cantidad!: number;
  /* TODO: Nombre del producto */
  nombre!: string;
  /* TODO: URL de la imagen del producto */
  imagen_url!: string;
}
