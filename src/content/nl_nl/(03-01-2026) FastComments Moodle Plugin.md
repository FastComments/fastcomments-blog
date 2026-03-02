---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments heeft nu een speciale Moodle-plugin met SSO, geneste opmerkingen en samenwerkende chat voor uw cursussen.
{{/unless}}

{{#isPost}}

### Wat is er nieuw

We zijn verheugd om de officiële FastComments-plugin voor Moodle aan te kondigen. Als je Moodle hebt gebruikt en live,
geneste opmerkingen of samenwerkende chat aan je cursussen wilt toevoegen, maakt deze plugin het eenvoudig. Het vervangt de oude handmatige PHP-aanpak
door een echte Moodle-plugin die in enkele minuten wordt geïnstalleerd en integreert met je bestaande Moodle-gebruikersaccounts. De plugin werkt
met Moodle 4.1 en hoger, en de bron is beschikbaar op [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Aan de slag

Om te installeren, download de ZIP van de [GitHub-repository](https://github.com/FastComments/fastcomments-moodle) en pak deze uit
in `<moodle-root>/local/fastcomments`. Log vervolgens in als sitebeheerder en bezoek **Sitebeheer > Meldingen**.
Moodle zal de nieuwe plugin detecteren en de installatie automatisch uitvoeren.

Als het eenmaal is geïnstalleerd, ga je naar **Sitebeheer > Plugins > Lokale plugins > FastComments** om te configureren. Je hebt je
**Tenant ID** (te vinden in je FastComments-dashboard) en je **API Secret** nodig als je Secure SSO wilt gebruiken, wat we aanbevelen.

Let op dat de handmatige download van GitHub tijdelijk is terwijl we wachten op goedkeuring van de plugin in de Moodle-plugin
directory. Zodra deze is goedgekeurd, kun je deze direct vanuit de plugin-installateur van Moodle installeren.

### Opmerkingstijlen

De plugin ondersteunt drie opmerkingstijlen, zodat je kunt kiezen wat het beste werkt voor je studenten en cursusstructuur.

**Opmerkingen** modus plaatst een volledig opmerkingwidget onder de pagina-inhoud. Studenten krijgen geneste antwoorden, @mentions,
stemmen omhoog en omlaag, een rijke teksteditor en de notificatiebel om te abonneren op nieuwe opmerkingen op een pagina.

<div class="text-center">
    <div class="sm">Opmerkingen op een cursuspagina</div>
    <img src="images/moodle-course-comments.png" alt="Cursusopmerkingen" title="Cursusopmerkingen" />
</div>

**Collab Chat** modus voegt een balk bovenaan de pagina toe die gebruikers uitnodigt om tekst te selecteren en een discussie te starten. De
gemarkeerde tekst is verankerd aan de inhoud, zodat het gesprek blijft hangen aan precies wat wordt besproken. Het toont ook
online gebruikers en het aantal actieve discussies. Deze modus rendert geen widget aan de onderkant.

<div class="text-center">
    <div class="sm">Samenwerkende chat verankerd aan geselecteerde tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Opmerkingen** geeft je beide tegelijkertijd. Studenten kunnen tekst markeren voor inline discussies en ook
het volledige opmerkingwidget onder de inhoud gebruiken. Dit is geweldig voor cursussen waarbij je zowel snelle inline feedback als
langere geneste gesprekken wilt.

<div class="text-center">
    <div class="sm">Beide opmerkingstijlen actief op een pagina</div>
    <img src="images/moodle-page-comments.png" alt="Pagina Opmerkingen" title="Pagina Opmerkingen" />
</div>

### Automatische SSO

De plugin ondersteunt drie SSO-modi. **Secure SSO** is de aanbevolen optie. Het ondertekent de gebruikersidentiteit aan de serverzijde met
HMAC-SHA256 met behulp van je API Secret, zodat inloggegevens nooit op de cliënt worden blootgesteld. Met Secure SSO zijn Moodle-beheerders
automatisch gesynchroniseerd als FastComments-moderators, wat betekent dat je sitebeheerders opmerkingen kunnen modereren zonder extra 
instellingen. Gebruikersavatars, namen en e-mailadressen worden allemaal veilig doorgegeven.

**Simple SSO** geeft gebruikersgegevens (naam, e-mail, avatar) aan de clientzijde door zonder een handtekening. Het is snel op te zetten, maar minder veilig
dan de HMAC-aanpak. Ten slotte, **Geen** schakelt SSO volledig uit, zodat gebruikers anoniem kunnen opmerken.

### Voorkeuren voor gebruikersmeldingen

Studenten kunnen hun FastComments-meldinstellingen rechtstreeks vanuit hun Moodle-profiel beheren. Onder de **FastComments**
sectie kunnen ze antwoordmeldingen in- of uitschakelen (een e-mail ontvangen wanneer iemand op hun opmerking reageert) en abonnements
meldingen (e-mails ontvangen voor threads waarvoor ze zich hebben geabonneerd). Dit houdt alles op één plek en geeft studenten
controle over hoeveel e-mail ze ontvangen.

### Conclusie

De Moodle-plugin is nu beschikbaar. Voor de volledige installatiehandleiding, bekijk de
[Moodle Integratiehandleiding](https://docs.fastcomments.com/guide-installation-moodle.html), en de broncode is op
[GitHub](https://github.com/FastComments/fastcomments-moodle). Laat ons hieronder weten als je feedback hebt!

Proost!

{{/isPost}}