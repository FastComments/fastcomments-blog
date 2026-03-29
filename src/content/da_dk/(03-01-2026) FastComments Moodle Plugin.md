---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments har nu et dedikeret Moodle-plugin med SSO, trådede kommentarer og samarbejdschat til dine kurser.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Vi er glade for at kunne annoncere det officielle FastComments-plugin til Moodle. Hvis du har brugt Moodle og ønsket at tilføje live,
trådede kommentarer eller samarbejdschat til dine kurser, gør dette plugin det enkelt. Det erstatter den gamle manuelle PHP-tilgang
med et ordentligt Moodle-plugin, der installeres på få minutter og integreres med dine eksisterende Moodle-brugerkonti. Plugin'et fungerer
med Moodle 4.1 og senere, og kilden er tilgængelig på [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kom godt i gang

For at installere, hent plugin'et fra [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) og installer det
via din Moodle-websteds plugin-installationsprogram. Alternativt kan du downloade det og udpakke det til
`<moodle-root>/local/fastcomments`, logge ind som webstedsadministrator og besøge **Webstedsadministration > Underretninger**.
Moodle opdager det nye plugin og kører installationen automatisk.

Når det er installeret, gå til **Webstedsadministration > Plugins > Lokale plugins > FastComments** for at konfigurere. Du skal bruge din
**Tenant ID** (finnes i dit FastComments-dashboard) og din **API Secret**, hvis du vil bruge Secure SSO, hvilket vi anbefaler.

### Kommentarstile

Plugin'et understøtter tre kommentarstile, så du kan vælge, hvad der fungerer bedst for dine studerende og kursusstruktur.

**Kommentarer**-tilstand placerer et komplet kommentar-widget under sideindholdet. Studerende får trådede svar, @mentions,
opstemning og nedstemning, en tekstredigeringsværktøj og notifikationsklokken til at abonnere på nye kommentarer på en side.

<div class="text-center">
    <div class="sm">Kommentarer på en kursus side</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**Collab Chat**-tilstand tilføjer en bjælke øverst på siden, der beder brugerne om at vælge tekst og starte en diskussion. Det
fremhævede tekst er forankret til indholdet, så samtalen forbliver knyttet til præcist det, der bliver diskuteret. Det viser også
online brugere og antallet af aktive diskussioner. Denne tilstand viser ikke et widget i bunden.

<div class="text-center">
    <div class="sm">Samarbejdschat forankret til den valgte tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Kommentarer** giver dig begge på én gang. Studerende kan fremhæve tekst til inline-diskussioner og også
bruge det komplette kommentar-widget under indholdet. Dette er fantastisk til kurser, hvor du ønsker både hurtig inline feedback og
længere trådede samtaler.

<div class="text-center">
    <div class="sm">Begge kommentarstile aktive på en side</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### Automatisk SSO

Plugin'et understøtter tre SSO-tilstande. **Secure SSO** er den anbefalede mulighed. Det underskriver brugeridentitet server-side med
HMAC-SHA256 ved hjælp af din API Secret, så legitimationsoplysninger aldrig eksponeres på klienten. Med Secure SSO er Moodle-admins
automatisk synkroniseret som FastComments-moderatorer, hvilket betyder, at dine webstedsadministratorer kan moderere kommentarer uden
nogen ekstra opsætning. Brugeravatarer, navne og e-mailadresser sendes alle sikkert.

**Simple SSO** sender brugerdata (navn, e-mail, avatar) client-side uden en signatur. Det er hurtigt at opsætte, men mindre sikkert
end HMAC-tilgangen. Endelig deaktiverer **None** SSO helt, så brugerne kommenterer anonymt.

### Brugerunderretninger

Studerende kan administrere deres FastComments-notifikationsindstillinger direkte fra deres Moodle-profil. Under sektionen **FastComments**
kan de skifte mellem svarnotifikationer (få en e-mail, når nogen svarer på deres kommentar) og abonnementsnotifikationer (få e-mails for tråde, de har abonneret på). Dette holder alt på ét sted og giver studerende kontrol over, hvor meget e-mail de modtager.

### Afslutning

Moodle-plugin'et er tilgængeligt nu. For den fulde opsætningsgennemgang, tag et kig på
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), og kildekoden er på
[GitHub](https://github.com/FastComments/fastcomments-moodle). Lad os vide nedenfor, hvis du har nogen feedback!

Skål!

{{/isPost}}