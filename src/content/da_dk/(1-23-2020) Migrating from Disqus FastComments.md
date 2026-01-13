---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migrering Fra Disqus Til FastComments[/postlink]

{{#unless isPost}}
Læs dette indlæg for at se, hvordan du fuldt ud migrerer fra Disqus til FastComments.

Hvis du bruger den generiske siteintegration med Disqus, er det blot et spørgsmål om at fjerne det lille snippet, de giver dig, og erstatte det med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores eget</a>.
Du kan endda køre Disqus og FastComments på det samme site midlertidigt for at teste og justere udseendet. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

Hvis du ikke bruger den generiske siteintegration, vil instruktionerne variere afhængigt af din platform - igen <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>.
{{/unless}}

{{#isPost}}
Der er mange ting, som Disqus gør rigtigt, men dér hvor de falder kort, er hvor FastComments træder ind.

## Hvis du er på WordPress

FastComments har en dedikeret WordPress-plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Pluginet gør installationen, opsætningen og synkroniseringen meget nemt. Hvis du vælger denne vej, kan du ignorere resten af instruktionerne her.

## Manuel, Generisk Installation

### Eksportér Dine Eksisterende Kommentarer

FastComments-importøren vil migrere dine kommentarer, brugernavne, brugeravatarer og inline billeder. Vi vil flytte billederne til vores servere uden problemer.

En ting, som Disqus gør rigtigt, er hvordan de håndterer eksport af data. Du vil bemærke, at efter at have fulgt trinnene i deres guide <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">her</a>, at den resulterende
fil, du får via e-mail, har en mystisk "gz" filendelse. Hvis du er lidt ekstra teknisk kyndig, ved du måske, at dette står for "gzip" og er en populær og effektiv måde at komprimere filer på. 

### Åbn ikke "gz"-filen

En standardinstallation af Windows 10 vil ikke kunne åbne filen fra Disqus. Det er fint, for du behøver ikke med FastComments. Vores backend forstår
denne komprimerede fil, så alt, hvad du skal gøre, er at følge deres instruktioner <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">her for at få den nævnte fil</a>.

Derefter, hvis du er logget ind, kan du gå <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">her for at importere filen</a>. Vælg Disqus fra dropdown-menuen og upload din fil.

### Vent et par minutter

FastComments-importen er "asynkron". Dette betyder, at upload af filen og behandlingen af den er separate trin.

Så, afhængigt af din filstørrelse, kan du få succesbeskeden med det samme. På import-siden nederst er der en tabel - hver række repræsenterer et importforsøg.
Du kan med sikkerhed opdatere denne side for at se status for din import og hvor mange rækker der indtil videre er blevet importeret.

### Når det er færdigt

Du vil modtage en e-mail, når importen er færdig - uanset om den lykkes eller ej. Du kan lukke siden, efter at filuploadet er lykkedes, og du ser din import på Imports-siden. Den vil have en status som "Anmodet", og når den starter, vil status være "Kører".

Det er sikkert at reimportere så mange gange som nødvendigt - hvis din import mislykkes, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>, så vi kan hjælpe.

### Erstat Disqus-koden med FastComments

Hvis du bruger den generiske siteintegration med Disqus, er det blot et spørgsmål om at fjerne det lille snippet, de giver dig, og erstatte det med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores eget</a>.
Du kan endda køre Disqus og FastComments på det samme site midlertidigt for at teste og justere udseendet. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

Hvis du ikke bruger den generiske siteintegration, vil instruktionerne variere afhængigt af din platform - igen <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>.

### Migrering af URL'er samtidig

Kommentarerne er knyttet til "link"-felterne i Disqus-eksporten, så længe dine URL'er ikke ændres, er skiftet nemt. Hvis du ønsker at migrere URL'er og bevare dine
kommentarer, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">giv os besked</a> ved at sende os de gamle og nye URL'er. Hjælpesiden tillader upload af små tekstfiler, så hvis
du migrerer mere end bare et par URL'er, så lav et Excel-ark.

### Opsummering

1. Eksportér dine data
2. Importér til FastComments
3. Udskift Disqus JavaScript-snippet med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Hvorfor Sender Disqus Ikke Min Fil? 
For større sider kan Disqus muligvis ikke oprette den eksporterede fil på grund af tekniske begrænsninger fra deres side. Vi har muligheden for at scrape dit eksisterende site og hive kommentarerne ud, men dette kan være
ret tilpasset, og på grund af den tid, det kræver, vil det kræve, at du har Supportpakken. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Du kan anmode om hjælp til dette her</a>.
{{/isPost}}