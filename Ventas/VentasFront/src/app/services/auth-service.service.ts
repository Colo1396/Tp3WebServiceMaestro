import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serviceUrl = environment.apiUrl + '/users';
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value!;
  }

  login(username: string, password: string){
    return this.http.post<User>(this.serviceUrl + '/login', { username:username, password:password})
      .pipe(
        map(
          (res) => {
            localStorage.setItem('currentUser', JSON.stringify(res));
            this.currentUserSubject.next(res);
            return res;
          }
        )
      );
  }

  register(user: User){
    return this.http.post<User>(this.serviceUrl + '/register', user);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
