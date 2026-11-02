[category:Migration]
###### [postdate]
# [postlink]Migrering fra Commento og Cusdis i 2026[/postlink]

{{#unless isPost}}
De hostede Commento- og Cusdis-tjenester er holdt op med at svare. Her er, hvordan du kan skifte til FastComments, og hvordan vi kan hjælpe med at gendanne dine kommentarer fra Internet Archive, hvis du aldrig har eksporteret dem.
{{/unless}}

{{#isPost}}

Hvis kommentarsektionen på dit site er blevet tom, er dette indlæg for dig. Det dækker, hvad der er ændret, hvordan du importerer en eksport, hvis du har en, og hvordan vi kan hjælpe dig med at få dine kommentarer tilbage fra Internet Archive, hvis du ikke har det.

## Hvad skete der

Her er, hvad vi ser pr. 1. november 2026:

- **Commento.** commento.io, dets API og widget‑script returnerer alle en 404. Internet Archive‑optagelser viser, at siden fungerede den 25. maj 2026 og returnerede en 404 den 11. juni 2026.
- **Cusdis.** cusdis.com og dets API returnerer Cloudflare‑fejl 521, hvilket betyder, at serveren bag Cloudflare er nede. Optagelser viser, at den fungerede indtil 27. august 2026 og returnerede en 521 den 16. oktober 2026. Widget‑scriptet indlæses stadig, så din side viser en tom boks, hvor kommentarerne var.

Vi har ikke fundet en nedlukningsmeddelelse fra nogen af projekterne. Hvis du selvhoster Commento eller Cusdis, påvirkes din installation ikke af dette, og du kan eksportere fra den, når du er klar til at skifte.

## Find dine data

Hvilken vej du vælger, afhænger af, hvad du har:

1. **Du har en eksportfil.** Søg også i din indbakke, da Commento sendte sine eksporter via e‑mail som en “.gz”-fil. Hop videre til importtrinnene.
2. **Du selvhoster.** Eksporter fra dit eget dashboard, og følg derefter importtrinnene.
3. **Du brugte den hostede tjeneste og har ingen eksport.** Dashboardet, du ville eksportere fra, er væk. Læs gendannelsessektionen nedenfor.

## Importer en eksportfil

Når du er logget ind, gå <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">her for at importere filen</a>. Vælg **Commento (.gz, .json)** eller **Cusdis (.json)** fra rullemenuen og upload din fil. Der er ingen grund til at pakke en Commento “.gz”-fil ud først.

Importen kører i baggrunden, og du vil modtage en e‑mail, når den er færdig. Genimport er sikkert, fordi hver kommentar matches med sit oprindelige id og opdateres på stedet.

Vi har en længere vejledning for hvert format: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> og <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Deres trin for at anmode om en eksport fra det hostede dashboard gælder ikke længere, men deres importdetaljer gør.

## Gendan dine kommentarer fra Internet Archive

Commento og Cusdis indlæser begge kommentarer med JavaScript fra deres egne servere. Når Internet Archive fanger en side med en browser, kan den gemme de svar sammen med siden. De gemte svar indeholder kommentartrådene.

Vi har testet dette selv. <a href="https://web.archive.org" target="_blank">Wayback Machine</a> indeholder mere end 12.000 indfangede Commento‑kommentar‑svar og optagelser for 448 Cusdis‑projekter, og de seneste er fra 2026. Vi har ikke et selvbetjeningsværktøj til dette. Vi udfører gendannelsen for dig, så <a href="https://fastcomments.com/contact-us" target="_blank">skriv til os</a> for at komme i gang.

### Tjek dit eget site først

Åbn et af dine travlere indlæg i Wayback Machine, og erstat adressen med din egen:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Scroll ned til kommentarsektionen. Hvis dine kommentarer vises, har arkivet den tråd. Hvis de ikke gør, så prøv et andet år ved hjælp af kalenderen øverst på siden. Et tomt resultat på ét indlæg udelukker ikke resten af dit site, så skriv til os uanset hvad.

### Sådan fungerer gendannelsen

1. **Fortæl os dit domæne.** Hvis du brugte Cusdis, send også dit App‑ID, `data-app-id`‑værdien i snippet‑koden på dit site. Vi vil bede dig vise, at du kontrollerer domænet, da disse kommentarer tilhører dit site.
2. **Vi finder dine tråde.** Vi samler optagelserne for dit site og tjekker, at hver enkelt tilhører dit domæne og side. Commento‑gendannelser tager længere tid, fordi arkivet ikke indekserer sine optagelser efter site, og vi skal læse dem alle igennem.
3. **Vi viser dig, hvad vi fandt.** Du vil se, hvor mange sider og kommentarer der er kommet tilbage, og datoen for den nyeste kommentar, før noget importeres.
4. **Vi importerer trådene til din konto.** Du kan derefter redigere eller fjerne enhver kommentar fra dit moderations‑dashboard.

### Hvad kommer tilbage

<div class="pretty-table wide-table">

| Data | Commento | Cusdis |
| --- | --- | --- |
| Kommentartekst | Ja | Ja |
| Forfatterens visningsnavn | Ja | Ja |
| Kommentardato | Ja | Ja |
| Svartrådning | Ja | Ja |
| Stemmescore | Ja | Cusdis har ingen stemmer |
| Sideadresse | Ja | Ja, men nogle sites gemte kun en sti, så vi har brug for dit domæne |
| Forfatterens e‑mail | Nej | Nej |
| Kommentarer, der stadig afventer godkendelse | Nej | Nej |
| Kommentarer skrevet efter den sidste optagelse | Nej | Nej |
| Sider, som arkivet aldrig har indfanget | Nej | Nej |

</div>

### Hvad du kan forvente

Dette er en gendannelse fra snapshots, så planlæg huller. Det fungerer bedst for sider, der var populære nok til at blive indfanget ofte og for nylig.

To resultater fra vores test viser spændvidden. På en blog returnerede 30 opslag 810 kommentarer på 19 sider. På et andet site, som stadig viser sine kommentarer, stoppede den nyeste arkiverede kopi i oktober 2023, mens den live side kørte frem til marts 2025. Alt skrevet mellem den sidste optagelse og nedlukningen er ikke i arkivet.

De manglende e‑mails betyder også noget. Gendannede kommentarer bevarer forfatterens navn, men de kan ikke matches til en FastComments‑konto, og deres forfattere får ikke besked om nye svar til dem.

## Erstat widget'en

Uanset hvilken vej du tog, skal den gamle snippet fjernes fra dit site. For Commento, fjern dette, sammen med `count.js`, hvis du bruger kommentar‑tællere:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

For Cusdis, fjern dette:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Derefter tilføj <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores</a>:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

Vi understøtter også mange front‑end‑rammeværk, som du kan finde <a href="https://fastcomments.com/install-wizard" target="_blank">her</a>. Der er ingen grund til at vente på, at en gendannelse er færdig, før du skifter. Dine læsere kan begynde at kommentere med det samme, og gendannede tråde tilføjes til de samme sider, når de importeres.

### Hvis dine URL'er ændrer sig

Importerede kommentarer er knyttet til deres side‑URL, så hvis dine URL'er forbliver de samme, justerer trådene sig selv. Hvis de ændrer sig, importér først, og brug derefter <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a>-værktøjet under Manage Data til at flytte dem til de nye placeringer.

## EU

Hvis du befinder dig i EU, vil du sandsynligvis oprette din konto på <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, så dine kundedata forbliver i EU.

## Opsummering

1. Kig efter en eksportfil, også i din e‑mail.
2. Hvis du har en, upload den på <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">import‑siden</a>.
3. Hvis du ikke har, tjek dit site i Wayback Machine og <a href="https://fastcomments.com/contact-us" target="_blank">skriv til os</a> med dit domæne.
4. Udskift den gamle snippet med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores</a>.

Skål!

{{/isPost}}