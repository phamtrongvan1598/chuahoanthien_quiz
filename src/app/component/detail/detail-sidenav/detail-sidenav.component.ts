import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {NoteService} from '../../../service/note.service';
import {Note} from '../../../model/Note';

@Component({
  selector: 'app-detail-sidenav',
  templateUrl: './detail-sidenav.component.html',
  styleUrls: ['./detail-sidenav.component.scss']
})
export class DetailSidenavComponent implements OnInit {
  note: Partial<Note>;

  constructor(private userService: UserService, private noteService: NoteService) {
  }

  ngOnInit() {
    this.note = {
      title: 'Untitled',
      content: 'Write content...'
    };
  }

  signout() {
    return this.userService.signout();
  }

  onSubmit() {
    console.log(this.note);
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
