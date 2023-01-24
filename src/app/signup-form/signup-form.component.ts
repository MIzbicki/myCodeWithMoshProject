import { UsernameValidators } from './username.validatiors';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
      UsernameValidators.cannotContainSpace
    ],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required)
  })

  get username() {
    return this.form.get('username');
  }

  get minValue() {
    return this.form.get('username')?.errors?.['minlength'].requiredLength;
  }

  myLog(x: any) {
    console.log(x);
  }

  myLogin(){
    //let isValid = authService.login(this.form.value)
    this.form.setErrors({
      invalidLogin: true
    });

  }
}
