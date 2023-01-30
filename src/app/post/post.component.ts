import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(response => response)
      ).subscribe(response => {
        this.posts = (response);
        console.log(this.posts);
      });
  }



  /*
  constructor(http: Http) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        //this.posts = JSON.stringify(response);
        console.log(response);
        this.posts = response;
      });
  }*/



  ngOnInit(): void {
  }


}
