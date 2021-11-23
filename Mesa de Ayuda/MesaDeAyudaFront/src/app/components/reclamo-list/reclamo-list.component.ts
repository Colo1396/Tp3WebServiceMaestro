import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamo } from 'src/app/interfaces/reclamo';
import { ReclamoService } from 'src/app/services/reclamo.service';

@Component({
  selector: 'app-reclamo-list',
  templateUrl: './reclamo-list.component.html',
  styleUrls: ['./reclamo-list.component.css']
})
export class ReclamoListComponent implements OnInit {

  reclamos: Reclamo[] = [];
  selectedEstado: string = "todos";

  constructor(
    private reclamoService: ReclamoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReclamos();
    console.log( this.reclamos);
  }

  getReclamos(){
    this.reclamoService.getAll().subscribe(r =>{
      console.log(this.reclamos);
      return this.reclamos.push(r);
    });
  }

  onSumbitEstado(){
    console.log(this.selectedEstado);
      return this.reclamoService.getAllByEstado(this.selectedEstado).subscribe(r => {
        this.reclamos = r; //filtro las nuevas denuncias en base a su estado
        console.log(this.reclamos);
        this.router.navigate(['/reclamosLista']);
      });
    }

    onSumbitAceptarReclamo(idReclamo: string){
      const id = parseInt(idReclamo);
      this.reclamoService.aceptarReclamo(id).subscribe( ()=>{
        for (let index = 0; index < this.reclamos.length; index++) {
          if( this.reclamos[index].id === id ){
              this.reclamos[index].estado = "resuelto";
          }
        }
        this.router.navigate(['/reclamosLista']);
      });
    }

    onSumbitRechazaReclamo(idReclamo: string){
      const id = parseInt(idReclamo);
      this.reclamoService.rechazarReclamo(id).subscribe( () =>{
        for (let index = 0; index < this.reclamos.length; index++) {
          if( this.reclamos[index].id === id ){
              this.reclamos.splice(index,1) ;
          }
        }
        this.router.navigate(['/reclamosLista']);
      });
    }

}
