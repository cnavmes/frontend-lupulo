import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router'; // 👈 Añade esta línea

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // 👈 Añade aquí también
  templateUrl: './app.component.html',
})
export class AppComponent {}