import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';


export class myValidators {
  static validateOldPassword(control: AbstractControl): Promise<ValidationErrors|null> {
    return new Promise((resolve, reject) =>{
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

}
