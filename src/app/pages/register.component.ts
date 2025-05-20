import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  rol: string = 'USER';
  error: string = '';
  success: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
  this.error = '';
  this.success = '';

  this.authService.register(this.email, this.password, this.rol).subscribe({
    next: () => {
      this.success = 'Registro exitoso. Redirigiendo al login...';
      setTimeout(() => this.router.navigate(['/login']), 1500); // espera 1.5 segundos y redirige
    },
    error: () => {
      this.error = 'No se pudo registrar el usuario. Inténtalo de nuevo.';
    }
  });
}
}