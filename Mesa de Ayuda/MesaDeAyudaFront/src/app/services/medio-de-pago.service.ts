import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MedioDePago } from '../interfaces/medioDePago';

@Injectable({
  providedIn: 'root'
})
export class MedioDePagoService {
  serviceUrl: string = environment.apiUrl + '/mediosDePago';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<MedioDePago[]>(this.serviceUrl);
  }
}
