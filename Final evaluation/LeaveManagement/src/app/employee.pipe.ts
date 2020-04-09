import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { Leave } from './Models/leave';
import { HttpClient } from '@angular/common/http';
import { heLocale } from 'ngx-bootstrap';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform{
  leave:Leave[]=[];
  constructor(private http:HttpClient) {

  }



  transform(list:Leave[],value:number, ...args: any): string {
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
