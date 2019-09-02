import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  isAgreedWithLicenses = false;
  user: Partial<User>;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      address: [null],
      dob: [null],
      phoneNumber: [null, Validators.required, Validators.pattern(/0([0-9]{9,10})/)],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required]
    });
  }

  onChange($event) {
    this.user.avatarFileName = $event;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    console.log(this.isAgreedWithLicenses);
    this.userService.register(this.registerForm.value)
      .subscribe(
        data => {
          console.log('succsess');
          this.router.navigate(['/api/auth/signin']);
        },
        error => {
          console.log('error');
          this.router.navigate(['/api/auth/signup']);
        }
      );
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }
  get password() {
    return this.registerForm.get('password');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

}
