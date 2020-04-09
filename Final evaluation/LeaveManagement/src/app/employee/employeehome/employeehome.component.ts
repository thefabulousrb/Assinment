import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css'],
  animations: [slideInAnimation],
})
export class EmployeehomeComponent implements OnInit {
id:number=0;
  constructor(private http:ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.id=+this.http.snapshot.paramMap.get('id');
  }

}
