import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empolyee } from './model/employee.model';
import { DataService } from './data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  Qualification:Observable<string[]>;
  Experience:Observable<string[]>;
  Languages:Observable<string[]>;
  employee:Empolyee={

    Firstname:null,
    Lastname:null,
    Email:null,
    Contact_number:null,
    Address:null,
    Gender:null,
    Username:null
    ,Password:null,
    Qualification:null,
    Experience:null,
    Languages:[],

  }
  constructor(private dataservice:DataService){

  }
    ngOnInit(): void {
    this.Qualification=this.dataservice.getQuallification();
    this.Experience=this.dataservice.getExperience();
    this.Languages=this.dataservice.getlanguages();
    }

    submitform(form:NgForm){

      if(form.value.gender==null)
      {
        alert("please select gender");
        return false;
      }
      if(form.value.C==true){
          this.employee.Languages.push("C");
      }
      if(form.value.Python==true){
          this.employee.Languages.push("python");
      }
      if(form.value.java==true){
          this.employee.Languages.push("java");
      }
      if(form.value.Angular==true){
        this.employee.Languages.push("Angular");
      }
      if(form.value.Ruby==true){
        this.employee.Languages.push("Ruby");
      }

      console.log(this.employee)


    }

  }

