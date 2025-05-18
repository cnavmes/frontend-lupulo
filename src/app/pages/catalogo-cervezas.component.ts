import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogo-cervezas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo-cervezas.component.html',
})
export class CatalogoCervezasComponent {
  cervezas: any[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/cervezas').subscribe(data => {
      this.cervezas = data.cervezas || []; // 👈 fallback si no viene paginado
    });
  }
}