import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-like',
  templateUrl: './twitter-like.component.html',
  styleUrls: ['./twitter-like.component.css']
})
export class TwitterLikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('twitterTitle') twitterTitle: string = "Twitter Title";
  @Input('isLiked')  isLiked: boolean = false;
  @Input('likesNumber') likesNumber: number = 0;

  likeClicked = () =>{
    this.isLiked = !this.isLiked;

    if(this.isLiked == true){
      this.likesNumber ++;
    }else{
      this.likesNumber --;
    }
  }

}
