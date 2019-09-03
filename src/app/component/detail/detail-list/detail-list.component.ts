import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../../service/note.service';
import {Note} from '../../../model/Note';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit {
  notes: Note[];

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.listAllNotesByUser();
  }

  listAllNotesByUser() {
    this.noteService.getListNotesByUser().subscribe(data => {
        console.log('succsess');
        this.notes = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
