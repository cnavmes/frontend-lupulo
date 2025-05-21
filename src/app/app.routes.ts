import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { RegisterComponent } from './pages/register.component';

import { AuthGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Ruta pública
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./pages/catalogo-cervezas.component').then(
        (m) => m.CatalogoCervezasComponent
      ),
  },

  // Ruta protegida solo para admin
  {
    path: 'admin-panel',
    loadComponent: () =>
      import('./pages/admin-panel/admin-panel.component').then(
        (m) => m.AdminPanelComponent
      ),
    canActivate: [adminGuard],
  },

  // Ruta protegida para usuarios autenticados
  {
    path: 'usuario-panel',
    loadComponent: () =>
      import('./pages/usuario-panel/usuario-panel.component').then(
        (m) => m.UsuarioPanelComponent
      ),
    canActivate: [AuthGuard],
  },

  // 🔧 Ruta de prueba para PrimeNG + Sakai
  {
    path: 'primeng-test',
    loadComponent: () =>
      import('./primeng-test/primeng-test.component').then(
        (m) => m.PrimengTestComponent
      ),
  },

  // Fallback: redirige a login si la ruta no existe
  { path: '**', redirectTo: 'login' },
];