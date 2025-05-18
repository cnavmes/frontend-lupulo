import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCervezasComponent } from './catalogo-cervezas.component';

describe('CatalogoCervezasComponent', () => {
  let component: CatalogoCervezasComponent;
  let fixture: ComponentFixture<CatalogoCervezasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoCervezasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoCervezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
