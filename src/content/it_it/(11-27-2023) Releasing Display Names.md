---
[category:Features]

###### [postdate]
# [postlink]Pubblicazione dei Nomi Visualizzati[/postlink]

{{#unless isPost}}
FastComments ha sempre supportato i nomi visualizzati per gli utenti SSO. Tuttavia, questo non è mai stato reso disponibile per i commentatori regolari. Oggi cambia tutto!
{{/unless}}

{{#isPost}}

### Novità

FastComments ha sempre supportato i nomi visualizzati per gli utenti SSO. Tuttavia, questo non è mai stato reso disponibile per i commentatori regolari. Oggi cambia tutto!

Nella pagina [Dettagli dell'Account](https://fastcomments.com/auth/my-account/edit-details) puoi ora compilare un nuovo campo `Nome Visualizzato`. Il `Nome Visualizzato` verrà
mostrato nei tuoi commenti e nei tuoi profili.

### Emoji

In passato, gli utenti avevano difficoltà ad utilizzare emoji nei nomi utente poiché è necessario inserire il proprio nome utente per accedere. Tuttavia, ora il `Nome Visualizzato` può contenere emoji.

### Unicità e Abuso

Il punto del `Nome Visualizzato` è che non è unico. Se due utenti di FastComments.com, su due importanti comunità molto diverse, hanno nomi simili, allora ci piacerebbe
che potessero semplicemente impostare il proprio nome visualizzato preferito. Tuttavia, non possiamo limitare dove le persone commentano con il loro account globale di FastComments, quindi a volte questo può
risultare in confusione.

Avere un nome simile a quello di un altro utente, o di un moderatore, di per sé non è un caso di abuso. Tuttavia, se abusi di questo impersonando intenzionalmente altri utenti, potremmo
disabilitare questa funzione sul tuo account, e sarai limitato a utilizzare solo `username`.

### Accesso

Puoi ancora utilizzare il tuo nome utente per accedere - **non il tuo nome visualizzato!**

### Per Sviluppatori & Avvertenze

I normali oggetti `User` esposti tramite l'API ora hanno `displayName`.

### In Conclusione

Come per tutte le versioni importanti, siamo contenti di aver potuto dedicare tempo per ottimizzare, testare e rilasciare correttamente questa funzione. Facci sapere
qui sotto se scopri eventuali problemi.

Saluti!

{{/isPost}}

---