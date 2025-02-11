import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp2Component } from './tp2.component';

describe('Tp2Component', () => {
  let component: Tp2Component;
  let fixture: ComponentFixture<Tp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
