import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Producto } from '../../model/producto.model';
import { ProductoServicio } from '../../services/producto.service';

@Component({
  selector: 'app-editar-producto',
  imports: [FormsModule, RouterModule],
  templateUrl: './editar-producto.html',
})
export class EditarProducto {
  id!: number;
  producto: Producto = new Producto();
  private ruta = inject(ActivatedRoute);
  private router = inject(Router);
  private productoServicio = inject(ProductoServicio);

  ngOnInit() {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe({
      next: (datos) => (this.producto = datos),
      error: (error) => console.log('Error al obtener producto por id: ', error),
    });
  }

  onSubmit() {
    this.productoServicio.actualizarProducto(this.producto).subscribe({
      next: () => {
        this.irListaProductos();
      },
      error: (error) => console.log('Error al actualizar producto: ', error),
    });
  }

  irListaProductos() {
    this.router.navigate(['/lista']);
  }
}
