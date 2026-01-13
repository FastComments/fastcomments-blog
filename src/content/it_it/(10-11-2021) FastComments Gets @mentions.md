---
[category:Features]
###### [postdate]
# [postlink]FastComments Ottiene le @menzioni[/postlink]

{{#unless isPost}}
Hai mai voluto @menzionare uno o più utenti in un commento? Ora puoi farlo.
{{/unless}}

{{#isPost}}

### Novità

In precedenza, FastComments notificava gli utenti se rispondevi ai loro commenti, ma non c'era modo di taggare più persone in un singolo commento. Inoltre, queste
notifiche venivano inviate in blocchi ogni ora. Con le `@menzioni`, ora è possibile taggare uno o più utenti e FastComments li notificherà immediatamente via email.

### Come Utilizzarlo

Quando digiti `@` e poi l'inizio del nome di un utente, apparirà un elenco di risultati di ricerca.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Utilizzo delle Menzioni" title="Demo di @menzioni" />
</div>

Basta cliccare sul nome dell'utente che desideri taggare.

Inoltre, puoi utilizzare i tasti freccia su e giù per navigare in questo elenco e premere invio per selezionare, o escape per uscire.

Sappiamo che potresti voler usare il simbolo `@` senza taggare un utente. FastComments lo rileverà e non interferirà con la tua esperienza di digitazione.

### A Chi È Destinato

Tutti i clienti attuali e nuovi di FastComments, su tutti i livelli, hanno ora accesso alle `@menzioni`. Le `@menzioni` sono state retroportate a versioni precedenti del
widget dei commenti.

### Come Funziona l'Autocompletamento

Gli utenti mostrati nell'elenco di autocompletamento sono determinati da:

- Utenti che hanno commentato sulla stessa pagina o thread.
- Utenti che hanno creato i loro account FastComments attraverso lo stesso sito.
- Moderatori del sito attuale.
- Utenti SSO che appartengono al tenant attuale.

### Modifica dei Commenti

Le menzioni possono essere aggiunte a commenti esistenti modificandoli. Tuttavia, l'applicazione `Moderare Commenti` attualmente non completa automaticamente le `@menzioni`.

### Considerazioni Future

In futuro, gli utenti che hanno FastComments aperto in una finestra del browser riceveranno una notifica quando vengono menzionati, se hanno attivato le notifiche.

### In Conclusione

Come il resto di FastComments, speriamo che tu trovi questa funzionalità veloce e facile da usare.

Saluti!

{{/isPost}}

---