import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css'],
  animations: [slideInAnimation],
})
export class AdminlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
