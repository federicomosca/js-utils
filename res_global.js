//sostituire PROGETTO con nome progetto
//sostituire ENTITY con nome entità
if (typeof (RSMNG) == "undefined") {
    RSMNG = {};
}

RSMNG.Global = {

    CRM_FORM_TYPE_CREATE: 1,
    CRM_FORM_TYPE_UPDATE: 2,
    CRM_FORM_TYPE_READONLY: 3,
    CRM_FORM_TYPE_DISABLED: 4,
    CRM_FORM_TYPE_QUICKCREATE: 5,
    CRM_FORM_TYPE_BULKEDIT: 6,

};

if (typeof (RSMNG.TAUMEDIKA) == "undefined") {
    RSMNG.TAUMEDIKA = {};
}

if (typeof (RSMNG.TAUMEDIKA.GLOBAL) == "undefined") {
    RSMNG.TAUMEDIKA.GLOBAL = {};
}

(async function () {

    /*
    file global.js utilizzato per definire variabili globali al PROGETTO
    */
    var _self = this;

    /*
    esempio di definizione di un option set
    */
    _self.STATE = {
        ACTIVE: 0,
        INACTIVE: 1
    };

    /*
    Funzione per la visualizzazione a video dell'errore imprevisto
    */
    _self.errorMessage = function (ex) {

        var errorOptions = {
            errorCode: ex.errorCode,
            message: ex.message,
            details: ex.raw
        };

        Xrm.Navigation.openErrorDialog(errorOptions);
    };
    _self.parseDataValue = function (datavalue) {
        var ret = null;
        if (datavalue != "") {
            var vals = new Array();
            vals = decodeURIComponent(datavalue).split("&");
            for (var i in vals) {
                vals[i] = vals[i].replace(/\+/g, " ").split("=");
            }
            ret = vals;

        }
        return ret;
    };
    _self.getDataParam = function (queryString) {
        var vals = new Array();
        var retParam = new Array();
        if (queryString != "") {
            vals = queryString.substr(1).split("&");
            for (var i in vals) {
                vals[i] = vals[i].replace(/\+/g, " ").split("=");
            }
            for (var i in vals) {
                if (vals[i][0].toLowerCase() == "data") {
                    retParam = _self.parseDataValue(vals[i][1]);
                    break;
                }
            }
        }
        return retParam;

    };
    //----------
    _self.getGlobalOptionSetMetadata = function (optionSetName) {
        return new Promise(function (resolve, reject) {
            var apiUrl = Xrm.Utility.getGlobalContext().getClientUrl() +
                "/api/data/v9.2/GlobalOptionSetDefinitions(Name='" + optionSetName + "')";

            var req = new XMLHttpRequest();
            req.open("GET", apiUrl, true);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");

            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        try {
                            var result = JSON.parse(this.response);
                            var options = result.Options;
                            resolve(options); // Resolve the promise with the options
                        } catch (error) {
                            reject("Error parsing the response: " + error); // Reject on JSON parsing error
                        }
                    } else {
                        reject("Error retrieving global option set metadata. Status: " + this.status + " " + this.statusText);
                    }
                }
            };

            req.onerror = function () {
                reject("Network error or request failed.");
            };

            req.send();
        });
    };
    //----------------------------------------------
    _self.convertGuid = function (guidStr) {
        var guid = guidStr.toLowerCase();
        if (guidStr.startsWith('{')) {
            guid = guid.replace('{', '').replace('}', '');
        }
        return guid;
    };
    //-------------------------------------------------------------------------------------
    _self.retrieveAllRecords = async function (entityName, topCount, queryOptions = "") {
        let allRecords = [];
        let fetchMore = true;
        let fetchXmlPagingCookie = null;

        while (fetchMore) {
            let response;
            try {
                // Costruisci l'URL di richiesta con il cookie di paginazione se presente
                let fetchXml = `<fetch mapping="logical" count="${topCount}" page="${allRecords.length / topCount + 1}">`;
                if (fetchXmlPagingCookie) {
                    fetchXml += `<cookie>${fetchXmlPagingCookie}</cookie>`;
                }
                fetchXml += queryOptions;
                fetchXml += `</fetch>`;
                response = await Xrm.WebApi.retrieveMultipleRecords(entityName, `?fetchXml=${encodeURIComponent(fetchXml)}`);
            } catch (error) {
                console.error("Error retrieving records:", error);
                fetchMore = false;
                continue;
            }

            // Aggiungi i record recuperati alla lista completa
            allRecords = allRecords.concat(response.entities);

            // Controlla se ci sono più pagine da recuperare
            fetchMore = response["fetchXmlPagingCookie"] ? true : false;
            if (fetchMore) {
                // Estrai il cookie di paginazione per la richiesta successiva
                fetchXmlPagingCookie = response["fetchXmlPagingCookie"];
            }
        }

        return allRecords;
    };

    /**
     * 
     * @param {any} executionContext
     * @param {any} startDate
     * @param {any} endDate
     * 
     * @returns {void}
     * 
     * controlla che la data di inizio non sia antecedente alla data di fine,
     * in caso contrario imposta la notifica sul campo che è stato modificato
     */
    _self.checkDateConsistency = (executionContext, startDate, endDate) => {
        const formContext = executionContext.getFormContext();
        const eventSourceAttribute = executionContext.getEventSource();
        const eventSourceControl = formContext.getControl(eventSourceAttribute.getName());

        if (eventSourceControl) {
            eventSourceControl.clearNotification();
            if (startDate && endDate) {
                if (Date.parse(startDate) > Date.parse(endDate)) {
                    eventSourceControl.setNotification(`La data di inizio ${startDate} non può essere antecedente alla data di fine ${endDate}`);
                }
            }
        }
    };
    //-----------------------------------------------------------------------
    _self.activateEntity = (entityName, entityId, command) => {
        return new Promise(function (resolve, reject) {
            console.log("I'm in the activateEntity fun");
            var req = new XMLHttpRequest();
            var url = `${Xrm.Utility.getGlobalContext().getClientUrl()}/api/data/v9.2/${entityName}(${entityId})/${command}`;

            req.open("POST", url, true);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "return=representation");

            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200 || this.status === 204) {
                        console.log("Attivata con successo.");
                        resolve("OK");
                    } else {
                        var error = JSON.parse(this.response).error;
                        console.log("Errore nell'attivazione del preventivo: " + error.message);
                        reject(error.message);
                    }
                }
            };

            req.send();
        }
        );
    };
    //-----------------------------------------------------------------------
    _self.invokeClientActionFromButton = (action, entityId, statecode, statuscode) => {
        const json = {
            EntityId: entityId,
            StateCode: statecode,
            StatusCode: statuscode
        }

        var execute_res_ClientAction_Request = {

            // Parameters
            actionName: action, // Edm.String
            jsonDataInput: JSON.stringify(json), // Edm.String

            getMetadata: function () {
                return {
                    boundParameter: null,
                    parameterTypes: {
                        actionName: { typeName: "Edm.String", structuralProperty: 1 },
                        jsonDataInput: { typeName: "Edm.String", structuralProperty: 1 }
                    },
                    operationType: 0, operationName: "res_ClientAction"
                };
            }
        };

        parent.Xrm.WebApi.execute(execute_res_ClientAction_Request).then(
            response => {
                if (response.ok) { return response.json(); }
            }
        ).then(responseBody => {
            const result = JSON.parse(responseBody.jsonDataOutput);
            console.log("Raw result:", result);

            if (result === 0) {
                console.log("Client action executed successfully (returned 0)");
            } else if (typeof result === 'object' && result !== null) {
                console.log("Client action returned object:", result);
                if (result.message) {
                    console.log("Message:", result.message);
                }
            } else {
                console.warn("Client action returned unexpected value:", result);
            }

            // Qui puoi aggiungere eventuale logica aggiuntiva basata sul risultato
        }).catch(error => {
            console.error("Error in invokeClientAction:", error);
        });
    };
    _self.refreshFormAndRibbon = () => {
        Xrm.Page.data.refresh(false).then(
            function () {
                console.log("Form refreshed successfully");
                Xrm.Page.ui.refreshRibbon();
                console.log("Ribbon refreshed");
            },
            function (error) {
                console.log("Error refreshing form: " + error.message);
            }
        );
    };
    _self.retrievePotentialCustomerMissingData = (formContext, potentialCustomerId) => {
        /**
         * in caso di dati mancanti nell'anagrafica del potenziale cliente
         * questi vengono ritornati in un array
         */
        return new Promise((resolve, reject) => {
            Xrm.WebApi.retrieveRecord("account", potentialCustomerId.replace(/[{}]/g, ""),
                "?$select=res_accountnaturecode, res_taxcode, res_vatnumber, res_sdi, emailaddress3, address1_line1, address1_city, address1_postalcode")
                .then(potentialCustomer => {
                    const missingData = [];
                    const accountNature = potentialCustomer.res_accountnaturecode;
                    const taxCode = potentialCustomer.res_taxcode;
                    const vatNumber = potentialCustomer.res_vatnumber;
                    const SDI = potentialCustomer.res_sdi;
                    const PEC = potentialCustomer.emailaddress3;
                    const address = potentialCustomer.address1_line1;
                    const city = potentialCustomer.address1_city;
                    const postalCode = potentialCustomer.address1_postalcode;

                    if (accountNature) {
                        if (accountNature == 100000000) { //se è persona fisica
                            if (!taxCode) { missingData.push("Codice fiscale"); }
                        }
                        if (accountNature == 100000001) { //se è persona giuridica
                            if (!vatNumber) { missingData.push("Partita IVA"); }
                        }
                    } else {
                        missingData.push("Natura giuridica");
                    }
                    if (!SDI && !PEC) {
                        missingData.push("SDI o PEC");
                    }
                    const addressFields = [
                        { name: "Indirizzo", value: address },
                        { name: "Città", value: city },
                        { name: "CAP", value: postalCode }
                    ];
                    addressFields.forEach(field => {
                        if (!field.value) {
                            missingData.push(field.name);
                        }
                    });
                    resolve(missingData);
                })
                .catch(error => {
                    console.error(error.message);
                    reject(error);
                });
        });
    };
}).call(RSMNG.TAUMEDIKA.GLOBAL);