//sostituire PROGETTO con nome progetto
//sostituire ENTITY con nome entità
if (typeof (RSMNG) == "undefined") {
    RSMNG = {};
}

if (typeof (RSMNG.TAUMEDIKA) == "undefined") {
    RSMNG.TAUMEDIKA = {};
}

if (typeof (RSMNG.TAUMEDIKA.QUOTE) == "undefined") {
    RSMNG.TAUMEDIKA.QUOTE = {};
}

(function () {
    var _self = this;

    //Form model
    _self.formModel = {
        entity: {
            logicalName: "quote",
            displayName: "Offerta"
        },
        fields: {
            ///Account
            accountid: "accountid",
            ///ID indirizzo di fatturazione
            billto_addressid: "billto_addressid",
            ///Città fatturazione
            billto_city: "billto_city",
            ///Indirizzo di fatturazione
            billto_composite: "billto_composite",
            ///Nome contatto fatturazione
            billto_contactname: "billto_contactname",
            ///Paese fatturazione
            billto_country: "billto_country",
            ///Fax fatturazione
            billto_fax: "billto_fax",
            ///Via 1 fatturazione
            billto_line1: "billto_line1",
            ///Via 2 fatturazione
            billto_line2: "billto_line2",
            ///Via 3 fatturazione
            billto_line3: "billto_line3",
            ///Nome fatturazione
            billto_name: "billto_name",
            ///CAP fatturazione
            billto_postalcode: "billto_postalcode",
            ///Provincia di fatturazione
            billto_stateorprovince: "billto_stateorprovince",
            ///Telefono fatturazione
            billto_telephone: "billto_telephone",
            ///Campagna di origine
            campaignid: "campaignid",
            ///Data chiusura
            closedon: "closedon",
            ///Contatto
            contactid: "contactid",
            ///Potenziale cliente
            customerid: "customerid",
            ///Tipo di potenziale cliente
            customeridtype: "customeridtype",
            ///Descrizione
            description: "description",
            ///Importo sconto offerta
            discountamount: "discountamount",
            ///Importo sconto offerta (Base)
            discountamount_base: "discountamount_base",
            ///Sconto offerta (%)
            discountpercentage: "discountpercentage",
            ///Data inizio validità
            effectivefrom: "effectivefrom",
            ///Data fine validità
            effectiveto: "effectiveto",
            ///Email Address
            emailaddress: "emailaddress",
            ///Tasso di cambio
            exchangerate: "exchangerate",
            ///Scadenza
            expireson: "expireson",
            ///Importo spesa accessoria
            freightamount: "freightamount",
            ///Spese di spedizione (Base)
            freightamount_base: "freightamount_base",
            ///Condizioni di spedizione
            freighttermscode: "freighttermscode",
            ///Ultimo periodo sospensione
            lastonholdtime: "lastonholdtime",
            ///Nome
            name: "name",
            ///Periodo di sospensione (minuti)
            onholdtime: "onholdtime",
            ///Opportunità
            opportunityid: "opportunityid",
            ///Condizioni di pagamento
            paymenttermscode: "paymenttermscode",
            ///Listino prezzi
            pricelevelid: "pricelevelid",
            ///Errore di determinazione dei prezzi 
            pricingerrorcode: "pricingerrorcode",
            ///Process Id
            processid: "processid",
            ///Metodo di creazione
            quotecreationmethod: "quotecreationmethod",
            ///Offerta
            quoteid: "quoteid",
            ///Nr. Offerta
            quotenumber: "quotenumber",
            ///Data consegna richiesta
            requestdeliveryby: "requestdeliveryby",
            ///Spesa accessoria
            res_additionalexpenseid: "res_additionalexpenseid",
            ///Banca
            res_bankdetailsid: "res_bankdetailsid",
            ///Nazione spedizione
            res_countryid: "res_countryid",
            ///Data
            res_date: "res_date",
            ///Acconto
            res_deposit: "res_deposit",
            ///Acconto (base)
            res_deposit_base: "res_deposit_base",
            ///Commento uso interno
            res_internalusecomment: "res_internalusecomment",
            ///Richiesta fattura
            res_isinvoicerequested: "res_isinvoicerequested",
            ///Località
            res_location: "res_location",
            ///Condizioni di pagamento (campo lookup)
            res_paymenttermid: "res_paymenttermid",
            ///Riferimento spedizione
            res_shippingreference: "res_shippingreference",
            ///Codice IVA spesa accessoria
            res_vatnumberid: "res_vatnumberid",
            ///ID aggiornamento
            revisionnumber: "revisionnumber",
            ///Metodo di spedizione
            shippingmethodcode: "shippingmethodcode",
            ///ID indirizzo di spedizione
            shipto_addressid: "shipto_addressid",
            ///Città spedizione
            shipto_city: "shipto_city",
            ///Indirizzo di spedizione
            shipto_composite: "shipto_composite",
            ///Nome contatto spedizione
            shipto_contactname: "shipto_contactname",
            ///Paese spedizione
            shipto_country: "shipto_country",
            ///Fax spedizione
            shipto_fax: "shipto_fax",
            ///Condizioni di spedizione per indirizzo spedizione
            shipto_freighttermscode: "shipto_freighttermscode",
            ///Indirizzo
            shipto_line1: "shipto_line1",
            ///Via 2 spedizione
            shipto_line2: "shipto_line2",
            ///Via 3 spedizione
            shipto_line3: "shipto_line3",
            ///Nome spedizione
            shipto_name: "shipto_name",
            ///CAP spedizione
            shipto_postalcode: "shipto_postalcode",
            ///Provincia
            shipto_stateorprovince: "shipto_stateorprovince",
            ///Telefono spedizione
            shipto_telephone: "shipto_telephone",
            ///Ignora calcolo prezzo
            skippricecalculation: "skippricecalculation",
            ///CONTRATTO DI SERVIZIO
            slaid: "slaid",
            ///Ultimo contratto di servizio applicato
            slainvokedid: "slainvokedid",
            ///(Deprecated) Stage Id
            stageid: "stageid",
            ///Importo totale
            totalamount: "totalamount",
            ///Importo totale (Base)
            totalamount_base: "totalamount_base",
            ///Totale imponibile
            totalamountlessfreight: "totalamountlessfreight",
            ///Totale senza spedizione (Base)
            totalamountlessfreight_base: "totalamountlessfreight_base",
            ///Sconto totale
            totaldiscountamount: "totaldiscountamount",
            ///Importo totale sconto (Base)
            totaldiscountamount_base: "totaldiscountamount_base",
            ///Totale righe
            totallineitemamount: "totallineitemamount",
            ///Totale dettagli (Base)
            totallineitemamount_base: "totallineitemamount_base",
            ///Importo totale sconto per voce
            totallineitemdiscountamount: "totallineitemdiscountamount",
            ///Importo totale sconto per voce (Base)
            totallineitemdiscountamount_base: "totallineitemdiscountamount_base",
            ///Totale IVA
            totaltax: "totaltax",
            ///Totale imposte (Base)
            totaltax_base: "totaltax_base",
            ///Valuta
            transactioncurrencyid: "transactioncurrencyid",
            ///(Deprecated) Traversed Path
            traversedpath: "traversedpath",
            ///ID univoco descrizione
            uniquedscid: "uniquedscid",
            ///Spedizione
            willcall: "willcall",

            /// Values for field Stato
            statecodeValues: {
                Acquisita: 2,
                Attiva: 1,
                Bozza: 0,
                Chiusa: 3
            },

            /// Values for field Motivo stato
            statuscodeValues: {
                Acquisita_StateAcquisita: 4,
                Aggiornata_StateChiusa: 7,
                Approvata_StateAttiva: 3,
                Bozza_StateBozza: 1,
                Inapprovazione_StateAttiva: 2,
                Nonapprovata_StateChiusa: 5,
                Persa_StateChiusa: 6
            },

            /// Values for field Condizioni di spedizione
            freighttermscodeValues: {
                CFRCostoenolo: 3,
                CIFCostoassenolo: 4,
                CIPTraspeasspagatifinoa: 5,
                CPTTrasportopagatofinoa: 6,
                DAFResofrontiera: 7,
                DDPResosdoganato: 10,
                DDUResononsdoganato: 11,
                DEQResobanchina: 8,
                DESResoexship: 9,
                EXWFrancofabbrica: 12,
                FASFrancolungobordo: 13,
                FCAFrancovettore: 14,
                FOBFrancoabordo: 1,
                Gratis: 2
            },

            /// Values for field Condizioni di pagamento
            paymenttermscodeValues: {
                _30gg: 1,
                _60gg: 4,
                _90gg: 9,
                Pagamentoincontanti: 10
            },

            /// Values for field Errore di determinazione dei prezzi 
            pricingerrorcodeValues: {
                Attributodelprezzofuoriintervallo: 35,
                Codicedideterminazionedeiprezzimancante: 8,
                Codicedideterminazionedeiprezzinonvalido: 9,
                Costocorrentemancante: 15,
                Costocorrentenonvalido: 20,
                Costomediomancante: 16,
                Costomediononvalido: 21,
                Dettaglierrore: 1,
                Erroredicalcolodelprezzo: 25,
                Importodellistinoprezzimancante: 12,
                Importodellistinoprezzinonvalido: 17,
                Lavalutadellatransazionenoneimpostataperlavocedilistinodelprodotto: 38,
                Listinoprezziinattivo: 3,
                Listinoprezzimancante: 2,
                Nessuno: 0,
                Opzionediarrotondamentononvalida: 23,
                Overflowdellattributodellavalutadibase: 36,
                Percentualedellistinoprezzimancante: 13,
                Percentualedellistinoprezzinonvalida: 18,
                Precisionedideterminazionedeiprezzinonvalida: 30,
                Prezzomancante: 14,
                Prezzononvalido: 19,
                Prezzounitariomancante: 5,
                Prodottomancante: 6,
                Prodottononinclusonellistinoprezzi: 11,
                Prodottononvalido: 7,
                Quantitamancante: 4,
                Quantitanonvalida: 29,
                Regoladiarrotondamentononvalida: 22,
                Scontononvalido: 28,
                Statononvalidotipodisconto: 27,
                Tipodiscontoinattivo: 33,
                Tipodiscontononvalido: 26,
                Underflowdellattributodellavalutadibase: 37,
                Unitadimisuramancante: 10,
                Unitadimisurapredefinitadelprodottomancante: 31,
                Unitadivenditadelprodottomancante: 32,
                Valorediarrotondamentononvalido: 24,
                Valutadellistinoprezzinonvalida: 34
            },

            /// Values for field Metodo di creazione
            quotecreationmethodValues: {
                Revisione: 776160001,
                Sconosciuto: 776160000
            },

            /// Values for field Richiesta fattura
            res_isinvoicerequestedValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Metodo di spedizione
            shippingmethodcodeValues: {
                Corriereespresso: 28,
                SpedizionePostale: 5,
                Trasportoaereo: 1,
                Trasportoferroviario: 10,
                Trasportointermodale: 18,
                Trasportomarittimo: 11,
                Trasportostradale: 9
            },

            /// Values for field Condizioni di spedizione per indirizzo spedizione
            shipto_freighttermscodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Ignora calcolo prezzo
            skippricecalculationValues: {
                DoPriceCalcAlways: 0,
                SkipPriceCalcOnRetrieve: 1
            },

            /// Values for field Spedizione
            willcallValues: {
                Indirizzo: 0,
                Spedizioneacaricodelcliente: 1
            }
        },
        tabs: {

        },
        sections: {

        }
    };

    //---------------------------------------------------
    _self.setDate = executionContext => {
        const formContext = executionContext.getFormContext();

        const dateControl = formContext.getControl(_self.formModel.fields.res_date);

        if (dateControl) {
            const date = new Date();
            if (dateControl.getAttribute().getValue() == null) {
                dateControl.getAttribute().setValue(date);
            }
        }
    };
    //---------------------------------------------------
    _self.setPriceLevelLookup = executionContext => {
        const formContext = executionContext.getFormContext();

        const priceLevelControl = formContext.getControl(_self.formModel.fields.pricelevelid);

        if (priceLevelControl) {
            priceLevelControl.getAttribute().setRequiredLevel("required");

            var fetchData = {
                "res_isdefaultforagents": "1",
                "statecode": "0"
            };
            var fetchXml = [
                "?fetchXml=<fetch top='1'>",
                "  <entity name='pricelevel'>",
                "    <attribute name='pricelevelid'/>",
                "    <attribute name='name'/>",
                "    <filter>",
                "      <condition attribute='res_isdefaultforagents' operator='eq' value='", fetchData.res_isdefaultforagents/*1*/, "'/>",
                "      <condition attribute='statecode' operator='eq' value='", fetchData.statecode/*0*/, "'/>",
                "    </filter>",
                "  </entity>",
                "</fetch>"
            ].join("");

            Xrm.WebApi.retrieveMultipleRecords("pricelevel", fetchXml).then(
                priceLevel => {
                    if (priceLevel.entities.length < 0) return;
                    const priceLevelId = priceLevel.entities[0].pricelevelid ?? null;
                    const priceLevelName = priceLevel.entities[0].name ?? null;

                    if (!priceLevelId || !priceLevelName) {
                        console.log("id or name missing")
                        return;
                    }

                    const priceLevelLookUp = [{
                        id: priceLevelId,
                        name: priceLevelName,
                        entityType: "pricelevel"
                    }];

                    priceLevelControl.getAttribute().setValue(priceLevelLookUp);
                },
                error => {
                    console.log(error.message);
                }
            );
        }
    };
    //---------------------------------------------------
    _self.handleVatNumberField = (executionContext, flag) => {
        const formContext = executionContext.getFormContext();

        const vatNumberControl = formContext.getControl(_self.formModel.fields.res_vatnumberid);
        const freightAmountControl = formContext.getControl(_self.formModel.fields.freightamount);

        const additionalExpenseControl = formContext.getControl(_self.formModel.fields.res_additionalexpenseid);

        if (vatNumberControl) {
            if (additionalExpenseControl) {
                const additionalExpenseValue = additionalExpenseControl.getAttribute().getValue() ?? null;
                if (additionalExpenseValue) {
                    Xrm.WebApi.retrieveRecord("res_additionalexpense", additionalExpenseValue[0].id, "?$select=res_amount").then(
                        additionalExpense => {
                            formContext.getAttribute(_self.formModel.fields.freightamount).setValue(additionalExpense.res_amount);
                        },
                        error => {
                            console.error(error.message);
                        }
                    );
                    vatNumberControl.getAttribute().setRequiredLevel("required");
                    vatNumberControl.setDisabled(false);
                    if (flag) { vatNumberControl.getAttribute().setValue(null); }
                } else {
                    vatNumberControl.getAttribute().setRequiredLevel("none");
                    vatNumberControl.setDisabled(true);
                    vatNumberControl.getAttribute().setValue(null);
                }
            } else {
                throw new Error("additional expense attribute is missing")
            }
        }

        /**
         * se il campo Spesa accessoria viene svuotato, 
         * svuoto anche il campo Importo spesa accessoria
         */
        if (vatNumberControl.getAttribute().getValue() == null) {
            if (freightAmountControl) {
                freightAmountControl.getAttribute().setValue(null);
            }
        }
    };
    //---------------------------------------------------
    _self.setFreightAmountEditability = executionContext => {
        const formContext = executionContext.getFormContext();

        const freightAmountControl = formContext.getControl(_self.formModel.fields.freightamount);
        const additionalExpenseControl = formContext.getControl(_self.formModel.fields.res_additionalexpenseid);

        if (freightAmountControl) {
            const additionalExpenseValue = additionalExpenseControl ? additionalExpenseControl.getAttribute().getValue() ?? null : null;
            if (additionalExpenseValue) { freightAmountControl.setDisabled(false); } else { freightAmountControl.setDisabled(true); }
        }
    }
    //---------------------------------------------------
    _self.setPostalCodeRelatedFieldsRequirement = executionContext => {
        const formContext = executionContext.getFormContext();

        const postalCodeControl = formContext.getControl(_self.formModel.fields.shipto_postalcode);
        const cityControl = formContext.getControl(_self.formModel.fields.shipto_city);

        if (postalCodeControl) {
            if (!postalCodeControl.getAttribute().getValue()) {
                cityControl.getAttribute().setRequiredLevel("none");
                cityControl.setDisabled(true);
            } else {
                cityControl.getAttribute().setRequiredLevel("required");
                cityControl.setDisabled(false);
            }
        }
    };
    //---------------------------------------------------
    _self.handleWillCallRelatedFields = executionContext => {
        const formContext = executionContext.getFormContext();

        const willCallControl = formContext.getControl(_self.formModel.fields.willcall);

        /**
         * mostro/nascondo tutti i campi relativi al campo Spedizione
         * e gestisco obbligatorietà e read-only
         */
        const willCallControlsVisibility = [
            _self.formModel.fields.res_shippingreference,
            _self.formModel.fields.shipto_line1,
            _self.formModel.fields.shipto_postalcode,
            _self.formModel.fields.res_location,
            _self.formModel.fields.shipto_city,
            _self.formModel.fields.shipto_stateorprovince,
            _self.formModel.fields.res_countryid,
        ];

        const willCallControlsRequirement = [
            _self.formModel.fields.shipto_line1,
            _self.formModel.fields.shipto_postalcode,
            _self.formModel.fields.shipto_city,
        ];

        willCallControlsVisibility.forEach(field => {
            const control = formContext.getControl(field);
            if (!control) throw new Error(`${field} field is missing`);

            if (willCallControl.getAttribute().getValue() == _self.formModel.fields.willcallValues.Indirizzo) {
                formContext.getControl("WebResource_postalcode").setVisible(true);
                control.setVisible(true);
            }

            if (willCallControl.getAttribute().getValue() == _self.formModel.fields.willcallValues.Spedizioneacaricodelcliente) {
                formContext.getControl("WebResource_postalcode").setVisible(false);
                control.setVisible(false);
                control.getAttribute().setValue(null)
            }
        });

        willCallControlsRequirement.forEach(field => {
            const control = formContext.getControl(field);

            if (!control) throw new Error(`${field} field is missing`);

            if (willCallControl.getAttribute().getValue() == _self.formModel.fields.willcallValues.Indirizzo) {
                control.getAttribute().setRequiredLevel("required");
            }

            if (willCallControl.getAttribute().getValue() == _self.formModel.fields.willcallValues.Spedizioneacaricodelcliente) {
                control.getAttribute().setRequiredLevel("none");
            }

        });

        this.setCityRelatedFieldsEditability(executionContext);
    };
    //---------------------------------------------------
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