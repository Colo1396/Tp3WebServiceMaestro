import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra';
import { globalCompras } from './global';

@Injectable()
export class CompraService{

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

    getCompras(userId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());
        return this._http.get(this.url+'compras/'+userId, {headers: headers});
    }

    getCompra(compraId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());
                                        console.log("antes de enviar");

        return this._http.get(this.url+'compra/'+compraId, {headers: headers});
    }

    //EFECTUAR COMPRA
    pagar(compra): Observable<any>{
        let params = JSON.stringify(compra);
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());
        console.log("antes de enviar");
        return this._http.post(this.url+'compra/new', params, {headers: headers});
    }

    getCarritoCompra(compraId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', this.getToken());
        return this._http.get(this.url+'compra/'+compraId, {headers: headers});
    }

    
}