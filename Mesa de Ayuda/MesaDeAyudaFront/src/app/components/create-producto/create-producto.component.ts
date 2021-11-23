import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { MedioDePago } from 'src/app/interfaces/medioDePago';
import { Producto } from 'src/app/interfaces/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MedioDePagoService } from 'src/app/services/medio-de-pago.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {
  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    cantidadVentas: 0,
    mediosDePago: []
  };
  imagen?: any;
  imagePath?: any;
  loading: boolean = false;
  categorias: Categoria[] = [];
  selectedCategoria: number = 1;

  constructor(
    private productoService: ProductoService,
    private medioDePagoService: MedioDePagoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMedioDePagos();
    this.getCategorias();
  }

  getMedioDePagos(){
    this.medioDePagoService.getAll().subscribe(mp => this.producto.mediosDePago = mp);
  }

  getCategorias(){
    this.categoriaService.getAll().subscribe(categorias => this.categorias = categorias);
  }

  previewImage(event: any): void{
    const file = event.target.files[0];
    this.imagen = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.imagePath = reader.result;
    }
  }

  selectMP(mp: MedioDePago): void{
    mp.selected = !mp.selected;
  }

  onSubmit(){
    this.loading = true;

    const formData = new FormData();
    formData.append('id', this.producto.id.toString());
    formData.append('nombre', this.producto.nombre);
    formData.append('descripcion', this.producto.descripcion);
    formData.append('precio', this.producto.precio.toString());
    formData.append('stock', this.producto.stock.toString());
    formData.append('cantidadVentas', this.producto.cantidadVentas.toString());
    formData.append('idCategoria', this.selectedCategoria.toString());
    formData.append('imagen', this.imagen);

    this.producto.mediosDePago.forEach(mp => {
      if(mp.selected){
        formData.append('mediosDePago[]', mp.id.toString());
      }
    });

    this.productoService.create(formData).subscribe(producto => {
      this.router.navigate(['/products']);
    });
  }
}
