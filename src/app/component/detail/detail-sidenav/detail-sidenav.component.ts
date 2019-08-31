import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {NoteService} from '../../../service/note.service';

@Component({
  selector: 'app-detail-sidenav',
  templateUrl: './detail-sidenav.component.html',
  styleUrls: ['./detail-sidenav.component.scss']
})
export class DetailSidenavComponent implements OnInit {
  note = {
    title: 'Untitled',
    content: 'Write content...'
  };

  constructor(private userService: UserService, private noteService: NoteService) {
  }

  ngOnInit() {
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
