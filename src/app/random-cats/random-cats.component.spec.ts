import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCatsComponent } from './random-cats.component';

describe('RandomCatsComponent', () => {
  let component: RandomCatsComponent;
  let fixture: ComponentFixture<RandomCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomCatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
