import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/producto';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private serviceUrl = environment.apiUrl + '/productos';

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  create(producto: FormData){
    return this.http.post<Producto>(this.serviceUrl, producto);
  }

  getAll(){
    return this.http.get<Producto[]>(this.serviceUrl + '?vendedor=' + 
      this.authService.currentUserValue.id + '&sinstock=true');
  }

  update(producto: FormData){
    return this.http.put<Producto>(this.serviceUrl + '/' + producto.get('id'), producto);
  }
}
