import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { DetailemployeeComponent } from './detailemployee/detailemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AddemployeeComponent } from './addemployee/addemployee.component';

@NgModule({
  declarations: [EmployeeComponent, ListemployeeComponent, DetailemployeeComponent, EditemployeeComponent, HomeComponent, AddemployeeComponent],
  imports: [
    CommonModule,BrowserModule,AppRoutingModule,RouterModule,HttpClientModule,FormsModule,ButtonsModule.forRoot(),ReactiveFormsModule

  ],
  exports:[EmployeeComponent,HttpClientModule]
})
export class EmployeeModule { }
