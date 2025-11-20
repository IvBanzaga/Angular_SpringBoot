import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AgregarProducto } from './pages/agregar-producto/agregar-producto';
import { Lista } from './pages/lista/lista';
import { EditarProducto } from './components/editar-producto/editar-producto';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'agregar-producto',
    component: AgregarProducto,
  },
  {
    path: 'lista',
    component: Lista,
  },
  {
    path: 'editar-producto/:id',
    component: EditarProducto,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
