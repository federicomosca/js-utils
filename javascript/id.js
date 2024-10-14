//======================                      =====================//
//                                                                 //
//                      _____    _____                             //
//                     |_   _|  |  __ \                            //
//                       | |    | |  | |                           //
//                       | |    | |  | |                           //
//                      _| |_   | |__| |                           //
//                     |_____|  |_____/                            //
//                                                                 //
//=======================                      =====================//

/**
 * recupero l'id da un campo lookup
 * 
 * @param {any} entityName
 * @returns
 */
const getLookupFieldId = (context, entityName) => {
    const attribute = context.getAttribute(entityName);
    if (attribute) {
        try {
            return attribute.getValue() ? attribute.getValue()[0].id : null;
        } catch (e) {
            console.error(e.message);
        }
    } else console.error(`Attribute [${entityName}] not found.`);
    return null;
}

/**
 * rimuovo le parentesi graffe dall'id
 * {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx} => xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 * 
 * @param {string} id
 * @returns string or error
 */
const cleanId = id => id ? id.replace(/[{}]/g, "") : new Error(`ID ${id} not valid.`);

/**
 * funzione che prende in ingresso id, logical name e type di un'entità
 * per costruire l'oggetto lookup e impostarlo come valore
 * nel campo il cui attributo è passato in entrata
 * 
 * @param {Object} attribute
 * @param {string} id
 * @param {string} entityName
 * @param {string} entityType
 * @returns {void}
 */
const setLookupField = (attribute, id, entityName, entityType) => {
    const lookup = [{
        id: id,
        name: entityName,
        entityType: entityType
    }];
    attribute.setValue(lookup);
}