import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {NoteService} from '../../../service/note.service';
import {Note} from '../../../model/Note';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-sidenav',
  templateUrl: './detail-sidenav.component.html',
  styleUrls: ['./detail-sidenav.component.scss']
})
export class DetailSidenavComponent implements OnInit {
  note: Partial<Note>;
  url = 'assets/js/sidenav.js';
  loadAPI;
  checkUserName: boolean;
  username: string;

  constructor(private userService: UserService, private noteService: NoteService, private router: Router) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.note = {
      title: '',
      content: ''
    };
    this.loadAPI = new Promise(resolve => {
      console.log('resolving promise...');
      this.loadScript();
    });
  }

  signout() {
    return this.userService.signout();
  }

  public loadScript() {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  onSubmit() {
    console.log(this.note);
    this.noteService.createNote(this.note).subscribe(
      data => {
        console.log('succsess');
        window.location.reload();
      },
      error => {
        console.log('error');
      }
    );
  }

  onUserName() {
    this.checkUserName = true;
  }

  offUserName() {
    this.checkUserName = false;
  }
}
