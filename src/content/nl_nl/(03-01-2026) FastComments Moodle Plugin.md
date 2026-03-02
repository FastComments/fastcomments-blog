---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments heeft nu een speciale Moodle-plugin met SSO, threaded comments en collaboratieve chat voor je cursussen.
{{/unless}}

{{#isPost}}

### Wat is nieuw

We zijn verheugd om de officiële FastComments-plugin voor Moodle aan te kondigen. Als je Moodle gebruikt en live,
threaded commenting of collaboratieve chat aan je cursussen wilt toevoegen, maakt deze plugin het eenvoudig. Het vervangt de oude handmatige PHP-aanpak
door een echte Moodle-plugin die binnen enkele minuten installeert en integreert met je bestaande Moodle-gebruikersaccounts. De plugin werkt
met Moodle 4.1 en later, en de broncode is beschikbaar op [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Aan de slag

Om te installeren, download de ZIP van de [GitHub-repository](https://github.com/FastComments/fastcomments-moodle) en pak deze uit
in `<moodle-root>/local/fastcomments`. Log vervolgens in als sitebeheerder en ga naar **Sitebeheer > Meldingen**.
Moodle detecteert de nieuwe plugin en voert de installatie automatisch uit.

Zodra deze is geïnstalleerd, ga je naar **Sitebeheer > Plugins > Lokale plugins > FastComments** om deze te configureren. Je hebt
je **Tenant ID** (te vinden in je FastComments-dashboard) en je **API Secret** nodig als je Secure SSO wilt gebruiken, wat we aanbevelen.

Houd er rekening mee dat de handmatige download van GitHub tijdelijk is terwijl we wachten op goedkeuring van de plugin in de Moodle plugin
directory. Zodra deze is goedgekeurd, kun je deze rechtstreeks vanuit de plugin-installateur van Moodle installeren.

### Commenteriestijlen

De plugin ondersteunt drie commenteriestijlen, zodat je kunt kiezen wat het beste werkt voor je studenten en cursusstructuur.

**Commentaar**-modus plaatst een volledige commentaarwidget onder de pagina-inhoud. Studenten krijgen threaded antwoorden, @vermeldingen,
upvoten en downvoten, een rijke teksteditor en de notificatiebel om je in te schrijven op nieuwe opmerkingen op een pagina.

<div class="text-center">
    <div class="sm">Opmerkingen op een cursuspagina</div>
    <img src="images/moodle-course-comments.png" alt="Cursusopmerkingen" title="Cursusopmerkingen" />
</div>

**Collab Chat**-modus voegt een balk aan de bovenkant van de pagina toe die gebruikers oproept om tekst te selecteren en een discussie te starten. De
gemarkeerde tekst is verankerd aan de inhoud, zodat het gesprek verbonden blijft met precies wat er wordt besproken. Het toont ook
online gebruikers en het aantal actieve discussies. Deze modus toont geen widget onderaan.

<div class="text-center">
    <div class="sm">Collaboratieve chat verankerd aan geselecteerde tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Commentaar** geeft je beide tegelijk. Studenten kunnen tekst markeren voor inline-discussies en ook
de volledige commentaarwidget onder de inhoud gebruiken. Dit is geweldig voor cursussen waarin je zowel snelle inline feedback als
langere threaded gesprekken wilt.

<div class="text-center">
    <div class="sm">Beide commenteriestijlen actief op een pagina</div>
    <img src="images/moodle-page-comments.png" alt="Paginaopmerkingen" title="Paginaopmerkingen" />
</div>

### SSO Dat Gewoon Werkt

De plugin ondersteunt drie SSO-modi. **Secure SSO** is de aanbevolen optie. Het ondertekent identiteit van de gebruiker server-side met
HMAC-SHA256 met behulp van je API Secret, zodat inloggegevens nooit op de client worden blootgesteld. Met Secure SSO zijn Moodle-beheerders
automatisch gesynchroniseerd als FastComments-moderatoren, wat betekent dat je sitebeheerders opmerkingen kunnen modereren zonder enige
extra configuratie. Gebruikersavatar's, namen en e-mailadressen worden allemaal veilig doorgegeven.

**Simple SSO** geeft gebruikersgegevens (naam, e-mail, avatar) client-side door zonder een handtekening. Het is snel in te stellen, maar minder veilig
dan de HMAC-aanpak. Ten slotte schakelt **Geen** SSO volledig uit, zodat gebruikers anoniem kunnen reageren.

### Voorkeuren voor Gebruikersnotificaties

Studenten kunnen hun FastComments-notificatie-instellingen rechtstreeks vanuit hun Moodle-profiel beheren. Onder het **FastComments**
gedeelte kunnen ze meldingen van antwoorden (een e-mail ontvangen wanneer iemand reageert op hun opmerking) en abonnements
meldingen (e-mails ontvangen voor discussies waarvoor ze zich hebben ingeschreven) omzetten. Dit houdt alles op één plek en geeft studenten
de controle over hoeveel e-mail ze ontvangen.

### Conclusie

De Moodle-plugin is nu beschikbaar. Voor de volledige installatiehandleiding, bekijk de
[Moodle Integratiehandleiding](https://docs.fastcomments.com/guide-moodle.html), en de broncode is op
[GitHub](https://github.com/FastComments/fastcomments-moodle). Laat het ons hieronder weten als je feedback hebt!

Proost!

{{/isPost}}

---