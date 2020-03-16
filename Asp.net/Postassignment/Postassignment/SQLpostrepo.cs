using Postassignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Postassignment
{
    public class SQLpostrepo : Ipost

    {
        private readonly Appdbcontext _context;
        public SQLpostrepo(Appdbcontext context)
        {
            _context = context;
        }
        
        
        public post addpost(post post)
        {
            _context.posttable.Add(post);
            _context.SaveChanges();
            return post;
        }   

        public void deletepost(int id)
        {
            var posttodelete = _context.posttable.Find(id);
            _context.posttable.Remove(posttodelete);
        }

        public IEnumerable<post> getallposts()
        {
            return _context.posttable;
        }

        public post selecpostbyid(int id)
        {
            var selectedpost = _context.posttable.Find(id);
            return selectedpost;
        }

        public post Updatepost(post updatedpost)
        {
          var updatepost=  _context.posttable.Attach(updatedpost);
            updatepost.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return updatedpost;

        
        }
    }
}
