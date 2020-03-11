import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'employee/home/home.component';
import { ListemployeeComponent } from 'employee/listemployee/listemployee.component';
import { EditemployeeComponent } from 'employee/editemployee/editemployee.component';
import { DetailemployeeComponent } from 'employee/detailemployee/detailemployee.component';
import { AddemployeeComponent } from 'employee/addemployee/addemployee.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
{path:"employee",component:ListemployeeComponent},
{path:"employee/:id",component:DetailemployeeComponent},
{path:"employee/:id/edit",component:EditemployeeComponent},
{path:"add",component:AddemployeeComponent,

}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
