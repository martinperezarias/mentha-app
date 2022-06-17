import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueTresComponent } from './bloque-tres.component';

describe('BloqueTresComponent', () => {
  let component: BloqueTresComponent;
  let fixture: ComponentFixture<BloqueTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
