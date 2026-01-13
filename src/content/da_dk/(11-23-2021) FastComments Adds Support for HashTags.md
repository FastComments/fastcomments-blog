---
[category:Features]

###### [postdate]
# [postlink]FastComments Tilføjer Support for #HashTags[/postlink]

{{#unless isPost}}
Har du nogensinde ønsket at #tagge et emne eller en informationsbit? Nu kan du.
{{/unless}}

{{#isPost}}

### Hvad er Nyt

Når brugere kommenterer, kan de nu indtaste et eller flere `#hashtags`. Ved at klikke på et `#hashtag` i en kommentar, vil du blive ført til en visning med andre kommentarer med det viste hashtag.

Derudover kan `#hashtags` bruges til at linke til eksterne stykker indhold. Sammen med denne udgivelse har vi lanceret vores [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure), som tillader forudfyldning af hashtags i din konto.

Når vi forudfylder hashtags, kan vi definere en URL for hvert tag. Dette betyder, at `#hashtags` også kan bruges til at linke til for eksempel et ticketnummer eller et dokument i et CRM.

`#` symbolet kan også tilpasses efter anmodning.

### Sådan Bruger Du Det

Når du skriver `#`, og derefter starten på et hashtag, vil en liste over søgeresultater dukke op.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Brugsområde" title="#hashtags Demo" />
</div>

Klik blot på det hashtag, du ønsker at tilføje.

Derudover kan du bruge op- og ned-piletasterne til at navigere i denne liste og trykke enter for at vælge, eller escape for at forlade.

Vi ved, at du måske vil bruge `#` symbolet uden at tilføje et hashtag. FastComments vil opdage dette og ikke forstyrre din skriveoplevelse.

### Tilføjelse af Hash Tags

Hvis det hashtag, du ønsker at bruge, ikke er i listen over forslag - vil FastComments simpelthen auto-oprette hashtagget i baggrunden.

Automatisk `#hashtag` oprettelse kan deaktiveres i henhold til dokumentationen [her](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Hvem Får Det

Alle nuværende og nye FastComments kunder, på alle niveauer, har nu adgang til `#hashtags`. `#hashtags` er blevet tilbageporteret til tidligere versioner af kommentarscriptet.

### Hvordan Autocomplete Fungerer

De tags, der vises i den autocompleterede liste, er kun fra din konto. HashTags deles ikke på tværs af FastComments lejere.

### Dokumentation

Der er dedikeret dokumentation for `#hashtags`. Se her: https://docs.fastcomments.com/guide-hashtags.html

### Afslutning

Ligesom resten af FastComments håber vi, at du finder denne funktion hurtig og nem at bruge.

Skål!

{{/isPost}}