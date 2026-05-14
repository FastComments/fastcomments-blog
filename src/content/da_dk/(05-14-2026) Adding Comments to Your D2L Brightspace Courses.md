---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Tilføjelse af kommentarer til dine D2L Brightspace-kurser[/postlink]

{{#unless isPost}}
FastComments installeres nu i D2L Brightspace i et enkelt trin via LTI 1.3 Dynamic Registration, med automatisk SSO, trådet kommentarer og samarbejdschat for hver kursusenhed.
{{/unless}}

{{#isPost}}

### Hvad er nyt

FastComments understøtter nu D2L Brightspace gennem IMS LTI 1.3 Advantage-standarden, inklusive Dynamic Registration.
Det betyder, at der ikke er nogen plugin at installere, ingen nøgleudveksling at koordinere, og ingen per-kursus kabling. Din Brightspace
administrator indsætter en enkelt URL i LTI Advantage registreringsskærmen, og FastComments og Brightspace fuldfører
håndtrykket automatisk. Undervisere tilføjer derefter FastComments til en hvilken som helst enhed på samme måde som de tilføjer andre eksterne
værktøjer, og studerende ser trådet kommentarer indlejret direkte i kursusindholdet.

<div class="text-center">
    <div class="sm">Trådet kommentarer indlejret som et emne inden i en Brightspace-enhed</div>
    <img src="images/d2l-course-comments.png" alt="FastComments kører inden i en D2L Brightspace-enhed" title="FastComments på en Brightspace-enhed" />
</div>

### Kom godt i gang

Fra dit FastComments-dashboard åbner du [LTI 1.3 konfigurationssiden](https://fastcomments.com/auth/my-account/lti-config),
vælger **D2L Brightspace** fra platformens dropdown-menu, og klikker på **Generer URL**. Du får en engangsregistrerings-URL,
der er gyldig i 30 minutter.

I Brightspace åbner din administrator **Adminværktøjer > Administrer udvidelsesmuligheder > LTI Advantage > Registrer værktøj**, indsætter URL'en i
feltet **Værktøjsinitieringsregistreringsendepunkt**, og indsender. Brightspace udfører registreringshåndtryk med FastComments, udveksler signeringsnøgler og opretter værktøjsindgangen. Popup-vinduet lukker sig selv, når det er færdigt.

Efter registreringen aktiverer administratoren værktøjet og opretter en deployment, der er afgrænset til de organisationenheder, der bør have
adgang. Fra det tidspunkt vises FastComments i indholdsvælgeren for hvert kursus under **Tilføj eksisterende**.

### Tilføjelse til et kursus

Inde i en hvilken som helst kursusenhed klikker underviseren på **Tilføj eksisterende**, vælger **FastComments** fra aktivitetslisten, og værktøjet placeres som et emne i enheden. Omdøbning af emnet, omorganisering af det inde i enheden, begrænsning til specifikke
grupper eller frigivelsesbetingelser, og skift af synlighed bruger alle de standard Brightspace-kontroller. Der er ikke nogen separat
FastComments indstillingsskærm for undervisere at lære.

Til inline indlejring er det samme FastComments-værktøj også tilgængeligt gennem Brightspace HTML-editorens **Indsæt ting**
dialog under **LTI Advantage**. Dette bruger LTI Deep Linking-flowet til direkte at indsætte en commenttråd inde i en læsning,
quiz-instruktioner eller et andet HTML-emne, så diskussionen ligger ved siden af det indhold, det handler om.

### Automatisk SSO

Studerende ser aldrig en login-skærm. LTI 1.3 opstarten bærer den studerendes Brightspace-identitet (`sub`, `name`, `email`,
og `picture`) underskrevet med Brightspaces private nøgle. FastComments verificerer signaturen mod Brightspaces offentliggjorte
JWKS, opretter en sikker SSO-session for brugeren og viser kommentarfeltet. Kommentarer tilskrives den studerendes
Brightspace-konto, og undervisere modererer også ved hjælp af deres Brightspace-identitet.

Roller kortlægning er automatisk. Brightspace **Administrator** brugere kommer igennem som FastComments-administratorer, **Instructor** brugere
som moderatorer, og alle andre som almindelige kommentatorer. Der er ikke nogen separat bruger liste at vedligeholde på FastComments
siden - det følger hvad som helst Brightspace siger.

### Tråd Scoping

Hver kommentarthread er bundet til en tripel: Brightspace-værtskonto, kurset og ressource-linket. Det betyder, at to
kurser, der begge bruger et "Reading Reflections" emne, hver får deres egen diskussion. Det samme er tilfældet, hvis en underviser
tilføjer FastComments to gange i det samme kursus (for eksempel, en gang som et enhedsemne og en gang som en inline indlejring inde i en
HTML-side) - hver placering er sin egen tråd.

Værtsdelen er med vilje en del af trådidentifikatoren. Hvis din institution kører flere Brightspace-instanser
under én FastComments-konto, forbliver samtaler isoleret til hver instans, selv når kursus-ID'er kolliderer.

### Afslutning

Hvis du kører D2L Brightspace, kan du være i gang med FastComments inden for en eftermiddag: generer URL'en, indsæt den
i Brightspace, og lad underviserne droppe værktøjet ind i deres enheder. For den fulde trin-for-trin opsætning inklusive
fejlfinding og skærmbilleder pr. side, se
[LTI 1.3 installationsvejledning](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Den samme integration dækker også
Moodle, Blackboard, Sakai, Schoology og enhver anden LTI 1.3 Advantage-platform, men Brightspace var vores pilotmål, og flowet er
solidt der.

Skål!

{{/isPost}}

---