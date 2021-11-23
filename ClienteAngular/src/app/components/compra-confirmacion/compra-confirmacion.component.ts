import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Compra } from '../../models/compra';
import { CompraService } from '../../services/compra.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-compra-confirmacion',
  templateUrl: './compra-confirmacion.component.html',
  styleUrls: ['./compra-confirmacion.component.css'],
  providers: [UserService, CompraService]
})
export class CompraConfirmacionComponent implements OnInit {

  public user: User;
  public compra:Compra;
  public compraId;
  public identity;
  public token;
  public url: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _compraService:CompraService
  ){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = JSON.parse(this.identity);
      this.url = globalCompras.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.compraId = params['compraId'];
    });
  }
}
