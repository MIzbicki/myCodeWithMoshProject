import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-form',
  templateUrl: './udemy-form.component.html',
  styleUrls: ['./udemy-form.component.css']
})
export class UdemyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myLog(form: any){
    console.log(form);
  }

}
