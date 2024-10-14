void Trace(string key, object value)
{
    //TRACE TOGGLE
    bool isTraceActive = false;
    if (isTraceActive)
    {
        key = string.Concat(key.Select((x, i) => i > 0 && char.IsUpper(x) ? "_" + x.ToString() : x.ToString())).ToUpper();
        value = value.ToString();
        crmServiceProvider.TracingService.Trace($"{key}: {value}");
    }
}

