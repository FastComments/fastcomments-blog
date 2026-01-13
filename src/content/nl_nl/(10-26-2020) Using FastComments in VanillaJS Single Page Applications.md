---
[category:API & Development]
###### [postdate]
# [postlink]FastComments gebruiken in VanillaJS Single Page Applications[/postlink]

{{#unless isPost}}
Hoewel we toegewijde React en VueJS componenten hebben, kan de vanilla widget ook worden gebruikt in single page applications.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

#### Doelgroep

Dit artikel is gericht op ontwikkelaars.

#### Inleiding

Het meeste voorbeeldgebruik van de FastComments VanillaJS widget is een zeer eenvoudige codefragment dat de commentaar-thread voor de huidige pagina-URL laadt. Dit is omdat
dit de gebruiksgeval is voor de overgrote meerderheid van onze klanten, maar recentelijk hebben we een toestroom gezien van ontwikkelaars die SPAs bouwen en FastComments gebruiken.

Houd er allereerst rekening mee dat FastComments toegewijde <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> en <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> componenten heeft, dus bekijk die
als je deze bibliotheken gebruikt, zodat je niet je eigen wrapper rondom FastComments hoeft te bouwen.

Als je echter je applicatie bouwt met VanillaJS, kun je de comment widget dynamisch instellen en bijwerken.

#### Eerst, de URL en URL ID

FastComments heeft twee identificatoren voor de pagina of het artikel waar de commentaar-thread aan is gekoppeld. In het configuratie-object zijn dit de eigenschappen "url" en "urlId".

De URL is de URL van de comment widget. Idealiter zou je deze URL vanuit buiten je applicatie moeten kunnen bezoeken. Het zal worden weergegeven als een link in notificatiemails en in
beheertools.

De URL ID is een string die ofwel een URL of een ID is - het kan elke waarde zijn zolang het de huidige pagina vertegenwoordigt. Als je een post, artikel of pagina-id hebt, kun je dat
in plaats van de pagina-URL voor deze waarde gebruiken. De reden dat de URL ID afzonderlijk is, is dat je mogelijk extra informatie in de URL wilt opslaan die de URL niet uniek voor de pagina zou maken.

Let op dat we de complete configuratie die de widget ondersteunt hebben gedocumenteerd in TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">op GitHub</a>.

#### Specificaties en een Werkende Demo

Wanneer de widget is geïnstantieerd, vang het resultaat op van de FastCommentsUI functie die je normaal gesproken zou aanroepen:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Daarna kun je een "update"-methode op het instantie-object aanroepen om de configuratie bij te werken. Dit zal de component vernieuwen:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Je kunt een werkend voorbeeld zien <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">met deze fiddle</a>.

Let op dat we in dit voorbeeld document.getElementById gebruiken, maar je kunt elke gewenste methode gebruiken om het doel-element op te halen.

#### Aandachtspunten

Hoewel alleen het bijwerken van "urlId" zal werken, moet je zowel "urlId" als "url" bijwerken, ook al zijn ze hetzelfde, zodat links vanuit notificatiemails en
de moderatietools werken. Alleen "url" bijwerken zal niet werken - opmerkingen zijn gekoppeld aan "urlId".

#### Ter Conclusie

We hopen dat je deze gids nuttig hebt gevonden. Voel je vrij om hieronder te commentaar geven met eventuele vragen.

Proost!

{{/isPost}}

---