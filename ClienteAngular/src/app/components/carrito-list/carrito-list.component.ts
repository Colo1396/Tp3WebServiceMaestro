import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Carrito } from '../../models/carrito';
import { CarritoService } from '../../services/carrito.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css'],
  providers: [UserService, CarritoService]
})

export class CarritoListComponent implements OnInit {

  public user: User;
  public carritos: Carrito[];
  public identity;
  public token;
  public status;
  public url: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _carritoService:CarritoService,
  ){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = JSON.parse(this.identity);
      this.url = globalCompras.url;
  }

  ngOnInit(): void {
    this.getCarritos(this.user.id);
  }

  getCarritos(userId){
    this._carritoService.getCarritos(userId).subscribe(
      response => {
        if(response.carritos){
          this.carritos = response.carritos;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
