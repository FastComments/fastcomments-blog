[category:Migration]
###### [postdate]
# [postlink]Migreren van Commento en Cusdis in 2026[/postlink]

{{#unless isPost}}
De gehoste Commento- en Cusdis-diensten reageren niet meer. Hier lees je hoe je naar FastComments kunt overstappen, en hoe we je kunnen helpen je opmerkingen te herstellen vanuit het Internet Archive als je ze nooit hebt geëxporteerd.
{{/unless}}

{{#isPost}}

Als de commentaarsectie op je site leeg is geworden, is dit bericht voor jou. Het behandelt wat er veranderd is, hoe je een export kunt importeren als je die hebt, en hoe we je kunnen helpen je opmerkingen terug te krijgen uit het Internet Archive als je dat niet hebt.

## What Happened

Hier is wat we zien vanaf 1 november 2026:

- **Commento.** commento.io, de API en het widget‑script geven allemaal een 404 terug. Internet‑Archive‑captures tonen dat de site op 25 mei 2026 werkte en op 11 juni 2026 een 404 teruggeeft.
- **Cusdis.** cusdis.com en de API geven Cloudflare‑fout 521, wat betekent dat de server achter Cloudflare offline is. Captures tonen dat het werkte tot 27 augustus 2026 en op 16 oktober 2026 een 521 teruggeeft. Het widget‑script laadt nog steeds, dus je pagina toont een leeg vak waar de opmerkingen stonden.

We hebben geen beëindigingsbericht van een van beide projecten gevonden. Als je Commento of Cusdis zelf host, wordt je installatie niet door dit alles beïnvloed, en kun je er op elk moment een export van maken wanneer je klaar bent om te verhuizen.

## Find Your Data

Welk pad je neemt, hangt af van wat je hebt:

1. **Je hebt een exportbestand.** Zoek ook in je inbox, want Commento stuurde zijn exports per e‑mail als een “.gz”‑bestand. Ga direct door naar de importstappen.
2. **Je host zelf.** Exporteer vanuit je eigen dashboard en volg daarna de importstappen.
3. **Je gebruikte de gehoste dienst en hebt geen export.** Het dashboard waar je van zou exporteren bestaat niet meer. Lees de herstel‑sectie hieronder.

## Import an Export File

Zodra je bent ingelogd, ga <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier om het bestand te importeren</a>. Selecteer **Commento (.gz, .json)** of **Cusdis (.json)** uit de dropdown en upload je bestand. Het is niet nodig om een Commento “.gz”‑bestand eerst uit te pakken.

De import draait op de achtergrond en je ontvangt een e‑mail wanneer deze klaar is. Herimporteren is veilig, omdat elke opmerking wordt gematcht op zijn oorspronkelijke id en ter plekke wordt bijgewerkt.

We hebben een langere handleiding voor elk formaat: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> en <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Hun stappen om een export aan te vragen vanaf het gehoste dashboard zijn niet meer van toepassing, maar hun importdetails wel.

## Recover Your Comments From the Internet Archive

Commento en Cusdis laden beide opmerkingen met JavaScript vanaf hun eigen servers. Wanneer het Internet Archive een pagina met een browser vastlegt, kan het die reacties samen met de pagina opslaan. Die opgeslagen reacties bevatten de discussiedraden.

We hebben dit zelf getest. De <a href="https://web.archive.org" target="_blank">Wayback Machine</a> bevat meer dan 12.000 vastgelegde Commento‑reacties en captures voor 448 Cusdis‑projecten, en de recentste zijn uit 2026. We hebben geen self‑service‑tool hiervoor. We voeren het herstel voor je uit, dus <a href="https://fastcomments.com/contact-us" target="_blank">schrijf ons</a> om te beginnen.

### Check Your Own Site First

Open een van je drukkere berichten in de Wayback Machine, vervang het adres door dat van jou:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Scroll naar de commentaarsectie. Als je opmerkingen verschijnen, heeft het archief die draad. Als ze dat niet doen, probeer een ander jaar via de kalender bovenaan de pagina. Een leeg resultaat bij één bericht sluit de rest van je site niet uit, dus schrijf ons in elk geval.

### How the Recovery Works

1. **Vertel ons je domein.** Als je Cusdis gebruikte, stuur ook je App‑ID, de `data-app-id`‑waarde in de snippet op je site. We vragen je te bewijzen dat je het domein beheert, omdat deze opmerkingen bij jouw site horen.
2. **We vinden je draden.** We verzamelen de captures voor je site en controleren of elk ervan bij jouw domein en pagina hoort. Commento‑herstel duurt langer, omdat het archief zijn captures niet indexeert per site en we ze allemaal moeten doorlezen.
3. **We laten je zien wat we gevonden hebben.** Je ziet hoeveel pagina’s en opmerkingen zijn teruggekomen, en de datum van de nieuwste opmerking, voordat er iets wordt geïmporteerd.
4. **We importeren de draden in je account.** Je kunt daarna elke opmerking bewerken of verwijderen vanuit je moderatiedashboard.

### What Comes Back

<div class="pretty-table wide-table">

| Gegevens | Commento | Cusdis |
| --- | --- | --- |
| Opmerkingstekst | Ja | Ja |
| Weergavenaam auteur | Ja | Ja |
| Datum van opmerking | Ja | Ja |
| Threading van reacties | Ja | Ja |
| Stemscore | Ja | Cusdis heeft geen stemmen |
| Pagina‑adres | Ja | Ja, hoewel sommige sites alleen een pad opsloegen, dus we hebben je domein nodig |
| E‑mail auteur | Nee | Nee |
| Opmerkingen die nog op goedkeuring wachten | Nee | Nee |
| Opmerkingen geschreven na de laatste capture | Nee | Nee |
| Pagina's die het archief nooit heeft vastgelegd | Nee | Nee |

</div>

### What to Expect

Dit is een herstel op basis van snapshots, dus reken op gaten. Het werkt het beste voor pagina’s die vaak en recent genoeg zijn vastgelegd.

Twee resultaten uit onze tests laten het bereik zien. Op één blog leverden 30 opzoekingen 810 opmerkingen op over 19 pagina’s. Op een andere site, die zijn opmerkingen nog steeds toont, stopte de nieuwste gearchiveerde kopie in oktober 2023 terwijl de live‑pagina doorliep tot maart 2025. Alles wat tussen de laatste capture en de shutdown is geschreven, staat niet in het archief.

De ontbrekende e‑mails zijn ook van belang. Herstelde opmerkingen behouden de naam van de auteur, maar kunnen niet worden gekoppeld aan een FastComments‑account, en hun auteurs krijgen geen melding over nieuwe reacties op hen.

## Replace the Widget

Welk pad je ook hebt gekozen, de oude snippet moet van je site worden verwijderd. Voor Commento, verwijder dit, samen met `count.js` als je commentaartellingen gebruikt:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Voor Cusdis, verwijder dit:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Voeg dan <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">de onze</a> toe:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

We ondersteunen ook veel front‑end‑frameworks, die <a href="https://fastcomments.com/install-wizard" target="_blank">hier te vinden zijn</a>. Het is niet nodig om te wachten tot een herstel is voltooid voordat je overschakelt. Je lezers kunnen meteen weer reageren, en herstelde draden voegen zich bij dezelfde pagina’s wanneer ze worden geïmporteerd.

### If Your URLs Are Changing

Geïmporteerde opmerkingen zijn gekoppeld aan hun pagin URL, dus als je URL’s gelijk blijven, lijnen de draden zich vanzelf uit. Als ze veranderen, importeer eerst, en gebruik dan de <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a>-tool onder Manage Data om ze naar de nieuwe locaties te verplaatsen.

## EU

Als je in de EU bent, wil je waarschijnlijk je account aanmaken op <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> zodat je klantgegevens in de EU blijven.

## Recap

1. Zoek naar een exportbestand, ook in je e‑mail.
2. Als je er een hebt, upload deze op de <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">importpagina</a>.
3. Als je er geen hebt, controleer je site in de Wayback Machine en <a href="https://fastcomments.com/contact-us" target="_blank">schrijf ons</a> met je domein.
4. Vervang de oude snippet door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">de onze</a>.

Proost!

{{/isPost}}

---