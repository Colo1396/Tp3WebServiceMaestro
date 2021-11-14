import { Component, OnInit } from '@angular/core';
import { MedioDePago } from 'src/app/interfaces/medioDePago';
import { Producto } from 'src/app/interfaces/producto';
import { MedioDePagoService } from 'src/app/services/medio-de-pago.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.getAll().subscribe(productos => {
      return this.productos = productos
    });
  }
}
