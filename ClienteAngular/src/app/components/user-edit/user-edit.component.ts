import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

  public user: User;
  public identity;
  public token;
  public status;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _userService:UserService
  ) { 
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      console.log(this.identity);
      this.user = JSON.parse(this.identity);
      console.log(this.user.nombre);
  }

  ngOnInit(): void {
    //console.log(this.user);
  }

  
  onSubmit(form){
    this._userService.update(this.user).subscribe(
      response => {
        if(!response.user){
          this.status = 'error';
        }else{
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    )
  }

}
