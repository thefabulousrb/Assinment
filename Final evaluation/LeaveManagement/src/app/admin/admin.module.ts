import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { RouterModule, Router } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { LeaveconfigureComponent } from './leaveconfigure/leaveconfigure.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AddleaveComponent } from './addleave/addleave.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { EditleaveComponent } from './editleave/editleave.component';
import { EmployeePipe } from '../employee.pipe';
import { EmployeeModule } from '../employee/employee.module';
import { EmployeenamePipe } from '../employeename.pipe';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [AdminlistComponent, AddemployeeComponent, LeaveconfigureComponent, EmployeelistComponent, LeavelistComponent,AddleaveComponent, EmployeeeditComponent, EditleaveComponent, EmployeenamePipe],
  imports: [RouterModule, BrowserModule,CommonModule,BrowserAnimationsModule,HttpClientModule,FormsModule,EmployeeModule,NgxPaginationModule,BrowserAnimationsModule,
  ]
})
export class AdminModule { }
