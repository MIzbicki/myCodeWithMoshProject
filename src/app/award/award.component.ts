import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isAward: boolean = false;

  awardStateChange()
  {
    this.isAward = !this.isAward;
    console.log(this.isAward);
  }
}
