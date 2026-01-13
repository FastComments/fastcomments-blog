---
[category:API & Development]
###### [postdate]
# [postlink]FastComments Går React[/postlink]

{{#unless isPost}}
Har du brug for at integrere kommentarer i en applikation udviklet med React? Vi har dækket dig.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Tekniske Udtalelser

#### Hvad er Nyt

FastComments har nu en React-komponent, der er på niveau med vores VanillaJS-widget.

Vi har besluttet at kalde biblioteket fastcomments-react. Du kan finde GitHub-repositoriet med kildekoden <a href="https://github.com/FastComments/fastcomments-react" target="_blank">her</a>.

Repositoryet indeholder også eksempel på brug af widget'en.

Det er på NPM, som du kan finde <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">her</a>.

#### Hvordan det Fungerer

Den måde, denne nye komponent fungerer på, er, at React-komponenten er en wrapper omkring den eksisterende FastComments-widget.
 
Dette betyder, at hvis vi tilføjer funktioner til vores eksisterende komponenter eller retter fejl, vil du stadig have glæde af det med det samme!

#### Hvorfor Den Nye Komponent?

Vi skrev FastComments VanillaJS-widget for at være kernen i vores forretning (sammen med den centrale backend). Dette betyder, at vi designede den til at blive udvidet på præcis den måde, vi gør nu.

Selvom du uden dette nye React-bibliotek kunne have integreret FastComments i din applikation ved at skrive dit eget bibliotek, ville det have været en stor hindring for adoption. Ved at understøtte React direkte gør vi det meget lettere at adoptere FastComments for denne type kunder.

#### Enkelt Side Applikationer?

FastComments understøtter SPA'er som sin kerne. Komponenten overvåger ændringer til konfigurationsobjektet - så hvis du opdaterer den aktuelle side (kaldet urlId), vil widget'en blive genrendret.

#### Hvad Ændrer sig for Eksisterende Kunder 

Intet ændrer sig for eksisterende kunder - og der er **intet** galt i at bruge VanillaJS-versionen af FastComments til nye projekter. fastcomments-react afhænger af VanillaJS-versionen af FastComments og vil altid gøre det. Hvis vi frigiver Angular- eller Vue-komponenter, vil vi følge den samme model.

Vores VanillaJS-widget er en førsteklasses borger i FastComments. Denne udgivelse er helt *additiv* til vores infrastruktur.

Derudover forbliver VanillaJS-widget'en stadig en fremragende løsning til at indsætte indlejrede kommentarer i enhver webside, der ikke bruger et framework, som en statisk side.

#### Afslutningsvis

Ved at frigive fastcomments-react biblioteket, og fremtidige biblioteker, håber vi at gøre det lettere for udviklere at adoptere FastComments, mens de bruger moderne udviklingsmetoder.

Skål!

{{/isPost}}

---