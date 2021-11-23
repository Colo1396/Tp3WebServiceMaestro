import { Component, OnInit } from '@angular/core';

//importo el Modelo User
import { User } from '../../models/user';

//import el userService
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;

  constructor(private _userService: UserService) { 
    this.page_title = 'Registro';
    this.user = new User('', '', '', '', '','','', '');
  }

  ngOnInit(): void {
    console.log(this._userService.prueba());
  }

  onSubmit(form){
    console.log(this.user);
    this._userService.register(this.user).subscribe(
      response => {
        if(response.user && response.user.id){
          this.status = 'success';
          $(document).ready(function(){
            $('.form').trigger("reset");
          });
        }else{
          this.status = 'error';
        }
      },
      error =>{
        console.log(error);
      }
    )
  }

}
