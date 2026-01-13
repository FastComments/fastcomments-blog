---
[category:Migration]
###### [postdate]
# [postlink]Migrering Fra Commento Til FastComments[/postlink]

{{#unless isPost}}
Læs dette indlæg for at se, hvordan du fuldt ud migrerer fra Commento til FastComments.

## Gotchas

Commento giver os ikke fulde URL'er. Hvad de leverer, er kun domænenavnet, som en kommentartråd tilhører - som "fastcomments.com/some-page".
Dette betyder, at FastComments-importøren skal antage, hvad protokollen er, og den standardmæssigt bruger https. Hvis du kører importen og ikke ser dine data,
vil du måske tjekke, om dit site er korrekt sikret.
{{/unless}}

{{#isPost}}
### Eksporter Dine Eksisterende Kommentarer

For at eksportere dit sites Kommentar og Brugerdata fra Commento, gå til deres Admin dashboard, vælg Generelt og derefter Eksporter Data.

Du vil bemærke, at den resulterende fil, du får via e-mail, har en mystisk "gz" filendelse. Hvis du er lidt ekstra teknisk kyndig, ved du måske, at det står for "gzip" og er en populær og effektiv måde at komprimere filer på.

### Åbn ikke "gz" filen

En standard Windows 10-installation vil ikke kunne åbne filen fra Commento. Det er fint, for du skal ikke med FastComments. Vores backend forstår denne komprimerede fil.

Derefter, hvis du er logget ind, kan du gå <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">her for at importere filen</a>. Vælg Commento fra dropdown-menuen og upload din fil.

### Vent et par minutter

FastComments-importen er "asynkron". Dette betyder, at uploading af filen og behandling af den er separate trin.

Så, afhængig af din filstørrelse, kan du få succesmeddelelsen med det samme. På import-siden er der nederst et tabel - hver række repræsenterer et importforsøg.
Du kan sikkert opdatere denne side for at se status på din import og hvor mange rækker der er blevet importeret indtil videre.

### Når det er færdigt

Du vil modtage en e-mail, når importen er færdig - uanset om den lykkes eller ei. Du kan lukke siden, efter at filuploadet er lykkedes, og du ser din import på Imports-siden. Den vil have en status som "Anmodet" og når den starter, vil status være "Kører".

Det er sikkert at reimportere så mange gange som nødvendigt - men hvis din import mislykkes, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>, så vi kan hjælpe.

### Erstat Commento Koden med FastComments

Det er simpelthen et spørgsmål om at fjerne den lille snippet, Commento giver dig, og erstatte den med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">vores egen</a>.
Du kan endda køre Commento og FastComments på samme site midlertidigt for at teste og justere udseendet og fornemmelsen. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

### Migrering af URL'er samtidig

Kommentarerne i sig selv er bundet til "link" felterne i Commento-eksporten, så så længe dine URL'er ikke ændrer sig, er skiftet nemt. Hvis du ønsker at migrere URL'er og bevare dine
kommentarer, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">giv os besked</a> ved at sende os de gamle og nye URL'er. Hjælpesiden tillader upload af små tekstfiler, så hvis
du migrerer mere end blot et par urls, så opret et Excel-ark.

### Opsummering

1. Eksporter din data
2. Importer til FastComments
3. Byt Commento JavaScript snippet ud med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

## Gotchas

Commento giver os ikke fulde URL'er. Hvad de leverer, er kun domænenavnet, som en kommentartråd tilhører - som "fastcomments.com/some-page".
Dette betyder, at FastComments-importøren skal antage, hvad protokollen er, og den standardmæssigt bruger https. Hvis du kører importen og ikke ser dine data,
vil du måske tjekke, om dit site er korrekt sikret.

## Hvorfor Sender Commento Mig Ikke Min Fil?
For større sites kan Commento muligvis ikke være i stand til at oprette den eksporterede fil på grund af tekniske begrænsninger på deres side. Vi har evnen til at skrabe dit eksisterende site og trække kommentarerne fra det, men dette kan være
forholdsvist tilpasset og grundet den tid, der er involveret, vil kræve, at du har Supportpakken. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Du kan anmode om hjælp med dette her</a>.
{{/isPost}}

---