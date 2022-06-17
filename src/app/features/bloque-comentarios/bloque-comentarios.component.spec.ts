import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueComentariosComponent } from './bloque-comentarios.component';

describe('BloqueComentariosComponent', () => {
  let component: BloqueComentariosComponent;
  let fixture: ComponentFixture<BloqueComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
