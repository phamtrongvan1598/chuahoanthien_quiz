import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../../service/note.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit {

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    return this.noteService.getListNoteByUser().subscribe(data => {
        console.log('succsess');
      },
      error => {
        console.log('error');
      });
  }
}
