import {Component, OnInit, ViewChild} from '@angular/core';
import {NoteService} from '../../../service/note.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-groupview',
  templateUrl: './detail-groupview.component.html',
  styleUrls: ['./detail-groupview.component.scss']
})
export class DetailGroupviewComponent implements OnInit {


  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit() {
  }

}
