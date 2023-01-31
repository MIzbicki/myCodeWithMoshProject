import { Component, OnInit } from '@angular/core';
import { MyTitleCasePipe } from '../myPipes/my-title-case.pipe';

@Component({
  selector: 'app-my-title-case',
  templateUrl: './my-title-case.component.html',
  styleUrls: ['./my-title-case.component.css']
})
export class MyTitleCaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myTitle: string = "";

}
