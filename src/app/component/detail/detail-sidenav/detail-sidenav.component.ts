import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-sidenav',
  templateUrl: './detail-sidenav.component.html',
  styleUrls: ['./detail-sidenav.component.scss']
})
export class DetailSidenavComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
