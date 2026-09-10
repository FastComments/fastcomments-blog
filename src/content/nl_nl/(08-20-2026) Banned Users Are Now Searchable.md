[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Verbannen Gebruikers Zijn Nu Doorzoekbaar[/postlink]

{{#unless isPost}}
The Banned Users page now has a search row, so you can find a ban by email, name, who issued it, or the comment that caused it.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

De pagina Verbannen Gebruikers onder Modereren van Reacties heeft nu een zoekrij boven de tabel. Tot nu toe was de enige manier om door die lijst te navigeren de Pagina- en Aantal Per Pagina‑besturingen, wat prima is als je een tiental verbanningen hebt en pijnlijk wanneer je er enkele duizenden hebt.

Er zijn drie besturingselementen: **Search By** kiest het veld, **Match** kiest Bevat of Gelijk, en **Value** is waar je naar zoekt.

### Wat je kunt zoeken

**Search By** biedt vijf opties:

- **Any Field** - zoekt alles hieronder tegelijk
- **Email** - het verbannen e-mailadres
- **Name** - de naam van de commentator
- **Banned By** - de moderator die de verbanning heeft opgelegd
- **Banned For Saying** - de tekst van de reactie die de gebruiker heeft laten verbannen

De laatste vier komen overeen met de kolommen met dezelfde naam in de tabel, zodat het dropdownmenu hetzelfde leest als het element dat het filtert.

### Bevat vs Gelijk

**Contains** vindt je waarde overal in het veld. **Equals** komt overeen met het volledige veld.

Bevat is meestal wat je wilt. Zoeken naar `bademail.com` vindt elke verbanning op dat domein, inclusief de wildcard `*@bademail.com`‑verbanning, omdat wildcard‑verbanningen worden opgeslagen met hun sterretje intact.

Gelijk is voor wanneer je de exacte waarde hebt en geen bijna‑overeenkomsten wilt. Zoeken naar Email met `spammer@example.com` en **Equals** geeft die ene verbanning terug en niets anders.

Beide zijn niet hoofdlettergevoelig voor elk veld. Dit is belangrijker dan het lijkt: wanneer een verbanning wordt aangemaakt vanuit een reactie, wordt alleen het domeindeel van het adres naar kleine letters omgezet, zodat een verbanning echt kan worden opgeslagen als `MixedCase@Example.com`. Zoeken naar `mixedcase@example.com` vindt deze.

### Twee zoekopdrachten die het waard zijn om te kennen

**Banned For Saying** doorzoekt de tekst van de reactie die de verbanning heeft veroorzaakt. Als een bepaalde zin of link zich verspreidt, kun je in één query iedereen ophalen die daardoor is verbannen.

**Banned By** doorzoekt de moderator die de verbanning heeft opgelegd. Als je de beslissingen van een specifieke moderator wilt bekijken, of als je iemand inwerkt en wilt zien wat die heeft gedaan, is dat één zoekopdracht verwijderd.

### Het werkt met paginering en delen

De zoekopdracht wordt opgeslagen in de pagin URL, zodat pagineren door de resultaten de zoekopdracht behouden blijft en je een gefilterde lijst naar een andere moderator kunt sturen door de URL te kopiëren, op dezelfde manier waarop je al moderatielinks deelt. Een nieuwe zoekopdracht starten brengt je terug naar de eerste pagina, en **Clear** brengt je terug naar de volledige lijst.

### Documentatie

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">De sectie Gebruikers Verbannen van de Moderatiegids</a> bespreekt de zoekrij in detail.

### Tot slot

Dit kwam voort uit het observeren hoe de pagina daadwerkelijk wordt gebruikt. Verbanningen stapelen zich jarenlang stilletjes op, en op een dag moet je een specifieke vinden en er is geen manier om dat te doen. Nu is er wel een manier.

Laat ons hieronder weten als er een veld is dat je wilt kunnen doorzoeken maar dat niet in de lijst staat.

Proost!

{{/isPost}}

---