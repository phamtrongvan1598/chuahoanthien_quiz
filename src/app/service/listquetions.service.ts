import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {User} from '../model/User';
import {HttpClient} from '@angular/common/http';
import {Questions} from '../model/questions';

@Injectable({
  providedIn: 'root'
})
export class ListquetionsService {
  private API_URL = environment.URL + '/api/auth/user';
  constructor(private  http: HttpClient) { }
  authenticate(question): Observable<any> {
    return this.http.post<any>(this.API_URL, question );
  }

  addQuestion(questions: Questions): Observable<Questions> {
    return this.http.post<Questions>(this.API_URL, questions);
  }

}
