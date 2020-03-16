using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Postassignment.Models
{
    public class Appdbcontext:DbContext
    {

        public Appdbcontext(DbContextOptions<Appdbcontext> options):base(options)
        {

        }
        public DbSet<post> posttable { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Seed();
   
        }
    }
}
