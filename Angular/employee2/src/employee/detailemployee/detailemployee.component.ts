import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'employee/dataservice.service';
import { IEmpolyee } from '../iemployee';

@Component({
  selector: 'app-detailemployee',
  templateUrl: './detailemployee.component.html',
  styleUrls: ['./detailemployee.component.css']
})
export class DetailemployeeComponent implements OnInit {
Id:number;
Employee:IEmpolyee;
  constructor(private route:ActivatedRoute
              ,private router:Router,
              private dataservice:DataserviceService) { }

  ngOnInit(): void {
  this.Id=+this.route.snapshot.paramMap.get('id');
  //this.dataservice.getemployee(this.Id).subscribe(emp=>this.Employee=emp);
this.Employee=this.dataservice.getemployee(this.Id);
}

}
