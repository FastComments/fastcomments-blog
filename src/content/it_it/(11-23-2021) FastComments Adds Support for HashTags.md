---
[category:Features]

###### [postdate]
# [postlink]FastComments Aggiunge Supporto per #HashTags[/postlink]

{{#unless isPost}}
Hai mai voluto #taggare un argomento o un'informazione? Ora puoi farlo.
{{/unless}}

{{#isPost}}

### Novità

Quando commenti, gli utenti ora possono inserire uno o più `#hashtags`. Cliccando su un `#hashtag` in un commento verrai indirizzato a una vista con altri commenti
con l'hashtag mostrato.

Inoltre, i `#hashtags` possono essere utilizzati per collegarsi a contenuti esterni. Insieme a questo rilascio abbiamo lanciato la nostra [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
che consente la pre-popolazione degli hashtag nel tuo account.

Quando si pre-popolano gli hashtag, possiamo definire un URL per ciascun tag. Questo significa che i `#hashtags` possono anche essere utilizzati per collegarsi, ad esempio, a un numero di ticket, o
a un documento in un CRM.

Il simbolo `#` può essere personalizzato anche su richiesta.

### Come Usarlo

Quando digiti `#`, e poi l'inizio di un hashtag, apparirà un elenco di risultati di ricerca.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="Utilizzo di HashTags" title="#hashtags Demo" />
</div>

Semplicemente clicca sull'hashtag che desideri aggiungere.

Inoltre, puoi utilizzare i tasti freccia su e giù per navigare in questo elenco, e premere invio per selezionare, o esc per uscire.

Sappiamo che potresti voler usare il simbolo `#` senza aggiungere un hashtag. FastComments lo rileverà e non interferirà con la tua esperienza di digitazione.

### Aggiungere Hash Tags

Se l'hashtag che desideri utilizzare non è nell'elenco delle proposte - FastComments creerà automaticamente l'hashtag in background.

La creazione automatica di `#hashtag` può essere disabilitata come indicato nella documentazione [qui](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Chi Ne Beneficia

Tutti i clienti attuali e nuovi di FastComments, su tutti i livelli, hanno ora accesso ai `#hashtags`. I `#hashtags` sono stati retro-portati anche nelle versioni precedenti del
widget per i commenti.

### Come Funziona l'Autocomplete

I tag mostrati nell'elenco autocompletato provengono solo dal tuo account. Gli HashTags non sono condivisi tra i tenant di FastComments.

### Documentazione

Esiste una documentazione dedicata per i `#hashtags`. Vedi qui: https://docs.fastcomments.com/guide-hashtags.html

### In Conclusione

Come il resto di FastComments, speriamo che tu trovi questa funzionalità veloce e facile da usare.

Saluti!

{{/isPost}}

---