import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {UserService} from '../../../service/user.service';

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

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  signout() {
    return this.userService.signout();
  }

  close(reason: string) {
    this.sidenav.close();
  }

}
