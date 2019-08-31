import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: 'http://localhost:8080/api/login'; // 'api/login;
  errorMsg: any;
  private _loggedInUser?: User;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get loggedInUser(): User {
    return this.loggedInUser;
  }

  set loggedInUser(user: User) {
    this.loggedInUser = user;
  }

  getHeaders(): {headers: HttpHeaders} {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json'
        }
      )
    };
    return httpOptions;
  }

  public login(username: string, password: string) {
    // const headers = new HttpHeaders().set('Content-type','application/json');
    return this.http.post<User>(this.authUrl, JSON.stringify({username: username, password: password}), this.getHeaders())
    .pipe(
      tap (
        (user: User) => {
          if (user) {
            localStorage.setItem('accessToken', user.token);
            console.log(`Logged in username=${username} with password${password} successfully`);
          // console.log('YiPPPeeeYYaaaYYYYYYYYYKIAAAYyyyyy');
          } else {

            console.log(`Login failed for username=${username} with password${password}`);
          }
        }
      )
    );
  }

   logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['sign-in']);
  }
}
