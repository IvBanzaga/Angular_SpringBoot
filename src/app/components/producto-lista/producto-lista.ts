import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../model/producto.model';
import { ProductoServicio } from '../../services/producto.service';

@Component({
  selector: 'app-producto-lista',
  imports: [CommonModule, FormsModule],
  templateUrl: './producto-lista.html',
})
/* TODO: Componente para listar productos */
export class ProductoLista {
  /* TODO: Array de productos cargados */
  productos!: Producto[];

  /* TODO: Array filtrado de productos */
  productosFiltrados: Producto[] = [];

  /* TODO: Producto para el input de búsqueda */
  producto: Producto = new Producto();

  /* TODO: Filtro por nombre */
  filtroNombre: string = '';

  /* TODO: Paginación */
  currentPage: number = 1;
  pageSize: number = 10;

  /* TODO: Router inyectado para navegación */
  private enrutador = inject(Router);

  /* TODO: Servicio inyectado para productos */
  private productoServicio = inject(ProductoServicio);

  ngOnInit() {
    /* TODO: Cargamos los Productos */
    this.obtenerProductos();
  }

  /* TODO: Método para cargar productos desde API */
  private obtenerProductos(): void {
    this.productoServicio.listaProductos().subscribe({
      next: (datos) => {
        this.productos = datos;
        this.productosFiltrados = datos; // Inicializar la lista filtrada
        this.buscarProducto(this.producto.id_producto); // Aplicar filtros iniciales
        console.log('Primera imagen:', this.productos[0]?.imagen_url);
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      },
    });
  }

  /* TODO: Método para editar productos, lo redireccionamos a la página de editar-producto */
  editarProducto(id: number): void {
    this.enrutador.navigate(['/editar-producto', id]);
  }

  /* TODO: Método para eliminar productos, al pulsar el botón de eliminar al subscribe se recarga la lista de productos */
  eliminarProducto(id: number): void {
    this.productoServicio.eliminarProducto(id).subscribe({
      next: () => {
        this.obtenerProductos(); // Recargar la lista de productos
        // Después de recargar, si hay un filtro aplicado, volver a filtrar
        if (this.producto.id_producto) {
          this.buscarProducto(this.producto.id_producto);
        }
      },
      error: (error) => {
        console.error('Error al eliminar producto:', error);
      },
    });
  }

  buscarProducto(id: number): void {
    let filtrados = this.productos;

    if (id) {
      filtrados = filtrados.filter((p) => p.id_producto === id);
    }

    if (this.filtroNombre) {
      filtrados = filtrados.filter((p) =>
        p.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
      );
    }

    this.productosFiltrados = filtrados;
    this.currentPage = 1; // Resetear página al filtrar
  }

  /* TODO: Getter para productos paginados */
  get productosPaginados(): Producto[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.productosFiltrados.slice(startIndex, startIndex + this.pageSize);
  }

  /* TODO: Total de páginas */
  get totalPages(): number {
    return Math.ceil(this.productosFiltrados.length / this.pageSize);
  }

  /* TODO: Métodos de paginación */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
