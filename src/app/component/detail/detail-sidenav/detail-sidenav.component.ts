import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {NoteService} from '../../../service/note.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Note} from '../../../model/Note';

@Component({
  selector: 'app-detail-sidenav',
  templateUrl: './detail-sidenav.component.html',
  styleUrls: ['./detail-sidenav.component.scss']
})
export class DetailSidenavComponent implements OnInit {
  createNoteForm: FormGroup;
  note: Partial<Note>;

  constructor(private userService: UserService, private noteService: NoteService) {
  }

  ngOnInit() {
    this.createNoteForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    });
    this.note = {
      title: 'Untitled',
      content: ''
    };
  }

  signout() {
    return this.userService.signout();
  }

  createNote() {
    this.noteService.createNote(this.note).subscribe(
      data => {
        console.log('succsess');
      },
      error => {
        console.log('error');
      }
    );
  }

}
