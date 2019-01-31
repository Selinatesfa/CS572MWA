import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p>
        <app-dumb [items]="sitems"></app-dumb>
      </p>
      <input #val (keyup)='0' />
<p> {{val.value | loggable}}</p>
<p isvisible [result]='true' >hello</p>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
public sitems=[3,4,5,6,7];
  constructor() { }
  
  ngOnInit() {
  }

}
