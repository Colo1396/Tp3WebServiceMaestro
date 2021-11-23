import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Denuncia } from '../interfaces/denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  serviceUrl: string = environment.apiUrl + '/denuncias/'

  constructor(
    private http: HttpClient
  ) {}

  getAll(){
    return this.http.get<Denuncia>(this.serviceUrl + 'lista');
  }

  getAllByEstado(estado: string){
    return this.http.post<Denuncia[]>(this.serviceUrl+ 'listaPorEstado', estado );
  }

  create(denuncia: FormData){
    return this.http.post<Denuncia>(this.serviceUrl + 'nuevaPost', denuncia);
  }

  aceptarDenuncia(idDenuncia: number ){
    return this.http.post<Denuncia>( this.serviceUrl + 'aceptar/' + idDenuncia, idDenuncia );
  }

  rechazarDenuncia(idDenuncia: number){
    return this.http.post<Denuncia>( this.serviceUrl + 'rechazar/' + idDenuncia , idDenuncia );
  }

}
