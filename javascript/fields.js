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