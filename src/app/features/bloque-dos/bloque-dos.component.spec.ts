import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueDosComponent } from './bloque-dos.component';

describe('BloqueDosComponent', () => {
  let component: BloqueDosComponent;
  let fixture: ComponentFixture<BloqueDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
