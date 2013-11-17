using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.Configuration;
using System.Xml;

namespace WebAPI.Configs
{
    /// <summary>
    /// Enable Cross domain sections to be loaded from the web.Config
    /// </summary>
    public class CrossDomainSection : ConfigurationSection
    {
        [ConfigurationProperty("AllowedCrossDomain", DefaultValue = "", IsRequired = false)]
        public string AllowedCrossDomain
        {
            get
            {
                return (string)this["AllowedCrossDomain"];
            }
            set
            {
                this["AllowedCrossDomain"] = value;
            }
        }
    }
}