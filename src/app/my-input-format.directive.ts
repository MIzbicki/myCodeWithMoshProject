import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyInputFormat]'
})
export class MyInputFormatDirective {
  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur(){
    // console.log("on Blur log");
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }
}
