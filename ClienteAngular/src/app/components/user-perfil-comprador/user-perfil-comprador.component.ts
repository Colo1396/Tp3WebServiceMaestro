import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Domicilio } from '../../models/domicilio';
import { DomicilioService } from '../../services/domicilio.service';
import { Tarjeta } from '../../models/tarjeta';
import { TarjetaService } from '../../services/tarjeta.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-user-perfil-comprador',
  templateUrl: './user-perfil-comprador.component.html',
  styleUrls: ['./user-perfil-comprador.component.css'],
  providers: [UserService, DomicilioService, TarjetaService]
})
export class UserPerfilCompradorComponent implements OnInit, DoCheck{

  public user: User;
  public domicilios: Domicilio[];
  public tarjetas: Tarjeta[];
  public identity;
  public token;
  public status;
  public url: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _domicilioService:DomicilioService,
    private _tarjetaService:TarjetaService
  ){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = JSON.parse(this.identity);
      this.url = globalCompras.url;
  }

  ngOnInit(): void {
    this.getUser(this.user.id);
    this.getDomicilios(this.user.id);
    this.getTarjetas(this.user.id);
  }

  //Para que se actualice el contenido sin tener que recargar la página
  ngDoCheck(){
  }

  getUser(userId){
    this._userService.getUser(userId).subscribe(
      response =>{
        if(response.user){
          this.user = JSON.parse(response.user);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getDomicilios(userId){
    this._domicilioService.getDomiciliosByUser(userId).subscribe(
      response => {
        if(response.domicilios){
          this.domicilios = response.domicilios;
        }
  
      },
      error => {
        console.log(error);
      }
    );
  }

  getTarjetas(userId){
    this._tarjetaService.getTarjetasByUser(userId).subscribe(
      response => {
        if(response.tarjetas){
          this.tarjetas = response.tarjetas;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
