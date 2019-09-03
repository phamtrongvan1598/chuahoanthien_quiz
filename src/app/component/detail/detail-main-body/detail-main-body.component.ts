import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../../service/note.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Note} from '../../../model/Note';
import {StandardRespond} from '../../../model/StandardRespond';

@Component({
  selector: 'app-detail-main-body',
  templateUrl: './detail-main-body.component.html',
  styleUrls: ['./detail-main-body.component.scss']
})
export class DetailMainBodyComponent implements OnInit {
  noteDetail: StandardRespond;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNoteInfoById(id).subscribe(data => {
        this.noteDetail = data;
        this.noteDetail.data = {
          content: data.content, id: data.id, title: data.title

        };
        console.log('success');
      },
      error => {
        console.log(error);
      });
  }

  deleteNote() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.deleteNote(id).subscribe(data => {
        console.log('success');
      },
      error => {
        console.log(error);
      });
  }
}
