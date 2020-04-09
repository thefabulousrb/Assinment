using System.ComponentModel.DataAnnotations;

namespace LeavemanagementAPI.Models
{
    public class EmployeeLeave
    {
        
     [Key]public  int id{get; set;}
        public int LeaveId{get; set;}
        public int Employeeid{get; set;}
        public string Startdate{get; set;}
        public string Enddate{get; set;}
        
        public string Status{get; set;}

        
    }
}