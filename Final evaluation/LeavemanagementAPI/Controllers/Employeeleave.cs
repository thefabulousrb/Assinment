using System.Collections.Generic;
using System.Linq;
using LeavemanagementAPI.Data;
using LeavemanagementAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace LeavemanagementAPI.Controllers
{
    [Route ("api/[controller]")]
   
    public class Employeeleave:ControllerBase
    {
        private readonly datacontext _datacontext;
        public Employeeleave(datacontext datacontext){

                _datacontext=datacontext;
        }
    

     [HttpGet]
             public ActionResult<IEnumerable<EmployeeLeave>> Get(){
                 
                 var empleavelist=_datacontext.EmployeeLeave.ToList();
                 return Ok(empleavelist);
             }

              [HttpGet("{id}")]
             public ActionResult<IEnumerable<EmployeeLeave>> Get(int id){
                var list=new List<EmployeeLeave>();
                 for(int i=0;i<_datacontext.EmployeeLeave.ToList().Count;i++){

                    if( _datacontext.EmployeeLeave.ToList()[i].Employeeid==id){

                        list.Add(_datacontext.EmployeeLeave.ToList()[i]);

                    }
                 }

                 return Ok(list);


                 
             }
            [HttpPost]
                public ActionResult<IEnumerable<EmployeeLeave>> Post([FromBody]EmployeeLeave empleave){
                    
                    _datacontext.EmployeeLeave.Add(empleave);
                    _datacontext.SaveChanges();
                    return Ok(_datacontext.EmployeeLeave);
                
                }
            
        [HttpPut("{id}")]
        public ActionResult<EmployeeLeave> Put(int id,[FromBody]EmployeeLeave empleave)
        {
           var employeeleave=_datacontext.EmployeeLeave.FirstOrDefault(c=>c.id==id);
                
                    employeeleave.LeaveId=empleave.LeaveId;
                    employeeleave.Employeeid=empleave.Employeeid;
                    employeeleave.Startdate=empleave.Startdate;
                    employeeleave.Enddate=empleave.Enddate;
                    employeeleave.Status=empleave.Status;

                _datacontext.SaveChanges();
            return Ok();

        }
    //this method will delete all leaves from particular employee
        [HttpDelete("{id}")]
             public ActionResult<IEnumerable<EmployeeLeave>> Delete(int id){
                 
                 var employeeleave=_datacontext.EmployeeLeave.ToList();
                 for(int i=0;i<employeeleave.Count ;i++){

                        if(employeeleave[i].Employeeid==id){
                            _datacontext.EmployeeLeave.Remove(employeeleave[i]);
                        }

                     
                 }
                 _datacontext.SaveChanges();
                 return _datacontext.EmployeeLeave;
             }


            
        
}
}