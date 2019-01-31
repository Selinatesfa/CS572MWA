import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loggable'
})
export class LoggablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
     console.log('$value Logging');
    return 'logable'+ value;
  }

}
