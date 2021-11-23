import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Compra } from '../../models/compra';
import { CompraService } from '../../services/compra.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css'],
  providers: [UserService, CompraService]

})
export class CompraListComponent implements OnInit {

  public user: User;
  public compras: Compra[];
  public identity;
  public token;
  public status;
  public url: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _compraService:CompraService,
  ){
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = JSON.parse(this.identity);
      this.url = globalCompras.url;
  }

  ngOnInit(): void {
    this.getCompras(this.user.id);
  }

  getCompras(userId){
    this._compraService.getCompras(userId).subscribe(
      response => {
        console.log(response);
        if(response.compras){
          this.compras = response.compras;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}