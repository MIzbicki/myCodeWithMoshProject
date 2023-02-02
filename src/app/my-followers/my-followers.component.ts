import { Component, OnInit } from '@angular/core';
import { MyFollowersService } from '../services/my-followers.service';

@Component({
  selector: 'my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {

  constructor(private service: MyFollowersService) { }

  followers: any = [];
  ngOnInit(): void {
    this.service.getFollowers().subscribe(
      response => {
        this.followers = response;
      })
  }
}
