import { Component, OnInit } from '@angular/core';
import { EmployeeLeave } from 'src/app/Models/employee-leave';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Leave } from 'src/app/Models/leave';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.css']
})
export class EmployeeLeaveComponent implements OnInit {
  employeeleaves:EmployeeLeave[]=[];
  Leaveconfig:Leave[]=[];
  filteredleave:string[];
  balance:number;
  Id:number;


  constructor(private http:HttpClient,
              private route:ActivatedRoute,
              private router:Router,
              private dataservice:DataserviceService) { }

  ngOnInit(): void {
  this.Id=+this.route.snapshot.paramMap.get('id');

  this.dataservice.getallleave().subscribe(list=>this.Leaveconfig=list);
  this.dataservice.getemployeeleavebyid(this.Id).subscribe((list=>{this.employeeleaves=list;

  for(var i=0;i<this.employeeleaves.length;i++){

    var startdate=new Date(this.employeeleaves[i].startdate);
    var Enddate=new Date(this.employeeleaves[i].enddate);

    var day=((Enddate.getTime()-startdate.getTime())/(1000*3600*24))+1;
    this.employeeleaves[i].days=day;

      if(this.employeeleaves[i].status=="Approve"){
        let bal=(this.Leaveconfig.find(c=>c.id==this.employeeleaves[i].leaveId));
        var result=(bal.maxallowed-this.employeeleaves[i].days);
        (bal.maxallowed)=result
        console.log(bal);
      }



}}));


  }

Addleave(){


    this.router.navigate(['Employeehome',this.Id,'Employeeaddleave',this.Id]);
}




  }
  // leavemap(lc:Leave[],leave:EmployeeLeave){

  //    return lc.find(c=>c.id==leave.id);
  // }



