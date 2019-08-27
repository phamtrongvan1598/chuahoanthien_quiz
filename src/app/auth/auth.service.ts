import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/api/auth/signin';
  token: string;
  header: HttpHeaders;

  login(signinForm: FormGroup): Observable<any> {
    return this.httpClient.post(this.API_URL, JSON.stringify(signinForm), httpOption);
  }

  constructor(private httpClient: HttpClient) {
    this.token = localStorage.getItem('token');
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })
    ;
  }
}
