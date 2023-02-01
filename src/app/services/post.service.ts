import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
    return this.http.delete(this.wrong_url + "/" + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }




}
