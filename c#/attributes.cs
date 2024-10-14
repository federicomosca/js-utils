public static T GetAttributeFromTargetOrPreImage<T>(string logicalName, Entity target, Entity preImage)
{
    return target.Contains(logicalName) ? target.GetAttributeValue<T>(logicalName) : preImage.GetAttributeValue<T>(logicalName);
}