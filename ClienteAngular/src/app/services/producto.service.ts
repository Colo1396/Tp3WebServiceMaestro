import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { globalCompras } from './global';

@Injectable()
export class ProductoService{

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

    getProductos():Observable<any>{
        return this._http.get(this.url+'productos');
    }

    getProducto(productoId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());
        console.log(productoId);

        return this._http.get(this.url+'producto/'+productoId, {headers: headers});
    }

}