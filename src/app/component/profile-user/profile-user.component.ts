import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserProfileService} from '../../service/user-profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

  username;
  email;
  address;
  firstName;
  lastName;
  phoneNumber: string;
  // phoneNumber: number;
  user: Partial<User>;
  oldPasword: string;
  status: string;
  loginForm: FormGroup;


  constructor(private  userProfileService: UserProfileService,
              private  route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
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
    this.userProfileService.getUserCurrent().subscribe(data => {
      this.user = data;
    });
  }

  updateProfile() {
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
            next => {
              localStorage.setItem('token', next.data.token);
            });
        });
        return;
      }
    });


  }

}
