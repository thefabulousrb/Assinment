using System;

public delegate void Getnamecalleddel();
public delegate void GetIdcalleddel();
public delegate void Getdepartmentnamecalleddel();

public class Employee {
    string name;
    string Departmentname;
    int id;
    
    public Employee(string x,string y,int a)
    {
        name=x;
        Departmentname=y;
        id=a;
    }
    
    public void GetIdcalled(){
    Console.WriteLine("GetId() method called");
        
    }
    
    public void Getnamecalled(){
        
    Console.WriteLine("Getname() method called");
        
    }
    public void Getdepartmentnamecalled()
    {
  
    Console.WriteLine("Getdepartmentname() method called");
        
    }
    
    
    
    public void GetId(GetIdcalleddel obj){
    obj();    
    Console.WriteLine("Employee Id is:"+id);
    }
    public void  Getname(Getnamecalleddel obj){
    
    obj();    
    Console.WriteLine("Employee Name is:"+name);
        
    }
    public void Getdepartmentname(Getdepartmentnamecalleddel obj){
    
    obj();
    Console.WriteLine("Employee Dept is:"+Departmentname);
    }
  
    public void Getname(string name)
    {
     this.name=name;
     Console.WriteLine("Employee updated Name is:"+name);
     
    }
    public void GetId(int number)
    {
     id=number;
     Console.WriteLine("Employee updated Id is:"+id);
    }
    public void Getdepartmentname(string Departmentname){
        this.Departmentname=Departmentname;
        Console.WriteLine("Employee updated Dept is:"+Departmentname);
    }
    
}

class @main{
    
    static void Main() {
    string E_name;
    string E_departmentname;
    int E_id;
    
    Console.WriteLine("Enter Empployee name");
    E_name=Console.ReadLine();
    Console.WriteLine("Enter Empployee Departmentname");
    E_departmentname=Console.ReadLine();
    Console.WriteLine("Enter Empployee Id");
    E_id=Convert.ToInt32(Console.ReadLine());
    
    Employee emp1=new Employee(E_name,E_departmentname,E_id);
    Getnamecalleddel GNC=new Getnamecalleddel(emp1.Getnamecalled);
    Getdepartmentnamecalleddel GDC =new Getdepartmentnamecalleddel(emp1.Getdepartmentnamecalled);
    GetIdcalleddel GIC = new GetIdcalleddel(emp1.GetIdcalled);
    emp1.Getname(GNC);
    emp1.GetId(GIC);
    emp1.Getdepartmentname(GDC);
    
    string EU_name;
    string EU_departmentname;
    int EU_id;

    Console.WriteLine("Enter new name for employee ");
    EU_name=Console.ReadLine();
    Console.WriteLine("Enter new department for  Empployee ");
    EU_departmentname=Console.ReadLine();
    Console.WriteLine("Enter new id for Empployee");
    EU_id=Convert.ToInt32(Console.ReadLine());
    
    
    emp1.Getname(EU_name);
    emp1.GetId(EU_id);
    emp1.Getdepartmentname(EU_departmentname);
    
}
}