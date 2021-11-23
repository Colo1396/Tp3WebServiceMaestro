import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Tarjeta } from '../../models/tarjeta';
import { TarjetaService } from '../../services/tarjeta.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-tarjeta-add',
  templateUrl: './tarjeta-add.component.html',
  styleUrls: ['./tarjeta-add.component.css'],
  providers: [UserService, TarjetaService]
})
export class TarjetaAddComponent implements OnInit {

  public user: User;
  public tarjeta: Tarjeta;
  public identity;
  public token;
  public status;
  public url: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _tarjetaService:TarjetaService,
  ) { 
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = JSON.parse(this.identity);
      this.url = globalCompras.url;
      this.tarjeta = new Tarjeta('', '', '', '', '', '', '', JSON.parse(this.user.id));

  }
  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.tarjeta);
    this._tarjetaService.add(this.tarjeta).subscribe(
      response => {
        if(response.createdTarjeta && response.createdTarjeta.id){
          this.status = 'success';
          $(document).ready(function(){
            $('.form').trigger("reset");
          });
        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }
}
