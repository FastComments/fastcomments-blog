---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments Lancering af brugerdefinerede stemmestile[/postlink]

{{#unless isPost}}
Har du nogensinde ønsket at skifte fra den default op/ned stemmestil til blot et enkelt hjerte ikon? Nu kan du.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Tidligere skulle der skrives tilpasset kode og CSS for at tilpasse stemmebjælken. Dette betød også, at hvis du ville gøre noget som at aktivere anonym stemmeafgivning, men deaktivere nedstemmer, krævede det ikke kun tilpasset kode, men stemmeanmodninger kunne ikke valideres server-side. Dette betød, at folk stadig kunne nedstemme anonymt ved at kalde serveren direkte, hvilket skete i nogle fællesskaber.

Vi har nu introduceret konceptet `voteStyle` på platformen, med den første nye stemmestil, som er hjerteikonet, som mange har anmodet om.

Når det defineres via widget tilpasnings UI, tilføjer det også validering til platformen, som forhindrer nedstemning helt, så hackere ikke længere kan omgå UI'en og nedstemme en bruger til intetheden, som kunne ske, hvis anonym stemmeafgivning var aktiveret. 

### Sådan bruger du det

Gå til [Widget Tilpasnings UI](https://fastcomments.com/auth/my-account/customize-widget) og vælg `Heart` under `Vote Style`.

### Dokumentation

De officielle dokumenter til denne funktion er [tilgængelige på docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#vote-style).

### Hvem får det

Alle nuværende og nye FastComments kunder, på alle niveauer, har nu adgang til brugerdefinerede stemmestile. Denne funktion understøttes kun af v2 af kommentarswidgeten og fremad.

### Optimeringer

Koden til de forskellige stemmestile er ikke inkluderet i klientdownloadet af widget'en medmindre det er aktiveret, for at forhindre unødvendig opblæsning af produktet.

### Fremadskuende

Vi har nu kapacitet til at tilføje forskellige typer af stemmeafgivning og reaktioner, hvilket vi måske vil gøre i fremtiden.

### Afslutning

Som resten af FastComments håber vi, at du finder denne funktion hurtig og nem at bruge.

Skål!

{{/isPost}}