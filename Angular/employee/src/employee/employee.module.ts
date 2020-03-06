import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';



@NgModule({
  declarations: [EmployeeComponent],
  imports: [ BrowserModule,CommonModule,FormsModule,ButtonsModule,BrowserAnimationsModule
  ],
  exports:[EmployeeComponent]
})
export class EmployeeModule { }
