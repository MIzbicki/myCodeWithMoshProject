import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('award') isAward: boolean = false;
  @Output('change') change = new EventEmitter;

  awardStateChange()
  {
    this.isAward = !this.isAward;
    this.change.emit({firstValue: this.isAward});
  }
}

export interface MyAwardChangedEventArgs {
  firstValue: boolean,
}

