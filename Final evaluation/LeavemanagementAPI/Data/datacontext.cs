using LeavemanagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LeavemanagementAPI.Data
{
    public class datacontext : DbContext
    {
        public datacontext(DbContextOptions<datacontext> options):base(options){}

        public  DbSet<Employee> employees{get; set;}
             public  DbSet<Leave> Leaves{get; set;}

             public  DbSet<EmployeeLeave> EmployeeLeave{get; set;}
    }
}