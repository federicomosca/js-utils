
if (typeof (RSMNG) == "undefined") {
    RSMNG = {};
}

if (typeof (RSMNG.TAUMEDIKA) == "undefined") {
    RSMNG.TAUMEDIKA = {};
}

if (typeof (RSMNG.TAUMEDIKA.QUOTE) == "undefined") {
    RSMNG.TAUMEDIKA.QUOTE = {};
}

if (typeof (RSMNG.TAUMEDIKA.QUOTE.RIBBON) == "undefined") {
    RSMNG.TAUMEDIKA.QUOTE.RIBBON = {};
}

if (typeof (RSMNG.TAUMEDIKA.QUOTE.RIBBON.FORM) == "undefined") {
    RSMNG.TAUMEDIKA.QUOTE.RIBBON.FORM = {};
}

if (typeof (RSMNG.TAUMEDIKA.QUOTE.RIBBON.SUBGRID) == "undefined") {
    RSMNG.TAUMEDIKA.QUOTE.RIBBON.SUBGRID = {};
}

if (typeof (RSMNG.TAUMEDIKA.QUOTE.RIBBON.HOME) == "undefined") {
    RSMNG.TAUMEDIKA.QUOTE.RIBBON.HOME = {};
}

(function () {

    var _self = this;

    _self.STATUS = {
        BOZZA: 1,
        IN_APPROVAZIONE: 2,
        APPROVATA: 3,
        ACQUISITA: 4,
        NON_APPROVATA: 5,
        PERSA: 6,
        AGGIORNATA: 7
    }

    let agentPromise = null;

    _self.getAgent = function () {
        if (agentPromise === null) {
            agentPromise = new Promise(function (resolve, reject) {
                Xrm.WebApi.retrieveRecord("systemuser", Xrm.Utility.getGlobalContext().userSettings.userId, "?$select=res_isagente").then(
                    result => {
                        console.log(result);
                        resolve(result["res_isagente"]);
                    },
                    error => {
                        reject(null);
                        console.log(error.message);
                    }
                );
            });
        }
        return agentPromise;
    };
    //--------------------------------------------------
    /**
     * invocare questa funzione nel caso "CREATE_ORDER" per determinare la visibilità del 
     */
    _self.getPotentialCustomerId = formContext => {
        let potentialCustomerId = null;
        const potentialCustomerControl = formContext.getControl("customerid");
        if (potentialCustomerControl) {
            potentialCustomerId = potentialCustomerControl.getAttribute().getValue() ? potentialCustomerControl.getAttribute().getValue()[0].id : null;
        }
        return potentialCustomerId ?? null;
    };
    //--------------------------------------------------
    _self.UPDATESTATUS = {
        canExecute: async function (formContext, status) {

            await import('../res_scripts/res_global.js');

            let currentStatus = formContext.getAttribute("statuscode").getValue();

            console.log(`Current Status: ${currentStatus}`);

            let visible = false;

            const agent = await _self.getAgent();
            console.log(`Agent status: ${agent}`);

            switch (status) {

                case "APPROVAL": //in approvazione
                    if (currentStatus === _self.STATUS.BOZZA && agent === true) { visible = true; } break;

                case "APPROVED": //approvata
                    if (currentStatus === _self.STATUS.BOZZA && (agent === false || agent === null)) { visible = true; }
                    if (currentStatus === _self.STATUS.IN_APPROVAZIONE && (agent === false || agent === null)) { visible = true; } break;

                case "NOT_APPROVED": //non approvata
                    if (currentStatus === _self.STATUS.IN_APPROVAZIONE && (agent === false || agent === null)) { visible = true; } break;

                case "CREATE_ORDER": //crea ordine
                    if (currentStatus === _self.STATUS.APPROVATA) {
                        visible = true;
                        try {
                            //controllo se mancano dati nell'anagrafica del potenziale cliente
                            let missingData = null;
                            const potentialCustomerId = _self.getPotentialCustomerId(formContext);

                            if (potentialCustomerId) {
                                missingData = await RSMNG.TAUMEDIKA.GLOBAL.retrievePotentialCustomerMissingData(formContext, potentialCustomerId);

                                if (missingData.length > 0) {
                                    visible = false;    //se mancano dati nascondo il button
                                    console.log("Missing customer data:", missingData);
                                }
                            }
                        } catch (error) {
                            console.error("Error checking customer data:", error);
                            visible = false;
                        }
                    }
                    break;

                case "CLOSE_QUOTE": //chiudi offerta (persa)
                    if (currentStatus === _self.STATUS.APPROVATA) { visible = true; } break;

                case "REVISE": //aggiorna
                    if (currentStatus === _self.STATUS.IN_APPROVAZIONE) { visible = true; }
                    if (currentStatus === _self.STATUS.APPROVATA) { visible = true; } break;
            }
            return visible;
        },
        execute: async function (formContext, status) {

            await import('../res_scripts/res_global.js');

            const quoteId = formContext.data.entity.getId().replace(/[{}]/g, "");
            console.log(`Quote ID: ${quoteId}`);

            const quoteStatus = formContext.getAttribute("statuscode").getValue();
            const actionName = "UPDATE_QUOTE_STATUS";

            switch (status) {
                case "APPROVAL":
                    console.log(`case: ${status}`)
                    console.log(`statuscode: ${quoteStatus}`);

                    Sales.QuoteRibbonActions.Instance.activateQuote();

                    break;

                case "APPROVED":
                case "NOT_APPROVED":
                    console.log(`case: ${status}`);
                    console.log(`statuscode: ${quoteStatus}`);
                    RSMNG.TAUMEDIKA.GLOBAL.invokeClientActionFromButton(actionName, quoteId, statecode = status == "APPROVED" ? 1 : 3, statuscode = status == "APPROVED" ? 3 : 5);

                    // Attendiamo un breve momento per dare il tempo a invokeClientActionFromButton di completare
                    // e poi eseguiamo il refresh indipendentemente dal risultato
                    setTimeout(() => {
                        RSMNG.TAUMEDIKA.GLOBAL.refreshFormAndRibbon()
                            .then(() => {
                                console.log("Form and ribbon refreshed successfully");
                            })
                            .catch(error => {
                                console.error("Error refreshing form and ribbon:", error);
                            });
                    }, 1000);  // Attende 1 secondo prima di eseguire il refresh
                    break;
            }
        }
    };
}).call(RSMNG.TAUMEDIKA.QUOTE.RIBBON.FORM);

/*
Alla call puoi aggiungere i namespace se hai necessità di estendere le funzionalità
- RSMNG.PROGETTO.ENTITY.RIBBON.SUBGRID
- RSMNG.PROGETTO.ENTITY.RIBBON.HOME
*/

