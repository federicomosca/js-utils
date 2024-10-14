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