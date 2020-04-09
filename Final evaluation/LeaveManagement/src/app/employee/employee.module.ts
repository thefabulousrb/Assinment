import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { EmployeeaddLeaveComponent } from './employeeadd-leave/employeeadd-leave.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeePipe } from '../employee.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [EmployeehomeComponent, EmployeeProfileComponent, EmployeeLeaveComponent, EmployeeaddLeaveComponent, EmployeePipe],
  imports: [
    CommonModule,RouterModule,FormsModule,BrowserAnimationsModule,BsDatepickerModule.forRoot(),
  ],
  exports:[EmployeePipe]
})
export class EmployeeModule { }
