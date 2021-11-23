import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
  providers: [UserService, ProductoService]
})
export class ProductoListComponent implements OnInit {

  public productos: Producto[];
  public url: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _productoService:ProductoService,
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

}
