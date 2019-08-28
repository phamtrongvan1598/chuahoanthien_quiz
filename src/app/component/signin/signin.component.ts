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
  isSignedIn = false;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login() {
    console.log('Log in');
    console.log(JSON.stringify(this.signinForm.value));
    this.authService.login(this.signinForm.value).subscribe(
      next => {
        localStorage.setItem('token', next.accessToken);
        localStorage.setItem('username', next.username);
        this.authService.token = next.token;
        this.authService.header = new HttpHeaders(
          {
            Authorization: `Bearer ${this.authService.token}`,
            'Content-Type': 'application/json'
          }
        );
        if (next.accessToken) {
          this.isSignedIn = true;
          this.router.navigateByUrl('/api/owner/notes');
        }
        console.log(next.accessToken);
      }
    );
  }
}
