import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
/* TODO: Servicio para operaciones CRUD con productos */
export class ProductoServicio {

  /* TODO: URL base del backend Spring Boot */
  private urlBase = "http://localhost:8080/api/productos";

  constructor(private clientehttp: HttpClient) { }

  /* TODO: Actualizar producto existente */
  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.clientehttp.put<Producto>(`${this.urlBase}/${producto.id_producto}`, producto);
  }

  /* TODO: Crear nuevo producto */
  crearProducto(producto: Producto): Observable<Producto> {
    return this.clientehttp.post<Producto>(`${this.urlBase}`, producto);
  }

  /* TODO: Listar todos los productos */
  listaProductos(): Observable<Producto[]> {
    return this.clientehttp.get<Producto[]>(`${this.urlBase}`);
  }

  /* TODO: Obtener producto por ID */
  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.clientehttp.get<Producto>(`${this.urlBase}/${id}`);
  }

  /* TODO: Eliminar producto por ID */
  eliminarProducto(id: number): Observable<void> {
    return this.clientehttp.delete<void>(`${this.urlBase}/${id}`);
  }
}
