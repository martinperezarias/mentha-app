import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueUnoComponent } from './bloque-uno.component';

describe('BloqueUnoComponent', () => {
  let component: BloqueUnoComponent;
  let fixture: ComponentFixture<BloqueUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
