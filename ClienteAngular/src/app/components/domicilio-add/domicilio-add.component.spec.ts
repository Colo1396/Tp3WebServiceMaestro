import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioAddComponent } from './domicilio-add.component';

describe('DomicilioAddComponent', () => {
  let component: DomicilioAddComponent;
  let fixture: ComponentFixture<DomicilioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomicilioAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomicilioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
