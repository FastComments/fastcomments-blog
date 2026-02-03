---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Aggiungi Chat Dal Vivo alle Applicazioni Native con FastComments React Native[/postlink]

{{#unless isPost}}
Dopo mesi di lavoro, siamo lieti di annunciare che fastcomments-react-native-sdk è ora alla versione 1.0 per disponibilità generale.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

### Cosa C'è di Nuovo

In FastComments, abbiamo lanciato un nuovo modo per costruire applicazioni React Native con FastComments. In precedenza, utilizzavi il nostro wrapper react-native attorno alla
libreria VanillaJS. Questo introduceva diversi problemi di memoria e latenza a causa della necessità di una web view - un browser nella tua app - solo per caricare la nostra libreria.

Abbiamo ora **completamente** portato FastComments su React Native e scritto il nostro editor WYSIWYG per eliminare completamente la necessità di web view.

La libreria supporta diversi skin e layout. Ad esempio, ecco la skin Erebus che è uno skin scuro in stile chat dal vivo:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Skin Erebus" title="Skin Erebus" />
</div>

La libreria è disponibile [su GitHub presso FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) così come
[su NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Personalizzabile

La nuova libreria nativa è progettata per essere personalizzabile proprio come la libreria web esistente.

Puoi:

- Personalizzare tutte le risorse e le icone utilizzate dalla libreria.
- Personalizzare lo stile di ogni componente nella libreria passando un oggetto Styles dall'alto.
- Personalizzare tutte le traduzioni.
- Usare uno degli skin predefiniti o sviluppati dalla community.
- Usare molte delle stesse opzioni di configurazione supportate dalla libreria web.

### Elenco Completo delle Funzionalità

La libreria supporta molte cose. Un elenco incompleto è:

- [x] Blocco
- [x] Reazioni nella Chat
- [x] Commenti & Risposte ai Commenti
- [x] Stili Personalizzati (come foglio di stile tipizzato)
- [x] Emoticon
- [x] Segnalazione
- [x] Browser Gif - Con capacità di ricerca e tendenze predefinite. Immagini e ricerche anonimizzate tramite proxy.
- [x] Commenti dal Vivo
- [x] Selezione e Caricamento di Media
- [x] Editor WYSIWYG nativo con supporto per immagini.
- [x] Servizio di Notifiche (ottieni le notifiche non lette dell'utente in background per inviarle, ecc.)
- [x] Elenco Notifiche (si mostra cliccando sulla campanella). Supporta abbonamenti.
- [x] Pagina (Pulsanti)
- [x] Pagina (Scorrimento Infinito)
- [x] Fissaggio dei Commenti
- [x] Commenti sicuri, semplici SSO e anonimi.
- [x] Diverse skin predefinite.
- [x] Mostra/Nascondi Commenti Toggle
- [x] Thread
- [x] Indicatori di attività utenti
- [x] Votazione

### Come Funziona

La libreria è una riscrittura completa del client FastComments in TypeScript e React Native.

### Piano a Lungo Termine

A lungo termine, manterremo sia la libreria VanillaJS che la libreria react-native in parallelo, così come eventuali future librerie native che potremmo sviluppare.

### Cosa C'è Dopo?

Non vediamo l'ora di ricevere feedback da parte degli utenti e della community per migliorare questa libreria nel tempo, proprio come abbiamo fatto con l'ecosistema web.

### In Conclusione

Sappiamo che questa libreria è stata attesa a lungo da alcuni. Come per tutti i principali rilasci, siamo felici di aver potuto prendere il tempo per ottimizzare, testare e rilasciare correttamente questa libreria.

Salute!

{{/isPost}}

---