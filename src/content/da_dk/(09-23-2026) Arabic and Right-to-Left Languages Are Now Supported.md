[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Arabisk og højre-til-venstre sprog understøttes nu[/postlink]

{{#unless isPost}}
FastComments taler nu arabisk, og hver del af FastComments vises fra højre til venstre for arabisk og hebraisk. Tællinger som "3 kommentarer" bruger også nu den korrekte flertalsform på alle sprog.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Arabisk er nu et understøttet sprog, med lokalekoden `ar`. Kommentar-widget'en, de andre indlejrede widgets, e-mails,
dashboardet og marketing‑siden er alle oversat.

Arabisk skrives også fra højre til venstre, så tilføjelsen betød, at FastComments skulle lære at vise sig i begge retninger. Denne rettelse gælder også for hebraisk.

### Højre‑til‑venstre layout

Når lokalet er arabisk eller hebraisk, spejles hele grænsefladen. Avatar, navn og svar‑kontroller på en kommentar bytter side, menuer og dropdowns åbner mod den korrekte kant, og pile peger den vej, du læser. Dette dækker kommentar‑widget'en og dens udvidelser som live‑chat og afstemninger, ticket‑systemet, samarbejds‑chat og anmeldelses‑opsummerings‑widgets, e‑mails og dashboardet.

Der er intet at konfigurere, bortset fra at indstille din lokal manuelt for din bruger, hvis ønsket.

### Kommentarer bevarer deres egen retning

Nogle gange er en kommentarsektion på flere sprog. En engelsk kommentar på en arabisk side, eller en arabisk kommentar på en engelsk side, bør stadig læses naturligt.

Hver kommentar og brugernavn følger retningen af sin egen tekst. På en engelsk side læses et arabisk svar fra højre til venstre, mens kommentarerne omkring læses fra venstre til højre, og det omvendte gælder på en arabisk side. Kodeblokke i kommentarer læses altid fra venstre til højre, da kode gør.

### Indstilling af lokalet

Som standard vælger widget'en lokalet fra besøgerens browser, så arabisk‑talere får arabisk automatisk. For at tvinge det,
indstil lokalet på widget‑tilpasningssiden under "Locale / Language", eller i kode:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Hvis du bruger SSO, send `locale: 'ar'` på bruger‑objektet, så deres e‑mails også kommer på arabisk.

### Flertal, gjort korrekt

Engelsk har to former for en tælling: "1 kommentar" og "2 kommentarer". Arabisk har separate former for én, to, tre til ti, og elleve til nioghalvfems, og bruger ental igen for hundrede. Russisk, ukrainsk, polsk, kroatisk, serbisk, slovensk og hebraisk har hver deres regler også.

Indtil nu kendte FastComments kun "én" og "alt andet", så en russisk læser kunne se den forkerte substantivform for 2 eller 5 kommentarer. Hver streng med en tælling vælger nu den korrekte form for sit sprog, i widget'en, e‑mails og dashboardet.

Mens vi var der, gennemgik vi hver tællingsstreng på alle sprog. Det afslørede en række ældre
fejloversættelser, som nu er rettet. For eksempel var ordet for et svar i nogle få sprog verbet "to reply", så en
kommentar viste "1 Reply" som ækvivalent til "1 To reply".

Hvis du har tilpasset teksten for en tælling, som "comments"‑etiketten, bruges din tekst stadig for hver tælling.

### Find dit sprog

Sprogvælgerne i dashboardet viser nu hvert sprog med sit eget navn ved siden af den engelske, som f.eks.
"Arabic (العربية)" og "German (Germany) (Deutsch)". Hvis nogen lander i det forkerte sprog, kan de stadig finde deres.

### Dokumentation

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Guiden om understøttede sprog</a> lister
hver lokalekode og dækker højre‑til‑venstre‑adfærd. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Locale‑indstillingen</a>
dækker tvungen indstilling af en lokal i widget'en.

Dette bygger på [vores første lokalisering](/(2-05-2020)-fastcomments-gets-localized.html) tilbage i 2020, som startede
med tre sprog. Vi har nu otteogtyve lokaliteter.

### Afslutningsvis

Vi er glade for, at vi kan bringe FastComments til arabisk‑talere, og gøre det til en bedre oplevelse for hebraisk‑talere.
Hvis du opdager en oversættelse, der lyder forkert på dit sprog, så lad os vide det nedenfor, så retter vi den.

Skål!

{{/isPost}}

---