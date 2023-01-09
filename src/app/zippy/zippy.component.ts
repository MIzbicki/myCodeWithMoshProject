import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('title') title: string = "";
  isExtended: boolean = false;
  onExtended(){
    this.isExtended = !this.isExtended;
  }
}
