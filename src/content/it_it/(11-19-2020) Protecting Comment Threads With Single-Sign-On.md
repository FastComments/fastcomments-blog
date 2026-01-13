---
[category:Security]

###### [postdate]
# [postlink]Proteggere i Thread dei Commenti con il Single-Sign-On[/postlink]

{{#unless isPost}}
Non consideri i tuoi thread di commento pubblici? Hai configurato l'SSO per l'autenticazione? Questo potrebbe essere per te.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Terminologia Tecnica

#### Introduzione

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(dettagli qui)</a> offre ai tuoi utenti un modo
per commentare senza dover accedere a un'altra piattaforma.

Tuttavia, da solo, questo non protegge i tuoi thread di commento, poiché per impostazione predefinita i dati dei commenti sono informazioni pubblicamente disponibili - chiunque possa visualizzare
la pagina può visualizzare i commenti. Tuttavia, questa versione cambia le cose.

#### Configurazione No-Code

Possiamo impedire la visualizzazione e l'interazione con i nostri thread di commento, quando l'SSO è configurato, creando una <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">regola di personalizzazione</a>.

Quando lo fai, cerca SSO e troverai questa opzione:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Opzione di Configurazione per Bloccare i Commenti tramite SSO" alt="Opzione di Configurazione per Bloccare i Commenti tramite SSO" class="lozad" />
</div>

Abilitala e salva la regola di personalizzazione.

#### Proteggi Solo un Determinato Dominio o Pagina

Per proteggere solo un determinato Dominio o Pagina, configureremo semplicemente la regola di personalizzazione per farlo.

In cima all'interfaccia di personalizzazione, troveremo due input, Dominio e ID URL.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Opzione di Configurazione per Pagina o Dominio" alt="Opzione di Configurazione per Pagina o Dominio" class="lozad" />
</div>

Per proteggere solo un dominio particolare, inserisci il dominio in questione nel campo "dominio".

Per proteggere una pagina particolare, inserisci un URL di pagina nel campo "ID URL". Se hai un'integrazione personalizzata con FastComments, puoi inserire un tipo di ID qui
anziché un URL.

#### Protezione Oltre la Lettura

Abilitando questa opzione, si proteggerà la pagina o il dominio dall'essere commentato a meno che l'utente non sia connesso tramite SSO.

#### Problemi

Qualsiasi utente che ha creato commenti prima della tua integrazione SSO non sarà in grado di vederli, a meno che non acceda tramite la tua integrazione SSO.

#### In Conclusione

Speriamo che questa guida ti sia stata utile e facile da leggere. Sentiti libero di commentare qui sotto con qualsiasi domanda.

Saluti!

{{/isPost}}