import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJoke(): Observable<any> {
    return this.http.get('https://api.chucknorris.io/jokes/random?category=dev');
  }
}
