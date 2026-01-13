---
[category:Tutorials]
###### [postdate]
# [postlink]Fejlfinding af Din FastComments Installation Gjort Lettere[/postlink]

{{#unless isPost}}
Vises kommentarer ikke? Indstillingerne ser ikke ud til at blive anvendt? At finde ud af det lige blev meget lettere.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Jargon

#### Hvad er Nyt

Hos <a href="https://fastcomments.com">FastComments</a> har vi lige udgivet en browserudvidelse til Google Chrome. Denne udvidelse vil hjælpe dig med at forstå, hvilken konfiguration
kommentarwidgeten modtager, samt hvorfor den måske ikke vises.

Du kan finde udvidelsen her: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Sådan Bruges Den

Hvis du oplever, at kommentarwidgeten ikke indlæses, eller nogle af de konfigurationer, du har defineret, ikke vises, så prøv at installere <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">udvidelsen</a>
og åbne den på den pågældende side. For at se ikonet i din værktøjslinje, skal du muligvis klikke på puslespilsbrikken øverst til højre for at fastgøre den, som vist:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Hvordan man Fastgør Udvidelsen" title="Hvordan man Fastgør Udvidelsen" class="lozad" />
</div>

Udvidelsen kan hjælpe med at debugge to klassifikationer af fejl. Den første, hvis widgeten slet ikke er inkluderet på siden, eller hvis der er en stor tastefejl i skriptet.

Den anden er, hvis nogle konfigurationer ikke ser ud til at træde i kraft.

For at debugge begge starter du blot med at klikke på ikonet.

Hvis værktøjet ikke finder kommentarwidgeten på siden, får du en stor rød fejl:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Eksempel på Embed.js ikke fundet" title="Eksempel på Embed.js ikke fundet" class="lozad" />
</div>

Hvis en eller flere instanser af widgeten er blevet fundet, vil du se deres konfigurationer vist separat:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Eksempel på Flere Konfigurationer" title="Eksempel på Flere Konfigurationer" class="lozad" />
</div>

Desuden vil FastComments Debugger også vise advarsler for almindelige faldgruber - som at widgeten ikke vises i skrivebeskyttet tilstand, hvis der ikke er tilgængelige kommentarer.

#### "Endelige" Instansindstillinger?

Du må muligvis se, at debuggeren viser to sæt konfigurationer - en mærket "Givet til Widget" og en mærket "Endelig".

Konfigurationen "Givet til Widget" er, som du måske gætter, den konfiguration, du giver til widgeten. Nogle værdier bliver implicit givet gennem embed.js som URL eller Side Titel - og disse er inkluderet.

Den "Endelige" konfiguration er alt, hvad widgeten bruger til at gengive sig selv. Dette kan betyde selvudfyldte værdier (som instans-id), eller <b>værdier fra widget-tilpasningsadministrationssiden</b>.

#### Hvordan Det Fungerer

Kommentarwidgeten gemmer sin konfiguration et sted, hvor debuggeren kan finde den, og derefter scanner debuggeren den aktuelle side, du er på, for instanser af widgeten og indlæser dem i hukommelsen.

#### Hvilken Information Samler Denne Udvidelse?

FastComments Debug Tool kontakter ikke FastComments-servere. Faktisk vil widgeten ikke engang tjekke indholdet af den side, du er på,
medmindre du åbner den.

#### Afslutning

Vi håber, at det at tilbyde flere værktøjer som dette gør opsætningen af FastComments lettere for alle typer kunder, vi har. Lad os vide i kommentarfeltet nedenfor,
hvordan dette virkede for dig.

Vi ved, at du i nogle tilfælde stadig kan have brug for en hjælpende hånd - og til det er der stadig <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kundesupport-siden</a>.

Skål!

{{/isPost}}