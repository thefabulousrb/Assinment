using System.Collections.Generic;
using System.Linq;
using LeavemanagementAPI.Data;
using LeavemanagementAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace LeavemanagementAPI.Controllers
{   
    [Route ("api/[controller]")]
   
    public class LeaveController:ControllerBase
    {
        private readonly datacontext _datacontext;
        public LeaveController(datacontext datacontext){
            _datacontext=datacontext;
        }

         [HttpGet]
             public ActionResult<IEnumerable<Leave>> Get(){
                 
                 var leavelist=_datacontext.Leaves.ToList();
                 return Ok(leavelist);
             }

              [HttpGet("{id}")]
             public ActionResult<IEnumerable<Leave>> Get(int id){
                 
                 var Leave=_datacontext.Leaves.FirstOrDefault(c=>c.Id==id);
                 return Ok(Leave);
             }
            [HttpPost]
                public ActionResult<IEnumerable<Leave>> Post([FromBody]Leave leave){
                    
                    _datacontext.Leaves.Add(leave);
                    _datacontext.SaveChanges();
                    return Ok(_datacontext.Leaves);
                
                }
            
        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id,[FromBody]Leave leave)
        {
           var Leave=_datacontext.Leaves.FirstOrDefault(c=>c.Id==id);
                if(Leave==null){

                }
                Leave.Name=leave.Name;
                Leave.Maxallowed=leave.Maxallowed;
                 _datacontext.SaveChanges();
            return Ok(Leave);

        }

        [HttpDelete("{id}")]
             public ActionResult<IEnumerable<Employee>> Delete(int id){
                 
                 var Leave=_datacontext.Leaves.FirstOrDefault(c=>c.Id==id);
                 _datacontext.Leaves.Remove(Leave);
                 _datacontext.SaveChanges();
                 return Ok(Leave);
             }

    
    
    }
}