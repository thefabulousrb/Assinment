import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Models/leave';
import { HttpClient } from '@angular/common/http';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-leaveconfigure',
  templateUrl: './leaveconfigure.component.html',
  styleUrls: ['./leaveconfigure.component.css']
})
export class LeaveconfigureComponent implements OnInit {
Leavelist:Leave[];
  constructor(private htttp:HttpClient,
              private dataservice:DataserviceService) { }

  ngOnInit(): void {

    this.dataservice.getallleave().subscribe((list=>this.Leavelist=list));
  }

  Delete(leave:Leave){

    var val=confirm("Do you really want to Detete "+leave.name);
    if(val==true)
    {
     this.dataservice.Deleteleave(leave.id).subscribe(data=>console.log(leave.name+"Leave deted"));
      window.location.reload();
    }

  }

}
