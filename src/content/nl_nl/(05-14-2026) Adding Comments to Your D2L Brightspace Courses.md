---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Reacties Toevoegen aan Uw D2L Brightspace Cursussen[/postlink]

{{#unless isPost}}
FastComments installeert nu in D2L Brightspace in een enkele stap via LTI 1.3 Dynamische Registratie, met automatische SSO, geneste reacties en collaboratieve chat voor elke cursus eenheid.
{{/unless}}

{{#isPost}}

### Wat is nieuw

FastComments ondersteunt nu D2L Brightspace via de IMS LTI 1.3 Advantage standaard, inclusief Dynamische Registratie.
Dat betekent dat er geen plugin hoeft te worden geïnstalleerd, geen sleuteluitwisseling hoeft te worden gecoördineerd en geen bedrading per cursus nodig is. Uw Brightspace
administrator plakt een enkele URL in het LTI Advantage registratie scherm, en FastComments en Brightspace voltooien
de handdruk automatisch. Instructeurs voegen vervolgens FastComments toe aan elke eenheid op dezelfde manier als ze andere externe
tools toevoegen, en studenten zien geneste reacties geïntegreerd in de cursusinhoud.

<div class="text-center">
    <div class="sm">Geneste reacties ingebed als een onderwerp binnen een Brightspace eenheid</div>
    <img src="images/d2l-course-comments.png" alt="FastComments rijdend binnen een D2L Brightspace eenheid" title="FastComments op een Brightspace Eenheid" />
</div>

### Aan de Slag

Open vanuit uw FastComments-dashboard de [LTI 1.3 Configuratiepagina](https://fastcomments.com/auth/my-account/lti-config),
selecteer **D2L Brightspace** uit de platform dropdown, en klik op **Genereer URL**. U ontvangt een eenmalige registratie-URL
die 30 minuten geldig is.

In Brightspace opent uw administrator **Beheertools > Beheer Uitbreidbaarheid > LTI Advantage > Registreer Tool**, plakt de
URL in het veld **Tool initiatiedregistratie-eindpunt** en dient deze in. Brightspace voert de registratiehanddruk
met FastComments uit, wisselt ondertekeningssleutels uit, en creëert de toolvermelding. Het pop-up venster sluit zichzelf wanneer het volledige is.

Na registratie schakelt de administrator de tool in en creëert een implementatie die is gericht op de org-eenheden die toegang moeten hebben. 
Vanaf dat moment verschijnt FastComments in de inhoudselecteur van elke cursus onder **Voeg Bestaande Toe**.

### Toevoegen aan een Cursus

Binnen een cursus eenheid klikt de instructeur op **Voeg Bestaande Toe**, kiest **FastComments** uit de activiteitenlijst, en de
tool wordt geplaatst als een onderwerp in de eenheid. Het hernoemen van het onderwerp, het opnieuw ordenen binnen de eenheid, het beperken tot specifieke
groepen of vrijgavevoorwaarden, en het schakelen van zichtbaarheid maakt allemaal gebruik van de standaard Brightspace-controles. Er is geen aparte
FastComments-instellingen scherm voor instructeurs om te leren.

Voor inline embedding is dezelfde FastComments-tool ook beschikbaar via de HTML-editor van Brightspace in de **Voeg Dingen Toe**
dialoog onder **LTI Advantage**. Dit maakt gebruik van de LTI Deep Linking flow om een reactie-thread direct binnen een lezing,
quiz-instructies, of elk ander HTML-onderwerp te plaatsen, zodat de discussie naast de inhoud staat waar het om gaat.

### Automatische SSO

Studenten zien nooit een inlogscherm. De LTI 1.3 lancering bevat de Brightspace-identiteit van de student (`sub`, `name`, `email`,
en `picture`) ondertekend door de privésleutel van Brightspace. FastComments verifieert de handtekening tegen de gepubliceerde
JWKS van Brightspace, genereert een Veilige SSO-sessie voor de gebruiker, en rendert de opmerking-widget. Opmerkingen worden toegeschreven aan het
Brightspace-account van de student, en instructeurs modereren ook met hun Brightspace-identiteit.

Rolmapping is automatisch. Brightspace **Administrator** gebruikers komen door als FastComments-beheerders, **Instructor** gebruikers
als moderators, en iedereen daarbuiten als standaardcommentatoren. Er is geen aparte gebruikerslijst om te onderhouden aan de FastComments
zijde - het volgt alles wat Brightspace zegt.

### Thread Scoping

Elke reactie-thread is gebonden aan een triplet: de Brightspace host, de cursus, en de resource link. Dat betekent dat twee
cursussen die beide een "Reading Reflections" onderwerp gebruiken elk hun eigen discussie krijgen. Hetzelfde geldt als een instructeur
FastComments twee keer toevoegt in dezelfde cursus (bijvoorbeeld eenmaal als een eenheid onderwerp en eenmaal als een inline embed binnen een
HTML-pagina) - elke plaatsing is zijn eigen thread.

Het hostgedeelte maakt opzettelijk deel uit van de threadidentifier. Als uw instelling meerdere Brightspace-instanties runt
onder één FastComments-account, blijven gesprekken geïsoleerd voor elke instantie, zelfs wanneer cursus-ID's communiceren.

### Conclusie

Als u D2L Brightspace gebruikt, kunt u binnen een middag live zijn met FastComments: genereer de URL, plak deze
in Brightspace, en laat instructeurs de tool aan hun eenheden toevoegen. Voor de volledige stap-voor-stap installatie, inclusief
probleemoplossing en per-pagina screenshots, zie de 
[LTI 1.3 Installatiehandleiding](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Dezelfde integratie dekt ook
Moodle, Blackboard, Sakai, Schoology, en elk ander LTI 1.3 Advantage platform, maar Brightspace was ons pilotdoel en de flow is daar solide.

Proost!

{{/isPost}}