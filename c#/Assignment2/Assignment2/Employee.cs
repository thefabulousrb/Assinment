using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment2
{
   abstract class Employee
    {
       public int Id;
        public string Name;
        public string Designation;
        public double Experience;
        public double Annualsalary;
        public string date;

       

       public abstract  void Caculation();
    }
}
