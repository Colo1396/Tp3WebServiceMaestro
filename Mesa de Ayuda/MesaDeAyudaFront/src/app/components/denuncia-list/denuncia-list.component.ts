import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Denuncia } from 'src/app/interfaces/denuncia';
import { DenunciaService } from 'src/app/services/denuncia.service';

@Component({
  selector: 'app-denuncia-list',
  templateUrl: './denuncia-list.component.html',
  styleUrls: ['./denuncia-list.component.css'],
})

export class DenunciaListComponent implements OnInit {
  denuncias: Denuncia[] = [];
  selectedEstado: string = "todos";

  constructor(
    private denunciaService: DenunciaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDenuncias();
    console.log( this.denuncias);
  }

  getDenuncias(){
    this.denunciaService.getAll().subscribe(denuncias =>{
      console.log(this.denuncias);
      return this.denuncias.push(denuncias);
    });
  }

  onSumbitEstado(){
    console.log(this.selectedEstado);
      return this.denunciaService.getAllByEstado(this.selectedEstado).subscribe(denuncias => {
        this.denuncias = denuncias; //filtro las nuevas denuncias en base a su estado
        console.log(this.denuncias);
        this.router.navigate(['/denunciasLista']);
      });
    }

    onSumbitAceptarDenuncia(idDenuncia: string){
      const id = parseInt(idDenuncia);
      this.denunciaService.aceptarDenuncia(id).subscribe( ()=>{
        for (let index = 0; index < this.denuncias.length; index++) {
          if( this.denuncias[index].id === id ){
              this.denuncias[index].estado = "resuelto";
          }
        }
        this.router.navigate(['/denunciasLista']);
      });
    }

    onSumbitRechazarDenuncia(idDenuncia: string){
      const id = parseInt(idDenuncia);
      this.denunciaService.rechazarDenuncia(id).subscribe( () =>{
        for (let index = 0; index < this.denuncias.length; index++) {
          if( this.denuncias[index].id === id ){
              this.denuncias.splice(index,1) ;
          }
        }
        this.router.navigate(['/denunciasLista']);
      });
    }

}
