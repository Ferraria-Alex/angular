import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Component } from './comp-1.component';

describe('Comp1Component', () => {
  let component: Comp1Component;
  let fixture: ComponentFixture<Comp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
