---
[category:Features]
###### [postdate]
# [postlink]FastComments Får @mentions[/postlink]

{{#unless isPost}}
Har du nogensinde ønsket at @nævne en eller flere brugere i en kommentar? Nu kan du.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Tidligere ville FastComments underrette brugerne, hvis du svarede på deres kommentarer, men der var ingen måde at tagge flere personer i en enkelt kommentar. Desuden blev disse 
underretninger sendt i pakker hver time. Med `@mentions` er det nu muligt at tagge en eller flere brugere, og FastComments vil straks underrette dem via e-mail.

### Sådan bruger du det

Når du skriver `@`, og derefter starten af en brugers navn, vises en liste over søgeresultater.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Mentions Usage" title="@mentions Demo" />
</div>

Klik simpelthen på navnet på den bruger, du ønsker at tagge.

Derudover kan du bruge op- og ned-piletasterne til at navigere i denne liste og trykke enter for at vælge, eller escape for at forlade.

Vi ved, at du måske ønsker at bruge `@` symbolet uden at tagge en bruger. FastComments vil opdage dette og ikke forstyrre din skriveoplevelse.

### Hvem får det

Alle nuværende og nye FastComments-kunder, på alle niveauer, har nu adgang til `@mentions`. `@mentions` er også blevet tilbageført til tidligere versioner af kommentarfunktionen.

### Sådan fungerer autocomplete

De brugere, der vises i den autocompleterede liste, bestemmes af:

- Brugere, der har kommenteret på den samme side eller tråd.
- Brugere, der har oprettet deres FastComments-konti gennem det samme site.
- Moderators for det aktuelle site.
- SSO-brugere, der tilhører den nuværende lejer.

### Redigering af kommentarer

Nævnelser kan tilføjes til eksisterende kommentarer ved at redigere dem. Dog autocompleterer applikationen `Moderate Comments` i øjeblikket ikke `@mentions`.

### Fremtidige overvejelser

I fremtiden vil brugere, der har FastComments åbent i et browservindue, få en notifikation, når de nævnes, hvis de har tilmeldt sig underretninger.

### Afslutningsvis

Som resten af FastComments håber vi, at du finder denne funktion hurtig og nem at bruge.

Skål!

{{/isPost}}