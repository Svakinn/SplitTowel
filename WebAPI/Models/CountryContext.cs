using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    //Simulated dbContext for the MetadataStore to use
    public class CountryContext : DbContext 
    {
        private const string _contextName = "CountryContext";
        public static string ContextName { get { return _contextName; } }
        public CountryContext() : base(ContextName)
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }

        public DbSet<Country> Countries { get; set; }
    }
}