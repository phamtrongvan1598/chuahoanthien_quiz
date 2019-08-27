import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {SigninInfoService} from '../../auth/signin-info.service';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  // private loginInfo: SigninInfoService;
  // isLoginFailed = false;
  // errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router, private tokenStorage: TokenStorageService) {
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
        localStorage.setItem('token', next.token);
        localStorage.setItem('username', next.username);
        this.authService.token = next.token;
        this.authService.header = new HttpHeaders(
          {
            Authorization: `Bearer ${this.authService.token}`,
            'Content-Type': 'application/json'
          }
        );
        if (next.token) {
          this.router.navigateByUrl('');
        }
        console.log(next.token);
      }
    );
  }
}


// import {Component, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
// import {SigninInfoService} from '../../auth/signin-info.service';
// import {AuthService} from '../../auth/auth.service';
// import {TokenStorageService} from '../../auth/token-storage.service';
//
// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.scss']
// })
// export class SigninComponent implements OnInit {
//   form: any = {};
//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   role: string;
//   private loginInfo: SigninInfoService;
//
//   constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
//   }
//
//   ngOnInit() {
//     if (this.tokenStorage.getToken()) {
//       this.isLoggedIn = true;
//       this.role = this.tokenStorage.getAuthority();
//     }
//   }
//
//   onSubmit() {
//     this.loginInfo = new SigninInfoService(
//       this.form.username,
//       this.form.password);
//
//     this.authService.attemptAuth(this.loginInfo).subscribe(
//       data => {
//         this.tokenStorage.saveToken(data.accessToken);
//         this.tokenStorage.saveUsername(data.username);
//         this.tokenStorage.saveAuthority(data.authority);
//         this.tokenStorage.saveAvatarLink(data.avatarLink);
//         this.isLoginFailed = false;
//         this.isLoggedIn = true;
//         console.log(data.accessToken);
//         this.role = this.tokenStorage.getAuthority();
//         this.router.navigate(['']);
//         console.log('success');
//         this.reloadPage();
//       },
//       error => {
//         this.errorMessage = error.error.message;
//         this.isLoginFailed = true;
//       }
//     );
//   }
//
//   reloadPage() {
//     window.location.reload();
//   }
// }
