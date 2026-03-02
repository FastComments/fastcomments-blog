---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments har nu et dedikeret Moodle-plugin med SSO, trådede kommentarer og samarbejdschat til dine kurser.
{{/unless}}

{{#isPost}}

### Nyheder

Vi er glade for at annoncere det officielle FastComments-plugin til Moodle. Hvis du har brugt Moodle og ønsket at tilføje live, 
trådede kommentarer eller samarbejdschat til dine kurser, gør dette plugin det enkelt. Det erstatter den gamle manuelle PHP-metode 
med et ordentligt Moodle-plugin, der installeres på få minutter og integreres med dine eksisterende Moodle-bruger konti. Plugin'et fungerer 
med Moodle 4.1 og senere, og kilden er tilgængelig på [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kom I Gang

For at installere, download ZIP-filen fra [GitHub-repositoriet](https://github.com/FastComments/fastcomments-moodle) og pak den 
ud til `<moodle-root>/local/fastcomments`. Log derefter ind som siteadministrator og besøg **Site Administration > Notifications**. 
Moodle vil registrere det nye plugin og installere det automatisk.

Når det er installeret, gå til **Site Administration > Plugins > Local plugins > FastComments** for at konfigurere. Du 
vil have brug for dit **Tenant ID** (fundet i dit FastComments-dashboard) og din **API Secret**, hvis du ønsker at bruge Secure SSO, 
hvilket vi anbefaler.

Bemærk, at den manuelle download fra GitHub er midlertidig, mens vi venter på, at plugin'et bliver godkendt i Moodle-plugin 
kataloget. Når det er godkendt, vil du kunne installere det direkte fra Moodles plugin-installationsprogram.

### Kommenteringsstile

Plugin'et understøtter tre kommenteringsstile, så du kan vælge, hvad der fungerer bedst for dine studerende og kursusstruktur.

**Comments**-tilstand placerer et fuldt kommentar-widget nedenfor sideindholdet. Studerende får trådede svar, @mentions, 
opstemning og nedstemning, en rig teksteditor, og notifikationsklokken til at abonnere på nye kommentarer på en side.

<div class="text-center">
    <div class="sm">Kommentarer på en kursusside</div>
    <img src="images/moodle-course-comments.png" alt="Course Comments" title="Course Comments" />
</div>

**Collab Chat**-tilstand tilføjer en bjælke øverst på siden, der opfordrer brugerne til at vælge tekst og starte en diskussion. Den 
fremhævede tekst er forankret til indholdet, så samtalen forbliver knyttet til præcis det, der diskuteres. Den viser også online 
brugere og antallet af aktive diskussioner. Denne tilstand viser ikke et widget i bunden.

<div class="text-center">
    <div class="sm">Samarbejdschat forankret til valgt tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Comments** giver dig begge dele på samme tid. Studerende kan fremhæve tekst til inline diskussioner og også 
bruge det fulde kommentar-widget nedenunder indholdet. Dette er fantastisk for kurser, hvor du ønsker både hurtig inline feedback og 
længere trådede samtaler.

<div class="text-center">
    <div class="sm">Begge kommenteringsstile aktive på en side</div>
    <img src="images/moodle-page-comments.png" alt="Page Comments" title="Page Comments" />
</div>

### SSO Der Bare Fungerer

Plugin'et understøtter tre SSO-tilstande. **Secure SSO** er den anbefalede mulighed. Det signerer brugerens identitet server-side med 
HMAC-SHA256 ved hjælp af din API Secret, så legitimationsoplysninger aldrig eksponeres på klienten. Med Secure SSO synkroniseres 
Moodle-administratorer automatisk som FastComments-moderatorer, hvilket betyder, at dine siteadministratorer kan moderere 
kommentarer uden nogen ekstra opsætning. Brugeravatarer, navne og e-mailadresser overføres alle sikkert.

**Simple SSO** overfører brugerdata (navn, e-mail, avatar) klient-side uden en signatur. Det er hurtigt at opsætte, men mindre 
sikkert end HMAC-tilgangen. Endelig deaktiverer **None** SSO helt, så brugerne kommenterer anonymt.

### Bruger Notifikationspræferencer

Studerende kan administrere deres FastComments notifikationsindstillinger direkte fra deres Moodle-profil. Under sektionen **FastComments** 
kan de slå svarnotifikationer til (få en e-mail, når nogen svarer på deres kommentar) og abonnementsnotifikationer (få e-mails for tråde, 
de har abonneret på). Dette holder alt på ét sted og giver studerende kontrol over, hvor meget e-mail de modtager.

### Afslutningsvis

Moodle-plugin'et er tilgængeligt nu. For den fulde opsætningsvejledning, tjek 
[Moodle Integration Guide](https://docs.fastcomments.com/guide-moodle.html), og kildekoden findes på 
[GitHub](https://github.com/FastComments/fastcomments-moodle). Lad os vide nedenfor, hvis du har nogle kommentarer!

Skål!

{{/isPost}}

---