import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmpolyee } from '../iemployee';
import { Observable } from 'rxjs';
import { DataserviceService } from 'employee/dataservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  Id:number;
  employee:IEmpolyee;
  Qualification:string[];
  Experience:string[];
  Languages:string[];


  constructor(private route:ActivatedRoute
              ,private dataservice:DataserviceService,
              private router:Router) {
}

  ngOnInit(): void {
    this.employee={

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
      imageUrl:null,

    }


this.Qualification=["bechlor","phd","master"];
this.Experience=["Fresher","Development","Analyst","Dataanalyst"];
this.Languages=["C","python","java","Angular","Ruby"];

  this.Id=+this.route.snapshot.paramMap.get('id');

this.employee=this.dataservice.getemployee(this.Id);
 }


 saveemployee(form:NgForm){
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

  this.dataservice.saveemployee(this.employee);


 }
 deleteemployee(){
   if(confirm(`Do you really want to delete${this.employee.Firstname}`)){
    this.dataservice.deleteemployee(this.Id);
    this.router.navigate(['/employee']);
   }


 }
// saveProduct(){

//   if (this.employee.id === 0) {
//     this.dataservice.createProduct(this.employee).subscribe({
//       next: () => (`The new ${this.employee.Firstname} was saved`),
//     });

//   const p={...this.employee}
// this.dataservice.updateemployee(p).subscribe(

//   ()=>console.log("employee"+this.employee.Firstname+"updated"));
//   this.router.navigate(['employee'])


//   }}
// deleteemployee(){

//   if (confirm(`Really delete the employee: ${this.employee.Firstname}?`)) {
//     this.dataservice.deleteemployee(this.employee.id).subscribe({
//       next: () => console.log(`${this.employee.Firstname} was deleted`)

//     });



// }

// }
}

