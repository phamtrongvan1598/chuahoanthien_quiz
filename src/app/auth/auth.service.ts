import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtResponse} from './jwt-response';
import {SigninInfoService} from './signin-info.service';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signinUrl = '/api/auth/signin';
  private signupUrl = '/api/auth/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: SigninInfoService): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.signinUrl, credentials, httpOption);
  }

  signUp(info: FormData): Observable<any> {
    return this.http.post(this.signupUrl, info);
  }
}
