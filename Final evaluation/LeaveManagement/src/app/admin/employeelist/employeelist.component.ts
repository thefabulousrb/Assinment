import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from 'src/app/dataservice.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { EmployeeLeave } from 'src/app/Models/employee-leave';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
Employeelist:Employee[];
Filteredlist:Employee[];
Employeeleave:EmployeeLeave[];

_listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.Filteredlist = this.listFilter ? this.performFilter(this.listFilter) : this.Employeelist;
  }
  constructor(private http:HttpClient
              ,private dataservice:DataserviceService,
              private router:Router) { }

  ngOnInit(): void {
    this.dataservice.getallemployee().subscribe( (list => {this.Employeelist=list;this.Filteredlist=list}),(err=>console.log(err)));
  }

Delete(emp:Employee){

var val=confirm("Do you really want to Detete "+emp.name);
  if(val==true)
  {
    this.dataservice.DeleteEmpleave(+emp.id).subscribe(fun=>console.log("deleted"));

    this.dataservice.Deleteemployee(+emp.id).subscribe(fun=>{console.log(fun.name+" Deleted")});

    window.location.reload();
  }




}
performFilter(filterBy:string):Employee[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.Employeelist.filter((Employee: Employee) =>
    Employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

}
