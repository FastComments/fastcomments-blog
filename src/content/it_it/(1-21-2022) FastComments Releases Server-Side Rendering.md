---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Rilascia il Rendering Lato Server[/postlink]

{{#unless isPost}}
Aggiungi commenti al tuo sito senza l'uso di JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Jargon Tecnico

## Novità

Dalla sua lancio all'inizio del 2020, FastComments ha usato esclusivamente JavaScript per rendere il widget dei commenti.

E se ti dicessimo che puoi avere quasi tutta la stessa funzionalità essenziale, ma senza utilizzare JS?

<div class="text-center">
    <div class="sm">Questo è uno screenshot, smettila di cercare di cliccarlo.</div>
    <img src="images/ssr-demo.png" alt="Demo SSR" title="Demo SSR" />
</div>

Lo screenshot sopra è il widget dei commenti di FastComments, senza JavaScript. [Puoi visualizzare questa pagina, senza JavaScript, qui.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Come Usarlo

Se stai usando WordPress, la versione 3.10.1 del plugin FastComments aggiunge automaticamente il supporto per SSR come fallback per i tuoi utenti che navigano con JS disabilitato.

Per implementazioni personalizzate, recupera l'interfaccia utente per un thread di commenti, basta chiamare il `/ssr/comments` per quella pagina:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Dove `$urlId` è l'url, o id, della pagina. La documentazione su questo è [qui](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Ad esempio, con PHP possiamo inviare un iframe alla pagina che rende il thread di commenti all'interno:

<div class="code"><div class="title">Esempio di SSR Basato su PHP</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Potremmo anche fare una chiamata API per ottenere l'HTML per un thread di commenti, e renderizzarlo o memorizzarlo.

La documentazione completa è disponibile nella [Documentazione SSR su docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Poiché amiamo acronimi che sembrano aziendali, non preoccuparti, SSR supporta SSO. [Un esempio di Single-Sign-On con SSR è qui.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Localizzazione

L'endpoint basato su SSR localizza automaticamente la risposta in base alle intestazioni relative alla lingua inviate dal browser. Può anche utilizzare le stesse sovrascritture di localizzazione del widget basato su JavaScript.

## Perché È Stato Costruito

Una delle principali lamentele riguardo ai servizi come FastComments è che richiedono JS. Abbiamo già reso il nostro widget dei commenti il più snello possibile e assicuriamo di rispettare i nostri SLA per le chiamate API di < 20ms, ma molte comunità più piccole non sceglieranno una tale soluzione se comporta l'aggiunta di JS al loro sito.

Questo apre anche la possibilità di utilizzare motori di rendering che non hanno accesso a JavaScript.

## La Tecnologia

FastComments utilizza il proprio piccolo microframework per il rendering dell'interfaccia utente. Questo framework utilizza un approccio simile a React, tranne per il fatto che sono consentite manipolazioni manuali del DOM al di fuori del render iniziale.

La libreria centrale del widget dei commenti ha un singolo punto di ingresso - prende un insieme di stato e crea HTML e CSS risultanti da rendere. Chiamiamo semplicemente questo anche sul server. Quando l'utente interagisce con la pagina, lo stato viene cambiato e l'ultimo HTML viene recuperato. Questo è stato costruito a seguito di un hackathon che ha avuto luogo come parte del nuovo anno.

## Commenti Dal Vivo

Poiché l'interfaccia utente è resa dal server, una sola volta, le funzionalità di commento dal vivo non sono disponibili.

Inoltre, la campanella delle notifiche non è attualmente disponibile. Saremo aperti ad aggiungere questa funzionalità in futuro.

## Prestazioni

L'interfaccia utente renderizzata dal server utilizza le stesse ottimizzazioni di archiviazione e motore di rendering del widget basato su JavaScript. Per piccoli thread di commenti, le prestazioni sono in realtà migliori, poiché l'utente non deve scaricare uno script che poi recupera i commenti e rende l'interfaccia utente.

## Crawlers e SEO

FastComments funziona già bene con i crawler web; se il SEO è una preoccupazione, utilizzare SSR non è necessario.

## Applicazioni Future

Pianifichiamo di lanciare una soluzione Forum in futuro. Tradizionalmente, i forum sono paginati e renderizzati lato server. Le moderne soluzioni per Forum si allontanano da questa norma utilizzando lo scrolling infinito e il rendering lato client. Non pensiamo che questa debba essere l'unica opzione per utilizzare una soluzione Forum di terze parti.

## In Conclusione

Ci auguriamo che tu abbia trovato questa guida utile e facile da leggere. Sentiti libero di commentare qui sotto con qualsiasi domanda.

Saluti!

<style>/*

Stile Monokai Sublime. Derivato da Monokai di noformnocontent http://nn.mit-license.org/

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