import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reclamo } from '../interfaces/reclamo';

@Injectable({
  providedIn: 'root'
})
export class ReclamoService {
  serviceUrl: string = environment.apiUrl + '/reclamos/'

  constructor(
    private http: HttpClient
  ) {}

  getAll(){
    return this.http.get<Reclamo>(this.serviceUrl + 'lista');
  }

  getAllByEstado(estado: string){
    return this.http.post<Reclamo[]>(this.serviceUrl+ 'listaPorEstado', estado );
  }

  create(reclamo: FormData){
    return this.http.post<Reclamo>(this.serviceUrl + 'nuevoPost', reclamo);
  }

  aceptarReclamo(idRelclamo: number){
    return this.http.post<Reclamo>( this.serviceUrl + 'aceptar/' + idRelclamo, idRelclamo );
  }

  rechazarReclamo(idRelclamo: number){
    return this.http.post<Reclamo>( this.serviceUrl + 'rechazar/' + idRelclamo, idRelclamo );
  }

}
