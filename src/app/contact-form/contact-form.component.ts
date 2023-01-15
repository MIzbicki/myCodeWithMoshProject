import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactMethods = [
    { id: 1, name: 'email' },
    { id: 2, name: 'mobile phone' },
    { id: 3, name: 'personally' }
  ]

  myLog(tempVar:any){
    console.log(tempVar);
  }

  logSubmit(f:any){
    console.log(f);
  }
}
