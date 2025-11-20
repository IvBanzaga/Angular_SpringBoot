import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

/* TODO: Configuración principal de la aplicación */
export const appConfig: ApplicationConfig = {
  providers: [
    /* TODO: Proveedor para manejo de errores globales */
    provideBrowserGlobalErrorListeners(),
    /* TODO: Proveedor para detección de cambios con coalescing */
    provideZoneChangeDetection({ eventCoalescing: true }),
    /* TODO: Proveedor para enrutamiento */
    provideRouter(routes),
    /* TODO: Proveedor para cliente HTTP */
    provideHttpClient()
  ]
};
