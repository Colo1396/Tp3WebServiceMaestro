import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAddComponent } from './tarjeta-add.component';

describe('TarjetaAddComponent', () => {
  let component: TarjetaAddComponent;
  let fixture: ComponentFixture<TarjetaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
