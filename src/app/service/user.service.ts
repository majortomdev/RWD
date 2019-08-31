import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/user'; // 'api/user':

  constructor(
    private http: HttpClient,
    private router: Router,
    private authSvc: AuthService
  ) { }

  getHeaders(): { headers: HttpHeaders} {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authentication' : 'bearer ' + localStorage.getItem('accessToken')
      })
    };
    return httpOptions;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl, this.getHeaders())
    .pipe (
      tap((users: User[]) => console.log(`fetched all ${users.length} users.`)),
      catchError(this.handleError('getUsers ', []))
    );
  }

  private handleError<T> (operation = 'operation' , result?: T) {
  return (error: any): Observable<T> => {
    console.error('UserSvc Error >  ' + error + ' >');

    console.log(`${operation} failed: ${error.message}`);

    if (error.status === 401) {
        this.logUserOut();
        console.log('UsrSrv: error 401');
    } else if (error.status === 403) {
      console.log('UsrSrv: error 403');
    } else if (error.status === 500) {
      console.log('UsrSrv: error 500');
      this.logUserOut();
    }

    return of(result as T);
    };
  }

  deleteUser(id: string): Observable<boolean> {
    const url = `${this.userUrl}/${id}`;
    return this.http.delete<boolean>(url, this.getHeaders())
      .pipe (
        tap (_ => console.log(`deleted user id=  ${id}`)),
        catchError(this.handleError<boolean>(`deleteUser`))
      );
  }

  logUserOut(): void {
    localStorage.removeItem('accessToken');
    this.authSvc.loggedInUser = null;
    console.log('UserSvc: LogUserOut !!');
    this.authSvc.errorMsg = 'Login token expired. Please Log in Again';
    this.router.navigate(['sign-in']);
  }
}
