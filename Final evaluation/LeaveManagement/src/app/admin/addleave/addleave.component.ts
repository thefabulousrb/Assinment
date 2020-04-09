import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Models/leave';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {
Leave:Leave={
  id:0,
  name:"",
  maxallowed:0,
}
  constructor(private http:HttpClient,
              private route:Router,
              private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }

  addleave(form:NgForm){


    if ( this.Leave.maxallowed<=0){
      alert("Please enter valid days");
      return false;

    }
    this.dataservice.Addleave(this.Leave).subscribe(list=>{console.log("Leave added")});
    this.route.navigate(["/Adminlist/Leaveconfigure"]);

  }



back(){

  this.route.navigate(['/Adminlist/Leaveconfigure']);  }

}

