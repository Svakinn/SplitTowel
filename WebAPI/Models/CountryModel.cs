using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    //Base country class
    public class Country
    {
        [Key]
        public string Id { get; set; }
        [Required, StringLength(maximumLength: 50)] 
        public string Name { get; set; }
        [StringLength(maximumLength: 255)] 
        public string ToolTip { get; set; }
    }

    //Class to populate data
    public static class CountryPopulate
    {
        public static List<Country> PopulateCountries()
        {
            List<Country> ll = new List<Country>();
            ll.Add(new Country { Id = "IS", Name = "Iceland", ToolTip="Where volcanos stop plains" });
            ll.Add(new Country { Id = "GB", Name = "Great Britain", ToolTip = "Birthplace of socker" });
            ll.Add(new Country { Id = "DK", Name = "Denmark", ToolTip = "Where bacon is grown" });
            ll.Add(new Country { Id = "US", Name = "United State", ToolTip = "Guns and roses" });
            ll.Add(new Country { Id = "DE", Name = "Germany", ToolTip = "Home of beer" });
            ll.Add(new Country { Id = "CH", Name = "Switzerland", ToolTip = "Banksters heaven" });
            return ll;
        }
    }
}