---
[category:Migration]
###### [postdate]
# [postlink]Migrering Fra JustComments Til FastComments[/postlink]

{{#unless isPost}}
Læs dette indlæg for at se, hvordan du fuldstændigt migrerer fra JustComments til FastComments.

Det er normalt et spørgsmål om at fjerne det lille snippet, de giver dig, og erstatte det med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores eget</a>.
Du kan endda køre JustComments og FastComments på samme site midlertidigt for at teste og justere udseendet. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.
{{/unless}}

{{#isPost}}

Fra 2021 vil JustComments blive lukket ned. Hos FastComments har vi gjort det let for dig at skifte til vores platform.

Du vil finde, at FastComments tilbyder mange af de samme funktioner, som du er vant til, og mere til.

## Prisdifference

Mens JustComments bruger et kreditbaseret system, bruger FastComments en tiers model med tre tilgængelige niveauer. Med FastComments dækker vores $5/md plan
dig op til 1M sideindlæsninger om måneden. Udover det er der Pro- og Enterprise-planer, som du kan se på vores <a href="https://fastcomments.com/traffic-pricing" target="_blank">prisside</a>.

## Hvis du bruger WordPress

FastComments har en dedikeret WordPress-plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Pluginet gør installation, opsætning og synkronisering meget nemt. Men JustComments synkroniserer ikke dine kommentarer tilbage til din WordPress-installation, som FastComments
gør. Dette betyder, at du efter synkroniseringen skal følge eksport- og importtrinene nedenfor.

## Eksportér Dine Eksisterende Kommentarer

FastComments-importøren vil migrere dine kommentarer, brugernavne, brugeravatarer og inline billeder. Vi vil flytte billederne til vores servere uden problemer.

For at downloade dine kommentardata fra JustComments skal du gå til din konto-side.

## Importér Til FastComments Admin

Bekymre dig ikke om at åbne den resulterende fil fra JustComments.

Hvis du er logget ind, kan du gå <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">her for at importere filen</a>.

Vælg JustComments fra dropdown-menuen og upload din fil.

### Sideidentifikatorer

Når du importerer, vil du se muligheden for at vælge Page URL eller "Item ID". Hvis du er usikker på, hvad du skal vælge, så vælg Page URL. Hvis du har en integration med JustComments
hvor du specificerer Item ID i widgetkonfigurationen, skal du vælge Item ID.

### Vent et par minutter

FastComments-importen er "asynkron". Dette betyder, at upload af filen og behandling er separate trin.

Så, afhængigt af din filstørrelse, kan du få succesbeskeden med det samme. På import-siden nederst er der et tabel - hver række repræsenterer et importforsøg.
Du kan sikkert opdatere denne side for at se status for din import og hvor mange rækker der er blevet importeret indtil videre.

### Når det er færdigt

Du vil modtage en e-mail, når importen er færdig - uanset om den lykkes eller ej. Du kan lukke siden, efter at filoploaden er lykkedes, og du ser din import på Imports-siden. Den vil have en status som "Anmodet", og når det starter, vil status være "Kører".

Det er sikkert at reimportere så mange gange som nødvendigt - men hvis din import mislykkes, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>, så vi kan hjælpe.

### Erstat JustComments Koden Med FastComments

Hvis du ikke bruger JustComments WordPress-pluginet, så er det simpelthen et spørgsmål om at fjerne det lille snippet, de giver dig, og erstatte det med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores eget</a>.
Du kan endda køre JustComments og FastComments på samme site midlertidigt for at teste og justere udseendet. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

### Migrering Af URLs Samtidig

Kommentarerne i sig selv er som standard knyttet til "pageUrl" felterne i JustComments eksport, så længe som dine URLs ikke ændrer sig, er skiftet let. Hvis du vil migrere URLs og bevare dine
kommentarer, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">giv os besked</a> ved at sende os de gamle og nye URLs. Hjælpesiden giver mulighed for upload af små tekstfiler, så hvis
du migrerer mere end bare et par URLs, skal du oprette et Excel-ark.

## Opsummering

1. Eksportér dine data
2. Importér til FastComments
3. Hvis du ikke er på WordPress, udskift JustComments JavaScript snippet med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

{{/isPost}}