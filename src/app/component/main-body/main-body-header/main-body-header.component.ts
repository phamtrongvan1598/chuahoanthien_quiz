import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-main-body-header',
  templateUrl: './main-body-header.component.html',
  styleUrls: ['./main-body-header.component.scss']
})
export class MainBodyHeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
