---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Indlejring af kommentarer på en VueJS-side med FastComments[/postlink]

{{#unless isPost}}
Har du brug for at indlejre kommentarer i en applikation udviklet med Vue? Vi har dig dækket.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

#### Hvad er nyt

FastComments har nu en Vue-komponent, der er på niveau med vores VanillaJS-widget.

Vi har valgt at kalde biblioteket fastcomments-vue. Du kan finde GitHub-repositoriet med kildekoden <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">her</a>.

Repoet indeholder også eksempelbrug af widgeten.

Det er på NPM, som du kan finde <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">her</a>.

#### Hvordan det fungerer

Den måde, denne nye komponent fungerer på, er, at Vue-komponenten er en wrapper omkring den eksisterende FastComments-widget.

Det betyder, at hvis vi tilføjer funktioner til vores eksisterende komponenter eller retter fejl, vil du stadig få fordelene med det samme!

#### Hvorfor den nye komponent?

Vi skrev FastComments VanillaJS-widgeten for at være kernen i vores forretning (sammen med vores kerne-backend). Det betyder, at vi designede den til at blive udvidet lige som nu.

Mens du uden dette nye Vue-bibliotek kunne have integreret FastComments i din applikation ved at skrive dit eget bibliotek, ville det have været en stor hindring for adoption. Ved direkte at understøtte Vue gør vi det meget lettere at adoptere FastComments for disse typer kunder.

#### Vue 3.0

Vi har en komponent bygget specifikt til Vue 3.0 kaldet <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Enkeltstående applikationer?

FastComments understøtter SPA'er som sin kerne. Komponenten overvåger ændringer til konfigurationsobjektet - så hvis du opdaterer den nuværende side (kaldet urlId), vil widgeten
blive genrendret.

#### Hvad ændrer sig for eksisterende kunder

Intet ændrer sig for eksisterende kunder - og der er **intet** galt i at bruge VanillaJS-versionen af FastComments til nye projekter. fastcomments-vue afhænger af VanillaJS-versionen af FastComments og vil altid gøre det. Hvis vi udgiver Angular- eller Vue-komponenter, vil vi følge samme model.

Vores VanillaJS-widget er en førsteklasses borger i FastComments. Denne udgivelse er helt *additiv* til vores infrastruktur.

Desuden forbliver VanillaJS-widgeten stadig en fremragende løsning til at indsætte indlejrede kommentarer på enhver webside, der ikke bruger et framework, som en statisk side.

#### I konklusion

Ved at udgive fastcomments-vue-biblioteket og fremtidige biblioteker håber vi, at vi kan gøre det lettere for udviklere at adoptere FastComments, mens de bruger moderne udviklingsmetoder.

Skål!

{{/isPost}}

---