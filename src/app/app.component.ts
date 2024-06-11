import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlflowappComponent } from './controlflowapp/controlflowapp.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { PipesComponent } from './pipes/pipes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyservicesService } from './myservices.service';
import { JokeComponent } from './joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';
import { SelectorsComponent } from './components/selectors/selectors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ControlflowappComponent, CommonModule, PipesComponent, UserProfileComponent, JokeComponent, AComponent, B1Component, B2Component, SelectorsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  _msg:string="";

  constructor(private _myservicesService:MyservicesService){
    // this._msg = _myservicesService.getMessage();
  }

  getMessage(){
    this._msg = this._myservicesService.getMessage();
  }

  users=[
    {name:'Harshad', age:23, status:'Single', id:1, salary:30000},
    // {name:'Rohit', age:24, status:'Married', id:2, salary:20000},
    // {name:'Rahul', age:25, status:'Single', id:3, salary:15000},
  ]

  receivedData(e:User){
    console.log(e)
    const userIndex = this.users.findIndex(user => user.name == e.name)
    this.users[userIndex].salary = e.newSalary
  }

  @Input({alias:"username"}) name = "";
@Input({transform:booleanAttribute}) isSingle!:boolean;
@Input({transform:numberAttribute}) salary!:number;

  @Output() myEvent = new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name:this.name, newSalary:25000})
  }

  clear(){
    this.users = []
  }
}
