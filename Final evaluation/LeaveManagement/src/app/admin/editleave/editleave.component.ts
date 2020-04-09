import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Models/leave';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-editleave',
  templateUrl: './editleave.component.html',
  styleUrls: ['./editleave.component.css']
})
export class EditleaveComponent implements OnInit {
Leave:Leave={
  id:0,
  name:"",
  maxallowed:0,
}
  constructor(private router:ActivatedRoute,
              private http:HttpClient,
              private route:Router,
              private dataservide:DataserviceService) { }

  ngOnInit(): void {
  var Id=+this.router.snapshot.paramMap.get('id');
    this.dataservide.getleavebyid(Id).subscribe((data=>this.Leave=data));
  }

Editleave(){
  var Id=+this.router.snapshot.paramMap.get('id');

  this.dataservide.Editleave(Id,this.Leave).subscribe(leve=>console.log("Updated"))
  console.log(this.Leave);
this.route.navigate(['/Adminlist/Leaveconfigure']);
}
back(){
this.route.navigate(['/Adminlist/Leaveconfigure']);

}
}
