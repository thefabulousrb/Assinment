import { Component, OnInit } from '@angular/core';
import { EmployeeLeave } from 'src/app/Models/employee-leave';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Leave } from 'src/app/Models/leave';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-employeeadd-leave',
  templateUrl: './employeeadd-leave.component.html',
  styleUrls: ['./employeeadd-leave.component.css']
})
export class EmployeeaddLeaveComponent implements OnInit {
  Leaves:Leave[]=[];
  Leave:EmployeeLeave={
  id:0,
  employeeid:0,
  leaveId:0,
  enddate:"",
  startdate:"",
  status:"Pending",
  days:0,
  leavetype:"",
  employeename:"",
  Leave:0,
};
Id:number;

  constructor(private route:ActivatedRoute,
              private http:HttpClient,
              private router:Router,
              private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.dataservice.getallleave().subscribe((list=>this.Leaves=list));
     this.Id=+this.route.snapshot.paramMap.get('id');
  }
  addleave(form:NgForm){

    if(this.Leave.leavetype=="")
    {
      alert("Please select valid leavetype");
      return false;
    }

    var startdate=new Date(this.Leave.startdate);
    var Enddate=new Date(this.Leave.enddate);

    var day=(Enddate.getTime()-startdate.getTime())/(1000*3600*24);
    var maxallowed=this.Leaves.find(c=>c.name==this.Leave.leavetype).maxallowed;
    if(day>maxallowed){
      alert("Maximum "+maxallowed+" days are allowed in "+this.Leave.leavetype);
      return false;
    }
    else if(day<=0){

      alert("Days should be more than one");
      return false;
    }
    this.Leave.days=day;
    var EId=+this.route.snapshot.paramMap.get('id');
    this.Leave.employeeid=EId;
    this.Leave.leaveId=(this.Leaves.find(c=>c.name==this.Leave.leavetype)).id;
    console.log(this.Leave);

    this.dataservice.AddEmpleave(this.Leave).subscribe();

    this.router.navigate(['Employeehome',this.Id,'Employeeleave',this.Id])

  }

  back(){
    this.router.navigate(['Employeehome',this.Id,'Employeeleave',this.Id]);
  }
}
