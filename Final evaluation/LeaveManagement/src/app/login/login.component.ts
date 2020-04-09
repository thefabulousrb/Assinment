import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/employee';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router
              ,private http:HttpClient) { }
  Email:string;
  error:string;
  Userlist:Employee[]=[];
  ngOnInit(): void {
    this.http.get<Employee[]>("https://localhost:5001/api/employee").subscribe(list=>this.Userlist=list);
  }


submit(form:NgForm) {
  console.log(this.Userlist);
  if(form.value.email=="admin@gmail.com")
    {
      this.route.navigate(['/Adminlist']);
    }
    else{

      var emp=this.Userlist.find(c=>c.email==form.value.email);
      if(emp!=null)
      {
        this.route.navigate(['/Employeehome',emp.id]);
      }
      else{
          this.error="User not found";
      }

}
}

}
