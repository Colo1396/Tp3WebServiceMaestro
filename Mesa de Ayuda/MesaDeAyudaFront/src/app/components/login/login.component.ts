import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    password: ''
  };
  loading: boolean = false;
  returnUrl: string = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(){
    this.loading = true;
    this.authService.login(this.user.username, this.user.password!)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate([this.returnUrl])
      });
  }
}
