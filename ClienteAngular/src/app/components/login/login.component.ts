import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //especifico el providers
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;
  public status:string;
  public identity; //para guardar el usuario identificado
  public token; 
  
  constructor(private _userService:UserService,
    private _router: Router, 
    private _route: ActivatedRoute) {
    this.user = new User('', '', '', 'ROLE_COMPRADOR', '','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.user);
    //Primero obtengo el usuario logueado
    this._userService.login(this.user).subscribe(
      response => {
        console.log(response);

        if(response.userExistente.user.username && response.userExistente.user.id){
          //Se guarda el usuario en una propiedad para guardarlo en el local storage
          this.identity = response.userExistente.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));

          //Obtener token del usuario
          this._userService.login(this.user, true).subscribe(
            response => {
              if(response.token){
                console.log(response);
                
                //Guardo el token del usuario
                this.token = response.token;
                localStorage.setItem('token', this.token);
                
                this.status = 'success';
                this._router.navigate(['/inicio']);

              }else{
                this.status = 'error';
              }
            },
            error => {
              this.status = 'error';
              console.log(error);
            }
          );

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
