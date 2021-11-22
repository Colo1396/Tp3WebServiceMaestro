import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { ProductoCarrito } from '../../models/productoCarrito';
import { ProductoCarritoService } from '../../services/productoCarrito.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-producto-show',
  templateUrl: './producto-show.component.html',
  styleUrls: ['./producto-show.component.css'],
  providers: [UserService, ProductoService, ProductoCarritoService]
})
export class ProductoShowComponent implements OnInit {

  public user: User;
  public producto: Producto;
  public productoCarrito: ProductoCarrito;
  public productoId;
  public identity;
  public token;
  public status;
  public url: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _productoService:ProductoService,
    private _productoCarritoService:ProductoCarritoService
  ){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = JSON.parse(this.identity);
      this.url = globalCompras.url;
      this.productoCarrito = new ProductoCarrito('', '', '', '');
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      console.log(params);
      this.productoId = params['productoId'];
      console.log(this.productoId);
      this.getProducto(this.productoId);
    });
  }

  getProducto(productoId){
    this._productoService.getProducto(productoId).subscribe(
      response =>{
        if(response.producto){
          this.producto = response.producto;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(form){
    var datos = {
      //cantidad: form.form.controls.cantidad.value,
      cantidad: this.productoCarrito.cantidad,
      idProducto : this.productoId,
      idUser: JSON.parse(this.user.id)
    }

    //this.productoCarrito.idProducto = this.productoId;
    this._productoCarritoService.addProductoCarrito(datos).subscribe(
      response => {
        console.log(response);
        if(response.status == 'success'){
          this.status = 'success';
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
