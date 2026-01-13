---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Går Angular[/postlink]

{{#unless isPost}}
Har du brug for at indlejre kommentarer i en applikation udviklet med Angular? Vi har dig dækket.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Tekniske Udtalelser

#### Hvad er Nyt

FastComments har nu en Angular-komponent, der er på funktionsniveau med vores VanillaJS-widget.

Vi besluttede at kalde biblioteket ngx-fastcomments. Du kan finde GitHub-repositoriet med kildekoden <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">her</a>.

Repositoriet indeholder også eksempler på brugen af widgeten i form af et Angular-arbejdsområde.

Du kan finde det på NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">her</a>.

#### Hvordan det Fungerer

Den måde, denne nye komponent fungerer på, er, at Angular-komponenten er en wrapper omkring den eksisterende FastComments-widget.
 
Det betyder, at hvis vi tilføjer funktioner til vores eksisterende komponenter eller retter fejl, vil du stadig drage fordel med det samme!

#### Hvorfor Den Nye Komponent?

Vi har skrevet FastComments VanillaJS-widgeten til at være kernen i vores forretning (sammen med den centrale backend). Dette betyder, at vi designede den til at kunne udvides, ligesom vi gør nu.

Uden dette nye Angular-bibliotek kunne du have integreret FastComments i din applikation ved at skrive dit eget bibliotek, men det ville have været en stor forhindring for adoption. Ved at støtte Angular direkte gør vi det meget lettere for denne type kunder at adoptere FastComments.

#### Enkelt Side Applikationer?

FastComments understøtter SPA'er i sin kerne. Komponentet overvåger ændringer til config-objektet ved hjælp af ændringsdetektion. For eksempel, hvis du opdaterer den nuværende side (kaldes urlId), vil widgeten blive genrendret. Dette gør brugssager som at skifte til mørk tilstand eller tilføje paginering nemme at implementere.

#### Hvad Ændrer sig for Eksisterende Kunder

Der ændrer sig ikke noget for eksisterende kunder - og der er **intet** galt i at bruge VanillaJS-versionen af FastComments til nye projekter. ngx-fastcomments afhænger af VanillaJS-versionen af FastComments og vil altid gøre det. Hvis vi frigiver nye komponenter, vil vi følge den samme model.

Vores VanillaJS-widget er en førsteklasses borger i FastComments. Denne udgivelse er helt *additiv* til vores infrastruktur.

Derudover forbliver VanillaJS-widgeten stadig en fantastisk løsning til at indsætte indlejrede kommentarer på enhver webside, der ikke bruger et framework, såsom en statisk side.

#### Af Slutningen

Ved at frigive ngx-fastcomments-biblioteket, og fremtidige biblioteker, håber vi at gøre det lettere for udviklere at adoptere FastComments, mens de bruger moderne udviklingsmetoder.

Skål!

{{/isPost}}

---