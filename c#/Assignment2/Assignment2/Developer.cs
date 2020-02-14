using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment2
{
    class Developer:Employee
    {
        public Developer()
        {
            Console.WriteLine("Emp:Enter Id");
            Id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Emp:Enter Name");
            Name = Console.ReadLine();
            Console.WriteLine("Emp:Enter Designation");
            Designation = Console.ReadLine();
            Console.WriteLine("Emp:Enter Experience");
            Experience = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Emp:Enter Joining date");
            date = Console.ReadLine();
        }
        public override void Caculation()
        {
            Annualsalary = 1000 * Experience;
            Console.WriteLine("Basic Salary of Developer is" + Annualsalary);
        }
    }
}
