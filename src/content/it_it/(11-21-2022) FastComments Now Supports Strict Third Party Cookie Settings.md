---
[category:Security]

###### [postdate]
# [postlink]FastComments Ora Supporta Impostazioni Severe sui Cookie di Terze Parti[/postlink]

{{#unless isPost}}
Fino ad ora, FastComments richiedeva che i cookie di terze parti fossero abilitati per funzionare completamente. Questo non è più il caso!
{{/unless}}

{{#isPost}}

### Novità

Disattivare i cookie di terze parti per impostazione predefinita sta diventando la norma nei browser orientati alla privacy. Un esempio di ciò è Safari di Apple su iOS, dove
se lasci il tuo email per commentare con FastComments, verifichi quel commento e poi torni a quella pagina per lasciare un altro commento, o rispondere
a qualcuno, scoprirai che ulteriori commenti che lasci saranno contrassegnati come non verificati.

Questo accadrà solo con la configurazione predefinita che mostra un'etichetta `Non Verificato` sui commenti. Tuttavia, questo può influenzare altre cose come le approvazioni automatiche
se le approvazioni automatiche sono abilitate solo per i commenti verificati.

Come puoi immaginare, questo può portare a un comportamento frustrante in cui un utente verifica il proprio commento, clicca su "Rimani Connesso", e non è
ancora connesso quando visita il tuo sito o applicazione. Nota che questo non si applica alle integrazioni SSO, poiché SSO non dipende
dai cookie.

Ora, con una nuova impostazione che può essere abilitata chiamata `Abilita Popup per Cookie di Terze Parti` nelle impostazioni del widget, questo problema viene risolto
aprendo un popup che recupera il cookie dell'utente. Per ora questo si verifica solo se interagiscono con il widget dei commenti, ma il risultato è che
il commento sarà pubblicato dalla loro sessione di FastComments.com, contrassegnando il loro commento come verificato, e così via.

### Come Ottenerlo e Documentazione

Tutti i clienti di FastComments su tutti i livelli hanno ora accesso a questa funzionalità. Controlla [la documentazione](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass) per scoprire come abilitare il bypass dei cookie di terze
parti.

### In Conclusione

Come tutte le versioni principali, siamo felici di aver potuto prendere il tempo per ottimizzare, testare e rilasciare correttamente questa funzionalità. Facci sapere
qui sotto se scopri problemi.

Saluti!

{{/isPost}}

---