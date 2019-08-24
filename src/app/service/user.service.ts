import {Injectable} from '@angular/core';
import {User} from '../model/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = '/api/auth/';

  constructor(private http: HttpClient) {
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, {responseType: 'text'});
  }

  register(data: FormData): Observable<any> {
    return this.http.post(this.userUrl + '/signup', data);
  }

  login(data: FormData): Observable<any> {
    return this.http.post(this.userUrl + 'signin', data);
  }

  logout(id: number): Observable<any> {
    return this.http.post(this.userUrl + 'signout', id);
  }
}
