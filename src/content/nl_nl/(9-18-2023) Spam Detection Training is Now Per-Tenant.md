---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Spamdetectietraining is nu per huurder[/postlink]

{{#unless isPost}}
FastComments traint al jaren zijn spampreventie-classificator. Nu zijn de trainingsmogelijkheden geüpgraded.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

Wanneer je een opmerking als spam of geen spam markeert, leert FastComments hiervan voor toekomstige
spamdetectie.

Echter, deze leerprocessen vonden op dezelfde plek voor iedereen plaats. Dit betekent dat de spamtraining van een andere huurder invloed had op die van jou. Er zijn voordelen en nadelen aan dit systeem. Ten eerste profiteer je automatisch van wat andere moderators als spam beschouwen. Het nadeel is dat als zij een fout maken, of als ze content hebben die anders is dan de jouwe.

Bijvoorbeeld, als een andere huurder een publiek heeft dat zich richt op racingsimulaties, kunnen zij opmerkingen met "crypto spam" vaak als spam markeren. Hierdoor begint de classificator crypto gerelateerde teksten als spam te beschouwen.

Maar stel dat je een site hebt die crypto-georiënteerd is. Nu beginnen veel van jouw opmerkingen als spam gemarkeerd te worden terwijl ze dat niet zijn. Sommige kunnen terecht spam zijn, maar velen waarschijnlijk niet.

### Geïsoleerde training

Wanneer een nieuwe huurder zich aansluit bij FastComments, wordt hun spamdetectie standaard getraind op het verleden van andere huurders.

Wanneer je begint opmerkingen als spam/geens spam te markeren, zal het systeem overgaan op het gebruik van jouw eigen trainingsset.

### Update 20 september 2023

We hebben ontdekt dat deze opzet standaard niet ideaal was voor iedereen. Geïsoleerde Spamtraining is niet alleen opt-in. Je kunt dit inschakelen op de pagina Moderatie-instellingen door "Geïsoleerd" te selecteren in de optie "Spamfilter".

De standaard is nu weer terug naar "Gedeeld" trainen.

### Live

De trainingsset voor jouw huurder wordt nu altijd opnieuw opgebouwd telkens wanneer je een opmerking als spam of geen spam markeert.

Voorheen bouwde het systeem de spamindex periodiek opnieuw op. Dit werd gedaan om het systeem te beschermen tegen
excessieve belasting. Na een paar jaar hebben we vastgesteld dat de belasting van continue training niet erg hoog is, dus we hebben
het systeem geüpdatet om de index automatisch bij te werken elke keer dat je een wijziging aanbrengt.

Deze indexen worden opgeslagen op de rand in onze applicatieservers, en ze worden allemaal onafhankelijk bijgewerkt om
het systeem snel en responsief te houden.

### Hoe het te krijgen

Deze functie is uitgerold naar alle klanten!

### Tot conclusie

Zoals bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, te testen en goed vrij te geven. Laat het ons hieronder weten als je problemen ontdekt.

Proost!

{{/isPost}}

---