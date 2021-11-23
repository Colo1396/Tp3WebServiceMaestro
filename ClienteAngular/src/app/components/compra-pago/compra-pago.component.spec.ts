import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraPagoComponent } from './compra-pago.component';

describe('CompraPagoComponent', () => {
  let component: CompraPagoComponent;
  let fixture: ComponentFixture<CompraPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
