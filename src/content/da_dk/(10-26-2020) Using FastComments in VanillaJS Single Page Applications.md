---
[category:API & Development]
###### [postdate]
# [postlink]Brug af FastComments i VanillaJS Enkelsideapplikationer[/postlink]

{{#unless isPost}}
Selvom vi har dedikerede React- og VueJS-komponenter, kan det almindelige widget også bruges i enkelsideapplikationer.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

#### Målgruppe

Denne artikel er rettet mod udviklere.

#### Introduktion

Det meste af eksempelbrugen af FastComments VanillaJS-widgeten er et meget simpelt kodeeksempel, der indlæser kommentartråden for den nuværende side-URL. Dette skyldes, at
dette er brugsscenariet for den overvældende majoritet af vores kunder, men for nylig har vi set en stigning i udviklere, der bygger SPA'er og bruger FastComments.

Først og fremmest skal du huske, at FastComments har dedikerede <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> og <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> komponenter, så tjek dem ud, 
hvis du bruger disse biblioteker, så du ikke behøver at bygge dit eget wrapper omkring FastComments.

Hvis du bygger din applikation ved hjælp af VanillaJS, kan du dog instantiere og opdatere kommentarwidgeten dynamisk.

#### Først, URL'en og URL-ID'et

FastComments har to identifikatorer for den side eller artikel, kommentartråden er knyttet til. I konfigurationsobjektet er de "url" og "urlId" egenskaber.

URL'en er URL'en til kommentarwidgeten. Ideelt set bør du kunne besøge denne URL fra uden for din applikation. Den vil blive udsat som et link i notifikations-e-mails og i
administratorværktøjer.

URL-ID'et er en streng, der enten er en URL eller et ID - det kan være enhver værdi, så længe det repræsenterer den nuværende side. Hvis du har et opslag, en artikel eller et side-id, kan du bruge det
i stedet for side-URL'en for denne værdi. Grunden til, at URL-ID'et er separat, er, at du måske vil gemme ekstra oplysninger i URL'en, der ville gøre URL'en ikke unik for siden.

Bemærk, at vi har dokumenteret den komplette konfiguration, som widgeten understøtter i TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">på GitHub</a>.

#### Detaljer og en rigtig demo

Når widgeten er instansieret, skal du fange resultatet fra FastCommentsUI-funktionen, som du normalt ville kalde:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Derefter kan du påkalde en "update" metode på instansobjektet for at opdatere konfigurationen. Dette vil opdatere komponenten:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Du kan se et fungerende eksempel <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">med dette fiddle</a>.

Bemærk, at vi i dette eksempel bruger document.getElementById, men du kan bruge enhver mekanisme, du ønsker, til at hente målelementet.

#### Fælder

Selvom det bare at opdatere "urlId" vil fungere, bør du opdatere både "urlId" og "url", selvom de er de samme, så links fra notifikations-e-mails og
moderationsværktøjerne fungerer. Bare at opdatere "url" vil ikke fungere - kommentarer er bundet til "urlId".

#### Afslutningsvis

Vi håber, du har fundet denne guide nyttig. Tøv ikke med at kommentere nedenfor med eventuelle spørgsmål.

Skål!

{{/isPost}}

---