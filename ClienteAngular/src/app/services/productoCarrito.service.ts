import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoCarrito } from '../models/productoCarrito';
import { globalCompras } from './global';

@Injectable()
export class ProductoCarritoService{

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

    getUsers():Observable<any>{
        return this._http.get(this.url+'users');
    }

    //AGREGAR PRODUCTO AL CARRITO
    addProductoCarrito(productoCarrito): Observable<any>{
        let params = JSON.stringify(productoCarrito);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());
        return this._http.post(this.url+'addProductoCarrito', params, {headers: headers});
    }

}