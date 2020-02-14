using System;
using System.Collections.Generic;

namespace Assignment3
{
    class Program
    {
        static void Main(string[] args)
        {
            List<product> products = new List<product>()
            { new product("lettuce", 10.5, 50, "Leafygreen"),
              new product("cabbage",20,100,"Cruciferous"),
              new product("pumpkin",30,30,"Marrow"),
              new product("cauliflower",10,25,"Cruciferous"),
              new product("zucchini",20.5,50,"Marrow"),
              new product("yam",30,50,"root"),
              new product("spinach",10,100,"Leafygreen"),
              new product("broccoli",20.2,75,"Cruciferous"),
              new product("garlic",30,20,"Leafygreen"),
              new product("Silverbeet",10,50,"Marrow")};

            int count = products.Count;
            Console.WriteLine("Total items availible are:\t" + count);

            products.Add(new product("potato", 10, 50, "root"));
            Console.WriteLine("Total items availible are:\t" + products.Count + "(updated)");

            foreach (var obj in products)
            {
                if (obj.type == "Leafygreen")
                {
                    Console.WriteLine(obj.name);
                }

            }
            for (int i = 0; i < products.Count; i++)
            {
                if (products[i].name == "garlic")
                {
                    products.Remove(products[i]);
                }

            }
            Console.WriteLine("Total items availible are:\t" + products.Count + "(updated:garlic removed)");
            double amount, lettuce_price=0, broccoli_price=0,zucchini_price=0 ;
            for (int i = 0; i < products.Count; i++)
            {
                if (products[i].name == "cabbage")
                {
                    products[i].quantity += 50;
                    Console.WriteLine("50 cabbage added");
                    Console.WriteLine("New cabbage quantity is:\t" + products[i].quantity);
                }
                else if(products[i].name=="lettuce")
                {
                    lettuce_price = products[i].price;
                }
                else if(products[i].name=="zucchini")
                {
                    zucchini_price = products[i].price;
                }
                else if(products[i].name=="broccoli")
                {
                    broccoli_price = products[i].price;
                }

            }
            amount = (1 * broccoli_price) + (2 * zucchini_price) + (1 * lettuce_price);
            Console.WriteLine("total bill amount for user is:\t"+amount+"Rs");
           
        }
    }
}
