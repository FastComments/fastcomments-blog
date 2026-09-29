[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Arabisch en rechts-naar-links talen worden nu ondersteund[/postlink]

{{#unless isPost}}
FastComments spreekt nu Arabisch, en elk onderdeel van FastComments wordt rechts-naar-links weergegeven voor Arabisch en Hebreeuws. Aantallen zoals "3 comments" gebruiken nu ook de juiste meervoudsvorm in elke taal.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Arabisch is nu een ondersteunde taal, met de locale‑code `ar`. De commentaarwidget, de andere inbedbare widgets, e‑mails, het dashboard en de marketingsite zijn allemaal vertaald.

Arabisch wordt ook van rechts naar links geschreven, dus het toevoegen ervan betekende dat FastComments geleerd moest worden zich in beide richtingen weer te geven. Deze correctie geldt ook voor Hebreeuws.

### Rechts‑naar‑links lay-out

Wanneer de locale Arabisch of Hebreeuws is, wordt de volledige interface gespiegeld. De avatar, naam en antwoord‑knoppen op een commentaar wisselen van kant, menu’s en dropdowns openen naar de juiste rand, en pijlen wijzen in de richting waarin je leest. Dit omvat de commentaarwidget en de uitbreidingen zoals live‑chat en polls, de ticketing, collab‑chat en review‑samenvattingswidgets, e‑mails en het dashboard.

Er is niets te configureren, behalve het handmatig instellen van je locale voor je gebruiker indien gewenst.

### Commentaren behouden hun eigen richting

Soms staat een commentaarsectie in meerdere talen. Een Engelse opmerking op een Arabische pagina, of een Arabische opmerking op een Engelse pagina, moet nog steeds natuurlijk leesbaar zijn.

Elke opmerking en gebruikersnaam volgt de richting van zijn eigen tekst. Op een Engelse pagina leest een Arabisch antwoord van rechts naar links, terwijl de omringende opmerkingen van links naar rechts lezen, en het omgekeerde geldt op een Arabische pagina. Codeblokken binnen opmerkingen lezen altijd van links naar rechts, omdat code dat doet.

### De locale instellen

Standaard haalt de widget de locale uit de browser van de bezoeker, zodat Arabisch sprekers automatisch Arabisch krijgen. Om dit te forceren, stel je de locale in op de widget‑aanpassingspagina onder "Locale / Language", of in code:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Als je SSO gebruikt, geef je `locale: 'ar'` door op het gebruikersobject zodat hun e‑mails ook in het Arabisch worden verzonden.

### Meervouden, correct toegepast

Engels heeft twee vormen voor een telling: "1 comment" en "2 comments". Arabisch heeft aparte vormen voor één, twee, drie tot tien, en elf tot negenennegentig, en gebruikt opnieuw de enkelvoud voor honderd. Russisch, Oekraïens, Pools, Kroatisch, Servisch, Sloveens en Hebreeuws hebben elk ook hun eigen regels.

Tot nu toe kende FastComments alleen "one" en "everything else", waardoor een Russische lezer de verkeerde naamvorm kon zien voor 2 of 5 commentaren. Elke string met een telling kiest nu de juiste vorm voor zijn taal, in de widget, e‑mails en het dashboard.

Terwijl we daar waren, hebben we elke tel‑string in elke taal herzien. Dat bracht een aantal oudere vertaalfouten aan het licht die nu zijn gecorrigeerd. Bijvoorbeeld, in enkele talen was het woord voor een antwoord het werkwoord "to reply", waardoor een opmerking "1 Reply" liet zien als het equivalent van "1 To reply".

Als je de tekst van een telling hebt aangepast, zoals het label "comments", wordt jouw tekst nog steeds gebruikt voor elke telling.

### Je taal vinden

De taalselecties in het dashboard tonen nu naast de Engelse naam de eigen naam van elke taal, zoals "Arabic (العربية)" en "German (Germany) (Deutsch)". Als iemand in de verkeerde taal terechtkomt, kan hij/zij nog steeds de juiste vinden.

### Documentatie

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">De gids voor ondersteunde talen</a> bevat elke locale‑code en behandelt rechts‑naar‑links gedrag. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">De locale‑optie</a> behandelt het forceren van een locale in de widget.

Dit bouwt voort op [our first localization release](/(2-05-2020)-fastcomments-gets-localized.html) uit 2020, dat begon met drie talen. We hebben nu achtentwintig locales.

### Conclusie

We zijn blij dat we FastComments naar Arabisch sprekers kunnen brengen, en dat we de ervaring voor Hebreeuws sprekers verbeteren. Als je een vertaling tegenkomt die onjuist is in jouw taal, laat het ons hieronder weten en we zullen het corrigeren.

Proost!

{{/isPost}}