using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;

using System.Web.Http;
using Breeze.WebApi2;
using Breeze.ContextProvider.EF6;

using WebAPI.Models;

namespace WebAPI.Controllers
{
    [BreezeController]
    public class CountryController : ApiController
    {
        public CountryController()
        {
            this.ctx = new CountryContext();
        }
        private CountryContext ctx;

        [HttpGet]
        public string MetaData()
        {
            EFContextProvider<CountryContext> publicCSP = new EFContextProvider<CountryContext>();
            return publicCSP.Metadata();
        }

        [HttpGet]
        //Router maps this to: /breeze/Country/Hello -- http://localhost:55414/breeze/Country/Hello as this project is currently configured
        public IEnumerable<string> Hello()
        {
            return new string[] { "value1", "value2" };
        }

        //Router maps this to: http://localhost:55414/breeze/Country/GetCountries
        [HttpGet]
        public IQueryable<Country> GetCountries()
        {
            List<Country> cc = Models.CountryPopulate.PopulateCountries();
            return cc.AsQueryable<Country>();
        }


    }
}