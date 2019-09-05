import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NoteService} from '../../../service/note.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Note} from '../../../model/Note';
import {StandardRespond} from '../../../model/StandardRespond';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-detail-main-body',
  templateUrl: './detail-main-body.component.html',
  styleUrls: ['./detail-main-body.component.scss']
})
export class DetailMainBodyComponent implements OnInit, OnChanges {
  noteDetail: StandardRespond;
  updateForm: FormGroup;
  note: Note;
  id: number;

  constructor(private noteService: NoteService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(queryParams => {
      console.log('this.route.queryParams.subscribe', queryParams);
      this.id = queryParams.id;
      this.listNoteDetailById(this.id);
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.listNoteDetailById(id);
    this.updateForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:changes', changes);
    if ('id' in changes) {
      this.listNoteDetailById(this.id);
    }
  }

  listNoteDetailById(id: number) {
    console.log('listNoteDetailById', id);
    this.noteService.getNoteInfoById(id).subscribe(data => {
        this.noteDetail = {};
        this.noteDetail.data = {
          content: data.content, id: data.id, title: data.title
        };
        console.log('success');
      },
      error => {
        console.log(error);
      });
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const {title, content} = this.updateForm.controls; // destructuring assignment
    const note: Note = {
      id,
      title: title.value,
      content: content.value,
    };
    this.noteService.updateNote(id, note).subscribe(data => {
        console.log('success', data);
        this.noteService.onNoteUpdate.next(id);
      },
      error => {
        console.log(error);
      });
  }

  deleteNote() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.deleteNote(id).subscribe(data => {
        console.log('success');
        window.location.replace('api/owner');
      },
      error => {
        console.log(error);
      });
  }
}
