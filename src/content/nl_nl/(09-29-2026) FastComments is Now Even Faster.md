[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments is nu nog sneller[/postlink]

{{#unless isPost}}
We hebben één netwerkverzoek verwijderd bij het laden van de commentaarwidget, waardoor de laadtijden nog meer worden verlaagd.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit artikel bevat technische jargon

### Wat is er nieuw

Hoe FastComments de afgelopen vijf jaar of zo heeft gewerkt, is dat we een klein script laden, de iframe laadt, vervolgens het script dat de styling bevat, en daarna een verzoek naar de API voor alles wat nodig is om de reacties weer te geven. Hoewel dit veel lijkt, is het zeer compact vergeleken met de meeste systemen!

Echter, het is nu zelfs één **één** verzoek. Het iframe‑antwoord dat de widget levert, bevat ook de reacties en alle gegevens die de gebruiker aanvankelijk nodig heeft, zodat het laatste API‑verzoek verdwenen is.

De API blijft onderhouden voor achterwaartse compatibiliteit voor iedereen die ervan afhankelijk is.

### Niets te configureren

Er is geen instelling hiervoor en geen versie om naar te upgraden. Als je FastComments insluit met ons script, heb je het al.

Je eigen pagina blijft in beide gevallen onaangedaan. De widget laadt nog steeds in een iframe en blokkeert je inhoud nog steeds niet, precies zoals
voorheen.

### Waar het niet van toepassing is

Een paar paden gebruiken dit niet, en ze gedragen zich precies zoals ze altijd hebben gedaan:

- Zoekmachinecrawlers, die al reacties direct in de pagina renderen in plaats van in een iframe
- Gebruikersactiviteitsfeeds en hashtag‑filtering, die van verschillende eindpunten lezen

### Conclusie

We hopen dat je blijft genieten van het gebruik van ons platform en hopen dat de verbeteringen die we doorvoeren waarde toevoegen. :)

Proost!

{{/isPost}}

---