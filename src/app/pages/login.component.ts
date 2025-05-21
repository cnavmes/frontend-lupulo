import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        this.authService.guardarToken(res.token);

        const payload: any = jwtDecode(res.token);
        const rol = payload.rol;

        if (rol === 'ADMIN') {
          this.router.navigate(['/admin-panel']);
        } else {
          this.router.navigate(['/usuario-panel']);
        }
      },
      error: () => {
        this.error = 'Credenciales incorrectas';
      }
    });
  }

  continuarSinLogin(): void {
    this.router.navigate(['/catalogo']);
  }
}