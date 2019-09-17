import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/api/auth/signin';
  private readonly RESET_PASSWORD_API_URL = 'http://localhost:8080/api/auth/reset-password';
  token: string;
  username: string;
  header: HttpHeaders;

  authenticate(user): Observable<any> {
    return this.httpClient.post<any>(this.API_URL, user);
  }

  signin(signinForm: FormGroup): Observable<any> {
    return this.httpClient.post(this.API_URL, JSON.stringify(signinForm), httpOptions);
  }

  resetPassword(resetPasswordForm: FormGroup): Observable<any> {
    return this.httpClient.post(this.RESET_PASSWORD_API_URL, JSON.stringify(resetPasswordForm), httpOptions);
  }

  constructor(private httpClient: HttpClient) {
    this.token = localStorage.getItem('token');
    this.username = localStorage.getItem('username');
    console.log(this.username);
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })
    ;
  }


}
