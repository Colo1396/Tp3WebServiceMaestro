import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { globalCompras } from './global';

@Injectable()
export class UserService{

    //propiedad
    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient){
        this.url = globalCompras.url;
    }

    prueba(){
        return "Llegó a User Service";
    }

    //REGISTRO
    register(user): Observable<any>{
        //Convertir el objeto del usuario a un json string
        let params = JSON.stringify(user);

        //Definir las cabeceras
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        //Hacer peticion ajax
        console.log(this.url);
        return this._http.post(this.url+'register', params, {headers: headers});
    }

    //LOGIN
    login(user, gettoken = null): Observable<any>{
        //Comprobar si llega gettoken
        if(gettoken != null){
            user.gettoken = gettoken;
        }

        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'login', params, {headers: headers});
    }

    //Obtener los datos del Local Storage
    getIdentity(){
        let identity = JSON.parse(JSON.stringify(localStorage.getItem('identity')));

        if(identity && identity != null && identity != undefined && identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;
        
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


}