import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required, Validators.minLength(4)],
      password: ['', Validators.minLength(6)],
      address: [''],
      dob: [''],
      phoneNumber: ['', Validators.required, Validators.pattern(/0([0-9]{9,10})/)],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value)
      .subscribe(
        data => {
          console.log('succsess');
          this.router.navigate(['/api/auth/login']);
        },
        error => {
          console.log('error');
        }
      );
  }

}
