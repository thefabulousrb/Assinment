using System;
using System.Linq;
using System.Collections.Generic;

public class Program
{
	List<Employee> employeeList = new List<Employee>();
	List<Salary> salaryList = new List<Salary>();
	public Program()
	{
		employeeList = new List<Employee>() {
			new Employee(){ EmployeeID = 1, EmployeeFirstName = "Rajiv", EmployeeLastName = "Desai", Age = 49},
			new Employee(){ EmployeeID = 2, EmployeeFirstName = "Karan", EmployeeLastName = "Patel", Age = 32},
			new Employee(){ EmployeeID = 3, EmployeeFirstName = "Sujit", EmployeeLastName = "Dixit", Age = 28},
			new Employee(){ EmployeeID = 4, EmployeeFirstName = "Mahendra", EmployeeLastName = "Suri", Age = 26},
			new Employee(){ EmployeeID = 5, EmployeeFirstName = "Divya", EmployeeLastName = "Das", Age = 20},
			new Employee(){ EmployeeID = 6, EmployeeFirstName = "Ridhi", EmployeeLastName = "Shah", Age = 60},
			new Employee(){ EmployeeID = 7, EmployeeFirstName = "Dimple", EmployeeLastName = "Bhatt", Age = 53}
		};

		salaryList = new List<Salary>() {
			new Salary(){ EmployeeID = 1, Amount = 1000, Type = SalaryType.Monthly},
			new Salary(){ EmployeeID = 1, Amount = 500, Type = SalaryType.Performance},
			new Salary(){ EmployeeID = 1, Amount = 100, Type = SalaryType.Bonus},
			new Salary(){ EmployeeID = 2, Amount = 3000, Type = SalaryType.Monthly},
			new Salary(){ EmployeeID = 2, Amount = 1000, Type = SalaryType.Bonus},
			new Salary(){ EmployeeID = 3, Amount = 1500, Type = SalaryType.Monthly},
			new Salary(){ EmployeeID = 4, Amount = 2100, Type = SalaryType.Monthly},
			new Salary(){ EmployeeID = 5, Amount = 2800, Type = SalaryType.Monthly},
			new Salary(){ EmployeeID = 5, Amount = 600, Type = SalaryType.Performance},
			new Salary(){ EmployeeID = 5, Amount = 500, Type = SalaryType.Bonus},
			new Salary(){ EmployeeID = 6, Amount = 3000, Type = SalaryType.Monthly},
			new Salary(){ EmployeeID = 6, Amount = 400, Type = SalaryType.Performance},
			new Salary(){ EmployeeID = 7, Amount = 4700, Type = SalaryType.Monthly}
		};
	}

	public static void Main()
	{
		Program program = new Program();

		program.Task1();

		program.Task2();

		program.Task3();
	}
	public static int computesal(List<Salary> salarylist, int a)
	{
		int sum = 0;

		var salary = from sal in salarylist
					 where sal.EmployeeID == a
					 select sal;
		foreach (var item in salary)
		{
			sum = sum + item.Amount;
		}
		return sum;
	}

	public static double computesal2(List<Salary> salarylist, int a)
	{
		int sum = 0;
		double avg;

		var salary = from sal in salarylist 
					 where sal.EmployeeID == a
					 select sal;
		foreach (var item in salary)
		{
			sum = sum + item.Amount;
		}
		avg = sum / salary.Count();


		return avg;
	}
	public void Task1()
	{
		Console.WriteLine("\n*****************EXECUTING TASK 1*********************\n");
					var query = from sal in salaryList
					join emp in employeeList
					on sal.EmployeeID equals emp.EmployeeID
					orderby emp.EmployeeFirstName
					group new { emp, sal } by emp.EmployeeID into abcd
					select new
					{
						fname =abcd.FirstOrDefault().emp.EmployeeFirstName,
						Lname =abcd.FirstOrDefault().emp.EmployeeLastName,
						sal = Program.computesal(salaryList,abcd.FirstOrDefault().emp.EmployeeID),
					};
					foreach (var item in query)
					{
						Console.WriteLine(item);
					}
	}

	public void Task2()
	{
		Console.WriteLine("\n*****************EXECUTING TASK 2*********************\n");
		var query =
				from emp in employeeList
				join sal in salaryList on emp.EmployeeID equals sal.EmployeeID
				orderby emp.Age descending
				group new { emp, sal } by emp.EmployeeID into abcd
				select new
				{
					Name = abcd.FirstOrDefault().emp.EmployeeFirstName,
					salary = abcd.FirstOrDefault().sal.Amount
				};

		foreach (var a in query.Take(2).Skip(1))
		{
			Console.WriteLine(a);
		}

	}


	public void Task3()
	{
		Console.WriteLine("\n*****************EXECUTING TASK 3*********************\n");
					var query = from emp in employeeList
					where emp.Age > 30
					join sal in salaryList on emp.EmployeeID equals sal.EmployeeID
					group new { emp, sal } by emp.EmployeeID into abcd
					select new
					{
						fname = abcd.FirstOrDefault().emp.EmployeeFirstName,
						Lname = abcd.FirstOrDefault().emp.EmployeeLastName,
						Mean = (Program.computesal2(salaryList, abcd.FirstOrDefault().emp.EmployeeID))
					};

					foreach(var item in query)
		{
			Console.WriteLine(item);
		}
	
	}
}

public enum SalaryType
{
	Monthly,
	Performance,
	Bonus
}

public class Employee
{
	public int EmployeeID { get; set; }
	public string EmployeeFirstName { get; set; }
	public string EmployeeLastName { get; set; }
	public int Age { get; set; }
}

public class Salary
{
	public int EmployeeID { get; set; }
	public int Amount { get; set; }
	public SalaryType Type { get; set; }
}