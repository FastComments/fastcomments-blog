---
[category:Features]

###### [postdate]
# [postlink]De FastComments WYSIWYG Editor is uit beta[/postlink]

{{#unless isPost}}
Klanten kunnen nu kiezen om de nieuwe editor te gebruiken die geen zichtbare anker-tags voor opmaak gebruikt.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

Gebruikers van FastComment hadden altijd al de mogelijkheid om hun opmerkingen op te maken met anker-tabs zoals `<b>dit</b>`. Dit is zeer vertrouwd voor iedereen die in het verleden een internetforum heeft gebruikt, of veel van onze concurrenten, maar sommige gebruikers en gemeenschappen verwachten een andere werking.

Je kunt nu tekst in het opmerkinggebied stylen zonder anker-tags, aangezien het tekstinvoerveld kan worden omgeschakeld naar `contenteditable`.

Voor demonstratiedoeleinden is dit ingeschakeld op deze blog.

De geavanceerde editor heeft exact dezelfde uitstraling als de oude editor, het gebruikt alleen geen zichtbare anker-tags.

### Het inschakelen van geavanceerde bewerking

In Widget-aanpassing kun je eenvoudig `Geavanceerde editor` inschakelen en op opslaan klikken. Documentatie vind je [hier](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Voor ontwikkelaars & aandachtspunten

Je kunt documentatie voor het inschakelen hiervan in code [hier](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg) vinden, hoewel we aanbevelen om de Widget-aanpassings-UI te gebruiken, omdat dit resulteert in minder gegevens die per pagina-lading heen en weer worden verzonden.

De gegenereerde HTML van het content editable is iets anders dan die van de oude textarea-editor, dus houd hier rekening mee als je opmerkingen vanuit de API analyseert.

### Optimalisaties

We hebben het opmerkingwidget tegen verdere groei door deze nieuwe functie te vermijden door dit als een extensie toe te voegen die op de achtergrond wordt geladen wanneer deze functie is ingeschakeld, waardoor het standaard opmerkingwidget klein en licht blijft.

### Conclusie

Zoals bij alle grote releases, zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, te testen en goed uit te brengen. Laat het ons hieronder weten als je problemen ontdekt.

Proost!

{{/isPost}}

---