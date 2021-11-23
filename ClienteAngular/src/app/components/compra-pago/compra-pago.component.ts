import { Component, OnInit , DoCheck} from '@angular/core';
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
  selector: 'app-compra-pago',
  templateUrl: './compra-pago.component.html',
  styleUrls: ['./compra-pago.component.css'],
  providers: [UserService, CarritoService, ProductoCarritoService, CompraService, DomicilioService, TarjetaService]
})
export class CompraPagoComponent implements OnInit, DoCheck {

  public user: User;
  public carrito: ProductoCarrito[];
  public compra:Compra;
  public domicilios: Domicilio[];
  public tarjetas: Tarjeta[];
  public total;
  public carritoId;
  public identity;
  public token;
  public status;
  public message;
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
      this.total = 0;
      //id, idVendedor, idComprador, idCarrito, idMedioDePago, idDestino
      this.compra = new Compra('', '', JSON.parse(this.user.id), '', '', '', '');
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.carritoId = params['carritoId'];
      this.getProductosCarrito(this.carritoId);
      //this.getCarrito(this.carritoId);
      this.getDomicilios(this.user.id);
      this.getTarjetas(this.user.id);
    });

    $(document).ready(function(){
      $('.cantidad').on('change', function(e){
        var total = 0;
        $(".list-productos tbody .subtotal").each(function(){
          var subtotal = $(this).text().split('$')[1].replace(/\,/g, '');
          total += parseFloat(subtotal);
        });
        $('.total').text('$ ' + total);
      });
    });
  }

  //Para que se actualice el contenido sin tener que recargar la página
  ngDoCheck(){
      $('.cantidad').on('change', function(e){
        var total = 0;
        $(".list-productos tbody .subtotal").each(function(){
          var subtotal = $(this).text().split('$')[1].replace(/\,/g, '');
          total += parseFloat(subtotal);
        });
        $('.total').text('$ ' + total);
      });
  }

  

  getProductosCarrito(carritoId){
    this._carritoService.getProductosCarrito(carritoId).subscribe(
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

  getCarrito(carritoId){
    this._carritoService.getCarrito(carritoId).subscribe(
      response => {
        console.log("CARRRITOOOOOO");
        console.log(response);
        if(response.carrito){
          
          this.carrito = response.carrito;
          var total;
          response.carrito.forEach( function(value){
            total = JSON.parse(value.carrito.total);
          });
          //this.total = total;
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
        console.log("domicilios");
        console.log(response);
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
        console.log("tarjetas");
        console.log(response);
        if(response.tarjetas){
          this.tarjetas = response.tarjetas;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(form){
    this.compra.idCarrito = this.carritoId;
    this.compra.carrito = this.carrito;
    console.log(this.compra);


    this._compraService.pagar(this.compra).subscribe(
      response => {
        console.log(response);
        if(response.status == 'success'){
          this.status = 'success';
          this._router.navigate(['/compra/confirmacion/', response.nuevaCompra.id ]);
        }else{
          this.status = 'error';
          this.message = response.error.message;
          console.log(this.message);
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    )
  }

}
