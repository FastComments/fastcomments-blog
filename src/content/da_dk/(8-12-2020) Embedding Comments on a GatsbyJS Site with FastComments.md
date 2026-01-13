---
[category:Integrations]
###### [postdate]
# [postlink]Indlejring af kommentarer på en GatsbyJS-side med FastComments[/postlink]

{{#unless isPost}}
Du kan nu bruge FastComments til at indlejre kommentarer på en side lavet med Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

#### Hvad er nyt

Vi har for nylig lanceret vores <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React-komponent</a> til FastComments.

Dette åbner mange muligheder - herunder at integrere FastComments med Gatsby.

#### Hvis du har skrevet din egen wrapper

Hvis du har skrevet din egen React-wrapper til FastComments - overvej at erstatte den med vores nye. Vi vil vedligeholde denne abstraktion for dig - og den indeholder mange 
smarte funktioner som <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">auto-opdatering ved konfigurationsændringer</a>.

#### Sådan fungerer det

Da FastComments har en React-komponent som en wrapper om vores kerneværktøj - er det blot et spørgsmål om at bruge vores React-bibliotek til at instantiere værktøjet på klientsiden.

Vi understøtter denne komponent fuldt ud og vil holde den opdateret.

#### Eksempler?

Vi er begyndt at opsætte eksempler, som du kan finde <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">her</a>.

#### Nattens tilstand

Et af de eksempler, vi har, er "nattens tilstand" - rendering af FastComments på en side med en sort (eller meget mørk) baggrund: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Desuden, da værktøjet reagerer på konfigurationsændringer, betyder det, at du kan have en tilstand til at skifte dit sites tema og nemt fortælle fastcomments-react at opdatere.

#### Afslutningsvis

Vi håber, du finder integrationen af FastComments til din Gatsby-side hurtig og nem.

Skål!

{{/isPost}}

---