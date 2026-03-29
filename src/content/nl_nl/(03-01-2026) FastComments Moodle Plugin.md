---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments heeft nu een speciale Moodle-plugin met SSO, geneste opmerkingen en samenwerkende chat voor je cursussen.
{{/unless}}

{{#isPost}}

### Wat is nieuw

We zijn verheugd om de officiële FastComments-plugin voor Moodle aan te kondigen. Als je Moodle gebruikt en live, geneste opmerkingen of samenwerkende chat aan je cursussen wilt toevoegen, maakt deze plugin het eenvoudig. Het vervangt de oude handmatige PHP-aanpak door een echte Moodle-plugin die binnen enkele minuten installeert en integreert met je bestaande Moodle-gebruikersaccounts. De plugin werkt met Moodle 4.1 en later, en de bron is beschikbaar op [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Aan de slag

Om te installeren, haal de plugin van de [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) en installeer deze via de plugin-installateur van je Moodle-site. Alternatief kun je het downloaden en uitpakken naar `<moodle-root>/local/fastcomments`, log daarna in als sitebeheerder en bezoek **Site-instellingen > Meldingen**. Moodle zal de nieuwe plugin detecteren en de installatie automatisch uitvoeren.

Zodra je het hebt geïnstalleerd, ga je naar **Site-instellingen > Plugins > Lokale plugins > FastComments** om te configureren. Je hebt je **Tenant ID** (gevonden in het FastComments-dashboard) en je **API Secret** nodig als je Secure SSO wilt gebruiken, wat we aanbevelen.

### Opmerkingstijlen

De plugin ondersteunt drie opmerkingstijlen, zodat je kunt kiezen wat het beste werkt voor je studenten en cursusstructuur.

**Opmerkingen**-modus plaatst een volledige opmerkingen widget onder de pagina-inhoud. Studenten krijgen geneste antwoorden, @vermeldingen, stemmen en afstemmen, een rich-text editor en de notificatiebel om zich te abonneren op nieuwe opmerkingen op een pagina.

<div class="text-center">
    <div class="sm">Opmerkingen op een cursuspagina</div>
    <img src="images/moodle-course-comments.png" alt="Cursusopmerkingen" title="Cursusopmerkingen" />
</div>

**Collab Chat**-modus voegt een balk bovenaan de pagina toe die gebruikers vraagt om tekst te selecteren en een discussie te starten. De gemarkeerde tekst is verankerd aan de inhoud, zodat het gesprek precies blijft hangen bij wat er wordt besproken. Het toont ook online gebruikers en het aantal actieve discussies. Deze modus rendert geen onderaan widget.

<div class="text-center">
    <div class="sm">Samenwerkende chat verankerd aan geselecteerde tekst</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Opmerkingen** geeft je beide tegelijk. Studenten kunnen tekst markeren voor inline-discussies en ook de volledige opmerkingen widget hieronder de inhoud gebruiken. Dit is geweldig voor cursussen waarin je zowel snelle inline feedback als langere geneste gesprekken wilt.

<div class="text-center">
    <div class="sm">Beide opmerkingstijlen actief op een pagina</div>
    <img src="images/moodle-page-comments.png" alt="Pagina Opmerkingen" title="Pagina Opmerkingen" />
</div>

### Automatische SSO

De plugin ondersteunt drie SSO-modi. **Secure SSO** is de aanbevolen optie. Het tekent de gebruikersidentiteit server-side met HMAC-SHA256 met behulp van je API Secret, zodat inloggegevens nooit aan de client worden blootgesteld. Met Secure SSO worden Moodle-beheerders automatisch gesynchroniseerd als FastComments-moderators, wat betekent dat je sitebeheerders opmerkingen kunnen modereren zonder enige extra installatie. Gebruikers-avatars, namen en e-mailadressen worden allemaal veilig doorgegeven.

**Simple SSO** geeft gebruikersdata (naam, e-mail, avatar) client-side door zonder handtekening. Het is snel in te stellen, maar minder veilig dan de HMAC-aanpak. Ten slotte, **Geen** schakelt SSO volledig uit, zodat gebruikers anoniem kunnen reageren.

### Voorkeuren voor gebruikersnotificaties

Studenten kunnen hun FastComments notificatie-instellingen rechtstreeks vanuit hun Moodle-profiel beheren. Onder de **FastComments** sectie kunnen ze meldingen van antwoorden (een e-mail krijgen wanneer iemand reageert op hun opmerking) en abonnementmeldingen (e-mails krijgen voor threads waarop ze zich hebben geabonneerd) in- of uitschakelen. Dit houdt alles op één plek en geeft studenten controle over hoeveel e-mail ze ontvangen.

### Conclusie

De Moodle-plugin is nu beschikbaar. Voor de volledige installatiehandleiding, kijk op de [Moodle Integratiehandleiding](https://docs.fastcomments.com/guide-installation-moodle.html), en de broncode is op [GitHub](https://github.com/FastComments/fastcomments-moodle). Laat het ons weten hieronder als je feedback hebt!

Proost!

{{/isPost}}

---