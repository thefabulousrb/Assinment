using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Postassignment.Models
{
    public interface Ipost
    {
        
        public IEnumerable<post> getallposts();
        public post addpost(post post);

        public post Updatepost(post updatedpost);

        public void deletepost(int id);

        public post selecpostbyid(int id);
     
        
    }
}
