import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminlistComponent } from './admin/adminlist/adminlist.component';
import { EmployeelistComponent } from './admin/employeelist/employeelist.component';
import { LeaveconfigureComponent } from './admin/leaveconfigure/leaveconfigure.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { LeavelistComponent } from './admin/leavelist/leavelist.component';
import { AddleaveComponent } from './admin/addleave/addleave.component';
import { EmployeehomeComponent } from './employee/employeehome/employeehome.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeLeaveComponent } from './employee/employee-leave/employee-leave.component';
import { EmployeeaddLeaveComponent } from './employee/employeeadd-leave/employeeadd-leave.component';
import { EmployeeeditComponent } from './admin/employeeedit/employeeedit.component';
import { EditleaveComponent } from './admin/editleave/editleave.component';


const routes: Routes = [{path:"",component:LoginComponent},
{path:"Logout",component:LoginComponent},
{path:"Adminlist",component:AdminlistComponent,
children:[{path:"",component:EmployeelistComponent},{path:"Employeelist",component:EmployeelistComponent},
{path:"Leaveconfigure",component:LeaveconfigureComponent},
{path:"Addemployee",component:AddemployeeComponent},
{path:"Leavelist",component:LeavelistComponent},
{path:"Leaveconfigure/Addleave",component:AddleaveComponent},
{path:"Employeelist/Edit/:id",component:EmployeeeditComponent},
{path:"Leaveconfigure/Edit/:id",component:EditleaveComponent}]},
{path:"Employeehome/:id",component:EmployeehomeComponent,children:[{path:"",component:EmployeeProfileComponent},{path:"Employeeprofile/:id",component:EmployeeProfileComponent},
{path:"Employeeleave/:id",component:EmployeeLeaveComponent},
{path:"Employeeaddleave/:id",component:EmployeeaddLeaveComponent},
]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
