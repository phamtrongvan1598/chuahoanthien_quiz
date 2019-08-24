import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private ownerResource = '/api/owner';

  constructor(private http: HttpClient) {
  }

  createNote(data: FormData): Observable<any> {
    return this.http.post(this.ownerResource + '/create-note', data);
  }

  getAllNotes(): Observable<any> {
    return this.http.get<any>(this.ownerResource + '/notes');
  }

  getNoteInfoById(id: number): Observable<any> {
    return this.http.get(this.ownerResource + '/notes' + '/' + id);
  }
  deleteNote(id: number): Observable<any> {
    return this.http.delete(this.ownerResource + '/' + id);
  }
  updateNote(id: number, note: FormData): Observable<any> {
    return this.http.put<any>(this.ownerResource + '/' + id, note);
  }
}
