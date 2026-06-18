---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Indsæt YouTube, SoundCloud og mere i kommentarer[/postlink]

{{#unless isPost}}
Kommentatorer kan nu indsætte en indlejringskode, og videoen eller afspilleren vil blive vist direkte i kommentaren. Det er som standard deaktiveret, er opt-in pr. site, og er begrænset til betroede udbydere.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Folk elsker at dele en video eller et nummer i en diskussion. Indtil nu har det ikke gjort meget at indsætte en YouTube- eller SoundCloud-indlejringskode i en kommentar. Den rå `<iframe>` blev fjernet af sikkerhedsmæssige årsager, eller den blev pakket ind som en kodeblok.

Du kan nu aktivere medie-indlejringer til dit site. Når det er aktiveret, kan en kommentator indsætte indlejringskoden direkte fra udbyderen, og den vises inline, på samme måde som den ville på enhver anden side.

Her er den slags snippet, folk kopierer fra en "Del" eller "Indsæt" knap:

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="YouTube videoafspiller" frameborder="0" allowfullscreen></iframe></div>

Indsæt det i en kommentar med indlejringer aktiveret, og du får den faktiske afspiller.

### Kun betroede udbydere

At tillade vilkårlige iframes på din side udgør en reel sikkerhedsrisiko, så vi åbnede ikke bare porten. Indlejringer er begrænset til en indbygget liste over betroede udbydere, herunder YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch og Dailymotion.

Hvis en kommentar indeholder en iframe, der peger andre steder hen, fjernes iframen, når kommentaren gemmes. Den samme sanitering, der beskytter mod `<script>` tags og `onload=` tricks, kører stadig på hver kommentar. Indlejringer er blot en yderligere, nøje afgrænset tilladelse oveni det.

### Tilføjelse af dine egne udbydere

Hvis du bruger en udbyder, der ikke er på den indbyggede liste, kan du tillade den. Der er et felt "Yderligere Indlejringsdomæner", hvor du angiver ekstra værtsnavne, som skal trusts, udover de indbyggede udbydere.

Matchen sker på det præcise værtsnavn, så tilføj den fulde vært, som indlejringen indlæses fra, for eksempel `player.example.com`. Alt, hvad du ikke angiver, forbliver blokkeret.

### Hvordan man aktiverer det

Det er en indstilling pr. site på widget-tilpasningssiden, lige ved siden af billeduploadmulighederne. Tjek "Tillad medieindlejringer?" og gem. Ingen kode eller genudrulning er nødvendig.

Ligesom vores andre indholdsindstillinger, er dette pr. tilpasningsregel, så du kan aktivere indlejringer på ét site eller en gruppe sider og lade det være deaktiveret andre steder.

### Fungerer i begge redaktører

Indsætning fungerer i både den almindelige kommentarboks og WYSIWYG-redaktøren. I den almindelige boks går indlejringskoden ind som tekst og bliver en afspiller ved indsendelse. I WYSIWYG-redaktøren vises indlejringen straks som et blok, med en lille fjern-knap i hjørnet, så det er nemt at slette, hvis det var en fejl.

### Afslutningsvis

Indlejringer er som standard deaktiveret, så der ændrer sig ikke noget for dit site, medmindre du beslutter at aktivere dem. Når du gør det, får dine kommentatorer en pænere måde at dele videoer og numre på, og du bevarer de samme sikkerhedsgarantier, du allerede havde.

Aktiver det, indsæt en video, og lad os vide, hvad du synes nedenfor.

Skål!

{{/isPost}}