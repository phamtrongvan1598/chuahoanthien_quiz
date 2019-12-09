import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KindOfQuestion} from '../model/kind-of-question';

@Injectable({
  providedIn: 'root'
})
export class KindOfQuestionService {
  private readonly CREATE_KINDOFQUESTION = 'http://localhost:8080/api/owner/kindOfQuestions';

  constructor(private http: HttpClient) { }
  getallKindOfQuetion(): Observable<KindOfQuestion[]> {
    return this.http.get<KindOfQuestion[]>(this.CREATE_KINDOFQUESTION);
  }
  createKindOfQuestion(kindOfQuestion: KindOfQuestion): Observable<KindOfQuestion> {
    console.log(kindOfQuestion);
    return this.http.post<KindOfQuestion>(this.CREATE_KINDOFQUESTION, kindOfQuestion);
  }
  getKindOfQuestionById(id: number): Observable<KindOfQuestion> {
    return this.http.get<KindOfQuestion>(this.CREATE_KINDOFQUESTION + `/${id}`);
  }
}
