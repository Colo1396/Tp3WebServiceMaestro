import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Carrito } from '../../models/carrito';
import { CarritoService } from '../../services/carrito.service';
import { ProductoCarrito } from '../../models/productoCarrito';
import { ProductoCarritoService } from '../../services/productoCarrito.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-carrito-show',
  templateUrl: './carrito-show.component.html',
  styleUrls: ['./carrito-show.component.css'],
  providers: [UserService, CarritoService, ProductoCarritoService]
})
export class CarritoShowComponent implements OnInit {

  public user: User;
  public carrito: ProductoCarrito[];
  public total;
  public carritoId;
  public identity;
  public token;
  public status;
  public url: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _carritoService:CarritoService,
    private _productoCarritoService:ProductoCarritoService,
  ){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = JSON.parse(this.identity);
      this.url = globalCompras.url;
      this.total = 0;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.carritoId = params['carritoId'];
      this.getProductosCarrito(this.carritoId);
    });
  }

  getProductosCarrito(carritoId){
    this._carritoService.getCarrito(carritoId).subscribe(
      response => {
        console.log(response);
        if(response.carrito){
          this.carrito = response.carrito;
          var total;
          response.carrito.forEach( function(value){
            total = JSON.parse(value.carrito.total);
          });
          this.total = total;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
