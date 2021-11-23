import { Component, OnInit } from '@angular/core';
import { CuentaBancaria } from 'src/app/interfaces/cuentaBancaria';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {
  user: User = {
    id: 0,
    username: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCuentasBancarias();
  }

  getCuentasBancarias(){
    this.userService.getOne().subscribe(user => {
      this.user = user;
    });
  }
}
