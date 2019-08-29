import {Component, OnInit} from '@angular/core';
import {SigninComponent} from '../signin/signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // isSignedIn: boolean;


  constructor() {
  }

  ngOnInit() {
    // this.isSignedIn = this.signin.isSignedIn;
  }
}

