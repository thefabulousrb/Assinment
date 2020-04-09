import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Employee } from './Models/employee';
import { Leave } from './Models/leave';
import { EmployeeLeave } from './Models/employee-leave';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  Employee:string="https://localhost:5001/api/Employee";
  Leave:string="https://localhost:5001/api/Leave";
  Employeeleave:string="https://localhost:5001/api/Employeeleave";

  constructor(private http:HttpClient) { }
getallemployee():Observable<Employee[]>{

 return this.http.get<Employee[]>(this.Employee);
}
getallleave():Observable<Leave[]>{

  return this.http.get<Leave[]>(this.Leave);
}
getallempleave():Observable<EmployeeLeave[]>{

return this.http.get<EmployeeLeave[]>(this.Employeeleave);

}
Addemployee(Employee:Employee){

  return this.http.post(this.Employee,JSON.stringify(Employee),{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  });
}
Addleave(Leave:Leave){

  return this.http.post(this.Leave,JSON.stringify(Leave),{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
});
}
AddEmpleave(Empleave:EmployeeLeave){

  return this.http.post(this.Employeeleave,JSON.stringify(Empleave),{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
});

}
Editemployee(id:number,employee:Employee):Observable<Employee>{

  return this.http.put<Employee>(this.Employee+"/"+id,employee);
}
Editleave(id:number,leave:Leave):Observable<Leave>{

  return this.http.put<Leave>(this.Leave+"/"+id,leave);
}
Editemployeeleave(id:number,Employeeleave:EmployeeLeave):Observable<EmployeeLeave>{
  return this.http.put<EmployeeLeave>(this.Employeeleave+"/"+id,Employeeleave);

}
Deleteemployee(id:number):Observable<Employee>{
 return this.http.delete<Employee>(this.Employee+"/"+id);
}
Deleteleave(id:number):Observable<Leave>{
  return this.http.delete<Leave>(this.Leave+"/"+id);

}
DeleteEmpleave(id:number):Observable<EmployeeLeave>{
  return this.http.delete<EmployeeLeave>(this.Employeeleave+"/"+id);

}
getleavebyid(id:number):Observable<Leave>{
  return this.http.get<Leave>(this.Leave+"/"+id);

}
getemployeebyid(id:number):Observable<Employee>{
  return this.http.get<Employee>(this.Employee+"/"+id);

}
getemployeeleavebyid(id:number):Observable<EmployeeLeave[]>{
  return this.http.get<EmployeeLeave[]>(this.Employeeleave+"/"+id);

}


}
