import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  resetPassword() {
    this.authService.resetPassword(this.resetPasswordForm.value).subscribe(data => {
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('email', data.email);
      this.authService.token = data.token;
      this.authService.header = new HttpHeaders({
        Authorization: `Bearer ${this.authService.token}`,
        'Content-Type': 'application/json'
      });
      if (data.accessToken) {
        this.router.navigateByUrl('/api/auth/login');
      }
      console.log(data.accessToken);
    });
  }
}
