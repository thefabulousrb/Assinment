import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Models/leave';
import { HttpClient } from '@angular/common/http';
import { EmployeeLeave } from 'src/app/Models/employee-leave';
import { Employee } from 'src/app/Models/employee';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent implements OnInit {
Employeelist:Employee[]=[];
Leavelist:EmployeeLeave[]=[];
Leavecofig:Leave[]=[];
Filteredlist:EmployeeLeave[];
p:number = 1;

_listFilter = '';
get listFilter(): string {
  return this._listFilter;
}
set listFilter(value: string) {
  this._listFilter = value;
  this.Filteredlist = this.listFilter ? this.performFilter(this.listFilter) : this.Leavelist;
}

_listFilterL = '';
get listFilterL(): string {
  return this._listFilterL;
}
set listFilterL(value: string) {
  this._listFilterL = value;
  this.Filteredlist = this.listFilterL ? this.performFilterL(this.listFilterL) : this.Leavelist;
}
  constructor(private http:HttpClient,
              private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.dataservice.getallleave().subscribe(list=>this.Leavecofig=list);
    this.dataservice.getallemployee().subscribe(list=>this.Employeelist=list);

        this.dataservice.getallempleave().subscribe(list=>{this.Leavelist=list;this.Filteredlist=list;

      for(var i=0;i<this.Filteredlist.length;i++){

        var startdate=new Date(this.Filteredlist[i].startdate);
        var Enddate=new Date(this.Filteredlist[i].enddate);

        var day=((Enddate.getTime()-startdate.getTime())/(1000*3600*24))+1;
        this.Filteredlist[i].days=day;
         this.Filteredlist[i].employeename=this.Employeelist.find(c=>c.id==this.Filteredlist[i].employeeid).name;



         this.Filteredlist[i].leavetype=this.Leavecofig.find(c=>c.id==this.Filteredlist[i].leaveId).name;
         this.Filteredlist[i].Leave=(this.Leavecofig.find(c=>c.id==this.Filteredlist[i].leaveId).maxallowed)-this.Filteredlist[i].days;
         var leave=this.Leavecofig.find(c=>c.id==this.Filteredlist[i].leaveId);
           leave.maxallowed=leave.maxallowed-this.Filteredlist[i].days;

 }});
}
  Action(empleave:EmployeeLeave){


    this.dataservice.Editemployeeleave(empleave.id,empleave).subscribe(a=>console.log("Action taken"));
    alert("leave "+empleave.status);

  }

  performFilter(filterBy: string): EmployeeLeave[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Leavelist.filter((product: EmployeeLeave) =>
      product.employeename.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  performFilterL(filterBy: string): EmployeeLeave[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Leavelist.filter((product: EmployeeLeave) =>
      product.leavetype.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }




  }



