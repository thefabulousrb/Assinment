import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {
Employee:Employee={

  id:0,
  name:null,
  dob:null,
  doj:null,
  email:null,
  salary:null,
  password:"",
}

  constructor(private router:ActivatedRoute,
              private http:HttpClient,
              private dataservice:DataserviceService,
              private route:Router) { }

  ngOnInit(): void {
  var Id=+this.router.snapshot.paramMap.get('id');

  this.dataservice.getemployeebyid(Id).subscribe((emp=>this.Employee=emp),(fun=>console.log(this.Employee)));
  }

  Update(){
    console.log(this.Employee);
    var Id=+this.router.snapshot.paramMap.get('id');

      this.dataservice.Editemployee(Id,this.Employee).subscribe((emp=>console.log("Employee updated Sucessfully")));
      this.route.navigate(["/Adminlist/Employeelist"]);
  }

  back(){
    this.route.navigate(["/Adminlist/Employeelist"]);
  }


}
