using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Configuration;

namespace WebAPI.Cors
{
    /// <summary>
    /// This handler handles neccesery corse functionality to allow cross domain access to this server
    /// Note that this handler reads web.Config for some settings
    /// Most of this code was picked up from the web from Carlos Figueira on the MSDN blog: 
    /// http://blogs.msdn.com/b/carlosfigueira/archive/2012/02/20/implementing-cors-support-in-asp-net-web-apis.aspx
    /// </summary>
    public class CorsHandler : DelegatingHandler
    {
        private const string Origin = "Origin";
        private const string AccessControlRequestMethod = "Access-Control-Request-Method";
        private const string AccessControlRequestHeaders = "Access-Control-Request-Headers";
        private const string AccessControlAllowOrigin = "Access-Control-Allow-Origin";
        private const string AccessControlAllowMethods = "Access-Control-Allow-Methods";
        private const string AccessControlAllowHeaders = "Access-Control-Allow-Headers";

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            bool isCorsRequest = request.Headers.Contains(Origin);
            bool isPreflightRequest = request.Method == HttpMethod.Options;
            if (isCorsRequest)
            {
                //We can specify required host origin in Web.Config, if empty we allow all domains
                var Cfg = WebConfigurationManager.GetWebApplicationSection("CrossDomainSection") as Configs.CrossDomainSection;
                string AllowedDomain = Cfg.AllowedCrossDomain;
                if (AllowedDomain == null)
                    AllowedDomain = "";
                string Org = request.Headers.GetValues(Origin).First();
                if (isPreflightRequest)
                {
                    return Task.Factory.StartNew<HttpResponseMessage>(() =>
                    {
                        HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
                        response.Headers.Add(AccessControlAllowOrigin, AllowedDomain.Length > 0 ? AllowedDomain : Org);
                        string accessControlRequestMethod = request.Headers.GetValues(AccessControlRequestMethod).FirstOrDefault();
                        if (accessControlRequestMethod != null)
                            response.Headers.Add(AccessControlAllowMethods, accessControlRequestMethod);
                        string requestedHeaders = string.Join(", ", request.Headers.GetValues(AccessControlRequestHeaders));
                        if (!string.IsNullOrEmpty(requestedHeaders))
                            response.Headers.Add(AccessControlAllowHeaders, requestedHeaders);
                        return response;
                    }, cancellationToken);
                }
                else
                {
                    return base.SendAsync(request, cancellationToken).ContinueWith<HttpResponseMessage>(t =>
                        {
                            HttpResponseMessage resp = t.Result;
                            resp.Headers.Add(AccessControlAllowOrigin, AllowedDomain.Length > 0 ? AllowedDomain : Org);
                            return resp;
                        }
                    );
                }
            }
            return base.SendAsync(request, cancellationToken).ContinueWith<HttpResponseMessage>(t =>
                   {
                       HttpResponseMessage resp = t.Result;
                       return resp;
                   }
            );
        }
    }
}