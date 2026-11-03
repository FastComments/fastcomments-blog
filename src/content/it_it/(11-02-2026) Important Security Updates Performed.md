[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Aggiornamenti di Sicurezza Importanti Eseguiti[/postlink]

{{#unless isPost}}
Abbiamo applicato una patch al sistema operativo su tutti i nostri server per correggere una recente vulnerabilità TCP di Linux e aggiornato Node.js per includere la sua release di sicurezza di ottobre. Non è necessaria alcuna azione da parte tua.
{{/unless}}

{{#isPost}}

### What's New

Abbiamo recentemente completato due aggiornamenti di sicurezza nell'infrastruttura di FastComments: un aggiornamento del sistema operativo per correggere una vulnerabilità nel codice TCP del kernel Linux e un aggiornamento di Node.js per includere l'ultima release di sicurezza.

### Linux Kernel

Tutti i nostri server sono stati patchati e ora eseguono un kernel che include la correzione per
<a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

Si tratta di un use‑after‑free nel codice TCP IPv4 del kernel. Il kernel poteva liberare le opzioni IP collegate a una connessione mentre un'altra CPU le stava ancora leggendo, ad esempio durante la costruzione della risposta SYNACK durante una stretta di mano TCP. La correzione attende finché nessuna CPU può ancora leggere quella memoria prima di liberarla.

### Node.js

FastComments gira su Node.js e abbiamo aggiornato alla versione 24.22.1, la release patchata per la linea 24.x dalla
<a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">release di sicurezza di ottobre 2026 di Node.js</a>.

Quella release corregge 10 vulnerabilità nelle versioni supportate di Node.js. 8 di esse interessano la linea 24.x, e 4 di queste sono classificate come critiche: due nella convalida TLS degli indirizzi IP, una nella gestione dei nomi DNS e una nel decoder Brotli. Aggiorna inoltre le dipendenze incluse, tra cui OpenSSL, c-ares, Undici e il bundle di certificati CA.

### What You Need To Do

Niente. Questi aggiornamenti sono tutti da noi, quindi i tuoi widget, le integrazioni API e le configurazioni SSO non necessitano di alcuna modifica.

### In Conclusion

Mantenere la nostra infrastruttura aggiornata è una parte continua dell'esecuzione di FastComments e continueremo ad applicare aggiornamenti come questi man mano che vengono rilasciati. Se hai domande, faccelo sapere qui sotto.

Saluti!

{{/isPost}}

---