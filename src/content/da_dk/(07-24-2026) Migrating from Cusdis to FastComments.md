[category:Migration]
###### [postdate]
# [postlink]Migrering fra Cusdis til FastComments[/postlink]

{{#unless isPost}}
Læs dette indlæg for at se, hvordan du fuldt ud migrerer fra Cusdis til FastComments, inklusive dine tråde, moderationsstatus og side-URL'er.
{{/unless}}

{{#isPost}}

Cusdis er et letvægts, open-source kommentarsystem. Hvis du er vokset fra det og ønsker funktioner som spamfiltrering, stemmer, reaktioner, notifikationer, SSO og et fuldt moderationsdashboard, importerer FastComments nu dine Cusdis-data direkte.

## Eksporter dine eksisterende kommentarer

Fra dit Cusdis-dashboard kan du anmode om en fuld dataeksport. Cusdis giver dig en enkelt JSON-fil, der indeholder dine projekter, sider og hver kommentar, sammen med deres tråde og godkendelsesstatus. Afhængigt af din Cusdis-opsætning bliver eksporten sendt til dig via e-mail eller downloadet med det samme.

Der er intet at redigere eller udpakke. Behold ".json"-filen som den er, og vores backend læser den direkte.

## Importér til FastComments

Når du er logget ind, gå <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">her for at importere filen</a>. Vælg **Cusdis (.json)** fra dropdown-menuen og upload din fil.

### Vent et par minutter

FastComments-importen er "asynkron". Upload af filen og behandlingen af den er separate trin. For en lille fil vises succesmeddelelsen med det samme. Nederst på import-siden er der en tabel, hvor hver række er et importforsøg. Opdater siden for at se status og hvor mange kommentarer der er blevet importeret indtil nu.

### Når den er færdig

Du vil modtage en e-mail, når importen er færdig, uanset om den lykkes eller ej. Det er sikkert at lukke siden, efter at uploaden er lykkedes, og du ser din import listet med status "Requested" eller "Running".

Genimport er sikkert. FastComments matcher hver kommentar efter dens originale Cusdis-id, så en gentagen import opdaterer dine eksisterende kommentarer i stedet for at oprette dubletter. Hvis en import fejler, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a> og vi hjælper.

## Hvad der importeres

- **Threaded replies.** Cusdis indlejrer svar flere niveauer dybt, og FastComments genopbygger den fulde forældre- og børnestruktur.
- **Moderation status.** Godkendte kommentarer forbliver godkendte. Kommentarer, der stadig afventer godkendelse, havner i din FastComments-moderationskø, så du kan gennemgå dem.
- **Authors.** Hver kommentators navn og e‑mail overføres, og registrerede FastComments‑brugere matches efter e‑mail.
- **Formatting.** Cusdis-kommentarer er skrevet i Markdown. FastComments gengiver den samme Markdown, inklusive links, billeder og linjeskift, så dine tråde læses præcis som før.

Kommentarer, der blev slettet i Cusdis, er efterladt, så dine importerede tråde forbliver rene.

## Erstat Cusdis-widget'en

Når dine data er overført, fjern den lille Cusdis-snippet fra dit site og indsæt <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores egen</a>. Du kan køre Cusdis og FastComments side om side i et stykke tid for først at teste udseendet og fornemmelsen. Vi understøtter mange front‑end‑rammeværk, som <a href="https://fastcomments.com/install-wizard" target="_blank">du kan finde her</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

### Migrering af URL'er på samme tid

Cusdis knytter hver kommentar til dens side‑URL, så så længe dine URL'er ikke ændres, er overgangen nem. Hvis dine URL'er også ændres, importér dine Cusdis-data først, og brug derefter det indbyggede <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a>-værktøj under Manage Data til at flytte dine kommentarer til de nye placeringer. Du kan indtaste et helt domæne, en fuld URL eller et URL‑ID for både den gamle og den nye placering, så et enkelt "from"‑ og "to"‑par flytter hver matchende side på én gang. Det kører som en baggrundsopgave og sender dig en e‑mail, når det er færdigt.

Hvis du hellere vil have, at vi håndterer det (hvis du har mange sider), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">giv os besked</a> om de gamle og nye URL'er.

## EU

Hvis du befinder dig i EU, vil du sandsynligvis oprette din konto på <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, så dine kundedata forbliver i EU.

## Opsummering

1. Eksporter dine data fra Cusdis som JSON
2. Upload dem på FastComments importside og vælg **Cusdis (.json)**
3. Udskift Cusdis-snippet med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

{{/isPost}}

---