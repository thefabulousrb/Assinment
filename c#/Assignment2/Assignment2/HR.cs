using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment2
{
    class HR:Employee
    {   
        public HR()
        {
            Console.WriteLine("HR:Enter Id");
            Id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("HR:Enter Name");
            Name = Console.ReadLine();
            Console.WriteLine("HR:Enter Designation");
            Designation = Console.ReadLine();
            Console.WriteLine("HR:Enter Experience");
            Experience = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("HR:Enter Joining date");
            date = Console.ReadLine();

        }
        public override void Caculation()
        {
            Annualsalary = 2000 * Experience;
            Console.WriteLine("Basic Salary of HR is" + Annualsalary);
        }
    }
}
