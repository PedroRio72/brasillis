import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alunos1Component } from './alunos1.component';

describe('Alunos1Component', () => {
  let component: Alunos1Component;
  let fixture: ComponentFixture<Alunos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Alunos1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alunos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
