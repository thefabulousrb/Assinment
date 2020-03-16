using System;
using System.Collections.Generic;

using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Postassignment.Models
{
    public class post
    {

        [Key]
        public int p_id { get; set; }
        public string p_content { get; set; }
        public string P_user { get; set; }

        public List<Icomment> comments; 

        public int like { get; set; }
       
    }
}
