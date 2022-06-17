import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueContactoComponent } from './bloque-contacto.component';

describe('BloqueContactoComponent', () => {
  let component: BloqueContactoComponent;
  let fixture: ComponentFixture<BloqueContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
