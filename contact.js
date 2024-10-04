//sostituire PROGETTO con nome progetto
//sostituire ENTITY con nome entità
if (typeof (RSMNG) == "undefined") {
    RSMNG = {};
}

if (typeof (RSMNG.TAUMEDIKA) == "undefined") {
    RSMNG.TAUMEDIKA = {};
}

if (typeof (RSMNG.TAUMEDIKA.CONTACT) == "undefined") {
    RSMNG.TAUMEDIKA.CONTACT = {};
}

(function () {
    var _self = this;

    //Form model
    _self.formModel = {
        entity: {
            logicalName: "contact",
            displayName: "Contatto"
        },
        fields: {
            ///Account
            accountid: "accountid",
            ///Ruolo
            accountrolecode: "accountrolecode",
            ///Indirizzo 1: ID
            address1_addressid: "address1_addressid",
            ///Indirizzo 1: tipo di indirizzo
            address1_addresstypecode: "address1_addresstypecode",
            ///Città
            address1_city: "address1_city",
            ///Indirizzo 1
            address1_composite: "address1_composite",
            ///Nazione (testo)
            address1_country: "address1_country",
            ///Indirizzo 1: regione
            address1_county: "address1_county",
            ///Indirizzo 1: fax
            address1_fax: "address1_fax",
            ///Indirizzo 1: condizioni di spedizione
            address1_freighttermscode: "address1_freighttermscode",
            ///Indirizzo 1: latitudine
            address1_latitude: "address1_latitude",
            ///Indirizzo 1: via 1
            address1_line1: "address1_line1",
            ///Indirizzo 1: via 2
            address1_line2: "address1_line2",
            ///Indirizzo 1: via 3
            address1_line3: "address1_line3",
            ///Indirizzo 1: longitudine
            address1_longitude: "address1_longitude",
            ///Indirizzo
            address1_name: "address1_name",
            ///CAP
            address1_postalcode: "address1_postalcode",
            ///Indirizzo 1: casella postale
            address1_postofficebox: "address1_postofficebox",
            ///Indirizzo 1: nome contatto primario
            address1_primarycontactname: "address1_primarycontactname",
            ///Indirizzo 1: metodo di spedizione
            address1_shippingmethodcode: "address1_shippingmethodcode",
            ///Provincia
            address1_stateorprovince: "address1_stateorprovince",
            ///Indirizzo 1: telefono
            address1_telephone1: "address1_telephone1",
            ///Indirizzo 1: telefono 2
            address1_telephone2: "address1_telephone2",
            ///Indirizzo 1: telefono 3
            address1_telephone3: "address1_telephone3",
            ///Indirizzo 1: zona UPS
            address1_upszone: "address1_upszone",
            ///Indirizzo 1: differenza UTC
            address1_utcoffset: "address1_utcoffset",
            ///Indirizzo 2: ID
            address2_addressid: "address2_addressid",
            ///Indirizzo 2: tipo di indirizzo
            address2_addresstypecode: "address2_addresstypecode",
            ///Indirizzo 2: città
            address2_city: "address2_city",
            ///Indirizzo 2
            address2_composite: "address2_composite",
            ///Indirizzo 2: paese
            address2_country: "address2_country",
            ///Indirizzo 2: regione
            address2_county: "address2_county",
            ///Indirizzo 2: fax
            address2_fax: "address2_fax",
            ///Indirizzo 2: condizioni di spedizione
            address2_freighttermscode: "address2_freighttermscode",
            ///Indirizzo 2: latitudine
            address2_latitude: "address2_latitude",
            ///Indirizzo 2: via 1
            address2_line1: "address2_line1",
            ///Indirizzo 2: via 2
            address2_line2: "address2_line2",
            ///Indirizzo 2: via 3
            address2_line3: "address2_line3",
            ///Indirizzo 2: longitudine
            address2_longitude: "address2_longitude",
            ///Indirizzo 2: nome
            address2_name: "address2_name",
            ///Indirizzo 2: CAP
            address2_postalcode: "address2_postalcode",
            ///Indirizzo 2: casella postale
            address2_postofficebox: "address2_postofficebox",
            ///Indirizzo 2: nome contatto primario
            address2_primarycontactname: "address2_primarycontactname",
            ///Indirizzo 2: metodo di spedizione
            address2_shippingmethodcode: "address2_shippingmethodcode",
            ///Indirizzo 2: provincia
            address2_stateorprovince: "address2_stateorprovince",
            ///Indirizzo 2: telefono 1
            address2_telephone1: "address2_telephone1",
            ///Indirizzo 2: telefono 2
            address2_telephone2: "address2_telephone2",
            ///Indirizzo 2: telefono 3
            address2_telephone3: "address2_telephone3",
            ///Indirizzo 2: zona UPS
            address2_upszone: "address2_upszone",
            ///Indirizzo 2: differenza UTC
            address2_utcoffset: "address2_utcoffset",
            ///Indirizzo 3: ID
            address3_addressid: "address3_addressid",
            ///Indirizzo 3: tipo di indirizzo
            address3_addresstypecode: "address3_addresstypecode",
            ///Indirizzo 3: città
            address3_city: "address3_city",
            ///Indirizzo 3
            address3_composite: "address3_composite",
            ///Indirizzo 3: paese
            address3_country: "address3_country",
            ///Indirizzo 3: regione
            address3_county: "address3_county",
            ///Indirizzo 3: fax
            address3_fax: "address3_fax",
            ///Indirizzo 3: condizioni di spedizione
            address3_freighttermscode: "address3_freighttermscode",
            ///Indirizzo 3: latitudine
            address3_latitude: "address3_latitude",
            ///Indirizzo 3: via 1
            address3_line1: "address3_line1",
            ///Indirizzo 3: via 2
            address3_line2: "address3_line2",
            ///Indirizzo 3: via 3
            address3_line3: "address3_line3",
            ///Indirizzo 3: longitudine
            address3_longitude: "address3_longitude",
            ///Indirizzo 3: nome
            address3_name: "address3_name",
            ///Indirizzo 3: CAP
            address3_postalcode: "address3_postalcode",
            ///Indirizzo 3: casella postale
            address3_postofficebox: "address3_postofficebox",
            ///Indirizzo 3: nome contatto primario
            address3_primarycontactname: "address3_primarycontactname",
            ///Indirizzo 3: metodo di spedizione
            address3_shippingmethodcode: "address3_shippingmethodcode",
            ///Indirizzo 3: provincia
            address3_stateorprovince: "address3_stateorprovince",
            ///Indirizzo 3: telefono 1
            address3_telephone1: "address3_telephone1",
            ///Indirizzo 3: telefono 2
            address3_telephone2: "address3_telephone2",
            ///Indirizzo 3: telefono 3
            address3_telephone3: "address3_telephone3",
            ///Indirizzo 3: zona UPS
            address3_upszone: "address3_upszone",
            ///Indirizzo 3: differenza UTC
            address3_utcoffset: "address3_utcoffset",
            ///Conferma rimozione password
            adx_confirmremovepassword: "adx_confirmremovepassword",
            ///Creato da Indirizzo IP
            adx_createdbyipaddress: "adx_createdbyipaddress",
            ///Creato da Nome utente
            adx_createdbyusername: "adx_createdbyusername",
            ///Numero accessi non riusciti
            adx_identity_accessfailedcount: "adx_identity_accessfailedcount",
            ///Indirizzo e-mail confermato
            adx_identity_emailaddress1confirmed: "adx_identity_emailaddress1confirmed",
            ///Ultimo accesso completato
            adx_identity_lastsuccessfullogin: "adx_identity_lastsuccessfullogin",
            ///Accesso locale disabilitato
            adx_identity_locallogindisabled: "adx_identity_locallogindisabled",
            ///Blocco abilitato
            adx_identity_lockoutenabled: "adx_identity_lockoutenabled",
            ///Data fine blocco
            adx_identity_lockoutenddate: "adx_identity_lockoutenddate",
            ///Accesso abilitato
            adx_identity_logonenabled: "adx_identity_logonenabled",
            ///Telefono cellulare confermato
            adx_identity_mobilephoneconfirmed: "adx_identity_mobilephoneconfirmed",
            ///Nuovo input password
            adx_identity_newpassword: "adx_identity_newpassword",
            ///Hash password
            adx_identity_passwordhash: "adx_identity_passwordhash",
            ///Indicatore sicurezza
            adx_identity_securitystamp: "adx_identity_securitystamp",
            ///Autenticazione a due fattori abilitata
            adx_identity_twofactorenabled: "adx_identity_twofactorenabled",
            ///Nome utente
            adx_identity_username: "adx_identity_username",
            ///Modificato da Indirizzo IP
            adx_modifiedbyipaddress: "adx_modifiedbyipaddress",
            ///Modificato da Nome utente
            adx_modifiedbyusername: "adx_modifiedbyusername",
            ///Organization Name
            adx_organizationname: "adx_organizationname",
            ///LCID preferito (deprecato)
            adx_preferredlcid: "adx_preferredlcid",
            ///Avviso profilo
            adx_profilealert: "adx_profilealert",
            ///Data avviso profilo
            adx_profilealertdate: "adx_profilealertdate",
            ///Istruzioni avviso profilo
            adx_profilealertinstructions: "adx_profilealertinstructions",
            ///Profilo anonimo
            adx_profileisanonymous: "adx_profileisanonymous",
            ///Ultimo impegno profilo
            adx_profilelastactivity: "adx_profilelastactivity",
            ///Data modifica profilo
            adx_profilemodifiedon: "adx_profilemodifiedon",
            ///Copia profilo pubblico
            adx_publicprofilecopy: "adx_publicprofilecopy",
            ///Time Zone
            adx_timezone: "adx_timezone",
            ///Scadenza 30
            aging30: "aging30",
            ///Scadenza 30 (base)
            aging30_base: "aging30_base",
            ///Scadenza 60
            aging60: "aging60",
            ///Scadenza 60 (base)
            aging60_base: "aging60_base",
            ///Scadenza 90
            aging90: "aging90",
            ///Scadenza 90 (base)
            aging90_base: "aging90_base",
            ///Anniversario
            anniversary: "anniversary",
            ///Reddito annuale
            annualincome: "annualincome",
            ///Reddito annuale (base)
            annualincome_base: "annualincome_base",
            ///Assistente
            assistantname: "assistantname",
            ///Telefono assistente
            assistantphone: "assistantphone",
            ///Compleanno
            birthdate: "birthdate",
            ///Telefono ufficio 2
            business2: "business2",
            ///Biglietto da visita
            businesscard: "businesscard",
            ///BusinessCardAttributes
            businesscardattributes: "businesscardattributes",
            ///Numero richiamata
            callback: "callback",
            ///Nomi figli
            childrensnames: "childrensnames",
            ///Telefono società
            company: "company",
            ///Contatto
            contactid: "contactid",
            ///Autore (parte esterna)
            createdbyexternalparty: "createdbyexternalparty",
            ///Limite di credito
            creditlimit: "creditlimit",
            ///Limite di credito (base)
            creditlimit_base: "creditlimit_base",
            ///Blocco del credito
            creditonhold: "creditonhold",
            ///Dimensioni cliente
            customersizecode: "customersizecode",
            ///Tipo relazione
            customertypecode: "customertypecode",
            ///Listino prezzi
            defaultpricelevelid: "defaultpricelevelid",
            ///Reparto
            department: "department",
            ///Descrizione
            description: "description",
            ///Non consentire invio di messaggi e-mail in blocco
            donotbulkemail: "donotbulkemail",
            ///Non consentire posta inviata in blocco
            donotbulkpostalmail: "donotbulkpostalmail",
            ///Non consentire invio di messaggi e-mail
            donotemail: "donotemail",
            ///Non consentire fax
            donotfax: "donotfax",
            ///Non consentire telefonate
            donotphone: "donotphone",
            ///Non consentire posta
            donotpostalmail: "donotpostalmail",
            ///Consenti invio materiale marketing
            donotsendmm: "donotsendmm",
            ///Titolo di studio
            educationcode: "educationcode",
            ///E-mail
            emailaddress1: "emailaddress1",
            ///Indirizzo e-mail 2
            emailaddress2: "emailaddress2",
            ///Indirizzo e-mail 3
            emailaddress3: "emailaddress3",
            ///Dipendente
            employeeid: "employeeid",
            ///Immagine entità
            entityimage: "entityimage",
            ///ID immagine entità
            entityimageid: "entityimageid",
            ///Tasso di cambio
            exchangerate: "exchangerate",
            ///Identificatore utente esterno
            externaluseridentifier: "externaluseridentifier",
            ///Stato civile
            familystatuscode: "familystatuscode",
            ///Fax
            fax: "fax",
            ///Nome
            firstname: "firstname",
            ///Segui impegno e-mail
            followemail: "followemail",
            ///Sito FTP
            ftpsiteurl: "ftpsiteurl",
            ///Nome completo
            fullname: "fullname",
            ///Sesso
            gendercode: "gendercode",
            ///Codice fiscale/partita IVA
            governmentid: "governmentid",
            ///Figli
            haschildrencode: "haschildrencode",
            ///Telefono abitazione 2
            home2: "home2",
            ///Creato automaticamente
            isautocreate: "isautocreate",
            ///Cliente back office
            isbackofficecustomer: "isbackofficecustomer",
            ///Posizione
            jobtitle: "jobtitle",
            ///Cognome
            lastname: "lastname",
            ///Ultimo periodo sospensione
            lastonholdtime: "lastonholdtime",
            ///Data ultima inclusione in campagna
            lastusedincampaign: "lastusedincampaign",
            ///Fonte
            leadsourcecode: "leadsourcecode",
            ///Responsabile
            managername: "managername",
            ///Telefono responsabile
            managerphone: "managerphone",
            ///Solo marketing
            marketingonly: "marketingonly",
            ///ID master
            masterid: "masterid",
            ///Unito
            merged: "merged",
            ///Secondo nome
            middlename: "middlename",
            ///Cellulare
            mobilephone: "mobilephone",
            ///Autore modifica (parte esterna)
            modifiedbyexternalparty: "modifiedbyexternalparty",
            ///Partner responsabile
            msa_managingpartnerid: "msa_managingpartnerid",
            ///KPI
            msdyn_contactkpiid: "msdyn_contactkpiid",
            ///Etichette influenza decisione
            msdyn_decisioninfluencetag: "msdyn_decisioninfluencetag",
            ///Disabilita registrazione Web
            msdyn_disablewebtracking: "msdyn_disablewebtracking",
            ///Rifiuto esplicito GDPR
            msdyn_gdproptout: "msdyn_gdproptout",
            ///Assistente
            msdyn_isassistantinorgchart: "msdyn_isassistantinorgchart",
            ///È un minore
            msdyn_isminor: "msdyn_isminor",
            ///Minore con consenso dei genitori
            msdyn_isminorwithparentalconsent: "msdyn_isminorwithparentalconsent",
            ///Flag Non in azienda
            msdyn_orgchangestatus: "msdyn_orgchangestatus",
            ///Data di accettazione delle condizioni del portale
            msdyn_portaltermsagreementdate: "msdyn_portaltermsagreementdate",
            ///Fuso orario principale
            msdyn_primarytimezone: "msdyn_primarytimezone",
            ///Lingua preferita
            mspp_userpreferredlcid: "mspp_userpreferredlcid",
            ///Nome alternativo
            nickname: "nickname",
            ///N. figli
            numberofchildren: "numberofchildren",
            ///Periodo di sospensione (minuti)
            onholdtime: "onholdtime",
            ///Lead di origine
            originatingleadid: "originatingleadid",
            ///Cellulare 2
            pager: "pager",
            ///Contatto padre
            parentcontactid: "parentcontactid",
            ///Nome società
            parentcustomerid: "parentcustomerid",
            ///Tipo di cliente padre
            parentcustomeridtype: "parentcustomeridtype",
            ///Partecipa al flusso di lavoro
            participatesinworkflow: "participatesinworkflow",
            ///Condizioni di pagamento
            paymenttermscode: "paymenttermscode",
            ///Giorno preferito
            preferredappointmentdaycode: "preferredappointmentdaycode",
            ///Orario preferito
            preferredappointmenttimecode: "preferredappointmenttimecode",
            ///Metodo di contatto preferito
            preferredcontactmethodcode: "preferredcontactmethodcode",
            ///Struttura/attrezzature preferite
            preferredequipmentid: "preferredequipmentid",
            ///Servizio preferito
            preferredserviceid: "preferredserviceid",
            ///Utente preferito
            preferredsystemuserid: "preferredsystemuserid",
            ///Processo
            processid: "processid",
            ///Nazione
            res_countryid: "res_countryid",
            ///Località
            res_location: "res_location",
            ///Titolo
            salutation: "salutation",
            ///Metodo di spedizione
            shippingmethodcode: "shippingmethodcode",
            ///CONTRATTO DI SERVIZIO
            slaid: "slaid",
            ///Ultimo contratto di servizio applicato
            slainvokedid: "slainvokedid",
            ///Nome coniuge/partner
            spousesname: "spousesname",
            ///(Deprecata) Fase del processo
            stageid: "stageid",
            ///Sottoscrizione
            subscriptionid: "subscriptionid",
            ///Suffisso
            suffix: "suffix",
            ///TeamsFollowed
            teamsfollowed: "teamsfollowed",
            ///Telefono ufficio
            telephone1: "telephone1",
            ///Telefono abitazione
            telephone2: "telephone2",
            ///Telefono 3
            telephone3: "telephone3",
            ///Area
            territorycode: "territorycode",
            ///Tempo dedicato personalmente
            timespentbymeonemailandmeetings: "timespentbymeonemailandmeetings",
            ///Valuta
            transactioncurrencyid: "transactioncurrencyid",
            ///(Deprecata) Percorso incrociato
            traversedpath: "traversedpath",
            ///Sito Web
            websiteurl: "websiteurl",
            ///Nome Yomi
            yomifirstname: "yomifirstname",
            ///Nome completo Yomi
            yomifullname: "yomifullname",
            ///Cognome Yomi
            yomilastname: "yomilastname",
            ///Secondo nome Yomi
            yomimiddlename: "yomimiddlename",

            /// Values for field Stato
            statecodeValues: {
                Attiva: 0,
                Inattiva: 1
            },

            /// Values for field Motivo stato
            statuscodeValues: {
                Attiva_StateAttiva: 1,
                Inattiva_StateInattiva: 2
            },

            /// Values for field Ruolo
            accountrolecodeValues: {
                Decisore: 1,
                Dipendente: 2,
                Influenzatore: 3
            },

            /// Values for field Indirizzo 1: tipo di indirizzo
            address1_addresstypecodeValues: {
                Altro: 4,
                Fatturazione: 1,
                Primario: 3,
                Spedizione: 2
            },

            /// Values for field Indirizzo 1: condizioni di spedizione
            address1_freighttermscodeValues: {
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

            /// Values for field Indirizzo 1: metodo di spedizione
            address1_shippingmethodcodeValues: {
                Corriereespresso: 28,
                SpedizionePostale: 5,
                Trasportoaereo: 1,
                Trasportoferroviario: 10,
                Trasportointermodale: 18,
                Trasportomarittimo: 11,
                Trasportostradale: 9
            },

            /// Values for field Indirizzo 2: tipo di indirizzo
            address2_addresstypecodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Indirizzo 2: condizioni di spedizione
            address2_freighttermscodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Indirizzo 2: metodo di spedizione
            address2_shippingmethodcodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Indirizzo 3: tipo di indirizzo
            address3_addresstypecodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Indirizzo 3: condizioni di spedizione
            address3_freighttermscodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Indirizzo 3: metodo di spedizione
            address3_shippingmethodcodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Conferma rimozione password
            adx_confirmremovepasswordValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Indirizzo e-mail confermato
            adx_identity_emailaddress1confirmedValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Accesso locale disabilitato
            adx_identity_locallogindisabledValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Blocco abilitato
            adx_identity_lockoutenabledValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Accesso abilitato
            adx_identity_logonenabledValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Telefono cellulare confermato
            adx_identity_mobilephoneconfirmedValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Autenticazione a due fattori abilitata
            adx_identity_twofactorenabledValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Avviso profilo
            adx_profilealertValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Profilo anonimo
            adx_profileisanonymousValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Blocco del credito
            creditonholdValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Dimensioni cliente
            customersizecodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Tipo relazione
            customertypecodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Non consentire invio di messaggi e-mail in blocco
            donotbulkemailValues: {
                Consenti: 0,
                Nonconsentire: 1
            },

            /// Values for field Non consentire posta inviata in blocco
            donotbulkpostalmailValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Non consentire invio di messaggi e-mail
            donotemailValues: {
                Consenti: 0,
                Nonconsentire: 1
            },

            /// Values for field Non consentire fax
            donotfaxValues: {
                Consenti: 0,
                Nonconsentire: 1
            },

            /// Values for field Non consentire telefonate
            donotphoneValues: {
                Consenti: 0,
                Nonconsentire: 1
            },

            /// Values for field Non consentire posta
            donotpostalmailValues: {
                Consenti: 0,
                Nonconsentire: 1
            },

            /// Values for field Consenti invio materiale marketing
            donotsendmmValues: {
                Invia: 0,
                Noninviare: 1
            },

            /// Values for field Titolo di studio
            educationcodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Stato civile
            familystatuscodeValues: {
                CelibeNubile: 1,
                Coniugato: 2,
                Divorziato: 3,
                Vedovo: 4
            },

            /// Values for field Segui impegno e-mail
            followemailValues: {
                Consenti: 1,
                Nonconsentire: 0
            },

            /// Values for field Sesso
            gendercodeValues: {
                Femminile: 2,
                Maschile: 1
            },

            /// Values for field Figli
            haschildrencodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Creato automaticamente
            isautocreateValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Cliente back office
            isbackofficecustomerValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Fonte
            leadsourcecodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Solo marketing
            marketingonlyValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Unito
            mergedValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Etichette influenza decisione
            msdyn_decisioninfluencetagValues: {
                Blocco: 2,
                Decisore: 0,
                Influencer: 1,
                Sconosciuto: 3
            },

            /// Values for field Disabilita registrazione Web
            msdyn_disablewebtrackingValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Rifiuto esplicito GDPR
            msdyn_gdproptoutValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Assistente
            msdyn_isassistantinorgchartValues: {
                No: 0,
                Si: 1
            },

            /// Values for field È un minore
            msdyn_isminorValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Minore con consenso dei genitori
            msdyn_isminorwithparentalconsentValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Flag Non in azienda
            msdyn_orgchangestatusValues: {
                Ignora: 2,
                Nessuncommento: 0,
                Noninazienda: 1
            },

            /// Values for field Lingua preferita
            mspp_userpreferredlcidValues: {
                Arabo: 1025,
                BascoProvincebasche: 1069,
                BulgaroBulgaria: 1026,
                CatalanoCatalogna: 1027,
                CecoRepubblicaCeca: 1029,
                CineseCina: 2052,
                CineseRASdiHongKong: 3076,
                CineseTradizionale: 1028,
                CoreanoCoreadelSud: 1042,
                CroatoCroazia: 1050,
                DaneseDanimarca: 1030,
                Ebraico: 1037,
                EstoneEstonia: 1061,
                FinlandeseFinlandia: 1035,
                FranceseFrancia: 1036,
                GallegoSpagna: 1110,
                GiapponeseGiappone: 1041,
                GrecoGrecia: 1032,
                HindiIndia: 1081,
                IndonesianoIndonesia: 1057,
                Inglese: 1033,
                ItalianoItalia: 1040,
                KazakoKazakistan: 1087,
                LettoneLettonia: 1062,
                LituanoLituania: 1063,
                MaleseMalaysia: 1086,
                NorvegeseBokmalNorvegia: 1044,
                OlandesePaesiBassi: 1043,
                PolaccoPolonia: 1045,
                PortogheseBrasile: 1046,
                PortoghesePortogallo: 2070,
                RumenoRomania: 1048,
                RussoRussia: 1049,
                SerboalfabetocirillicoSerbia: 3098,
                SerboalfabetolatinoSerbia: 2074,
                SlovaccoSlovacchia: 1051,
                SlovenoSlovenia: 1060,
                SpagnoloordinamentotradizionaleSpagna: 3082,
                SvedeseSvezia: 1053,
                TedescoGermania: 1031,
                ThaiThailandia: 1054,
                TurcoTurchia: 1055,
                UcrainoUcraina: 1058,
                UnghereseUngheria: 1038,
                VietnamitaVietnam: 1066
            },

            /// Values for field Partecipa al flusso di lavoro
            participatesinworkflowValues: {
                No: 0,
                Si: 1
            },

            /// Values for field Condizioni di pagamento
            paymenttermscodeValues: {
                _30gg: 1,
                _60gg: 4,
                _90gg: 9,
                Pagamentoincontanti: 10
            },

            /// Values for field Giorno preferito
            preferredappointmentdaycodeValues: {
                Domenica: 0,
                Giovedi: 4,
                Lunedi: 1,
                Martedi: 2,
                Mercoledi: 3,
                Sabato: 6,
                Venerdi: 5
            },

            /// Values for field Orario preferito
            preferredappointmenttimecodeValues: {
                Mattino: 1,
                Pomeriggio: 2,
                Sera: 3
            },

            /// Values for field Metodo di contatto preferito
            preferredcontactmethodcodeValues: {
                Email: 2,
                Fax: 4,
                Posta: 5,
                Telefono: 3,
                Tutti: 1
            },

            /// Values for field Metodo di spedizione
            shippingmethodcodeValues: {
                Valorepredefinito: 1
            },

            /// Values for field Area
            territorycodeValues: {
                Valorepredefinito: 1
            }
        },
        tabs: {

        },
        sections: {

        }
    };

    //---------------------------------------------------
    /**
     * se i campi Città o CAP sono valorizzati, il campo Indirizzo diventa required
     */
    _self.setAddressRequirement = executionContext => {
        const formContext = executionContext.getFormContext();

        const cityControl = formContext.getControl(_self.formModel.fields.address1_city) ?? null;
        const postalCodeControl = formContext.getControl(_self.formModel.fields.address1_postalcode) ?? null;
        const addressControl = formContext.getControl(_self.formModel.fields.address1_name) ?? null;

        const cityHasValue = cityControl ? cityControl.getAttribute().getValue() ?? null : null;
        const postalCodeHasValue = postalCodeControl ? postalCodeControl.getAttribute().getValue() ?? null : null;

        if (addressControl) {
            if (cityHasValue || postalCodeHasValue) { addressControl.getAttribute().setRequiredLevel("required") }
            else { addressControl.getAttribute().setRequiredLevel("none") }
        }
    };
    //---------------------------------------------------
    /**
     * se il campo Indirizzo è valorizzato, il campo Città diventa required
     */
    _self.setCityRequirement = executionContext => {
        const formContext = executionContext.getFormContext();

        const addressControl = formContext.getControl(_self.formModel.fields.address1_name) ?? null;
        const cityControl = formContext.getControl(_self.formModel.fields.address1_city) ?? null;

        const addressHasValue = addressControl ? addressControl.getAttribute().getValue() ?? null : null;

        if (cityControl) {
            if (addressHasValue) { cityControl.getAttribute().setRequiredLevel("required") }
            else { cityControl.getAttribute().setRequiredLevel("none") }
        }
    };
    //---------------------------------------------------
    _self.setPostalCodeRequirement = executionContext => {
        const formContext = executionContext.getFormContext();

        const addressControl = formContext.getControl(_self.formModel.fields.address1_name) ?? null;
        const postalCodeControl = formContext.getControl(_self.formModel.fields.address1_postalcode) ?? null;

        const addressHasValue = addressControl ? addressControl.getAttribute().getValue() ?? null : null;

        if (postalCodeControl) {
            if (addressHasValue) { postalCodeControl.getAttribute().setRequiredLevel("required") }
            else { postalCodeControl.getAttribute().setRequiredLevel("none") }
        }
    };
    //---------------------------------------------------
    _self.setCityRelatedFieldsEditability = executionContext => {
        const formContext = executionContext.getFormContext();

        const cityControl = formContext.getControl(_self.formModel.fields.address1_city);
        const cityHasValue = cityControl ? cityControl.getAttribute().getValue() ?? null : null;

        const fieldsToEnable = [
            _self.formModel.fields.res_location,
            _self.formModel.fields.address1_stateorprovince,
            _self.formModel.fields.res_countryid
        ];

        fieldsToEnable.forEach(field => {
            const control = formContext.getControl(field);
            if (control) {
                if (cityHasValue) { control.setDisabled(false); } else { control.setDisabled(true); }
            }
        });
    };
    //---------------------------------------------------
    /**
     * al cambio della selezione nel campo lookup Nazione, viene valorizzato il campo Nazione (testo)
     */
    _self.onChangeCountry = executionContext => {
        const formContext = executionContext.getFormContext();

        const countryStringControl = formContext.getControl(_self.formModel.fields.address1_country);
        const countryLookupControl = formContext.getControl(_self.formModel.fields.res_countryid);

        const countryLookUpValue = countryLookupControl ? countryLookupControl.getAttribute().getValue() ?? null : null;

        if (countryLookUpValue) {

            const countryId = (countryLookUpValue[0].id).replace(/[{}]/g, "");

            Xrm.WebApi.retrieveRecord("res_country", countryId, "?$select=res_name").then(
                country => {

                    const countryName = country.res_name;
                    if (countryName) {
                        if (countryStringControl) { countryStringControl.getAttribute().setValue(countryName) }
                    }
                },
                error => {
                    console.log(error.message);
                }
            );
        }
    };
    //---------------------------------------------------
    _self.onChangeAddress = function (executionContext) {
        let formContext = executionContext.getFormContext();
        _self.setAddressRequirement(executionContext);
        _self.setCityRequirement(executionContext);
        _self.setCityRelatedFieldsEditability(executionContext);
    };
    //---------------------------------------------------
    _self.setContextCapIframe = function (executionContext) {
        let formContext = executionContext.getFormContext();
        var wrControl = formContext.getControl("WebResource_postalcode");

        var fields = {
            cap: _self.formModel.fields.address1_postalcode,
            city: _self.formModel.fields.address1_city,
            province: _self.formModel.fields.address1_stateorprovince,
            nation: _self.formModel.fields.address1_country,
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
    /*
    Utilizzare la keyword async se si utilizza uno o più metodi await dentro la funzione onSaveForm
    per rendere il salvataggio asincrono (da attivare sull'app dynamics!)
    */
    //---------------------------------------------------
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
    _self.onLoadReadyOnlyForm = function (executionContext) {

        var formContext = executionContext.getFormContext();
    };
    //---------------------------------------------------
    /* 
    Utilizzare la keyword async se si utilizza uno o più metodi await dentro la funzione l'onLoadForm
    per rendere l'onload asincrono asincrono (da attivare sull'app dynamics!)
    Ricordare di aggiungere la keyword anche ai metodi richiamati dall'onLoadForm se l'await avviene dentro di essi
    */
    _self.onLoadForm = async function (executionContext) {

        //init lib
        await import('../res_scripts/res_global.js');

        //init formContext
        const formContext = executionContext.getFormContext();

        //Init event
        formContext.data.entity.addOnSave(_self.onSaveForm);
        formContext.getAttribute(_self.formModel.fields.res_countryid).addOnChange(_self.onChangeCountry);
        formContext.getAttribute(_self.formModel.fields.address1_city).addOnChange(_self.setAddressRequirement);
        formContext.getAttribute(_self.formModel.fields.address1_city).addOnChange(_self.setCityRelatedFieldsEditability);
        formContext.getAttribute(_self.formModel.fields.address1_postalcode).addOnChange(_self.setAddressRequirement);
        formContext.getAttribute(_self.formModel.fields.address1_name).addOnChange(_self.setPostalCodeRequirement);
        formContext.getAttribute(_self.formModel.fields.address1_name).addOnChange(_self.setCityRequirement);

        //Init function
        _self.setAddressRequirement(executionContext);
        _self.setPostalCodeRequirement(executionContext);
        _self.setCityRequirement(executionContext);
        _self.setContextCapIframe(executionContext);
        _self.setCityRelatedFieldsEditability(executionContext);

        switch (formContext.ui.getFormType()) {
            case RSMNG.Global.CRM_FORM_TYPE_CREATE:
                _self.onLoadCreateForm(executionContext);
                break;
            case RSMNG.Global.CRM_FORM_TYPE_UPDATE:
                _self.onLoadUpdateForm(executionContext);
                break;
            case RSMNG.Global.CRM_FORM_TYPE_READONLY:
                _self.onLoadReadyOnlyForm(executionContext);
                break;
            case RSMNG.Global.CRM_FORM_TYPE_QUICKCREATE:
                _self.onLoadCreateForm(executionContext);
                break;
        }
    };
}
).call(RSMNG.TAUMEDIKA.CONTACT);