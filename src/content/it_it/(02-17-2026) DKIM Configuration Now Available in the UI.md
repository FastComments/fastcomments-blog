---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Configurazione DKIM Ora Disponibile nell'Interfaccia[/postlink]

{{#unless isPost}}
FastComments fornisce ora un'interfaccia per configurare DKIM, rendendo più facile migliorare i tassi di consegna delle email senza utilizzare l'API.
{{/unless}}

{{#isPost}}

### Novità

Impostare DKIM per il tuo dominio email personalizzato è diventato più semplice. In precedenza, la configurazione di DKIM richiedeva l'uso diretto dell'
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API delle Configurazioni di Dominio</a>. Ora, puoi
configurare DKIM direttamente dall'interfaccia di amministrazione di FastComments.

### Perché DKIM è Importante

Quando personalizzi il Dominio del Mittente per le email che FastComments invia per tuo conto, i fornitori di email devono verificare che
quelle email siano legittime. DKIM (DomainKeys Identified Mail) è uno dei principali meccanismi di autenticazione che aiuta in questo.
Senza una corretta configurazione DKIM, le email inviate per conto del tuo dominio hanno maggiori probabilità di finire nelle cartelle di spam.

### Come Configurarlo

Naviga alla pagina <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">I Miei Domini</a> e clicca
"Mostra Avanzate" per il dominio che vuoi configurare. Vedrai le impostazioni DKIM dove puoi inserire il nome del tuo dominio, il selettore della chiave,
e la chiave privata.

Dopo aver salvato, la configurazione DKIM sarà applicata a tutte le email inviate da quel dominio.

### L'API Funziona Ancora

Se preferisci gestire la configurazione DKIM in modo programmatico, l'
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API delle Configurazioni di Dominio</a> continua a funzionare
come prima.

### In Conclusione

Speriamo che questo renda più facile garantire che i tuoi utenti ricevano le email che FastComments invia per tuo conto. Faccelo sapere
qui sotto se hai domande.

Cheers!

{{/isPost}}

---