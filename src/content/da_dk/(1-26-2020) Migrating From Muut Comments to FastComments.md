---
[category:Migration]
###### [postdate]
# [postlink]Migrering Fra Muut Kommentarer Til FastComments[/postlink]

{{#unless isPost}}
Læs dette indlæg for at se, hvordan du fuldt ud migrerer fra Muut til FastComments.

Det er blot et spørgsmål om at fjerne det lille snippet, Muut giver dig, og erstatte det med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores eget</a>.
Du kan endda køre Muut og FastComments på samme site midlertidigt for at teste og justere udseendet og følelsen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.
{{/unless}}

{{#isPost}}
### Eksporter Dine Eksisterende Kommentarer

FastComments importøren vil migrere dine kommentarer, brugernavne, brugers billeder og inline billeder. Vi flytter billederne til vores servere uden problemer.

For at eksportere dit sites Kommentar og Bruger data fra Muut, gå til deres Admin dashboard, gå til Integrationer og derefter JSON Export.

Du vil lægge mærke til, at den resulterende fil, du får via e-mail, har en mystisk "gz" filendelse. Hvis du er lidt teknisk kyndig, ved du måske, at det står for "gzip", som er en populær og effektiv metode til at komprimere filer.

### Åbn ikke "gz" filen

En standard installation af Windows 10 vil ikke være i stand til at åbne filen fra Muut. Det er fint, fordi du ikke skal med FastComments. Vores backend forstår denne komprimerede fil.

Derefter, hvis du er logget ind, kan du gå <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">her for at importere filen</a>. Vælg Muut fra dropdown-menuen og upload din fil.

Du skal indtaste URL'en på dit website. Dette skyldes, at Muut ikke giver os den information i eksporten.

### Vent et par minutter

FastComments import er "asynkron". Dette betyder, at upload af filen og behandling af den er separate skridt.

Så, afhængigt af din filstørrelse, kan du få successmeddelelsen med det samme. På import siden nederst er der et tabel - hver række repræsenterer et import forsøg.
Du kan trygt opdatere denne side for at se status på din import og hvor mange rækker der er blevet importeret indtil videre.

### Når det er færdigt

Du vil modtage en e-mail, når importen er færdig - uanset om den lykkes eller ej. Du kan lukke siden, efter at filuploaden er vellykket, og du ser din import på Imports siden. Den vil have en status som "Anmodet", og når den starter, vil status være "Kører".

Det er sikkert at reimportere så mange gange som nødvendigt - men hvis din import mislykkes, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>, så vi kan hjælpe.

### Erstat Muut Koden med FastComments

Det er blot et spørgsmål om at fjerne det lille snippet, Muut giver dig, og erstatte det med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores eget</a>.
Du kan endda køre Muut og FastComments på samme site midlertidigt for at teste og justere udseendet og følelsen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

### Migrering af URL'er samtidig

Kommentarerne selv er knyttet til "link" felterne i Muut eksporten, så længe dine URL'er ikke ændres, er skiftet let. Hvis du ønsker at migrere URL'er og bevare dine
kommentarer, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lad os vide det</a> ved at sende os de gamle og nye URL'er. Hjælp siden giver mulighed for at uploade små tekstfiler, så hvis
du migrerer mere end bare et par URL'er, lav et Excel-ark.

### Resumé

1. Eksporter dine data
2. Importer til FastComments
3. Byt Muut JavaScript snippet med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Hvorfor Vil Muut Ikke Sende Mig Min Fil?
For større sites kan Muut muligvis ikke oprette den exporterede fil på grund af tekniske begrænsninger på deres side. Vi har mulighed for at scrape dit eksisterende site og trække kommentarerne fra det, men dette kan være
relativt tilpasset, og på grund af den tid, det involverer, vil det kræve, at du har Supportpakken. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Du kan anmode om hjælp med dette her</a>.
{{/isPost}}

---