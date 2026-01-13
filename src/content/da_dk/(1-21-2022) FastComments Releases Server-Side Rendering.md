---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Udgiver Server-Side Rendering[/postlink]

{{#unless isPost}}
Tilføj kommentarer til dit website uden brug af JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne artikel indeholder teknisk jargon

## Hvad er nyt

Siden lanceringen i begyndelsen af 2020 har FastComments udelukkende brugt JavaScript til at gengive kommentar-widgeten.

Hvad hvis vi fortalte dig, at du kunne få næsten al den samme essentielle funktionalitet, men uden at bruge JS?

<div class="text-center">
    <div class="sm">Dette er et screenshot, stop med at prøve at klikke på det.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Det ovenstående screenshot viser FastComments kommentar-widget, uden JavaScript. [Du kan se denne side, uden JavaScript, her.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Sådan bruger du det

Hvis du bruger WordPress, tilføjer FastComments plugin-version 3.10.1 automatisk support for SSR som en fallback for dine brugere, der browsere med JS deaktiveret.

For brugerdefinerede implementationer, hent UI'en for en kommentar-tråd, ved simpelthen at kalde `/ssr/comments` for den pågældende side:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Hvor `$urlId` er url'en, eller id'et, for siden. Dokumentation om dette er [her](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

For eksempel, med PHP kan vi sende en iframe til siden, der gengiver kommentar-tråden indeni:

<div class="code"><div class="title">PHP-baseret SSR eksempel</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Vi kunne også lave et API-kald for at få HTML til en kommentar-tråd, og gengive eller gemme det.

Komplet dokumentation er tilgængelig i [SSR Docs på docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Fordi vi elsker enterprise-lydende akronymer, skal du ikke bekymre dig, SSR understøtter SSO. [Et eksempel på Single-Sign-On med SSR er her.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Lokalisering

Den SSR-baserede endpoint lokaliserer automatisk svaret baseret på de sprogrelaterede headers, som browseren sender. Den kan også bruge de samme lokaliserings
overrides som den JavaScript-baserede widget.

## Hvorfor dette blev bygget

En af de vigtigste klager over tjenester som FastComments er, at de kræver JS. Vi gør allerede vores kommentar-widget så slank som muligt, og sikrer, at vi overholder
vores API-kald SLA'er på < 20ms, men mange mindre samfund vil ikke vælge en sådan løsning, hvis det betyder at tilføje JS til deres site.

Dette åbner også op for muligheden for at bruge gengivelsesmotorer, der ikke har adgang til JavaScript.

## Teknologien

FastComments bruger sit eget lille mikroframework til at gengive UI'en. Dette framework bruger en lignende tilgang til React, bortset fra at manuelle DOM-manipulationer
uden for den indledende gengivelse er tilladt.

Den centrale kommentar-widgetbibliotek har et enkelt entry point - det tager et sæt tilstande og skaber resulterende HTML og CSS, der skal gengives. Vi kalder simpelthen dette på
serveren også. Når brugeren interagerer med siden, ændres tilstanden, og den nyeste HTML hentes. Dette blev bygget som et resultat af et hackathon, der fandt sted som en del af nytåret.

## Live kommentarer

Da UI'en gengives af serveren, én gang, er live kommentarfunktioner ikke tilgængelige.

Derudover er notifikationsklokken i øjeblikket ikke tilgængelig. Vi vil være åbne for at tilføje denne funktion i fremtiden.

## Ydelse

Den server-gengivne UI bruger de samme lageroptimeringer og gengivelsesmotor som den JavaScript-baserede widget. For små kommentar-tråde er ydeevnen
faktisk bedre, da brugeren ikke behøver at downloade et script, der derefter henter kommentarerne og gengiver UI'en.

## Crawlers og SEO

FastComments fungerer allerede godt med webcrawlere; hvis SEO er en bekymring, er brug af SSR ikke nødvendigt.

## Fremtidige applikationer

Vi planlægger at lancere en Forum-løsning i fremtiden. Traditionelt er fora pagineret og server-side gengivet. Moderne Forum-løsninger bevæger sig væk fra denne
norm ved at bruge uendelig rulling og klient-side gengivelse. Vi mener ikke, at dette skal være den eneste mulighed for at bruge en tredjeparts Forum-løsning.

## Afslutning

Vi håber, du har fundet denne guide nyttig og nem at læse. Føl dig fri til at kommentere nedenfor med eventuelle spørgsmål.

Skål!

<style>/*

Monokai Sublime stil. Afledt fra Monokai af noformnocontent http://nn.mit-license.org/

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