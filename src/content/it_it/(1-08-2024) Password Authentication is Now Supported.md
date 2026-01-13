---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]L'autenticazione tramite password è ora supportata[/postlink]

{{#unless isPost}}
Con questo aggiornamento, FastComments ora supporta l'autenticazione tradizionale basata su password oltre al sistema esistente basato su email.
{{/unless}}

{{#isPost}}

### Novità

Dalla sua introduzione, FastComments si autenticava tramite link email magici. Questo avveniva perché potevamo consolidare i nostri meccanismi di accesso nello stesso sistema utilizzato
quando un utente lascia il suo primo commento e verifica/accesso tramite un link basato su email. Tuttavia, non tutti i server email sono uguali, e a volte
ricevere un link poteva richiedere minuti. Questo è stato molto frustrante per alcuni dei nostri utenti.

Dalla fine del 2023, FastComments ora supporta l'autenticazione tramite password! Nella pagina di accesso ci sono ora due schede - una per accedere tramite email e una per tramite
password.

### Come impostare una password

Puoi impostare una password andando su [Il mio account -> Dettagli account -> Cambia password](https://fastcomments.com/auth/my-account/edit-details/change-password).

Basta richiedere un link di reimpostazione. Un link verrà inviato alla tua email, e cliccando su questo potrai impostare una nuova password. Il link funziona solo una volta e scade se non utilizzato.

### Archiviazione e sicurezza delle password

Le password non vengono memorizzate. Piuttosto, le password vengono crittografate con un sale di 11 round utilizzando bcrypt. L'accesso al sistema basato su password è limitato
e monitorato per prevenire vari tipi di attacchi legati alle password.

### Il futuro

In futuro prevediamo di supportare anche l'autenticazione a due fattori (2FA).

### In conclusione

Come in tutte le principali versioni, siamo felici di aver potuto prendere il tempo necessario per ottimizzare, testare e rilasciare correttamente questa funzionalità. Faccelo sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---