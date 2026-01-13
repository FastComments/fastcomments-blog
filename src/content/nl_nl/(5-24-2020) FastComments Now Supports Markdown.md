---
[category:Features]

###### [postdate]
# [postlink]FastComments Ondersteunt Nu Markdown[/postlink]

Een rijkere commentaarervaring is aangekomen bij FastComments met het gebruik van Markdown!

{{#isPost}}

Markdown is een reeks conventies voor het stylen van tekst. Om bijvoorbeeld een vet woord te maken kunnen we \*\*dit doen\*\*.
Normale links invoegen betekent simpelweg het plakken van de ruwe URL, en afbeeldingen werken zoals voorheen.

Hier is een Markdown cheatsheet, geleverd door Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Welke Markdown-syntax Ondersteunt FastComments?

We ondersteunen volledig Markdown, behalve koppen. Bij het definiëren van een kop renderen we deze gewoon als reguliere tekst omdat ze afleiden van de stroom van het gesprek. Koppen zijn voor inhoud zoals blogposts en documenten - niet voor gesprekken.

FastComments heeft altijd al afbeeldingen ondersteund via de [img]...[/img] syntax. Dit zal blijven worden ondersteund omdat het gemakkelijker te begrijpen is dan die van Markdown.

### Mixen van inhoud

Een enkele opmerking kan alle vormen van opmaak bevatten - markdown, links, afbeeldingen, codefragmenten en tabellen.

### Vermijden van XSF/XSS-aanvallen

Eerder stuurde FastComments platte tekst over het netwerk en parseerde het op de client. Nu wordt HTML over het netwerk verzonden, en we behouden twee versies van elke opmerking in onze database om functionaliteit zoals het bewerken van opmerkingen te ondersteunen.

Het direct verzenden van HTML naar opmerkingen heeft zijn risico's - dus alle gegenereerde opmerkingen worden geparsed en schoongemaakt om cross-site en cross-frame aanvallen te voorkomen.

### Gegevensexport

Bij het exporteren van opmerkingen krijg je de versie die de gebruiker zag toen ze hun opmerking typte. Als je de ruwe HTML wilt krijgen, neem dan contact met ons op.

### Prestatiezorgen

Feature creep heeft de neiging om dingen vertraagd te maken. Dat is niet wat we willen doen bij FastComments.
Het toevoegen van deze functie heeft **de grootte** van onze client-side widget met ~400 bytes verminderd - van 9.53kb naar 9.12kb - wat betekent snellere laadtijden.

Hoewel deze functie theoretisch het opslaan van opmerkingen zou kunnen vertragen, hebben we geen prestatieafnames gezien en zoals altijd monitoren we onze API's.

### Hoe krijg ik het?

De ondersteuning voor Markdown is automatisch uitgerold naar al onze klanten. Je zou niet te veel veranderingen moeten zien in de inhoud die op je site is geplaatst - behalve dat gebruikers nu vet, onderstrepen en enkele leuke dingen kunnen doen zoals eenvoudige tabellen maken.

Zoals bij alle functievrijgaven kijken we uit naar feedback en hoewel we veel automatische tests hebben... als je problemen ziet - laat het ons weten!

Vrolijk commentaar geven.

{{/isPost}}

---