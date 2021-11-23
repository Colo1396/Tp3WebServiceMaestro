import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  serviceUrl: string = environment.apiUrl + '/categorias'

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<Categoria[]>(this.serviceUrl);
  }
}
