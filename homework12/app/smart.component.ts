import { Component, OnInit } from '@angular/core';
import { LoggablePipe } from './loggable.pipe';

@Component({
  selector: 'app-smart',
  template: `
    <p>
        <app-dumb [items]="sitems"></app-dumb>
      </p>
      <input #val (click)='0'  />
      <p #dval (click)='0'>hhhh</p>
      <p  >{{dval.innerHTML|loggable}} </p>
      <p >{{val.value|loggable}}</p>
   
<p isvisible [result]=true >paragraph is visible or not</p>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
public sitems=[3,4,5,6,7];
  constructor() { }


  ngOnInit() {
  }

  onClick(dval) {
    
    console.log(dval);
  }
}
