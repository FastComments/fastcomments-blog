[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Verbannen Gebruikers Zijn Nu Doorzoekbaar[/postlink]

{{#unless isPost}}
De pagina Verbannen Gebruikers heeft nu een zoekrij, zodat je een verbanning kunt vinden op e‑mail, naam, wie deze heeft uitgegeven, of de opmerking die deze veroorzaakte.
{{/unless}}

{{#isPost}}

### What's New

De pagina Verbannen Gebruikers onder Modereren van Opmerkingen heeft nu een zoekrij boven de tabel. Tot nu toe was de enige manier om door die lijst te navigeren de paginering en het aantal per pagina‑instellingen, wat prima is als je een tiental verbanningen hebt, maar pijnlijk wanneer je er enkele duizenden hebt.

Er zijn drie bedieningselementen: **Search By** kiest het veld, **Match** kiest Bevat of Gelijk, en **Value** is waar je naar zoekt.

### What You Can Search

**Search By** biedt vijf opties:

- **Any Field** - zoekt alles hieronder tegelijk
- **Email** - het verbannen e‑mailadres
- **Name** - de naam die bij de verbanning is opgeslagen
- **Banned By** - de moderator die de verbanning heeft uitgegeven
- **Banned For Saying** - de tekst van de opmerking die de gebruiker heeft laten verbannen

De laatste vier komen overeen met de kolommen met dezelfde naam in de tabel, zodat de vervolgkeuzelijst hetzelfde leest als het element dat hij filtert.

### Contains vs Equals

**Contains** vindt je waarde overal in het veld. **Equals** komt overeen met het volledige veld.

Contains is meestal wat je wilt. Zoeken naar `bademail.com` vindt elke verbanning op dat domein, inclusief de wildcard‑verbanning `*@bademail.com`, omdat wildcard‑verbanningen worden opgeslagen met hun sterretje intact.

Equals is voor wanneer je de exacte waarde hebt en geen bijna‑overeenkomsten wilt. Zoeken in Email naar `spammer@example.com` met Equals geeft die ene verbanning terug en niets anders.

Beide zijn hoofdletterongevoelig voor elk veld. Dit is belangrijker dan het lijkt: wanneer een verbanning wordt aangemaakt vanuit een opmerking, wordt alleen het domeindeel van het adres naar kleine letters omgezet, zodat een verbanning echt kan worden opgeslagen als `MixedCase@Example.com`. Zoeken naar `mixedcase@example.com` vindt deze.

### Two Searches Worth Knowing About

**Banned For Saying** doorzoekt de tekst van de opmerking die de verbanning heeft veroorzaakt. Als een bepaalde zin of link veel voorkomt, kun je in één query iedereen ophalen die daardoor is verbannen.

**Banned By** doorzoekt de moderator die de verbanning heeft uitgegeven. Als je de beslissingen van een specifieke moderator wilt bekijken, of je iemand inwerkt en wilt zien wat die heeft gedaan, is dat één zoekopdracht verwijderd.

### It Works With Paging and Sharing

De zoekopdracht wordt opgeslagen in de paginanaam‑URL, zodat bladeren door de resultaten de zoekopdracht behoudt en je een gefilterde lijst naar een andere moderator kunt sturen door de URL te kopiëren, op dezelfde manier waarop je al moderatielinks deelt. Een nieuwe zoekopdracht starten brengt je terug naar de eerste pagina, en **Clear** zet je terug naar de volledige lijst.

### Name Search Matches What You See

Een verbanning slaat de naam op die de gebruiker had toen je hem verbood, maar de tabel toont de naam die ze nu hebben. Die zijn niet altijd hetzelfde, en een verbanning die je hebt aangemaakt door een e‑mailadres in te typen, heeft helemaal geen naam opgeslagen.

Dus de Naam‑zoekopdracht lost de gebruiker achter elke verbanning op en vergelijkt met de naam die de tabel daadwerkelijk toont. Als iemand is verbannen als "OldHandle" en sindsdien is hernoemd naar "NewHandle", vinden beide hem. Als je een adres hebt verbannen en de tabel toont een naam ervoor, werkt zoeken op die naam.

### Documentation

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">De sectie Gebruikers Verbannen van de Moderatiegids behandelt de zoekrij in detail</a>.

### In Conclusion

Dit is ontstaan door te observeren hoe de pagina daadwerkelijk wordt gebruikt. Verbanningen stapelen zich jarenlang stilletjes op, en op een dag moet je een specifieke vinden en er is geen manier om dat te doen. Nu is er wel.

Laat ons hieronder weten als er een veld is dat je wilt kunnen doorzoeken maar dat niet in de lijst staat.

Proost!

{{/isPost}}

---