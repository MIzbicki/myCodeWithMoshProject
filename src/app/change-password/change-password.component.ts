import { myValidators } from './my-password.validators';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, myValidators.validateOldPassword),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('',
      [
        Validators.required,
        //myValidators.comparePasswords(this.newPassword?.value, this.confirmPassword?.value)
      ])
  })

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  myLog(x: any) {
    console.log(x);
  }
}
