import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <p>
    </p>
  <ul>
  <li *ngFor="let na of itemss"> {{na}} </li>
   
  </ul>
  
  `,
  styles: []
})
export class DumbComponent implements OnInit {
@Input('items') itemss;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
