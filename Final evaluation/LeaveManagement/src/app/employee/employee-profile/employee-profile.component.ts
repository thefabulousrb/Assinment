import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  Employee:Employee={
    name:"",
    dob:"",
    doj:"",
    email:"",
    id:0,
    salary:0,
    password:"",


  }
  img="assets/emp3.jpg"
  constructor(private router:ActivatedRoute,
              private http:HttpClient,
              private dataservice:DataserviceService)
              { }
  ngOnInit(): void {
  var Id=+this.router.snapshot.paramMap.get('id');

  this.dataservice.getemployeebyid(Id).subscribe((emp=>this.Employee=emp));
  }

}
