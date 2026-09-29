[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Arabo e le lingue da destra a sinistra ora supportate[/postlink]

{{#unless isPost}}
FastComments ora supporta l'arabo e ogni parte di FastComments si dispone da destra a sinistra per l'arabo e l'ebraico. Conteggi come "3 commenti" ora usano la forma plurale corretta in ogni lingua.
{{/unless}}

{{#isPost}}

### Novità

L'arabo è ora una lingua supportata, con il codice locale `ar`. Il widget dei commenti, gli altri widget incorporabili, le email, la dashboard e il sito di marketing sono tutti tradotti.

L'arabo è anche scritto da destra a sinistra, quindi aggiungerlo ha significato insegnare a FastComments a disporre l'interfaccia in entrambe le direzioni. Questa correzione si applica anche all'ebraico.

### Layout da destra a sinistra

Quando la lingua è arabo o ebraico, l'intera interfaccia si specchia. L'avatar, il nome e i controlli di risposta su un commento scambiano lato, i menu e i dropdown si aprono verso il bordo corretto e le frecce indicano la direzione di lettura. Questo copre il widget dei commenti e le sue estensioni come live chat e sondaggi, il ticketing, la chat collaborativa e i widget di riepilogo recensioni, le email e la dashboard.

Non c'è nulla da configurare, tranne impostare manualmente la tua lingua per l'utente se lo desideri.

### I commenti mantengono la propria direzione

A volte una sezione di commenti è in più lingue. Un commento in inglese su una pagina in arabo, o un commento in arabo su una pagina in inglese, dovrebbe comunque risultare leggibile naturalmente.

Ogni commento e nome utente segue la direzione del proprio testo. Su una pagina in inglese, una risposta in arabo si legge da destra a sinistra mentre i commenti intorno si leggono da sinistra a destra, e il contrario vale su una pagina in arabo. I blocchi di codice all'interno dei commenti si leggono sempre da sinistra a destra, poiché il codice lo fa.

### Impostare la lingua

Per impostazione predefinita il widget prende la lingua dal browser del visitatore, quindi gli utenti arabi ottengono l'arabo automaticamente. Per forzarlo, imposta la lingua nella pagina di personalizzazione del widget sotto "Locale / Language", o nel codice:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Se utilizzi SSO, passa `locale: 'ar'` sull'oggetto utente così le loro email arriveranno anche in arabo.

### Plurali, fatti correttamente

L'inglese ha due forme per un conteggio: "1 commento" e "2 commenti". L'arabo ha forme separate per uno, due, da tre a dieci, e da undici a novantanove, e usa di nuovo il singolare per cento. Russo, ucraino, polacco, croato, serbo, sloveno e ebraico hanno ciascuno le proprie regole.

Finora FastComments conosceva solo "uno" e "tutto il resto", quindi un lettore russo poteva vedere la forma errata del sostantivo per 2 o 5 commenti. Ogni stringa con un conteggio ora sceglie la forma corretta per la sua lingua, nel widget, nelle email e nella dashboard.

Mentre eravamo lì, abbiamo revisionato ogni stringa di conteggio in tutte le lingue. Questo ha evidenziato diverse traduzioni errate più vecchie che ora sono state corrette. Per esempio, in alcune lingue la parola per "reply" era il verbo "to reply", così un commento mostrava "1 Reply" come equivalente di "1 To reply".

Se hai personalizzato il testo di un conteggio, come l'etichetta "comments", il tuo testo viene ancora usato per ogni conteggio.

### Trovare la tua lingua

I selettori di lingua nella dashboard ora mostrano il nome di ciascuna lingua accanto a quello inglese, come "Arabic (العربية)" e "German (Germany) (Deutsch)". Se qualcuno atterra nella lingua sbagliata, può comunque trovare la sua.

### Documentazione

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">La guida alle lingue supportate</a> elenca ogni codice locale e copre il comportamento da destra a sinistra. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">L'opzione locale</a> descrive come forzare una lingua nel widget.

Questo si basa sul [nostro primo rilascio di localizzazione](/(2-05-2020)-fastcomments-gets-localized.html) del 2020, che iniziò con tre lingue. Ora siamo a ventotto locali.

### In conclusione

Siamo felici di poter portare FastComments agli utenti arabi e di rendere l'esperienza migliore per gli utenti ebraici. Se noti una traduzione errata nella tua lingua, faccelo sapere qui sotto e la correggeremo.

Saluti!

{{/isPost}}

---