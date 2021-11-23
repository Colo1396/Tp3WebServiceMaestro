import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrito } from '../models/carrito';
import { globalCompras } from './global';

@Injectable()
export class CarritoService{

    //propiedad
    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient){
        this.url = globalCompras.url;
    }

    //Obtener el token del Local Storage
    getToken(){
        let token = localStorage.getItem('token');

        if(token && token != null && token != undefined && token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }
        return this.token;
    }

    getCarritos(userId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());
        return this._http.get(this.url+'carritos/'+userId, {headers: headers});
    }

    getCarrito(carritoId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());
        return this._http.get(this.url+'carrito/'+carritoId, {headers: headers});
    }
}