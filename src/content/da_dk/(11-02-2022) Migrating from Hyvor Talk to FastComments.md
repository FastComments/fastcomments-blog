---
[category:Migration]
###### [postdate]
# [postlink]Migrering Fra Hyvor Talk Til FastComments[/postlink]

{{#unless isPost}}
Læs dette indlæg for at se, hvordan du fuldt ud migrerer fra Hyvor Talk til FastComments.

Hvis du bruger den manuelle kodeinstallation med Hyvor Talk, så er det blot et spørgsmål om at fjerne den lille snippet, de giver dig, og erstatte den med <a href="https://fastcomments.com/install-wizard" target="_blank">vores egen</a>.
Du kan endda køre Hyvor og FastComments på samme site midlertidigt for at teste og justere udseende og følelse. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

Hvis du ikke bruger den kode-snippet baserede installation, så vil instruktionerne variere baseret på din platform - igen <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>.
{{/unless}}

{{#isPost}}

## Hvis Du Er På WordPress

FastComments har en dedikeret WordPress-plugin: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Plugin'en gør installation, opsætning og synkronisering meget nemt. Hvis du vælger denne vej, kan du ignorere resten af instruktionerne her. Bare sørg for
at du har synkroniseret dine Hyvor Talk kommentarer tilbage til din WordPress installation.

Hvis dette ikke fungerer for dig, som rapporteret af nogle af vores kunder, vil du måske bruge vores WordPress-plugin, men udføre en dataimport
ved at eksportere fra Hyvor Talk manualt. Du kan finde dataimporter i [Manage Data -> Import Comments](https://fastcomments.com/auth/my-account/manage-data/import).

## Manuel, Generisk Installation

### Eksportér Dine Eksisterende Kommentarer

FastComments importøren vil migrere dine kommentartråde, brugernavne, brugeravatarer, emojis og inline billeder. Vi flytter billederne til vores servere uden problemer.

Fra 2022 eksporterer Hyvor Talk ikke e-mails eller op/ned stemmer. Hvis du kan få en eksport fra dem med disse oplysninger, kan vi importere det.

### Importér .JSON-filen

Efter du har downloadet Hyvor eksporten, skal du logge ind på dit FastComments dashboard og gå <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">her for at importere filen</a>. Vælg Hyvor Talk fra dropdown-menuen og upload din fil.

### Vent et par minutter

FastComments-importen er "asynkron". Det betyder, at upload af filen og behandling af den er separate trin.

Så, afhængigt af din filstørrelse, kan du få succesbeskeden med det samme. På import-siden i bunden er der et tabel - hver række repræsenterer et importforsøg.
Du kan trygt opdatere denne side for at se status for din import og hvor mange rækker der er blevet importeret indtil videre.

### Når det er færdigt

Du vil modtage en e-mail, når importen er færdig - uanset om den lykkes eller ej. Du kan lukke siden, efter filuploaden er lykkes, og du ser din import på Import-siden. Den vil have en status som "Anmodet", og når den starter, vil status være "Kører".

Det er sikkert at importere igen så mange gange som nødvendigt - men hvis din import fejler, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>, så vi kan hjælpe.

### Erstat Hyvor Talk Koden Med FastComments

Hvis du bruger den kode-snippet baserede installation med Hyvor, så er det blot et spørgsmål om at fjerne den lille snippet, de giver dig, og erstatte den med <a href="https://fastcomments.com/install-wizard" target="_blank">vores egen</a>.
Vi understøtter også mange frontend-rammer, som [du kan finde her](https://fastcomments.com/install-wizard). Du kan endda køre Hyvor og FastComments på samme site midlertidigt for at teste og justere udseende og følelse. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

Hvis du ikke bruger den kode-snippet baserede installation, så vil instruktionerne variere baseret på din platform - igen <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>.

Vi tilbyder en selvbetjenings installationsguide [her](https://fastcomments.com/install-wizard).

### Migrering af URL'er på samme tid

Kommentarerne er knyttet til side-id felterne i eksporten, så længe dine URL'er ikke ændrer sig, er skiftet nemt. Hvis du vil migrere URL'er og bevare dine
kommentarer, så <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lad os vide</a> ved at sende os de gamle og nye URL'er. Hjælpesiden tillader upload af små tekstfiler, så hvis
du migrerer mere end bare et par URL'er, så opret et Excel-ark.

### EU

Hvis du er i EU, vil du nok gerne oprette din konto på [eu.fastcomments.com](https://eu.fastcomments.com), så dine kundedata forbliver i EU.

### Opsummering

1. Eksportér dine data
2. Importér til FastComments
3. Byt Hyvor JavaScript snippet med <a href="https://fastcomments.com/install-wizard" target="_blank">FastComments's</a>

## Hvorfor Vil Ikke Hyvor Sende Mig Min Fil?
For større sider kan Hyvor muligvis ikke oprette den eksporterede fil på grund af tekniske begrænsninger på deres side. Vi har muligheden for at skrabe din eksisterende side og trække kommentarerne fra den, men dette kan være
relativt tilpasset, og på grund af den tid, der kræves, vil det kræve, at du har Supportpakken. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Du kan anmode om hjælp med dette her</a>.
{{/isPost}}

---