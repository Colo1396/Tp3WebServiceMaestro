import { Component, OnInit } from '@angular/core';
import { CuentaBancaria } from 'src/app/interfaces/cuentaBancaria';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    cuentasBancarias: []
  };
  cuentaNueva: CuentaBancaria = {
    id: 0,
    nroCuenta: '',
    idVendedor: 0
  }
  loading: boolean = false;
  saved: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getOne().subscribe(user => {
      this.cuentaNueva.idVendedor = user.id;
      return this.user = user;
    });
  }

  updateUser(){
    this.loading = true;
    var cuenta;
    this.cuentaNueva.nroCuenta ?  cuenta = this.cuentaNueva  :  cuenta = undefined;
    this.userService.update(this.user, cuenta).subscribe(user => {
      this.loading = false;
      this.saved = true;
    });
  }
}
