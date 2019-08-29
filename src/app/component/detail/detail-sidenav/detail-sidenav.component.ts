import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-detail-sidenav',
  templateUrl: './detail-sidenav.component.html',
  styleUrls: ['./detail-sidenav.component.scss']
})
export class DetailSidenavComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean;
  reason = '';

  constructor() {
  }

  ngOnInit() {
  }

  close(reason: string) {
    this.sidenav.close();
  }

}
