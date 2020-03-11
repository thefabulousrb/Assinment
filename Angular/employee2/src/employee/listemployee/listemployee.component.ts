import { Component, OnInit } from '@angular/core';
import { IEmpolyee } from '../iemployee';
import { DataserviceService } from 'employee/dataservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
Employees:IEmpolyee[];
Pagetitle="Employee_List"
employee:IEmpolyee;

  constructor(private dataservice:DataserviceService
              ,private router:ActivatedRoute,
              private route:Router) {
}

  ngOnInit(): void {
  // console.log( this.dataservice.getemployees().subscribe(employee => this.Employees=employee));
    this.Employees=this.dataservice.getemployees();


}
deleteemployee(){

  if(confirm(`Do you really want to delete${this.employee.Firstname}`)){
   this.dataservice.deleteemployee(3);
   this.route.navigate(['/employee']);
  }

}

}
