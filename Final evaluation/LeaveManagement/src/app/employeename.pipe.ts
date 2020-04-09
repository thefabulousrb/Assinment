import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './Models/employee';

@Pipe({
  name: 'employeename'
})
export class EmployeenamePipe implements PipeTransform {

  transform(list:Employee[],value: unknown, ...args: unknown[]): string {

    var name;

    for(var i=0;i<list.length;i++)
    {
      if(list[i].id==value){
        name=list[i].name;
      }
    }
    return name;
  }


}

