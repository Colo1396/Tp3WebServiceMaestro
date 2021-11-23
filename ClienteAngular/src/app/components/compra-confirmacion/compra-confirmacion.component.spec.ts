import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraConfirmacionComponent } from './compra-confirmacion.component';

describe('CompraConfirmacionComponent', () => {
  let component: CompraConfirmacionComponent;
  let fixture: ComponentFixture<CompraConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraConfirmacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
