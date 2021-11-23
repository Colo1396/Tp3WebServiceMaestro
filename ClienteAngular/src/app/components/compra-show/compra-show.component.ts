import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Carrito } from '../../models/carrito';
import { CarritoService } from '../../services/carrito.service';
import { ProductoCarrito } from '../../models/productoCarrito';
import { ProductoCarritoService } from '../../services/productoCarrito.service';
import { Compra } from '../../models/compra';
import { CompraService } from '../../services/compra.service';
import { Domicilio } from '../../models/domicilio';
import { DomicilioService } from '../../services/domicilio.service';
import { Tarjeta } from '../../models/tarjeta';
import { TarjetaService } from '../../services/tarjeta.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-compra-show',
  templateUrl: './compra-show.component.html',
  styleUrls: ['./compra-show.component.css'],
  providers: [UserService, CarritoService, ProductoCarritoService, CompraService, DomicilioService, TarjetaService ]
})
export class CompraShowComponent implements OnInit {

  public user: User;
  public carrito: ProductoCarrito[];
  public vendedor: User;
  public compra: Compra;
  public destino: Domicilio;
  public medioDePago: Tarjeta;
  public total;
  public compraId;
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
    private _compraService:CompraService, 
    private _domicilioService:DomicilioService, 
    private _tarjetaService:TarjetaService
  ){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = JSON.parse(this.identity);
      this.url = globalCompras.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.compraId = params['compraId'];
      this.getProductosCarritoCompra(this.compraId);
    });
  }

  getProductosCarritoCompra(compraId){
    this._compraService.getCarritoCompra(compraId).subscribe(
      response => {
        if(response.productosCarritoComprado){
          this.carrito = response.productosCarritoComprado;
          var total;
          response.productosCarritoComprado.forEach( function(value){
            total = JSON.parse(value.carrito.total);
          });
          this.total = total;
        }
        if(response.vendedor){
          this.vendedor = response.vendedor;
        }
        if(response.fechaCompra){
          this.compra = response.fechaCompra;
        }
        if(response.medioDePago){
          this.medioDePago = response.medioDePago;
        }
        if(response.destino){
          this.destino = response.destino;
        }
      },
      error => {
        console.log(error);
      }
    );
  }


}
