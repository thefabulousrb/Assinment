using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment3
{
    public class product
    {
        public string name;
        public double price;
        public int quantity;
        public string type;


        public product(string name,double price,int quantity,string type) 
        {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
            this.type = type;
        
        }
    }
}
