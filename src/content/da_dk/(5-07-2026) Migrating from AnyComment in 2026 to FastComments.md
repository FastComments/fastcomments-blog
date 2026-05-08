[category:Migration]
###### [postdate]
# [postlink]Migrering Fra AnyComment i 2026 Til FastComments[/postlink]

{{#unless isPost}}
Læs dette indlæg for at se, hvordan man helt migrerer fra AnyComment til FastComments i 2026.
{{/unless}}

{{#isPost}}

Vi har haft en række kunder, der har spurgt om migrering fra AnyComment i 2026.

## AnyComment Lever Inden I WordPress

AnyComment er en WordPress-plugin. I modsætning til selvstændige platforme som Disqus eller Hyvor Talk, kører det ikke sin egen backend - dine kommentarer gemmes direkte i din WordPress-database, i den samme `wp_comments` tabel, som kerne WordPress bruger. Dette er gode nyheder for migration: der er ingen separat AnyComment eksport at håndtere, og ingen tredjepartsserver at koordinere med. Dine data er allerede på din egen server.

Det betyder, at den standard FastComments WordPress migrationsflow håndterer AnyComment uden ekstra trin.

## Valg 1: FastComments WordPress Plugin (Anbefalet)

Den nemmeste vej er at installere <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress-plugin</a>. Plugin'en guider dig gennem at linke din WordPress-installation med FastComments, og den kopierer automatisk dine eksisterende kommentardata over. Der er ingenting, der skal downloades eller uploades manuelt. Dataene kopieres fra din wordpress-database til vores servere, så dette vil også aflastede
belastning fra dine servere, når migrationen er gennemført.

De fleste migrationer afsluttes på et par minutter.

Når dataene er flyttet over, deaktiver AnyComment. Kommentarer vil fortsætte med at blive serveret af FastComments, og plugin'en holder din WordPress-database synkroniseret som en backup (hvis du aktiverer den funktion), så du altid ejer dine data.

## Valg 2: WordPress XML Eksport

Hvis du hellere vil migrere manuelt, eller hvis du allerede har flyttet væk fra WordPress og kun har en backup XML, brug WordPress's indbyggede eksport.

1. I dit WordPress admin, gå til **Værktøjer -> Eksportér** og download XML-filen.
2. Log ind på dit FastComments dashboard og gå <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">her for at importere filen</a>.
3. Vælg **WordPress (.xml)** fra dropdown-menuen og upload din fil.

Da AnyComment skriver til `wp_comments`, er hver AnyComment-tråd i den XML sammen med dine andre WordPress-kommentarer. Importøren matcher dem automatisk til det rigtige indlæg.

## Erstatning Af AnyComment Widgeten

Hvis du brugte Valg 1, så erstatter FastComments WordPress-plugin allerede AnyComment på dit site - deaktiver blot AnyComment, efter at migrationen er afsluttet.

Hvis du brugte Valg 2, og du vil beholde din WordPress-installation, så installer FastComments-plugin'en bagefter for at håndtere widget-visualisering og løbende synkronisering. Hvis du helt går væk fra WordPress, skal du indsætte vores <a href="https://fastcomments.com/install-wizard" target="_blank">installationssnip</a> på dit nye site - vi understøtter mange frontend-rammer, som <a href="https://fastcomments.com/install-wizard" target="_blank">du kan finde her</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Vi kan hjælpe med det</a>.

## EU

Hvis du er i EU, vil du sandsynligvis oprette din konto på <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, så dine kundedata forbliver i EU.

## Opsummering

1. Installer FastComments WordPress-plugin og lad det kopiere dine data over, **eller** eksporter fra WordPress som XML og upload det på import-siden
2. Deaktiver AnyComment
3. Hvis du også forlader WordPress, så byt widget-koden på dit nye site

{{/isPost}}