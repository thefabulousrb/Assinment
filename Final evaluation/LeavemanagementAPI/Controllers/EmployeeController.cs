using System.Collections.Generic;
using LeavemanagementAPI.Data;
using LeavemanagementAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net;
using System;

namespace LeavemanagementAPI.Controllers
{
    [Route ("api/[controller]")]
   
    public class EmployeeController:ControllerBase
    {
        private readonly datacontext _datacontext;
             public EmployeeController(datacontext datacontext){
                 _datacontext =datacontext;
             }

             [HttpGet]
             public ActionResult<IEnumerable<Employee>> Get(){
                 
                 var emplist=_datacontext.employees.ToList();
                 return Ok(emplist);
             }

              [HttpGet("{id}")]
             public ActionResult<IEnumerable<Employee>> Get(int id){
                 
                 var employee=_datacontext.employees.FirstOrDefault(c=>c.Id==id);
                 return Ok(employee);
             }
            [HttpPost]
                public ActionResult<IEnumerable<Employee>> Post([FromBody]Employee emp){
                    
                    _datacontext.employees.Add(emp);
                    _datacontext.SaveChanges();
                    return Ok(_datacontext.employees);
                
                }
            
        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id,[FromBody]Employee emp)
        {
           var employee=_datacontext.employees.FirstOrDefault(c=>c.Id==id);
                if(employee==null){

                }
                
                
                employee.Name=emp.Name;
                employee.Email=emp.Email;
                employee.DOB=emp.DOB;
                employee.DOJ=emp.DOJ;
                employee.Salary=emp.Salary;
                employee.Password=emp.Password;

                _datacontext.SaveChanges();
            return Ok();

        }

        [HttpDelete("{id}")]
             public ActionResult<IEnumerable<Employee>> Delete(int id){
                 
                 var employee=_datacontext.employees.FirstOrDefault(c=>c.Id==id);
                 _datacontext.employees.Remove(employee);
                 _datacontext.SaveChanges();
                 return Ok(employee);
             }


        }
    }
