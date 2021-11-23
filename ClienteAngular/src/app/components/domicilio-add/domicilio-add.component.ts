import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Domicilio } from '../../models/domicilio';
import { DomicilioService } from '../../services/domicilio.service';
import { globalCompras } from '../../services/global';

@Component({
  selector: 'app-domicilio-add',
  templateUrl: './domicilio-add.component.html',
  styleUrls: ['./domicilio-add.component.css'],
  providers: [UserService, DomicilioService]
})
export class DomicilioAddComponent implements OnInit {

  public user: User;
  public domicilio: Domicilio;
  public identity;
  public token;
  public status;
  public url: string;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService,
    private _domicilioService:DomicilioService,
  ) { 
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.user = JSON.parse(this.identity);
      this.url = globalCompras.url;
      this.domicilio = new Domicilio('', '', '', '', '','', JSON.parse(this.user.id));

  }
  ngOnInit(): void {
    
  }

  onSubmit(form){
    console.log(this.domicilio);
    this._domicilioService.add(this.domicilio).subscribe(
      response => {
        console.log(response);
        if(response.createdDomicilio && response.createdDomicilio.id){
          this.status = 'success';
          $(document).ready(function(){
            $('.form').trigger("reset");
          });
        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }

}