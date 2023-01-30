import { ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient){
    http.get(this.url)
    .subscribe(response => {
      this.posts = response;
      console.log(typeof response);
    });
  }

  addToList(myInput: any){
    let post = { title: myInput.value };
    myInput.value='';

    this.http.post(this.url, post)
    .subscribe(response => {
      console.log(response);
      this.posts.splice(0,0, response);
    });

  }


  /*
  //works correctly
  constructor(private http: HttpClient) {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(response => response)
      ).subscribe(response => {
        this.posts = (response);
        console.log(typeof response);
        console.log(this.posts);
      });
  }
  */

  /*
  //doesn't works
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
