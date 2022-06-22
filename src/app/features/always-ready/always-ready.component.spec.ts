import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwaysReadyComponent } from './always-ready.component';

describe('AlwaysReadyComponent', () => {
  let component: AlwaysReadyComponent;
  let fixture: ComponentFixture<AlwaysReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlwaysReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwaysReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
