import { Component, ElementRef, EventEmitter, Injectable, Input, Output, ViewChild, booleanAttribute, inject, numberAttribute, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { AppComponent } from '../app.component';

// function formatName(value:string){
//   return "Hi " + value;
// }

@Component({
  selector: 'app-controlflowapp',
  template:``,
  standalone: true,
  templateUrl: './controlflowapp.component.html',
  styleUrl: './controlflowapp.component.css',
  imports: [CommonModule, FormsModule]
})



export class ControlflowappComponent {

  //! Input decorator - For passing data from parent to child component

  // @Input() name = ""
  // @Input({alias:"username", transform:formatName}) name = "";
  @Input({alias:"username"}) name = "";
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  @Input({transform:numberAttribute}) salary!:number;

  //! Output decorator and EventEmitter - For passing data from child to parent component

  // @Output() myEvent = new EventEmitter<string>()
  // sendData(){
  //   this.myEvent.emit("Coders never quit")
  // }

  @Output() myEvent = new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name:this.name, newSalary:25000})
  }

  Username='Harshad'
  // name : 'Govind'
  status = "Single"
  // salary = 20000
  isBtnDisabled = false
  inputVal = "test"
  isAdmin = true;

  users=[
    {name:'Harshad', age:23, status:'Single', id:1},
    {name:'Rohit', age:24, status:'Married', id:2},
    {name:'Rahul', age:25, status:'Single', id:3},
  ]

  employees = [
    {name: "Sunny", id:101, status: "Single", salary: 20000, position: "Developer", isSingle:true},
    {name: "Rohit", id:102, status: "Married", salary: 25000, position: "Manager", isSingle:false},
    {name: "Rahul", id:103, status: "Single", salary: 30000, position: "Tester", isSingle:true},
    {name: "Raj", id:104, status: "Married", salary: 35000, position: "Designer", isSingle:false},
    {name: "Ravi", id:105, status: "Single", salary: 40000, position: "Developer", isSingle:true},
    {name: "Rajesh", id:106, status: "Married", salary: 45000, position: "Manager", isSingle:false},
    {name: "Raju", id:107, status: "Single", salary: 50000, position: "Tester", isSingle:true},
  ]


  //! event binding
  onChange(e:Event) {
    const value = (e.target as HTMLInputElement).value
  //! 2 way data binding
    this.inputVal = value;
  }


 
}
