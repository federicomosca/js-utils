//======================                                       =====================//
//          _____   ______  _______  _____    _____  ______  _    _  ______         //
//         |  __ \ |  ____||__   __||  __ \  |_   _||  ____|| |  | ||  ____|        //
//         | |__) || |__      | |   | |__) |   | |  | |__   | |  | || |__           //
//         |  _  / |  __|     | |   |  _  /    | |  |  __|  | |  | ||  __|          //
//         | | \ \ | |____    | |   | | \ \   _| |_ | |____ | |__| || |____         //
//         |_|  \_\|______|   |_|   |_|  \_\ |_____||______| \____/ |______|        //
//                                                                                  //
//=======================                                      =====================//

/**
 * promise
 * 
 * @param {any} entityName
 * @param {any} primaryKeyName
 * @param {any} primaryKeyValue
 * @param {any} attributes
 * @param {any} linkEntities
 * @returns
 */
const fetchEntityDetails = (entityName, primaryKeyName, primaryKeyValue, attributes, linkEntities) => {
    return new Promise((resolve, reject) => {
        const fetchXml = [
            "?fetchXml=<fetch>",
            `  <entity name='${entityName}'>`,
            ...attributes.map(attr => `    <attribute name='${attr}'/>`),
            "    <filter>",
            `      <condition attribute='${primaryKeyName}' operator='eq' value='${primaryKeyValue}' />`,
            "    </filter>",
            ...linkEntities.map(le => `
    <link-entity name='${le.name}' from='${le.from}' to='${le.to}' link-type='${le.linkType}' alias='${le.alias}'>
      ${le.attributes.map(attr => `<attribute name='${attr}'/>`).join('\n      ')}
    </link-entity>`),
            "  </entity>",
            "</fetch>"
        ].join("");

        Xrm.WebApi.retrieveMultipleRecords(entityName, fetchXml).then(
            results => {
                if (results.entities.length > 0) {
                    resolve(results.entities[0]);
                } else {
                    reject(new Error(`No ${entityName} found`));
                }
            },
            error => {
                reject(error);
            }
        );
    });
}