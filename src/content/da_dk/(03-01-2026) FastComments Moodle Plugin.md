---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments har nu en dedikeret Moodle-plugin med SSO, trådede kommentarer og samarbejdschat til dine kurser.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Vi er glade for at kunne annoncere den officielle FastComments plugin til Moodle. Hvis du har brugt Moodle og ønsket at tilføje live,
trådede kommentarer eller samarbejdschat til dine kurser, gør denne plugin det enkelt. Den erstatter den gamle manuelle PHP-tilgang
med en korrekt Moodle-plugin, der installeres på få minutter og integreres med dine eksisterende Moodle-brugerkonti. Plugin'en fungerer
med Moodle 4.1 og senere, og koden er tilgængelig på [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kom godt i gang

For at installere, download ZIP-filen fra [GitHub-repositoriet](https://github.com/FastComments/fastcomments-moodle) og udpak den
til `<moodle-root>/local/fastcomments`. Log derefter ind som webstedadministrator og besøg **Webstedsadministration > Notifikationer**.
Moodle vil opdage den nye plugin og køre installationen automatisk.

Når den er installeret, skal du gå til **Webstedsadministration > Plugins > Lokale plugins > FastComments** for at konfigurere. Du vil have brug for dit
**Lejer-ID** (findes i dit FastComments-dashboard) og din **API Secret**, hvis du vil bruge sikker SSO, hvilket vi anbefaler.

Bemærk, at den manuelle download fra GitHub er midlertidig, mens vi venter på, at plugin'en bliver godkendt i Moodle-plugin
kataloget. Når den er godkendt, vil du kunne installere den direkte fra Moodle's plugin-installationsprogram.

### Kommenteringsstile

Plugin'en understøtter tre kommenteringsstile, så du kan vælge, hvad der fungerer bedst for dine studerende og kursusstruktur.

**Kommentarer**-tilstand placerer en fuld kommentars-widget under sideindholdet. Studerende får trådede svar, @mentions,
opstemning og nedstemning, en tekstredigerer, og en notifikationsklokke til at abonnere på nye kommentarer på en side.

<div class="text-center">
    <div class="sm">Kommentarer på en kursus side</div>
    <img src="images/moodle-course-comments.png" alt="Kursus Kommentarer" title="Kursus Kommentarer" />
</div>

**Collab Chat**-tilstand tilføjer en bjælke øverst på siden, der opfordrer brugere til at vælge tekst og starte en diskussion. Den
fremhævede tekst er forankret til indholdet, så samtalen forbliver knyttet til præcis det, der diskuteres. Den viser også online brugere
og antallet af aktive diskussioner. Denne tilstand viser ikke en bund-widget.

<div class="text-center">
    <div class="sm">Samarbejdschat forankret til valgt tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Kommentarer** giver begge dele på samme tid. Studerende kan fremhæve tekst til inline-diskussioner og også
bruge den fulde kommentars-widget under indholdet. Dette er fantastisk til kurser, hvor du ønsker både hurtig inline-feedback og
længere trådede samtaler.

<div class="text-center">
    <div class="sm">Begge kommenteringsstile aktive på en side</div>
    <img src="images/moodle-page-comments.png" alt="Side Kommentarer" title="Side Kommentarer" />
</div>

### Automatisk SSO

Plugin'en understøtter tre SSO-tilstande. **Sikker SSO** er den anbefalede mulighed. Den underskriver brugeridentitet server-side med
HMAC-SHA256 ved hjælp af din API Secret, så legitimationsoplysninger aldrig eksponeres på klienten. Med Sikker SSO,
synkroniseres Moodle-administratorer automatisk som FastComments-moderatorer, hvilket betyder, at dine webstedadministratorer
kan moderere kommentarer uden nogen ekstra opsætning. Brugeravatare, navne og e-mailadresser sendes alle sikkert.

**Simpel SSO** sender brugerdata (navn, e-mail, avatar) klient-side uden en signatur. Det er hurtigt at sætte op, men mindre sikkert
end HMAC-tilgangen. Endelig, **Ingen** deaktiverer SSO helt, så brugere kommenterer anonymt.

### Brugerens notifikationspræferencer

Studerende kan administrere deres FastComments-notifikationsindstillinger direkte fra deres Moodle-profil. Under **FastComments**
sektionen kan de aktivere svarnotifikationer (få en e-mail, når nogen svarer på deres kommentar) og abonnementsnotifikationer
(få e-mails for tråde, de har abonneret på). Dette holder alt på ét sted og giver studerende kontrol over, hvor meget e-mail de modtager.

### Afslutning

Moodle-plugin'en er tilgængelig nu. For den fulde opsætningsguide, tjek
[Moodle Integrationsguide](https://docs.fastcomments.com/guide-installation-moodle.html), og kildekoden er på
[GitHub](https://github.com/FastComments/fastcomments-moodle). Lad os vide nedenfor, hvis du har feedback!

Cheers!

{{/isPost}}