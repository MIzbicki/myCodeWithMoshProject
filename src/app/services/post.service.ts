import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {

  }

  //correct url
  private url = 'https://jsonplaceholder.typicode.com/posts';

  //wrong url - to tests
  private wrong_url = 'https://wrongurl.com/posts';

  getPosts(){
    return this.http.get(this.url);
  }

  addToList(post: any){
    return  this.http.post(this.url, post);
  }

  updatePost(post: any){
    /*
    //patch update only few fields of the object
    this.http.patch(this.url + "/" + post.id, JSON.stringify({isRead: true}))
    .subscribe( response => {
      console.log("PATCH: ", response);
    });
    */

    //put updates all object
    return this.http.put(this.url + "/" + post.id, JSON.stringify(post));
  }

  deletePost(id: number){
    return this.http.delete(this.url + "/" + id);
  }
}
