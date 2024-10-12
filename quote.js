    _self.setCityRelatedFieldsEditability = executionContext => {
        const formContext = executionContext.getFormContext();

        const shipToCityControl = formContext.getControl(_self.formModel.fields.shipto_city);
        const shipToCityValue = shipToCityControl ? shipToCityControl.getAttribute().getValue() ?? null : null;

        /**
         * se Città spedizione è valorizzato, i campi correlati (Località, Provincia, Nazione spedizione) sono editabili
         */
        const shipToCityRelatedFields = [
            _self.formModel.fields.res_location,
            _self.formModel.fields.shipto_stateorprovince,
            _self.formModel.fields.res_countryid
        ];

        shipToCityRelatedFields.forEach(field => {
            const control = formContext.getControl(field);
            if (!control) { throw new Error(`${field} field is missing`); }

            if (shipToCityValue) { control.setDisabled(false); } else { control.setDisabled(true); }
        });

    };
    //---------------------------------------------------
    _self.setBankVisibility = executionContext => {
        const formContext = executionContext.getFormContext();
        const bankControl = formContext.getControl(_self.formModel.fields.res_bankdetailsid);

        /**
         * controllo visibilità campo Banca
         */
        if (bankControl) {
            const paymentTermControl = formContext.getControl("res_paymenttermid");
            if (paymentTermControl) {
                const paymentTermId = paymentTermControl.getAttribute().getValue() ? paymentTermControl.getAttribute().getValue()[0].id : null;
                if (paymentTermId) {
                    const paymentTermIdCleaned = paymentTermId.replace(/[{}]/g, "");
                    Xrm.WebApi.retrieveRecord("res_paymentterm", paymentTermIdCleaned, "?$select=res_isbankvisible").then(
                        paymentTerm => {
                            const flag = paymentTerm.res_isbankvisible ?? null;
                            bankControl.setVisible(flag);
                        },
                        error => {
                            console.log(error.message)
                        }
                    );
                } else {
                    bankControl.setVisible(false);
                }
            }
        }
    };
    //---------------------------------------------------
    _self.checkPotentialCustomerData = async executionContext => {
        const formContext = executionContext.getFormContext();

        const isInvoiceRequestedControl = formContext.getControl(_self.formModel.fields.res_isinvoicerequested);
        const isInvoiceRequested = isInvoiceRequestedControl ? isInvoiceRequestedControl.getAttribute().getValue() ?? null : null;

        if (isInvoiceRequested) {
            const potentialCustomerControl = formContext.getControl(_self.formModel.fields.customerid);
            const potentialCustomerId = potentialCustomerControl ? potentialCustomerControl.getAttribute().getValue() ? potentialCustomerControl.getAttribute().getValue()[0].id : null : null;

            if (potentialCustomerId) {
                try {
                    const missingData = await RSMNG.TAUMEDIKA.GLOBAL.retrievePotentialCustomerMissingData(formContext, potentialCustomerId);
                    //se mancano dei dati
                    if (missingData.length > 0) {
                        const missingDataString = missingData.join(", ");
                        const notification = "Per acquisire l'offerta è necessario compilare i seguenti campi del potenziale cliente: " + missingDataString;
                        formContext.ui.setFormNotification(notification, "WARNING", "missingDataNotification");
                    } else {
                        formContext.ui.clearFormNotification("missingDataNotification");
                    }
                } catch (error) {
                    console.error("Error checking potential customer data:", error);
                    formContext.ui.setFormNotification("Si è verificato un errore durante il controllo dei dati del cliente.", "ERROR", "errorNotification");
                }
            }
        }
    };
    //---------------------------------------------------
    _self.setContextCapIframe = function (executionContext) {
        let formContext = executionContext.getFormContext();
        var wrControl = formContext.getControl("WebResource_postalcode");

        var fields = {
            cap: _self.formModel.fields.shipto_postalcode,
            city: _self.formModel.fields.shipto_city,
            province: _self.formModel.fields.shipto_stateorprovince,
            nation: _self.formModel.fields.shipto_country,
            country: _self.formModel.fields.res_countryid
        }

        if (wrControl) {
            wrControl.getContentWindow().then(
                function (contentWindow) {
                    contentWindow.setContext(Xrm, formContext, _self, executionContext, fields);
                }
            )
        }
    };
    //---------------------------------------------------
    _self.onChangeAddress = executionContext => {
        _self.handleWillCallRelatedFields(executionContext);
    };
    //---------------------------------------------------
    _self.filterPotentialCustomer = executionContext => {
        const formContext = executionContext.getFormContext();
        const potentialCustomerControl = formContext.getControl(_self.formModel.fields.customerid);
        if (!potentialCustomerControl) { console.error(`Controllo ${potentialCustomerControl} non trovato`); return; }

        //  filtro gli account
        const accountFilter = "<filter><condition attribute='statecode' operator='eq' value='0' /></filter>";
        potentialCustomerControl.addCustomFilter(accountFilter, "account");
        console.log("Filtro account applicato");

        //  filtro i contatti
        const contactFilter = "<filter><condition attribute='contactid' operator='eq' value='00000000-0000-0000-0000-000000000000' /></filter>";
        potentialCustomerControl.addCustomFilter(contactFilter, "contact");
        console.log("Filtro contatti applicato");
    };
    //---------------------------------------------------
    /*
    Utilizzare la keyword async se si utilizza uno o più metodi await dentro la funzione onSaveForm
    per rendere il salvataggio asincrono (da attivare sull'app dynamics!)
    */
    _self.onSaveForm = function (executionContext) {
        if (executionContext.getEventArgs().getSaveMode() == 70) {
            executionContext.getEventArgs().preventDefault();
            return;
        }
    };
    //---------------------------------------------------
    _self.onLoadCreateForm = async function (executionContext) {

        var formContext = executionContext.getFormContext();
    };
    //---------------------------------------------------
    _self.onLoadUpdateForm = async function (executionContext) {

        var formContext = executionContext.getFormContext();
    };
    //---------------------------------------------------
    _self.onLoadReadyOnlyForm = async function (executionContext) {

        var formContext = executionContext.getFormContext();

        _self.checkPotentialCustomerData(executionContext);
    };
    /* 
    Ricordare di aggiungere la keyword anche ai metodi richiamati dall'onLoadForm se l'await avviene dentro di essi\
    */
    _self.onLoadForm = async function (executionContext) {

        //init lib
        await import('../res_scripts/res_global.js');

        //init formContext
        const formContext = executionContext.getFormContext();

        //Init event
        formContext.data.entity.addOnSave(_self.onSaveForm);
        formContext.getAttribute(_self.formModel.fields.res_additionalexpenseid).addOnChange(() => { _self.handleVatNumberField(executionContext, true) });
        formContext.getAttribute(_self.formModel.fields.res_additionalexpenseid).addOnChange(_self.setFreightAmountEditability);
        formContext.getAttribute(_self.formModel.fields.shipto_postalcode).addOnChange(_self.setPostalCodeRelatedFieldsRequirement);
        formContext.getAttribute(_self.formModel.fields.willcall).addOnChange(_self.handleWillCallRelatedFields);
        formContext.getAttribute(_self.formModel.fields.shipto_city).addOnChange(_self.setCityRelatedFieldsEditability);
        formContext.getAttribute(_self.formModel.fields.res_paymenttermid).addOnChange(_self.setBankVisibility);
        formContext.getAttribute(_self.formModel.fields.res_isinvoicerequested).addOnChange(_self.checkPotentialCustomerData);
        formContext.getControl(_self.formModel.fields.customerid).addPreSearch(_self.filterPotentialCustomer);

        //Init function
        _self.setDate(executionContext);
        _self.setPriceLevelLookup(executionContext);

        _self.handleVatNumberField(executionContext, false);
        _self.setFreightAmountEditability(executionContext);
        _self.setPostalCodeRelatedFieldsRequirement(executionContext);
        _self.handleWillCallRelatedFields(executionContext);
        _self.setCityRelatedFieldsEditability(executionContext);
        _self.setBankVisibility(executionContext);
        _self.checkPotentialCustomerData(executionContext);
        _self.setContextCapIframe(executionContext);

        switch (formContext.ui.getFormType()) {
            case RSMNG.Global.CRM_FORM_TYPE_CREATE:
                _self.onLoadCreateForm(executionContext);
                break;
            case RSMNG.Global.CRM_FORM_TYPE_UPDATE:
                _self.onLoadUpdateForm(executionContext);
                break;
            case RSMNG.Global.CRM_FORM_TYPE_READONLY:
            case RSMNG.Global.CRM_FORM_TYPE_DISABLED:
                _self.onLoadReadyOnlyForm(executionContext);
                break;
            case RSMNG.Global.CRM_FORM_TYPE_QUICKCREATE:
                _self.onLoadCreateForm(executionContext);
                break;
        }
    };
}
).call(RSMNG.TAUMEDIKA.QUOTE);