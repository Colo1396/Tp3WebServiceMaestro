import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit, DoCheck {
  public title = 'Compras-cliente-angular';
  public identity;
  public token;

  constructor(private _userService : UserService,
    private _router: Router,
    private _route: ActivatedRoute){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(){
    console.log(this.identity);
    console.log(this.token);
  }

  //Para que se actualice el contenido sin tener que recargar la página al eliminar el user
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  //CERRAR SESIÓN
  logout(){
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/login']);
  }
}
