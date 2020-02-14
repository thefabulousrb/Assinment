using System;
using System.Collections.Generic;
using System.Linq;
namespace Assignment5
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<int,string> PM_dictionary = new Dictionary<int, string> { {1998, "Atal Bihari Vajpayee"}, {  2014, "Narendra Modi" }, {2004, "Manmohansingh" } };
            Console.WriteLine("Prime minister of 2004:"+PM_dictionary[2004]);
            PM_dictionary.Add(2019, "Narendra Modi");
            
            foreach(KeyValuePair<int,string> PM in PM_dictionary.OrderBy(key => key.Key))
            {
                Console.WriteLine(PM);
            }
        
        }   
    }
}
