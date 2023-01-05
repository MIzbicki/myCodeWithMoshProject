import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-like',
  templateUrl: './twitter-like.component.html',
  styleUrls: ['./twitter-like.component.css']
})
export class TwitterLikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isLiked: boolean = false;
  likesNumber: number = 5;

  likeClicked = () =>{
    this.isLiked = !this.isLiked;

    if(this.isLiked == true){
      this.likesNumber ++;
    }else{
      this.likesNumber --;
    }
  }

}
