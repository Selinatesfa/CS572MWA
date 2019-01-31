import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[isvisible]'
})
export class IsvisibleDirective {
  @Input() result;
  constructor(private element:ElementRef) {
      }
      ngOnInit(){
     if(!this.result)
     this.element.nativeElement.style.visibility="hidden";
     console.log(this.result+"");
   }

}
