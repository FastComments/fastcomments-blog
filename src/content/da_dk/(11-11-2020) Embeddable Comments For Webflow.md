---
[category:Integrations]

###### [postdate]
# [postlink]Indlejrede kommentarer til Webflow[/postlink]

{{#unless isPost}}
Instruktioner, herunder en video, om installation af FastComments på et Webflow.io site.
{{/unless}}

{{#isPost}}

#### Målgruppe

Denne artikel henvender sig til alle, der ønsker at tilføje support for kommentering til deres Webflow-site.

#### Introduktion

At installere FastComments på et Webflow-site er ligeså nemt som at installere det på ethvert andet - med kun én udfordring, der er unik for hostingudbydere som Webflow.

#### Trinene

1. Tilføj dit Webflow-sides domæne til din konto - widgeten vil ikke indlæse uden det. Dette er det domæne, der bruges, når du klikker på "Publicer" i Webflow, for eksempel "https://your-superb-project.webflow.io".
2. I Design-tilstand, gå til "Tilføj elementer" i øverste venstre hjørne, og rul hele vejen ned til "Komponenter". Klik på "Indlejr" - tilføj FastComments kodeudsnit, som du kan finde <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">her</a>

#### En video

Her er en video, der detaljerer installationen, som starter med os i Webflow-designer og slutter med, at den indlejrede kommentar-widget fungerer på vores site.

<div class="text-center">
    <video src="images/fc-webflow-install.mp4" controls alt="Webflow installationsinstruktionsvideo" title="Webflow installationsinstruktionsvideo"></video>
</div>

#### Udfordringer

FastComments sikrer din installation ved at validere anmodninger efter domænenavn. Hvis du vil have kommentar-widgeten til at vises for dit Webflow-site, før du har et dedikeret domænenavn, **skal du tilføje "weblfow.io" som et domæne til din konto <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">her</a>.**

For øget sikkerhed kan du definere hele domænenavnet, for eksempel "your-awesome-site.webflow.io".

#### Afslutning

Vi håber, du har fundet denne guide nyttig og let at læse. Tøv ikke med at kommentere nedenfor med eventuelle spørgsmål.

Skål!

{{/isPost}}