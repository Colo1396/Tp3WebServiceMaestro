import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from './interfaces/user';
import { AuthService } from './services/auth-service.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user?: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(){
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
      ).subscribe(e => {
        if(this.authService.currentUserValue){
          this.getUser();
        }
      });
  }

  getUser(){
    this.userService.getOne().subscribe(user => this.user = user);
  }

  loggedIn(){
    return this.authService.currentUserValue;
  }

  logout(){
    return this.authService.logout();
  }
}
