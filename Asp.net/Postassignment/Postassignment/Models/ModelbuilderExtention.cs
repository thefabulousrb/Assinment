using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Postassignment.Models
{
    public static class ModelbuilderExtention
    {
      public static void Seed(this ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<post>().HasData(new post {P_user="ayaz", p_id = 1, p_content = "First post" });
            modelBuilder.Entity<Icomment>().HasNoKey();

        }
    }
}
