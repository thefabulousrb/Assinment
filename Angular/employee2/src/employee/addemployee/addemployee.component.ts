import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { DataserviceService } from 'employee/dataservice.service';
import { Observable } from 'rxjs';
import { IEmpolyee } from 'employee/iemployee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  Qualification:string[];
  Experience:string[];
  Languages:string[];
  employee:IEmpolyee={

    id:null,
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
    imageUrl:null

  }
  constructor(private dataservice:DataserviceService
              ,private route:Router){

  }
    ngOnInit(): void {
      this.Qualification=["bechlor","phd","master"];
      this.Experience=["Fresher","Development","Analyst","Dataanalyst"];
      this.Languages=["C","python","java","Angular","Ruby"];
    }

    submitform(form:NgForm){
      let count=4;
      this.employee.id=count;
      this.employee.imageUrl="assets/images/emp1.png"
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


      this.dataservice.allemployees.push(this.employee);
      count++;
      console.log(this.employee);
      this.route.navigate(['/employee'])
    }
}
