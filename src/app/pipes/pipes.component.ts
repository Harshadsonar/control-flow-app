import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountrycodePipe } from './countrycode.pipe';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, CountrycodePipe, HighlightDirective],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  
  bgColor = "blue"

  users=[
    {name:'Harshad', age:23, status:'SINGLE', salary:20000,Date:"20-12-2025", phoneno:"973829473", id:1},
    {name:'Rohit', age:24, status:'MARRIED',salary:25000, Date:"2-12-2025", phoneno:"973829472", id:2},
    {name:'Rahul', age:25, status:'SINGLE',salary:30000, Date:"1-12-2025", phoneno:"973829471", id:3},
  ]
}
