import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-redcomponent',
  template: `
    <p>
   
    <button (click)="decrement()">-</button >{{childnum}}<button (click)="increment()">+</button>
  
    </p>
  `,
  styles: []
})
export class RedcomponentComponent implements OnInit {
@Input('counter') childnum:number;
@Output() counterchnge =new EventEmitter();

  constructor() { 
this.counterchnge.emit(this.childnum)
  }
  ngOnInit() {
  }
   decrement(){
    this.childnum--;
    this.counterchnge.emit(this.childnum);
  }
  increment(){
    this.childnum++;
    this.counterchnge.emit(this.childnum);
  }
}
