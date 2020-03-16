using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Postassignment.Models
{
    public class Mockpost : Ipost
    {

        public List<post> allposts;
        public Mockpost()
        {
            allposts = new List<post>(){
        new post {P_user="ayaz", p_id = 1, p_content = "1st post", like=0,comments=new List<Icomment>{ new Icomment {comment="hello",commentby="ayaz",Like=0,commentid
        =1},new Icomment {comment="hello",commentby="ayaz",Like=0,commentid=2 } } },
        new post {P_user="ayaz", p_id = 2, p_content = "2nd post",like=0,comments=new List<Icomment>{ new Icomment {comment="hello",commentby="ayaz", Like = 0,commentid=3 } } }, 
        };
        }
        public post addpost(post post)
        {
           
           //post.p_id = allposts.Max(c => c.p_id) + 1;
          

            allposts.Add(post);
            return post;
        }

        public void deletepost(int id)
        {
            var post = allposts.FirstOrDefault(c => c.p_id == id);
            if (post != null)
            { allposts.Remove(post); 
            }

        }

        public IEnumerable<post> getallposts()
        {
            return allposts;
        }

        public post selecpostbyid(int id)
        {
         
            return allposts.FirstOrDefault(c => c.p_id == id);
        }

        public post Updatepost(post updatedpost)
        {
            var post = allposts.FirstOrDefault(c => c.p_id == updatedpost.p_id);
            if (post != null)
            {
                post.P_user = updatedpost.P_user; 
                post.p_id = updatedpost.p_id;
                post.p_content = updatedpost.p_content;
                post.comments = updatedpost.comments;
                
            }
            return post;
        }
    }
}
