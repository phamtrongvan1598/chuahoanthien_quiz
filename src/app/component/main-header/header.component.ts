import {Component, OnInit} from '@angular/core';
import {SignupInfoService} from '../../auth/signup-info.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // form: any = {};
  // isLoggedIn = false;
  // isLogInFailed = false;
  // errorMessage = '';
  // role: string;
  // signupInfo: SignupInfoService;
  // isSignedUp = false;
  // isSignUpFailed = false;
  // data: FormData = new FormData();

  constructor() {
  }

  ngOnInit() {
  }
}

//
//   onSubmit() {
//     const self = this;
//     // tslint:disable-next-line:only-arrow-functions
//     const promise = new Promise(function(resolve, reject) {
//     });
//     promise.then(url => {
//       this.signupInfo = new SignupInfoService(
//         this.form.email,
//         this.form.username,
//         this.form.name,
//         this.form.password,
//         this.form.dob,
//         this.form.phoneNumber,
//         this.form.address,
//         this.form.role,
//         url.toString()
//       );
//       this.data = toFormData(this.signupInfo);
//       this.authService.signUp(this.data).subscribe(
//         data => {
//           console.log(data);
//           this.isSignedUp = true;
//         },
//         error => {
//           console.log(error);
//           this.errorMessage = error.error.message;
//           this.isSignUpFailed = true;
//         }
//       );
//     });
//     promise.catch(error => {
//       console.log(error);
//       this.errorMessage = error.error.message;
//       this.isSignUpFailed = true;
//     });
//   }
// }
//
// export function toFormData<T>(formValue: T) {
//   const formData = new FormData();
//
//   for (const key of Object.keys(formValue)) {
//     const value = formValue[key];
//     formData.append(key, value);
//   }
//
//   return formData;
// }
