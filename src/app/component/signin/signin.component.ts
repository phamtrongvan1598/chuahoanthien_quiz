import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log('Log in');
    console.log(JSON.stringify(this.signinForm.value));
    this.authService.login(this.signinForm.value).subscribe(
      next => {
        localStorage.setItem('token', next.accessToken);
        this.authService.token = next.token;
        this.authService.header = new HttpHeaders(
          {
            Authorization: `Bearer ${this.authService.token}`,
            'Content-Type': 'application/json'
          }
        );
        if (next.token) {
          this.router.navigateByUrl('/');
        }
        console.log(next.accessToken);
      }
    );
  }

}
