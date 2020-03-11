import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmpolyee } from 'employee/iemployee';
import { Observable, of } from 'rxjs';
import {map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  allemployees:IEmpolyee[]=[
    {"id":1,
    "Firstname":"Ayazzzz",
    "Lastname":"Arbi",
    "Email":"Aarbi.ayaz.1@gmail.com",
    "Username":"the_fabilous_rb",
    "Password":"aA22248163264$",
    "Contact_number":9925728721,
    "Address":"my adddress",
    "Gender":"Male",
    "Qualification":"bechlor",
    "Experience":"Fresher",
    "Languages":["java","python"],
    "imageUrl":"assets/images/emp1.png"},
    {
      "id":2,
      "Firstname":"Ayaz2",
    "Lastname":"Arbi2",
    "Email":"Aarbi.ayaz.2@gmail.com",
    "Username":"the_fabilous_rb2",
    "Password":"aA22248163264ds2$",
    "Contact_number":9925728722,
    "Address":"my adddress 2",
    "Gender":"male",
    "Qualification":"bechlor",
    "Experience":"Fresher",
    "Languages":["C","python"],
    "imageUrl":"assets/images/emp2.png"

    },{"id":3,
    "Firstname":"Ayaz3",
    "Lastname":"Arbi3",
    "Email":"Aarbi.ayaz.3@gmail.com",
    "Username":"the_fabilous_rb3",
    "Password":"aA22248163264$",
    "Contact_number":9925728723,
    "Address":"my adddress3",
    "Gender":"male",
    "Qualification":"bechlor",
    "Experience":"Fresher",
    "Languages":["C","python"],
    "imageUrl":"assets/images/emp3.jpg"}]

  // //private productUrl="assets/employee.json";
  constructor(private http:HttpClient) { }

  getemployees():IEmpolyee[]{

    return this.allemployees;
  }

  getemployee(id:number):IEmpolyee{
    return this.allemployees.find(e=>e.id==id);
  }

  saveemployee(employee:IEmpolyee){
      let emp=this.allemployees.find(e=>e.id==employee.id);
      let index=this.allemployees.indexOf(emp);
      this.allemployees[index]=employee;
      alert("employee updated");

    }

    deleteemployee(id:number){
      let emp=this.allemployees.find(e=>e.id==id);
      let index=this.allemployees.indexOf(emp);
      this.allemployees.splice(index);

    }

  // getemployees():Observable<IEmpolyee[]>{
  //   return this.http.get<IEmpolyee[]>(this.productUrl);

  // }
  // getemployee(id:number):Observable<IEmpolyee>{

  //   return this.getemployees().pipe(map((employees:IEmpolyee[])=>employees.find(e=>e.id==id))
  //   );
  // }


  // updateemployee(employee:IEmpolyee){
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  // return this.http.put<IEmpolyee>(`${this.productUrl}/${employee.id}`, employee, { headers })
  //     .pipe(
  //       tap(() => console.log('updateProduct: ' + employee.id)),
  //       // Return the product on an update
  //       map(() => employee),

  //     );
  // }
  // deleteemployee(id:number):Observable<{}>{
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //     const url = "assets/employee.json/1";
  //     return this.http.delete<IEmpolyee>(url, { headers })
  //       .pipe(
  //         tap(data => console.log('deleteProduct: ' + id)),

  //       );
  // }

  // createProduct(employee: IEmpolyee): Observable<IEmpolyee> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //   return this.http.post<IEmpolyee>(this.productUrl, employee, { headers })
  //     .pipe(
  //       tap(data => console.log('createProduct: ' + JSON.stringify(data))),

  //     );
  // }



}








