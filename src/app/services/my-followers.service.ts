import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFollowersService {

  constructor(private http: HttpClient) {

  }

  url: string = "https://api.github.com/users/mosh-hamedani/followers";


}
