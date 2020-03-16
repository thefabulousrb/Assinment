using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Postassignment.Models;
using Postassignment.ViewModels;

namespace Postassignment.Controllers
{
    public class HomeController : Controller
    {
        private readonly Ipost _post;

        public HomeController(Ipost post)
        {
            _post = post;
        }

        public ViewResult Index()
        {
            var model = _post.getallposts();
            return View(model);
           
        }
        [HttpGet]
        public ViewResult makepost()
        {
            Homelist homelistviewmodel = new Homelist()
            {
                allposts = _post.getallposts(),
                newpost = {},
            

            };
            return View("makepost",homelistviewmodel);
        }
        
        public ViewResult makepost(Homelist homelistviewmodel)
        {
           var id = _post.getallposts().Max(c => c.p_id) + 1;
            Homelist list = new Homelist();
            var newpost = new post()
            {
                p_id = id,
                p_content = homelistviewmodel.newpost.p_content,
                P_user = homelistviewmodel.newpost.P_user,
                comments = new List<Icomment>(),
                like=0

              
            };
            list.newpost = _post.addpost(newpost);
            list.allposts = _post.getallposts();
            return View("makepost", list);
            
        }

        public ViewResult details(int id)
        {
            var newpost=_post.selecpostbyid(id);
            return View(newpost);
        }

        [HttpGet]
        public ViewResult makecomment(int id)
        {
            Homelist homelistviewmodel = new Homelist()
            {
                newpost=_post.selecpostbyid(id),

            };
            return View("comment", homelistviewmodel);
        }

       
        public ViewResult makecomment(Homelist homelistmodelview,int id)
        {
            var post = _post.getallposts().FirstOrDefault(c => c.p_id == id );
          
            var Id = 3;
            id++;
            var newcomment = new Icomment()
            {
                commentid = Id,
                comment = homelistmodelview.comment,
                commentby = homelistmodelview.C_user,
                Like = 0,

            };
           
            post.comments.Add(newcomment);
            homelistmodelview.newpost = post;
            return View("comment",homelistmodelview);

        
        }

        public ViewResult addlike(int id)
        {
            Homelist list = new Homelist();
            list.allposts = _post.getallposts();
            var post = list.allposts.FirstOrDefault(c => c.p_id == id);
            int index = list.allposts.ToList().FindIndex(c => c.p_id == id);
            post.like++;
            list.allposts.ToList().Insert(index, post);
            return View("makepost", list);
            
        }

        [HttpGet]
        public ViewResult sharepost(int id)
        {
            Homelist homelist = new Homelist();
            homelist.newpost = _post.getallposts().FirstOrDefault(c => c.p_id == id);
            return View("sharepost",homelist);
        }

        [HttpPost]
        public ViewResult sharepost(Homelist homelist,int id)
        {
            var Id = _post.getallposts().Max(c => c.p_id) + 1;
            Homelist list = new Homelist();
            var oldpost = _post.selecpostbyid(id);
            var newpost = new post()
            {
                p_id = Id,
                p_content = oldpost.p_content,
                P_user = "Post shared by:"+homelist.S_user+" src:"+oldpost.P_user,
                comments = new List<Icomment>(),
                like = 0


            };
            list.newpost = _post.addpost(newpost);
            list.allposts = _post.getallposts();
            return View("makepost", list);
        }

        [HttpGet]
        public ViewResult sharecomment(int id,int cid)
        {
            Homelist homelist = new Homelist();
            homelist.newpost = _post.getallposts().FirstOrDefault(c => c.p_id == id);
            homelist.c_id = cid;
            return View("sharecomment", homelist);
        }
        
        
        [HttpPost]
        public ViewResult sharecomment(int id,int cid,Homelist homelst)
        {
            Homelist homelist = new Homelist();
            var post = new post();
            homelist.newpost = _post.getallposts().FirstOrDefault(c => c.p_id == id);
            var Id = homelist.newpost.comments.Max(c => c.commentid) + 1;
            var oldcomment = homelist.newpost.comments.Find(c => c.commentid == cid);
            var comment = new Icomment() {
                commentid = Id,
                comment = oldcomment.comment,
                commentby = "Comment Shared as comment by: " + homelst.S_user + " src: " + oldcomment.commentby,
            
            };
            homelist.newpost.comments.Add(comment);
            post.p_id= _post.getallposts().Max(c => c.p_id) + 1;
            post.p_content = oldcomment.comment;
            post.P_user = "Comment Shared as post by: " + homelst.S_user + " src: " + oldcomment.commentby;
            post.comments = new List<Icomment>();
            post.like = 0;
            homelist.newpost = _post.addpost(post);
            homelist.allposts = _post.getallposts();

        
            
             return View("makepost", homelist);
            
             
    

        }

        public ViewResult likecomment(int id,int cid)
        {
            Homelist homelist = new Homelist();
            homelist.allposts = _post.getallposts();
            var post = homelist.allposts.FirstOrDefault(c => c.p_id == id);
            var comment = post.comments.FirstOrDefault(c => c.commentid == cid);
            var index = post.comments.FindIndex(c => c.commentid == cid);
            comment.Like++;
            post.comments[index] = comment;
            homelist.newpost = post;
            return View("comment", homelist);

        }



    }
}
