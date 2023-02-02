import { MyAllDataServiceService } from './my-all-data-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService extends MyAllDataServiceService {

  constructor(http: HttpClient) {
    super(http, 'https://jsonplaceholder.typicode.com/posts');
  }
}
