import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private API_URL = environment.URL + '/api/auth/user';

  constructor(private httpClient: HttpClient) {
  }

  getAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_URL);
  }

  updateUser(user: Partial<User>): Observable<any> {
    return this.httpClient.put<any>(`${this.API_URL + '/updateCurrent'}`, user);
  }

  getUserCurrent(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL + '/Current'}`);
  }

  confirmPaswordUser(password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL + '/confirmPassword'}`, password);
  }
}
