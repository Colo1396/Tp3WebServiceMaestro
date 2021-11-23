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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService, ProductoService, ProductoCarritoService]
})
export class HomeComponent implements OnInit {
  
  public user: User;
  public productos: Producto[];
  public url: string;
  public producto: Producto;
  public productoCarrito: ProductoCarrito;
  public productoId;
  public status;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _productoService:ProductoService,
    private _productoCarritoService:ProductoCarritoService
  ){
      this.url = globalCompras.url;
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this._productoService.getProductos().subscribe(
      response => {
        if(response.productos){
          this.productos = response.productos;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(form){
    var datos = {
      cantidad: this.productoCarrito.cantidad,
      idProducto : this.productoId,
      idUser: JSON.parse(this.user.id)
    }

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
