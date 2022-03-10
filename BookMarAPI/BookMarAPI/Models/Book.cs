using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMarAPI.Models
{
    public class Book
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Writer { get; set; }
        public string Publisher { get; set; }

    }
}
