---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments brengt Server-Side Rendering uit[/postlink]

{{#unless isPost}}
Voeg opmerkingen toe aan uw site zonder het gebruik van JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

## Wat is Nieuw

Sinds de lancering in het begin van 2020 heeft FastComments uitsluitend JavaScript gebruikt om de comment widget weer te geven.

Wat als we je vertellen dat je bijna alle dezelfde essentiële functionaliteit kunt hebben, maar zonder JS te gebruiken?

<div class="text-center">
    <div class="sm">Dit is een screenshot, stop met proberen te klikken.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

De bovenstaande screenshot is de FastComments comment widget, zonder JavaScript. [Je kunt deze pagina bekijken, zonder JavaScript, hier.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Hoe te Gebruiken

Als je WordPress gebruikt, voegt de FastComments plugin versie 3.10.1 automatisch ondersteuning voor SSR toe als een fallback voor jouw gebruikers die met JS uitgeschakeld browsen.

Voor aangepaste implementaties, haal de UI voor een comment thread op, door simpelweg de `/ssr/comments` voor die pagina aan te roepen:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Waarbij `$urlId` de url, of id, van de pagina is. Documentatie hierover is [hier](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Bijvoorbeeld, met PHP kunnen we een iframe naar de pagina sturen die de comment thread binnenin weergeeft:

<div class="code"><div class="title">PHP-gebaseerd SSR Voorbeeld</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

We kunnen ook een API-aanroep doen om de HTML voor een comment thread op te halen, en deze weergeven of opslaan.

Volledige documentatie is beschikbaar in de [SSR Docs op docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Omdat we van enterprise-klinkende acroniemen houden, maak je geen zorgen, SSR ondersteunt SSO. [Een voorbeeld van Single-Sign-On met SSR is hier.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Lokalisatie

De SSR-gebaseerde endpoint lokaliseert automatisch de reactie op basis van de taalgerelateerde headers die de browser verzendt. Het kan ook dezelfde lokalisatie
overschrijvingen gebruiken als de op JavaScript gebaseerde widget.

## Waarom Dit Gebouwd Is

Een van de belangrijkste klachten over diensten zoals FastComments is dat ze JS vereisen. We maken onze comment widget al zo klein mogelijk en zorgen ervoor dat we voldoen aan
onze API-aanroep SLA's van < 20ms, maar veel kleinere gemeenschappen zullen zo'n oplossing niet kiezen als dat betekent dat ze JS aan hun site moeten toevoegen.

Dit opent ook de mogelijkheid om rendering engines te gebruiken die geen toegang tot JavaScript hebben.

## De Technologie

FastComments gebruikt zijn eigen kleine microframework voor het weergeven van de UI. Dit framework gebruikt een vergelijkbare aanpak als React, behalve dat handmatige DOM-manipulaties
buiten de oorspronkelijke render toegestaan zijn.

De kern comment widget bibliotheek heeft een enkele toegangspunt - het neemt een set van status en creëert resulterende HTML en CSS die moet worden weergegeven. We roepen dit simpelweg ook op de
server aan. Wanneer de gebruiker met de pagina interacteert, wordt de status gewijzigd en de laatste HTML opgehaald. Dit is gebouwd als resultaat van een hackathon die plaatsvond als onderdeel van het nieuwe jaar.

## Live Commentaar

Aangezien de UI door de server wordt weergegeven, één keer, zijn live commentaar functies momenteel niet beschikbaar.

Daarnaast is de notificatiebel momenteel niet beschikbaar. We staan open voor het toevoegen van deze functie in de toekomst.

## Prestaties

De server-gegenereerde UI gebruikt dezelfde opslagoptimalisaties en rendering engine als de op JavaScript gebaseerde widget. Voor kleine comment threads,
is de prestatie eigenlijk beter, omdat de gebruiker geen script hoeft te downloaden dat vervolgens de opmerkingen ophaalt en de UI weergeeft.

## Crawlers en SEO

FastComments werkt al goed met web crawlers; als SEO een zorg is, is het gebruik van SSR niet vereist.

## Toekomstige Toepassingen

We zijn van plan in de toekomst een Forum oplossing te lanceren. Traditioneel worden forums gepagineerd en server-side gerenderd. Moderne Forum oplossingen stappen weg van deze
norm door gebruik te maken van oneindige scroll en client-side rendering. We denken niet dat dit de enige optie moet zijn voor het gebruik van een derde partij Forum oplossing.

## Conclusie

We hopen dat je deze gids nuttig en makkelijk te lezen hebt gevonden. Voel je vrij om hieronder te reageren met eventuele vragen.

Proost!

<style>/*

Monokai Sublime stijl. Afgeleid van Monokai door noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}

---