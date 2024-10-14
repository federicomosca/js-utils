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