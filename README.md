# Sistema de Gestión de Inventario - Angular Frontend

![Angular](https://img.shields.io/badge/Angular-20.2+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3+-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Development-orange?style=for-the-badge)

---

## Índice

- [Introducción](#introducción)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Comandos Utilizados](#comandos-utilizados)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Creados](#componentes-creados)
- [Servicios](#servicios)
- [Páginas y Views](#páginas-y-views)
- [Rutas de la Aplicación](#rutas-de-la-aplicación)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Screenshots](#screenshots)
- [Futuras Mejoras](#futuras-mejoras)
- [Autor](#autor)

---

## Introducción

El **Sistema de Gestión de Inventario** es una aplicación web desarrollada en Angular 20 que permite la administración completa de inventarios empresariales. Esta solución frontend proporciona una interfaz intuitiva y moderna para gestionar productos, con operaciones CRUD completas y navegación fluida.

### 🎯 Objetivos del Proyecto

- **Gestión Integral**: Administración completa del inventario con operaciones CRUD
- **Interfaz Moderna**: Diseño responsivo con Bootstrap 5.3
- **Rendimiento Optimizado**: Implementación con Angular 20 y mejores prácticas
- **Escalabilidad**: Arquitectura modular preparada para crecimiento
- **User Experience**: Navegación intuitiva y formularios reactivos

### 🔍 Problema que Resuelve

Esta aplicación digitaliza y optimiza los procesos de gestión de inventario tradicionalmente manuales, proporcionando:
- Control centralizado del catálogo de productos
- Formularios intuitivos para agregar y editar productos
- Listado organizado con funcionalidades de búsqueda
- Interfaz responsiva que funciona en cualquier dispositivo
- Navegación fluida entre diferentes secciones

---

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

| Herramienta | Versión Recomendada | Descarga |
|-------------|--------------------|---------| 
| ![Node.js](https://img.shields.io/badge/Node.js-18.17.0+-339933?style=flat&logo=node.js) | 18.17.0+ | [nodejs.org](https://nodejs.org/) |
| ![Angular CLI](https://img.shields.io/badge/Angular%20CLI-20.2+-DD0031?style=flat&logo=angular) | 20.2.0+ | `npm install -g @angular/cli` |
| ![Git](https://img.shields.io/badge/Git-2.40+-F05032?style=flat&logo=git) | 2.40.0+ | [git-scm.com](https://git-scm.com/) |

### 💡 IDE Recomendado

**Visual Studio Code** con las siguientes extensiones:
- Angular Language Service
- TypeScript Importer
- Auto Rename Tag
- Prettier - Code formatter
- GitLens

---

## Instalación y Ejecución

### 1. 📥 Clonar el Repositorio

```bash
git clone https://github.com/usuario/inventario-frontend.git
cd inventario-frontend
```

### 2. 📦 Instalar Dependencias

```bash
npm install
```

### 3. 🎮 Ejecutar en Modo Desarrollo

```bash
# Servir la aplicación
ng serve

# Servir la aplicación y abrir automáticamente en el navegador
ng serve --open

# Alternativamente, usar el script npm
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

### 4. 🏗️ Compilar para Producción

```bash
# Build optimizado para producción
ng build

# Build con análisis de bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/inventario-frontend/stats.json
```

### 5. 🧪 Ejecutar Pruebas

```bash
# Pruebas unitarias
ng test

# Pruebas con coverage
ng test --code-coverage

# Build en modo watch para desarrollo
ng build --watch --configuration development
```

---

## Comandos Utilizados

Durante el desarrollo del proyecto se utilizaron los siguientes comandos de Angular CLI:

### 🏗️ Creación del Proyecto Base
```bash
ng new inventario-frontend --routing --style=css --package-manager=npm
```

### 📄 Generación de Páginas
```bash
# Páginas principales del sistema
ng generate component pages/home --skip-tests
ng generate component pages/agregar-producto --skip-tests
ng generate component pages/lista --skip-tests
```

### 🧩 Generación de Componentes
```bash
# Componentes reutilizables
ng generate component components/navbar --skip-tests
ng generate component components/footer --skip-tests
ng generate component components/producto-lista --skip-tests
ng generate component components/editar-producto --skip-tests
```

### 🔧 Generación de Servicios
```bash
ng generate service services/producto --skip-tests
```

### 🎨 Instalación de Dependencias Adicionales
```bash
# Bootstrap para estilos
npm install bootstrap@^5.3.8
npm install @types/bootstrap --save-dev
```

---

## Estructura del Proyecto

```
src/
├── 📁 app/
│   ├── 📁 components/          # Componentes reutilizables
│   │   ├── 📄 editar-producto/     # Componente para edición de productos
│   │   ├── 📄 footer/              # Pie de página
│   │   ├── 📄 navbar/              # Barra de navegación
│   │   └── 📄 producto-lista/      # Lista de productos reutilizable
│   ├── 📁 model/               # Interfaces y modelos de datos
│   │   └── 📄 producto.interface.ts
│   ├── 📁 pages/               # Páginas principales
│   │   ├── 📄 agregar-producto/    # Página para agregar productos
│   │   ├── 📄 home/                # Página principal/dashboard
│   │   └── 📄 lista/               # Página de listado de productos
│   ├── 📁 services/            # Servicios de negocio
│   │   └── 📄 producto.service.ts  # Servicio para gestión de productos
│   ├── 📄 app.config.ts        # Configuración de la aplicación
│   ├── 📄 app.routes.ts        # Configuración de rutas
│   ├── 📄 app.ts               # Componente principal
│   ├── 📄 app.html             # Template principal
│   └── 📄 app.css              # Estilos globales
├── 📁 public/                  # Recursos públicos estáticos
└── 📄 styles.css              # Estilos globales
```

---

## Componentes Creados

### 📦 Componentes de Gestión de Productos

| Componente | Ubicación | Descripción | Responsabilidad |
|------------|-----------|-------------|-----------------|
| **ProductoListaComponent** | `components/producto-lista/` | Lista reutilizable de productos | Muestra productos en formato de cards/lista |
| **EditarProductoComponent** | `components/editar-producto/` | Formulario de edición | Modifica datos de productos existentes mediante formulario reactivo |

### 🎨 Componentes de Layout

| Componente | Ubicación | Descripción | Responsabilidad |
|------------|-----------|-------------|-----------------|
| **NavbarComponent** | `components/navbar/` | Barra de navegación principal | Menú de navegación entre secciones, branding |
| **FooterComponent** | `components/footer/` | Pie de página | Información de copyright, enlaces adicionales |

### 📄 Páginas/Vistas

| Componente | Ubicación | Descripción | Responsabilidad |
|------------|-----------|-------------|-----------------|
| **HomeComponent** | `pages/home/` | Página principal | Dashboard con resumen y accesos directos |
| **AgregarProductoComponent** | `pages/agregar-producto/` | Página de creación | Formulario completo para agregar nuevos productos |
| **ListaComponent** | `pages/lista/` | Página de listado | Vista principal del inventario con filtros y búsqueda |

---

## Servicios

### 🌐 Servicios de API

| Servicio | Ubicación | Descripción | Responsabilidades |
|----------|-----------|-------------|-------------------|
| **ProductoService** | `services/producto.service.ts` | Gestión de productos | CRUD de productos, comunicación con API backend |

### 🛠️ Funcionalidades del ProductoService

```typescript
// Ejemplo de implementación del ProductoService
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // Obtener producto por ID
  getProducto(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

  // Crear nuevo producto
  createProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }

  // Actualizar producto existente
  updateProducto(id: string, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  // Eliminar producto
  deleteProducto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
```

---

## Páginas y Views

### 🏠 Páginas Principales

| Página | Ruta | Componente | Descripción | Características |
|--------|------|------------|-------------|-----------------|
| **Home** | `/` | `HomeComponent` | Página principal del sistema | Dashboard con resumen de inventario, accesos rápidos |
| **Agregar Producto** | `/agregar-producto` | `AgregarProductoComponent` | Creación de productos | Formulario reactivo con validaciones |
| **Lista de Productos** | `/lista` | `ListaComponent` | Listado completo de productos | Tabla/grid con funciones de búsqueda y filtrado |
| **Editar Producto** | `/editar-producto/:id` | `EditarProductoComponent` | Modificación de productos | Formulario pre-cargado con datos existentes |

### 🎨 Características de UX/UI

- **Diseño Responsivo**: Bootstrap 5.3 para adaptabilidad a todos los dispositivos
- **Navegación Intuitiva**: Navbar con enlaces claros y breadcrumbs
- **Formularios Reactivos**: Validación en tiempo real y feedback visual
- **Loading States**: Indicadores de carga durante operaciones asíncronas
- **Error Handling**: Manejo graceful de errores con mensajes informativos

---

## Rutas de la Aplicación

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AgregarProducto } from './pages/agregar-producto/agregar-producto';
import { Lista } from './pages/lista/lista';
import { EditarProducto } from './components/editar-producto/editar-producto';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Inicio - Sistema de Inventario'
  },
  {
    path: 'agregar-producto',
    component: AgregarProducto,
    title: 'Agregar Producto - Sistema de Inventario'
  },
  {
    path: 'lista',
    component: Lista,
    title: 'Lista de Productos - Sistema de Inventario'
  },
  {
    path: 'editar-producto/:id',
    component: EditarProducto,
    title: 'Editar Producto - Sistema de Inventario'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
```

---

## Tecnologías Utilizadas

### 🔧 Framework y Lenguajes Base

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| ![Angular](https://img.shields.io/badge/Angular-20.2.0-DD0031?style=flat&logo=angular) | 20.2.0 | Framework principal de desarrollo |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat&logo=typescript) | 5.9.2 | Lenguaje de programación tipado |
| ![RxJS](https://img.shields.io/badge/RxJS-7.8.0-B7178C?style=flat&logo=reactivex) | 7.8.0 | Programación reactiva y manejo de observables |

### 📦 Dependencias Principales

```json
{
  "dependencies": {
    "@angular/common": "^20.2.0",
    "@angular/compiler": "^20.2.0",
    "@angular/core": "^20.2.0",
    "@angular/forms": "^20.2.0",
    "@angular/platform-browser": "^20.2.0",
    "@angular/router": "^20.2.0",
    "bootstrap": "^5.3.8",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  }
}
```

### 🎨 UI/UX y Estilos

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| **Bootstrap** | 5.3.8 | Sistema de diseño, componentes UI, grid system |
| **CSS3** | - | Estilos personalizados y responsive design |
| **@types/bootstrap** | 5.2.10 | Tipado TypeScript para Bootstrap |

---

## Screenshots

### 🏠 Página Principal (Home)
*[Aquí se incluiría una imagen del dashboard principal con navegación y accesos rápidos]*

```
+----------------------------------+
|  [NAVBAR] Sistema de Inventario  |
+----------------------------------+
|                                  |
|    Bienvenido al Sistema de      |
|        Gestión de Inventario     |
|                                  |
|  [Agregar Producto] [Ver Lista]  |
|                                  |
+----------------------------------+
|           [FOOTER]               |
+----------------------------------+
```

### 📝 Formulario de Agregar Producto
*[Imagen del formulario reactivo con campos de validación]*

### 📋 Lista de Productos
*[Captura de pantalla de la tabla de productos con opciones de edición]*

### 📱 Vista Móvil Responsiva
*[Screenshots mostrando la adaptabilidad en dispositivos móviles con Bootstrap]*

---

## Futuras Mejoras

### 🚀 Funcionalidades Planificadas

- [ ] **Sistema de Autenticación**: Login y registro de usuarios
- [ ] **Gestión de Categorías**: CRUD para categorías de productos
- [ ] **Búsqueda Avanzada**: Filtros por categoría, precio, disponibilidad
- [ ] **Paginación**: Manejo de grandes volúmenes de datos
- [ ] **Exportación de Datos**: PDF, Excel con listados de inventario
- [ ] **Dashboard con Gráficos**: Estadísticas visuales del inventario
- [ ] **Notificaciones**: Alertas de stock bajo
- [ ] **Historial de Cambios**: Auditoría de modificaciones

### 🔧 Optimizaciones Técnicas

- [ ] **Lazy Loading**: Carga perezosa de módulos por funcionalidad
- [ ] **OnPush Change Detection**: Optimización del rendimiento
- [ ] **Service Workers**: Cache offline y PWA capabilities
- [ ] **State Management**: Implementación de NgRx para estados complejos
- [ ] **Unit Testing**: Cobertura de pruebas al 90%+
- [ ] **E2E Testing**: Pruebas end-to-end con Cypress

### 🎨 Mejoras de UX

- [ ] **Tema Oscuro**: Alternancia entre modo claro y oscuro
- [ ] **Animaciones**: Transiciones suaves entre vistas
- [ ] **Drag & Drop**: Funcionalidad para reordenar productos
- [ ] **Shortcuts de Teclado**: Navegación rápida con teclado
- [ ] **Accesibilidad**: Cumplimiento WCAG 2.1 Level AA
- [ ] **Internationalization (i18n)**: Soporte multi-idioma

---

## Autor

### **[Tu Nombre Completo]**

🚀 **Desarrollador Frontend especializado en Angular y ecosistemas JavaScript**

Estudiante de Angular Intermedio con pasión por crear aplicaciones web modernas y eficientes. Este proyecto representa la aplicación práctica de conceptos avanzados de Angular incluyendo routing, servicios, formularios reactivos y arquitectura de componentes.

### 📞 Información de Contacto

| Plataforma | Enlace | Descripción |
|------------|--------|-------------|
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github) | [@tu-usuario](https://github.com/tu-usuario) | Repositorios y proyectos de código |
| ![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin) | [tu-perfil](https://linkedin.com/in/tu-perfil) | Perfil profesional y networking |
| ![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail) | [tu-email@gmail.com](mailto:tu-email@gmail.com) | Contacto directo para oportunidades |
| ![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=google-chrome) | [tu-portfolio.com](https://tu-portfolio.com) | Showcase de proyectos y skills |

### 🛠️ Stack Tecnológico de Especialización

```
Frontend: Angular 20 • TypeScript • RxJS • Bootstrap 5 • HTML5 • CSS3
Tools: Angular CLI • Git • VS Code • Prettier • Jasmine • Karma
Learning: NgRx • PWA • Node.js • Express • MongoDB
```

---

### 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

### 🙏 Agradecimientos

- **Angular Team** por el excelente framework y documentación
- **Bootstrap Team** por el sistema de diseño robusto y responsive
- **Instructor del curso** por la guía en mejores prácticas
- **Comunidad Angular** por recursos, tutoriales y soporte
- **TypeScript Team** por hacer JavaScript más robusto

---

<div align="center">

**⭐ Si este proyecto te resulta útil para aprender Angular, no olvides darle una estrella ⭐**

*Desarrollado con ❤️ usando Angular 20 + Bootstrap 5*

---

**📧 ¿Tienes preguntas o sugerencias?**  
*¡No dudes en abrir un issue o contactarme directamente!*

</div>
