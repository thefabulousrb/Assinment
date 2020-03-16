using Postassignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Postassignment.ViewModels
{
    public class Homelist
    {
        public IEnumerable<post> allposts { get; set; }
        public post newpost { get; set; }

        public string C_user { get; set; }

        public string comment { get; set; }

        public string S_user { get; set; }

        public int c_id { get; set; }
    }
}
