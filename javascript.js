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

//======================                      =====================//
//                                                                 //
//            ____    _  _____ _____ _____ _ __  __ ___            //
//           |  _ \  / \|_   _| ____|_   _| |  \/  | __|           //
//           | | | |/ _ \ | | |  _|   | | | | |\/| |  _|           //
//           | |_| / ___ \| | | |___  | | | | |  | | |_            //
//           |____/_/   \_\_| |_____| |_| |_|_|  |_|___|           //
//                                                                 //
//                                                                 //
//=======================                      =====================//

/**
 * converto una data in una stringa con formato YYYY-MM-DDTHH:mm:ss
 * 
 * @param {any} date
 * @returns string
 */
const dateToLocalISOString = date => {
    const pad = (n) => (n < 10 ? '0' + n : n);
    return date.getFullYear() + '-' +
        pad(date.getMonth() + 1) + '-' +
        pad(date.getDate()) + 'T' +
        pad(date.getHours()) + ':' +
        pad(date.getMinutes()) + ':' +
        pad(date.getSeconds());
};

/**
 * 
 * @param {any} timeWithAnyPunctuationMark
 * @returns
 */
function validateDuration(timeWithAnyPunctuationMark) {
    const time = timeWithAnyPunctuationMark.replace(/[,;:]/g, '.');
    var regex = /^\d+([:.,][0-5][0-9])?$/;
    return regex.test(time);
}

/**
 * 
 * @param {any} time
 * @returns
 */
function validateTime(time) {
    var regex = /^([0-1]?[0-9]|2[0-3])(:|\.|)([0-5][0-9])?$/;
    return regex.test(time);
}

/**
 * 
 * @param {any} unformattedTime
 * @returns
 */
function formatTime(unformattedTime) {
    if (unformattedTime) {
        if (validateTime(unformattedTime)) {

            let time = unformattedTime.replace(/\./g, ":");

            const hh_mm = /^\d{2}:\d{2}$/; // Formato HH:mm
            const h_mm = /^\d{1}:\d{2}$/;  // Formato H:mm
            const hh = /^\d{2}$/;          // Formato HH
            const h = /^\d{1}$/;           // Formato H

            if (hh_mm.test(time)) {
                return time;
            }

            else if (h_mm.test(time)) {
                return "0" + time;
            }

            else if (hh.test(time)) {
                return time + ":00";
            }

            else if (h.test(time)) {
                return "0" + time + ":00";

            } else throw new Error("Il formato non è valido. Inserisci l'orario in uno dei seguenti formati: [hh:mm], [hh.mm], [h:mm], [h.mm], [hh], [h]");

        } else throw new Error("Il formato non è valido. Inserisci l'orario in uno dei seguenti formati: [hh:mm], [hh.mm], [h:mm], [h.mm], [hh], [h]");

    } else throw new Error("Time string not found.");
}

/**
 * 
 * @param {any} timeString
 * @returns
 */
const timeStringToMinutes = timeString => {
    if (timeString) {
        const formattedTimeString = formatTime(timeString);
        const hhmm = formattedTimeString.split(":");
        const hours = parseInt(hhmm[0], 10);
        const minutes = hhmm[1] ? parseInt(hhmm[1], 10) : 0;

        return (hours * 60) + minutes;
    } else throw new Error("Time string not found.");
}

/**
 * 
 * @param {any} totalMinutes
 * @returns
 */
const minutesToTimeString = totalMinutes => {
    if (totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}`;
    }
    else if (totalMinutes === 0) {
        return '00:00';
    }
    else throw new Error("Time not found.")
}

/**
 * 
 * @param {any} formContext
 * @param {any} field
 * @returns
 */
const getTimeValue = (formContext, field) => {
    const timeString = formContext.getAttribute(field).getValue();
    if (timeString != null) {
        if (validateTime(timeString)) {
            return parseFloat(timeString);
        } else {
            throw new Error("Il formato non è valido. Inserisci l'orario in uno dei seguenti formati: [hh:mm], [hh.mm], [h:mm], [h.mm], [hh], [h]");
        }
    } else {
        throw new Error("Missing value");
    }
};

//======================                      =====================//
//          ______   _   ______   _       ______    ______         //
//         |  ____| | | |  ____| | |     |  __  \  / ____|         //
//         | |__    | | | |__    | |     | |  | | | (___           //
//         |  __|   | | |  __|   | |     | |  | |  \___ \          //
//         | |      | | | |____  | |____ | |__| |  ____) |         //
//         |_|      |_| |______| |______||______/ |_____/          //
//                                                                 //
//=======================                      =====================//

/**
 * funzione che ritorna un oggetto che ha come attributo
 * il control del campo passato in entrata
 * ed eventuali metodi da chiamare sul getControl()
 * 
 * @param {Object} formContext
 * @param {string} fieldName
 * @returns {Object}
 */
const getFieldControl = (formContext, fieldName) => {
    const control = formContext.getControl(fieldName);
    return {
        control,
        getAttribute: () => control ? control.getAttribute() : null
    }
}

//-----------------------------------------------------------------------------< controlli >-----------------------------------------------------------------------------//

/**
 * funzione che controlla se sono presenti i campi passati in entrata
 * 
 * @param {any} formContext
 * @param {any} fieldsToCheck
 */
const checkFieldsControl = (formContext, fieldsToCheck) => {
    fieldsToCheck.forEach(field => {
        const control = formContext.getControl(field);
        if (!control) console.error(`${field} field is missing`);
    })
}

/**
 * funzione che controlla se i campi passati in entrata sono stati valorizzati
 * 
 * @param {Object} formContext - il contesto
 * @param {string[]} fieldsToCheck - un array di nomi di campi
 * @returns {boolean}
 */
const checkFieldsHaveValue = (formContext, fieldsToCheck) => {
    fieldsToCheck.forEach(field => {
        const attribute = formContext.getAttribute(field);
        if (attribute && attribute.getValue()) return true;
        return false;
    });
}

/**
 * funzione che filtra un campo lookup
 * 
 * @param {any} context
 * @param {any} controlName
 * @param {any} entityName
 * @param {any} filterXml
 * @returns
 */
function filterLookupControl(context, controlName, entityName, filterXml) {
    const control = formContext.getControl(controlName);

    if (!control) {
        console.error(`Controllo ${controlName} non trovato`);
        return;
    }
    control.addCustomFilter(filterXml, entityName);
}

//-----------------------------------------------------------------------------< manipolazione >-----------------------------------------------------------------------------//

/**
 * funzione che svuota i campi passati in entrata
 * 
 * @param {Object} formContext
 * @param {string[]} fieldsToClear
 * @returns {void}
 */
const clearFields = (formContext, fieldsToClear) => {
    try {
        fieldsToClear.forEach(field => {
            const attribute = formContext.getAttribute(field);
            if (attribute && attribute.getValue()) {
                attribute.setValue(null);
            }
        });
    } catch (e) {
        console.error(`Errore durante lo svuotamento dei campi: `, e.message);
    }
}

/**
 * funzione che gestisce la visibilità dei campi passati in entrata
 * 
 * @param {Object} formContext
 * @param {string[]} fields
 * @param {boolean} toggle
 * @returns {void}
 */
const setFieldsVisibility = (formContext, fields, toggle) => {
    try {
        fields.forEach(f => {
            const control = formContext.getControl(f);
            if (control) control.setVisible(toggle);
        });
    } catch (e) {
        console.error(`Errore nel gestire la visibilità dei campi: `, e.message);
    }
}

/**
 * funzione che gestisce l'editabilità dei campi passati in entrata
 * 
 * @param {Object} formContext
 * @param {string[]} fields
 * @param {boolean} toggle
 * @returns {void}
 */
const setFieldsEditability = (formContext, fields, toggle) => {
    try {
        fields.forEach(f => {
            const control = formContext.getControl(f);
            if (control) control.setDisabled(toggle);
        });
    } catch (e) {
        console.error(`Errore nel gestire l'editabilità dei campi: `, e.message);
    }
}

/**
 * funzione che gestisce l'obbligatorietà dei campi passati in entrata
 * 
 * @param {Object} formContext
 * @param {string[]} fields
 * @param {string} requirement "required", "recommended", "none"
 * @returns {void}
 */
const setFieldsRequiredLevel = (formContext, fields, requirement) => {
    try {
        fields.forEach(f => {
            const attribute = formContext.getAttribute(f);
            if (attribute) attribute.setRequiredLevel(requirement);
        });
    } catch (e) {
        console.error(`Errore nel gestire l'obbligatorietà dei campi: `, e.message);
    }
}

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

//==============================================//
//                                              //
//      ___    ____   _____                     //
//     / _ \  |  _ \ |_   _|                    //
//    / /_\ \ | |_) |  | |                      //
//   / _____ \|  __/   | |                      //
//  /_/     \_\_|     |___|                     //
//                                              //
//==============================================//



