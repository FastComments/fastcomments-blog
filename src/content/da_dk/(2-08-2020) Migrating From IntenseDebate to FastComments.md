---
[category:Migration]

###### [postdate]
# [postlink]Migrering Fra IntenseDebate Til FastComments[/postlink]

{{#unless isPost}}
Læs dette indlæg for at demonstrere, hvordan man fuldstændigt migrerer fra IntenseDebate til FastComments.
{{/unless}}

{{#isPost}}
## Hvis Du Bruger WordPress

FastComments har en dedikeret WordPress-plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Pluginet gør installation, opsætning og synkronisering meget nemt. Hvis du vælger denne vej, kan du ignorere resten af instruktionerne her.

## Manuel, Generisk Installation

### Eksporter Dine Eksisterende Kommentarer

For at eksportere din sides kommentar- og brugerdata fra IntenseDebate, gå til deres Admin dashboard: Sites -> Din Side -> Værktøjer -> XML Eksport.

Du vil bemærke, at den resulterende fil, du får via email, har en mystisk "gz" filendelse. Hvis du er lidt teknisk klog, ved du måske, at dette står for "gzip", og er en populær og effektiv måde at komprimere filer på. 

### Åbn ikke "gz" filen

En standard Windows 10 installation vil ikke være i stand til at åbne filen fra IntenseDebate. Det er fint, fordi du ikke behøver at gøre det med FastComments. Vores backend forstår denne komprimerede fil.

Efter det, hvis du er logget ind, kan du gå <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">her for at importere filen</a>. Vælg IntenseDebate fra dropdown-menuen og upload din fil.

### Vent et par minutter

FastComments import er "asynkron". Dette betyder, at upload af filen og behandlingen af den er separate trin.

Så, afhængigt af din fil-størrelse, kan du få succesbeskeden med det samme. På import-siden nederst er der et bord - hver række repræsenterer et importforsøg.  
Du kan trygt opdatere denne side for at se status for din import og hvor mange rækker der er blevet importeret indtil nu.

### Når det er færdigt

Du vil modtage en email, når importen er færdig - hvad enten den lykkes eller ej. Du kan lukke siden, efter at filuploaden er lykkedes, og du ser din import på Imports siden. Det vil have en status som "Anmodet" og når den starter, vil status være "Kører".

Det er sikkert at reimportere så mange gange som nødvendigt - hvis din import mislykkes, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a> så vi kan hjælpe.

### Erstat IntenseDebate Koden med FastComments

Det handler blot om at fjerne det lille snippet, IntenseDebate giver dig, og erstatte det med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores eget</a>.  
Du kan endda køre IntenseDebate og FastComments på den samme side midlertidigt for at teste og justere udseendet. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

Hvis du bruger IntenseDebate widgets og ønsker at erstatte dem, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os her</a>.

### Migrering af URL'er på samme tid

Kommentarerne selv er knyttet til "link" felterne i IntenseDebate eksporten, så længe dine URL'er ikke ændrer sig, er overgangen nem. Hvis du ønsker at migrere URL'er og bevare dine kommentarer, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">giv os besked</a> ved at sende os de gamle og nye URL'er. Hjælpesiden giver mulighed for at uploade små tekstfiler, så hvis du migrerer mere end bare et par url'er, skal du oprette et Excel-ark.

### Opsummering

1. Eksporter dine data
2. Importer til FastComments
3. Byt IntenseDebate JavaScript snippet med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Hvorfor Vil IntenseDebate Ikke Send Mig Min Fil?
For større sider kan IntenseDebate muligvis ikke oprette den eksporterede fil på grund af tekniske begrænsninger fra deres side. Vi har mulighed for at skrabe din eksisterende side og trække kommentarerne fra den, men dette kan være ret skræddersyet og vil på grund af den tid, det kræver, nødvendiggøre, at du har Supportpakken. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Du kan anmode om hjælp med dette her</a>.
{{/isPost}}

---