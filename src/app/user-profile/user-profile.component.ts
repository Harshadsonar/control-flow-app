import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  users=[
    {name:'Harshad', age:23, status:'Single', id:1},
    {name:'Rohit', age:24, status:'Married', id:2},
    {name:'Rahul', age:25, status:'Single', id:3},
  ]

  // name='Harshad'
  // status = "Single"
  // newSalary = 20000

// @Output() myEvent = new EventEmitter<string>()
//   sendData(){
//     this.myEvent.emit("Coders never quit")
//   }

@Input({alias:"username"}) name = "";
@Input({transform:booleanAttribute}) isSingle!:boolean;
@Input({transform:numberAttribute}) salary!:number;

@Output() myEvent = new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name:this.name, newSalary:25000})
  }

  constructor(){
    // init properties
    // dependency injection
    // event listener register
    console.log("constructor called");
    console.log("constructor called", this.heading?.nativeElement.textContent);

  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called", this.heading?.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnchanges", changes); 
    console.log("ngOnChanges called", this.heading?.nativeElement.textContent);

  }

  ngOnInit(){
    // init properties
    // event listener register
    // initial api call
    console.log("ngOnInit called")
    console.log("ngOnInit called", this.heading?.nativeElement.textContent);

  }

  ngOnDestroy(){
    // unregister event listener
    console.log("component destroyed");
  }

  @ViewChild("myheading") heading?: ElementRef
}
