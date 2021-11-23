import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth-service.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    dni: 0
  };
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private rolService: RolService,
    private router: Router) { }

  ngOnInit(): void {
    this.traerRoles();
  }

  traerRoles(){
    this.rolService.getAll().subscribe(roles => {
      roles.forEach(role => {
        console.log(role);
        if(role.tipo === 'vendedor'){
          this.user.rolId = role.id;
        }
      });
    });
  }

  onSubmit(){
    this.loading = true;
    console.log(this.user);
    this.authService.register(this.user).subscribe(user => {
      this.router.navigate(['/login']);
    });
  }
}
