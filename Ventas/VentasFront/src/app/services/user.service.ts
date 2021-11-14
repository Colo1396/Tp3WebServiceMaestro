import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CuentaBancaria } from '../interfaces/cuentaBancaria';
import { User } from '../interfaces/user';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serviceUrl: string = environment.apiUrl + '/users'

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getOne(){
    return this.http.get<User>(this.serviceUrl + '/' + this.authService.currentUserValue.id);
  }

  update(user: User, cuentaNueva?: CuentaBancaria){
    const updatedUser = Object.assign({}, user, { cuentaNueva: cuentaNueva});
    console.log(updatedUser);
    return this.http.put<User>(this.serviceUrl, updatedUser);
  }
}
