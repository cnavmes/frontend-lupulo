import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { RegisterComponent } from './pages/register.component';
import { HomeComponent } from './pages/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
  path: 'catalogo',
  loadComponent: () => import('./pages/catalogo-cervezas.component').then(m => m.CatalogoCervezasComponent)
}
];