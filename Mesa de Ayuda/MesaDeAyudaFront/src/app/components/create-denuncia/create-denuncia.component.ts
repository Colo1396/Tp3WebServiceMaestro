import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Denuncia } from 'src/app/interfaces/denuncia';
import { CategoriaDenuncia } from 'src/app/interfaces/categoriaDenuncias';

import { DenunciaService } from 'src/app/services/denuncia.service';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-create-denuncia',
  templateUrl: './create-denuncia.component.html',
  styleUrls: ['./create-denuncia.component.css']
})
export class CreateDenunciaComponent implements OnInit {
  denuncia: Denuncia = {
    id: 0,
    categoria: '',
    estado: '',
    comentario: '',
    productoId: 0,
    userId: 0
  }
  categorias: CategoriaDenuncia[] = [];
  selectedCategoria: number = 1;
  categoriaElegida: string = "falsificación";

  constructor(
    private router: Router,
    private authService: AuthService ,
    private denunciaService: DenunciaService,
  ) {}

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(){
    this.categorias.push({
      id: 1,
      nombre: 'falsificación'
    },{
      id: 2,
      nombre: 'producto ilegal'
    },{
      id: 3,
      nombre: 'fraude'
    },{
      id: 4,
      nombre: 'contenido inapropiado'
    },
    )
  }

  onSubmit(){
    for (let index = 0; index < this.categorias.length; index++) {
      if(this.selectedCategoria === this.categorias[index].id)  this.categoriaElegida = this.categorias[index].nombre;
    }

    const formData = new FormData();
    formData.append('id', this.denuncia.id.toString());
    formData.append('categoria', this.categoriaElegida);
    formData.append('estado', this.denuncia.estado);
    formData.append('comentario', this.denuncia.comentario);
    formData.append('productoId', this.denuncia.productoId.toString());
    formData.append('idUsuario', this.authService.currentUserValue.id.toString());

    this.denunciaService.create(formData).subscribe(d =>{
      this.router.navigate(['/']);
    });

  }

}
