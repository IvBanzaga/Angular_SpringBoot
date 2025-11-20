import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicio {
  private urlBase = environment.apiUrl; // <- Usar la URL del environment

  constructor(private clientehttp: HttpClient) { }

  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.clientehttp.put<Producto>(`${this.urlBase}/${producto.id_producto}`, producto);
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.clientehttp.post<Producto>(`${this.urlBase}`, producto);
  }

  listaProductos(): Observable<Producto[]> {
    return this.clientehttp.get<Producto[]>(`${this.urlBase}`);
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.clientehttp.get<Producto>(`${this.urlBase}/${id}`);
  }

  eliminarProducto(id: number): Observable<void> {
    return this.clientehttp.delete<void>(`${this.urlBase}/${id}`);
  }
}
