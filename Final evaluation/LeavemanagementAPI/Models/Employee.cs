using System;

namespace LeavemanagementAPI.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DOB { get; set; }
        public string DOJ { get; set; }

        public string Password { get; set; }

        public int Salary { get; set; }

        public string Email { get; set; }
    }
}