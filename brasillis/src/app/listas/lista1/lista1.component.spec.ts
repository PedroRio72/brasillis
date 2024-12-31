import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista1Component } from './lista1.component';

describe('Lista1Component', () => {
  let component: Lista1Component;
  let fixture: ComponentFixture<Lista1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lista1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lista1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
