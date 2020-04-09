import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/app/Models/employee';
import { combineLatest } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
Employee:Employee={

  id:0,
  name:null,
  dob:null,
  doj:null,
  email:null,
  salary:0,
  password:null,

}

  constructor(private http:HttpClient,
              private route:Router,
              private dataservice:DataserviceService) { }

  ngOnInit(): void {



  }

  Save(form:NgForm){



    this.dataservice.Addemployee(this.Employee).subscribe(fun=>console.log(this.Employee));
    this.route.navigate(['/Adminlist/Employeelist']);
  }

  back(){

    this.route.navigate(['/Adminlist/Employeelist']);  }

}
