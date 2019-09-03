import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../../service/note.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Note} from '../../../model/Note';

@Component({
  selector: 'app-detail-main-body',
  templateUrl: './detail-main-body.component.html',
  styleUrls: ['./detail-main-body.component.scss']
})
export class DetailMainBodyComponent implements OnInit {
  note: Partial<Note>;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNoteInfoById(id).subscribe(data => {
        this.note = data;
        console.log('success');
      },
      error => {
        console.log(error);
      });
  }

  editNote() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.updateNote(id, this.note).subscribe(data => {
        this.note = data;
        console.log('success');
      },
      error => {
        console.log(error);
      });
  }

}
