import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

 private _message = "Hello World";
  constructor() { }

  getMessage(){
    return this._message;
  }
}
