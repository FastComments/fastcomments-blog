---
[category:Moderation]

###### [postdate]
# [postlink]I thread dei commenti possono ora essere chiusi facilmente[/postlink]

{{#unless isPost}}
FastComments ha sempre permesso di contrassegnare i thread dei commenti come di sola lettura tramite codice o regole di personalizzazione, ma ora può essere facilmente
fatto direttamente dal widget dei commenti.
{{/unless}}

{{#isPost}}

### Novità

FastComments ha sempre permesso di contrassegnare i thread dei commenti come di sola lettura tramite codice o regole di personalizzazione, ma ora può essere facilmente
fatto direttamente dal widget dei commenti.

Nel menu a tre punti in alto nell'area dei commenti, gli amministratori o chiunque abbia il permesso di moderazione avrà ora l'opzione
di **chiudere** un thread di commento, e potenzialmente **riaprirlo** in qualsiasi momento.

Questo è leggermente diverso dal contrassegnare i thread come `readonly` che potresti aver fatto fino ad ora. Contrassegnare un thread come `readonly`
significa che assolutamente nulla può cambiare sulla pagina - non ci saranno più commenti, né voti, né modifica dei commenti, né rimozione dei commenti.

Chiudere un thread di commento è un po' diverso - non possono essere aggiunti commenti, ma gli utenti possono comunque eliminare i propri commenti se lo desiderano.
Inoltre, i voti possono ancora essere lasciati o rimossi.

### Dal Vivo

Come il resto di FastComments, chiudere e riaprire i thread di commenti è in tempo reale e influenzerà istantaneamente qualsiasi utente che visualizza quel thread.

### Come Ottenerlo

Questa funzionalità è stata distribuita a tutti i clienti!

### Personalizzazioni del Testo

È stata aggiunta una nuova traduzione, `THREAD_CLOSED`, con il valore predefinito in inglese di `Questo thread di commento è stato chiuso per nuovi commenti.`

Questo testo può sempre essere personalizzato tramite l'interfaccia di personalizzazione del widget.

### In Conclusione

Come per tutte le versioni importanti, siamo felici di aver avuto il tempo di ottimizzare, testare e rilasciare correttamente questa funzionalità. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---