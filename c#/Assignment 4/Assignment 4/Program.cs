using System;
using System.Collections.Generic;
using System.Collections;
using System.Threading.Tasks;
using System.Linq;
namespace Assignment_4
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] words ={ "Boat", "house", "cat", "river", "cupbooard" };
            
            foreach (var word in words)
            {
                Console.WriteLine(word + "s");
            }
            words[1] = "home";
            Console.WriteLine("\nafter updation:");
            foreach (var word in words)
           {
                Console.WriteLine(word);
           }
            List<string> words1 = words.ToList();
            words1.Add("newword");
            Console.WriteLine("\nnumber of words in"+words1.Count);
            words = words1.ToArray();

           foreach(var word in words)
           {
                if(word.Length==7)
                {
                    Console.WriteLine("7 letter word is:"+word);
                }
            }
            Console.WriteLine("word on third osition is:"+words[2]);

           Array.Sort(words);
           Console.WriteLine("sorted array is:");
           foreach (var word in words)
           {
                Console.WriteLine(word);
           }
            Array.Reverse(words);
            Console.WriteLine("Reversed array is:");
            foreach (var word in words)
            {
                Console.WriteLine(word);
            }

        }

    }
}

