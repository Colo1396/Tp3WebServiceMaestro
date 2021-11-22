import { Component, Input, OnInit } from '@angular/core';
import { MedioDePago } from 'src/app/interfaces/medioDePago';
import { Producto } from 'src/app/interfaces/producto';
import { MedioDePagoService } from 'src/app/services/medio-de-pago.service';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  @Input()
  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    cantidadVentas: 0,
    mediosDePago: []
  };
  mediosDePago: MedioDePago[] = []
  editMode: boolean = false;
  loading: boolean = false;
  imagen: Blob | null = null;
  imagePath: any; 

  constructor(
    private productoService: ProductoService,
    private medioDePagoService: MedioDePagoService
  ) { }

  ngOnInit(): void {
    this.getMediosDePago();
    this.imagePath = this.producto.imagen;
  }

  getMediosDePago(){
    this.medioDePagoService.getAll().subscribe(mps => {
      console.log(mps);
      console.log(this.producto);
      this.mediosDePago = mps;
      this.mediosDePago.forEach(mp => {
        if(this.producto.mediosDePago.some(mp2 => mp2.id == mp.id)){
          mp.selected = true;
        }
      });
    });
  }

  updateProducto(){
    this.loading = true;

    const formData = new FormData();
    formData.append('id', this.producto.id.toString());
    formData.append('nombre', this.producto.nombre);
    formData.append('descripcion', this.producto.descripcion);
    formData.append('precio', this.producto.precio.toString());
    formData.append('stock', this.producto.stock.toString());
    if(this.imagen) formData.append('imagen', this.imagen);

    this.mediosDePago.forEach(mp => {
      if(mp.selected) formData.append('mediosDePago[]', mp.id.toString());
    });

    this.productoService.update(formData).subscribe(producto => {
      this.loading = false;
      this.editMode = false;
      this.producto = producto;
      this.producto.mediosDePago = this.mediosDePago.filter(mp => mp.selected);
    });
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
}
