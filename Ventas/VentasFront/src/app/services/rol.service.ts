import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rol } from '../interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  serviceUrl: string = environment.apiUrl + '/roles'

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<Rol[]>(this.serviceUrl);
  }
}
