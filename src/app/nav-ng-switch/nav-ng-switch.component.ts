import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-ng-switch',
  templateUrl: './nav-ng-switch.component.html',
  styleUrls: ['./nav-ng-switch.component.css']
})
export class NavNgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //ngSwitch
  viewMode: string = "list";
  onNavClick(navName: string){
    this.viewMode = navName;
  }
}
