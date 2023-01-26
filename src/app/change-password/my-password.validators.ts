import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';


export class myValidators {
  static validateOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value != '1234') {
          resolve({ oldPasswordIsWrong: true });
        }
        else {
          resolve(null);
        }
      },
        2000
      )
    })
  }

  //static comparePasswords(newPassword: AbstractControl, confirmPassword: AbstractControl): ValidationErrors | null{
  /*
  static comparePasswords(newPassword: any, confirmPassword: any): ValidationErrors | null{
    let valueNewPassword = (newPassword.value as string);
    let valueConfirmPassword = (confirmPassword.value as string);
    console.log("New Password: " + valueNewPassword);
    console.log("Confirmed Password: " + valueConfirmPassword);
    return null;
  }
  */

  static comparePasswords(control: AbstractControl): ValidationErrors|null{
    let newPassword = control.get('newPassword')?.value;
    let confirmPassword = control.get('confirmPassword')?.value;
    if( newPassword != confirmPassword)
    {
      return { differentPasswords: true };
    }else
    {
      return null;
    }
  }
}
