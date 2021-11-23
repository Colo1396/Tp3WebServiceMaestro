import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraShowComponent } from './compra-show.component';

describe('CompraShowComponent', () => {
  let component: CompraShowComponent;
  let fixture: ComponentFixture<CompraShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
