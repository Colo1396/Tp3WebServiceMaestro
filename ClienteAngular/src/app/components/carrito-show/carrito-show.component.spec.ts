import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoShowComponent } from './carrito-show.component';

describe('CarritoShowComponent', () => {
  let component: CarritoShowComponent;
  let fixture: ComponentFixture<CarritoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
