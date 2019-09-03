import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../model/Note';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private ownerResource = 'http://localhost:8080/api/owner';
  private readonly API_URL = 'http://localhost:8080/api/owner/create-note';

  constructor(private http: HttpClient) {
  }

  createNote(data: Partial<Note>): Observable<Note> {
    return this.http.post<Note>(`${this.API_URL}`, data);
  }

  getNoteInfoById(id: number): Observable<any> {
    return this.http.get(this.ownerResource + '/note' + '/' + id);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(this.ownerResource + '/' + id);
  }

  updateNote(id: number, data: Partial<Note>): Observable<Note> {
    return this.http.put<Note>(this.ownerResource + '/notes' + id, data);
  }

  getListNotesByUser(): Observable<any> {
    return this.http.get<any>(this.ownerResource + '/notes' + '/all');
  }
}
