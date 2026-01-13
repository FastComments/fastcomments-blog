---
[category:Sikkerhed]

###### [postdate]
# [postlink]Beskytter Kommentartråde Med Single-Sign-On[/postlink]

{{#unless isPost}}
Betragter du ikke dine kommentartråde som offentlige? Har du SSO opsat til autentifikation? Dette kan være noget for dig.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Jargon

#### Introduktion

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(detaljer her)</a> giver dine brugere mulighed for
at kommentere uden at skulle logge ind på en anden platform.

Dog sikrer dette ikke alene dine kommentartråde, da kommentar data som standard er offentligt tilgængelig information - alle der kan se
siden kan se kommentarerne. Denne udgivelse ændrer dog på dette.

#### Ingen-Kode Opsætning

Vi kan forhindre visning og interaktion med vores kommentartråde, når SSO er opsat, ved at oprette en <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">tilpasningsregel</a>.

Når du gør dette, skal du søge efter SSO, og du vil finde denne mulighed:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Konfigurationsmulighed for at Låse Kommentarer via SSO" alt="Konfigurationsmulighed for at Låse Kommentarer via SSO" class="lozad" />
</div>

Aktivér den og gem tilpasningsreglen.

#### Beskyt Kun Et Bestemt Domæne eller Side

For kun at beskytte et bestemt domæne eller side, skal vi blot konfigurere tilpasningsreglen til det.

Øverst i tilpasningsbrugergrænsefladen finder vi to inputfelter, Domæne og URL ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Konfigurationsmulighed Efter Side eller Domæne" alt="Konfigurationsmulighed Efter Side eller Domæne" class="lozad" />
</div>

For kun at beskytte et bestemt domæne, indtast det pågældende domæne i "domæne" feltet.

For at beskytte en bestemt side, indtast en side URL i "URL ID" feltet. Hvis du har en brugerdefineret integration med FastComments, kan du indtaste en type ID her
i stedet for en URL.

#### Beskyttelse Ud Over Læsning

Aktivering af denne mulighed vil beskytte siden eller domænet mod at blive kommenteret på, medmindre brugeren er logget ind via SSO. 

#### Gotchas

Enhver bruger, der har oprettet kommentarer før din SSO-integration, vil ikke kunne se dem, medmindre de logger ind via din SSO-integration.

#### Afslutning

Vi håber, du har fundet denne vejledning nyttig og let at læse. Du er velkommen til at kommentere nedenfor med eventuelle spørgsmål.

Skål!

{{/isPost}}