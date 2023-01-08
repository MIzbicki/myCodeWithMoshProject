import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyInputFormat]'
})
export class MyInputFormatDirective {
  @HostListener('focus') onFocus(){
    console.log("on Focus log")
  }

  @HostListener('blur') onBlur(){
    console.log("on Blur log")
  }

  constructor() { }

}
