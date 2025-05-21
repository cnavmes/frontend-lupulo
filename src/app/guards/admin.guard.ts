// src/app/guards/admin.guard.ts
import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.obtenerToken();
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const decoded: any = jwtDecode(token);
    const rol = decoded?.rol;

    if (rol === 'ADMIN') {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  } catch (e) {
    router.navigate(['/login']);
    return false;
  }
};