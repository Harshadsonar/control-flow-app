import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Global State Management 
export class CounterService {
  private count = 0
  // private count = signal(0)

  getCounter(){
    return this.count
  }

  incrementCounter(){
    this.count = this.count + 1
    // this.count.set(6);
    // this.count.update((oldValue) =>{
    //   return oldValue + 1
    // })
  }

  decrementCounter(){
    this.count = this.count - 1
  }
  clearCounter(){
    this.count = 0
  }
}
