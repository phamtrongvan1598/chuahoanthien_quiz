import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../../service/note.service';
import {Note} from '../../../model/Note';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit {
  note: Note;
  notes: Note[];
  updateNoteForm: FormData;

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
  }

  editNote() {
    this.noteService.updateNote(this.note.id, this.updateNoteForm).subscribe(data => {
      console.log('success');
    }, error => {
      console.log('error');
    });
  }
}
