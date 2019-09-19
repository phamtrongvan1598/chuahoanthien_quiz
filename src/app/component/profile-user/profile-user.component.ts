import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserProfileService} from '../../service/user-profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  username;
  newPassword;
  email;
  address;
  firstName;
  lastName;
  phoneNumber;
  oldPasword;
  status: string;
  notification;
  convert: boolean;
  user: Partial<User>;
  loginForm: FormGroup;
  registerForm: FormGroup;


  constructor(private  userProfileService: UserProfileService,
              private  route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private fb: FormBuilder,
              private userService: UserService) {
    this.user = {
      username: '',
      email: '',
      address: '',
      phoneNumber: '',
      firstName: '',
      lastName: ''
    };
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.address = localStorage.getItem('address');
    this.phoneNumber = localStorage.getItem('phoneNumber');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.registerForm = this.fb.group({
      confirm: ['', [Validators.required, Validators.minLength(6)]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validator: comparePassword}),
    });
    this.userProfileService.getUserCurrent().subscribe(data => {
      this.user = data;
    });
  }

  OnConvert() {
    this.convert = true;
  }

  updateProfile() {
    this.notification = !this.notification;
    this.user.password = this.oldPasword;
    this.userProfileService.confirmPaswordUser(this.oldPasword + '').subscribe(next => {
      if (next.message === 'confirm Succssess') {
        this.status = '';
        this.userProfileService.updateUser(this.user).subscribe(data => {
          this.username = data.username;
          localStorage.setItem('currentUser', data.username);
          // Tạo form đem vào service login để lấy token mới
          this.loginForm = this.formBuilder.group({
            username: [data.username, Validators.required],
            password: [this.oldPasword, Validators.required]
          });
          // Lấy lại token mới
          this.authService.authenticate(this.loginForm.value).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            next => {
              localStorage.setItem('token', next.data.token);
            });
        });
        return;
      }
    });


  }

  updatePassword() {
    this.notification = !this.notification;
    this.user.password = this.oldPasword;
    this.userProfileService.confirmPaswordUser(this.oldPasword + '').subscribe(next => {
      this.status = next.message;
      if (this.status === 'confirm Succssess') {
        this.status = '';
        this.user.password = this.newPassword;
        this.userProfileService.updateUser(this.user).subscribe(data => {
          this.username = data.username;
          localStorage.setItem('currentUser', data.username);
          // Tạo form đem vào service login để lấy token mới
          this.loginForm = this.formBuilder.group({
            username: [data.username, Validators.required],
            password: [this.oldPasword, Validators.required]
          });
          // Lấy lại token mới
          this.authService.authenticate(this.loginForm.value).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            next => {
              localStorage.setItem('token', next.data.token);
            });
        });
        return;
      }
    });
  }
}
