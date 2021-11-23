import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPerfilCompradorComponent } from './user-perfil-comprador.component';

describe('UserPerfilCompradorComponent', () => {
  let component: UserPerfilCompradorComponent;
  let fixture: ComponentFixture<UserPerfilCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPerfilCompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPerfilCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
