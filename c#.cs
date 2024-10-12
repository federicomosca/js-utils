using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Services;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace 
    FM.PAP.UTILS
{
    public class Utils
    {
        #region STANDARD UPDATE PLUGIN
        public class Update : IPlugin
        {
            public void Execute(IServiceProvider serviceProvider)
            {
                ITracingService tracingService =
                (ITracingService)serviceProvider.GetService(typeof(ITracingService));

                IPluginExecutionContext context = (IPluginExecutionContext)
                serviceProvider.GetService(typeof(IPluginExecutionContext));

                if (context.InputParameters.Contains("Target") &&
                    context.InputParameters["Target"] is Entity)
                {
                    Entity target = (Entity)context.InputParameters["Target"];
                    Entity preImage = (Entity)context.PreEntityImages["PreImage"];

                    IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                    IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);
                    try
                    {

                    }
                    catch (FaultException<OrganizationServiceFault> ex)
                    {
                        throw new InvalidPluginExecutionException("An error occurred in FollowUpPlugin.", ex);
                    }
                    catch (ApplicationException ex)
                    {
                        throw new InvalidPluginExecutionException(ex.Message);
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }
                }
            }
        }
        #endregion

        #region STANDARD CREATE PLUGIN
        public class Create : IPlugin
        {
            public void Execute(IServiceProvider serviceProvider)
            {
                ITracingService tracingService =
                (ITracingService)serviceProvider.GetService(typeof(ITracingService));

                IPluginExecutionContext context = (IPluginExecutionContext)
                serviceProvider.GetService(typeof(IPluginExecutionContext));

                if (context.InputParameters.Contains("Target") &&
                    context.InputParameters["Target"] is Entity)
                {
                    Entity target = (Entity)context.InputParameters["Target"];

                    IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                    IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);
                    try
                    {

                    }
                    catch (FaultException<OrganizationServiceFault> ex)
                    {
                        throw new InvalidPluginExecutionException("An error occurred in FollowUpPlugin.", ex);
                    }
                    catch (ApplicationException ex)
                    {
                        tracingService.Trace("ApplicationException: {0}", ex.ToString());
                        throw new InvalidPluginExecutionException(ex.Message);
                    }
                    catch (Exception ex)
                    {
                        tracingService.Trace("FollowUpPlugin: {0}", ex.ToString());
                        throw ex;
                    }
                }
            }
        }
        #endregion

        public static void CheckMandatoryFieldsOnCreate(Dictionary<string, string> fields, Entity target)
        {
            try
            {
                List<string> missingFields = fields.Where(x => !target.Contains(x.Key)).Select(x => x.Value).ToList();
                if (missingFields.Count > 0)
                {
                    string fieldName = string.Join(", ", missingFields);
                    throw new InvalidPluginExecutionException($"{(missingFields.Count > 1 ? "I seguenti campi sono obbligatori: " : "Il seguente campo è obbligatorio: ")} {fieldName}.");
                }
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                throw new InvalidPluginExecutionException("An error occurred in FollowUpPlugin.", ex);
            }
            catch (ApplicationException ex)
            {
                throw new InvalidPluginExecutionException(ex.Message);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void CheckMandatoryFieldsOnUpdate(Dictionary<string, string> fields, Entity target)
        {
            try
            {
                List<string> missingFields = fields.Where(x => target.Contains(x.Key) && target.GetAttributeValue<object>(x.Key) == null).Select(x => x.Value).ToList();
                if (missingFields.Count > 0)
                {
                    string fieldName = string.Join(", ", missingFields);
                    throw new InvalidPluginExecutionException($"{(missingFields.Count > 1 ? "I seguenti campi sono obbligatori: " : "Il seguente campo è obbligatorio: ")} {fieldName}.");
                }
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                throw new InvalidPluginExecutionException("An error occurred in FollowUpPlugin.", ex);
            }
            catch (ApplicationException ex)
            {
                throw new InvalidPluginExecutionException(ex.Message);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void CheckReadOnlyFields(Dictionary<string, string> fields, Entity target)
        {
            try
            {
                List<string> missingFields = fields.Where(x => target.Contains(x.Key)).Select(x => x.Value).ToList();
                if (missingFields.Count > 0)
                {
                    string fieldName = string.Join(", ", missingFields);
                    throw new InvalidPluginExecutionException($"{(missingFields.Count > 1 ? "I seguenti campi sono obbligatori: " : "Il seguente campo è obbligatorio: ")} {fieldName}.");
                }
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                throw new InvalidPluginExecutionException("An error occurred in FollowUpPlugin.", ex);
            }
            catch (ApplicationException ex)
            {
                throw new InvalidPluginExecutionException(ex.Message);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static T GetAttributeFromTargetOrPreImage<T>(string logicalName, Entity target, Entity preImage)
        {
            return target.Contains(logicalName) ? target.GetAttributeValue<T>(logicalName) : preImage.GetAttributeValue<T>(logicalName);
        }

        public class RandomUrlGenerator
        {
            private static Random random = new Random();

            public static string GenerateRandomUrl()
            {
                string[] protocols = { "http", "https" };
                string[] domains = { "teams", "teams.microsoft", "microsoft.teams", "microsoft" };
                string[] tlds = { "com", "org", "net", "io" };

                StringBuilder urlBuilder = new StringBuilder();

                // Protocollo
                urlBuilder.Append(protocols[random.Next(protocols.Length)]);
                urlBuilder.Append("://");

                // Sottodominio (opzionale)
                if (random.Next(2) == 0)
                {
                    urlBuilder.Append(GenerateRandomString(3, 7));
                    urlBuilder.Append(".");
                }

                // Dominio
                urlBuilder.Append(domains[random.Next(domains.Length)]);
                urlBuilder.Append(".");
                urlBuilder.Append(tlds[random.Next(tlds.Length)]);

                // Percorso (opzionale)
                if (random.Next(2) == 0)
                {
                    int segments = random.Next(1, 4);
                    for (int i = 0; i < segments; i++)
                    {
                        urlBuilder.Append("/");
                        urlBuilder.Append(GenerateRandomString(3, 10));
                    }
                }

                // Parametri di query (opzionali)
                if (random.Next(2) == 0)
                {
                    urlBuilder.Append("?");
                    int parameters = random.Next(1, 4);
                    for (int i = 0; i < parameters; i++)
                    {
                        if (i > 0) urlBuilder.Append("&");
                        urlBuilder.Append(GenerateRandomString(2, 5));
                        urlBuilder.Append("=");
                        urlBuilder.Append(GenerateRandomString(2, 8));
                    }
                }

                return urlBuilder.ToString();
            }

            private static string GenerateRandomString(int minLength, int maxLength)
            {
                int length = random.Next(minLength, maxLength + 1);
                const string chars = "abcdefghijklmnopqrstuvwxyz0123456789";
                return new string(Enumerable.Repeat(chars, length)
                    .Select(s => s[random.Next(s.Length)]).ToArray());
            }
        }
    }
}

