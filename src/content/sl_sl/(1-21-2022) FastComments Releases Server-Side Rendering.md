---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments objavlja prikazovanje na strežniku[/postlink]

{{#unless isPost}}
Dodajte komentiranje na svojo stran brez uporabe JavaScripta.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnično terminologijo

## Kaj je novega

Od lansiranja v začetku leta 2020, FastComments uporablja izključno JavaScript za upodabljanje pripomočka za komentiranje.

Kaj, če vam povemo, da lahko imate skoraj vse iste bistvene funkcionalnosti, vendar brez uporabe JS?

<div class="text-center">
    <div class="sm">To je posnetek zaslona, ne poskušajte ga klikniti.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Zgornji posnetek zaslona prikazuje pripomoček za komentiranje FastComments, brez JavaScripta. [To stran si lahko ogledate brez JavaScripta, tukaj.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Kako ga uporabiti

Če uporabljate WordPress, različica vtičnika FastComments 3.10.1 samodejno doda podporo za SSR kot reševanje za uporabnike, ki brskajo z onemogočenim JS.

Za prilagojene implementacije pridobite uporabniški vmesnik za komentarje, enostavno pokličite `/ssr/comments` za to stran:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Kjer je `$urlId` url ali id strani. Dokumentacija o tem je [tukaj](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Na primer, s PHP lahko pošljemo iframe na stran, ki prikaže nit komentarjev znotraj:

<div class="code"><div class="title">PHP Primer za SSR</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Lahko bi tudi izvedli klic API za pridobitev HTML za nit komentarjev in ga prikazali ali shranili.

Popolna dokumentacija je na voljo v [SSR dokumentaciji na docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Ker imamo radi podjetniško zveneče akronime, ne skrbite, SSR podpira SSO. [Primer enotnega prijavljanja z SSR je tukaj.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Lokalizacija

SSR-endpoint samodejno lokalizira odgovor na podlagi jezikovnih glav, ki jih brskalnik pošlje. Prav tako lahko uporablja iste lokalizacijske nadomestke kot pripomoček, temelječ na JavaScriptu.

## Zakaj je bilo to zgrajeno

Ena glavnih pritožb o storitvah, kot je FastComments, je, da zahtevajo JS. Naš pripomoček za komentiranje že poskušamo narediti čim bolj pregleden in zagotoviti, da izpolnjujemo naše SLA za klice API, ki so < 20ms, toda mnoge manjše skupnosti ne bodo izbrale take rešitve, če to pomeni dodajanje JS na njihovo stran.

To prav tako odpre priložnost za uporabo renderirnih motorjev, ki nimajo dostopa do JavaScripta.

## Tehnologija

FastComments uporablja svoj majhen mikrookvir za upodabljanje uporabniškega vmesnika. Ta okvir uporablja podoben pristop kot React, razen da so dovoljene ročne manipulacije DOM zunaj začetnega upodabljanja.

Glavna knjižnica pripomočka za komentiranje ima eno samo vstopno točko - vzame niz stanja in ustvari rezultatni HTML in CSS, ki naj se upodobita. To enostavno poklicamo tudi na strežniku. Ko uporabnik interagira s stranjo, se stanje spremeni in naloži se najnovejši HTML. To je bilo zgrajeno kot rezultat hackathona, ki se je zgodil kot del novega leta.

## Živahno komentiranje

Ker je uporabniški vmesnik upodobljen na strežniku, enkrat, funkcije živega komentiranja trenutno niso na voljo.

Poleg tega obvestilni zvonček trenutno ni na voljo. V prihodnosti bomo odprti za dodajanje te funkcije.

## Uspešnost

Uporabniški vmesnik, ki ga upodablja strežnik, uporablja iste optimizacije shranjevanja in motor upodabljanja kot pripomoček, temelječ na JavaScriptu. Pri manjših nitih komentarjev je uspešnost dejansko boljša, saj uporabnik ne mora prenesti skripte, ki nato pridobi komentarje in upodablja uporabniški vmesnik.

## Pajki in SEO

FastComments že dobro deluje s spletnimi pajki; če je SEO zaskrbljenost, uporaba SSR ni obvezna.

## Prihodnje aplikacije

Načrtujemo lansiranje rešitve za forum v prihodnosti. Tradicionalno so forumi paginirani in upodobljeni na strežniku. Moderna spletna rešitev foruma odstopa od te norme z neskončnim pomikanjem in upodabljanjem na strani odjemalca. Ne menimo, da bi to morala biti edina možnost za uporabo rešitve foruma tretjih oseb.

## Na koncu

Upamo, da ste našli ta vodnik koristen in enostaven za branje. Ne oklevajte in komentirajte spodaj z morebitnimi vprašanji.

Na zdravje!

<style>/*

Monokai Sublime stil. Izpeljano iz Monokai avtorja noformnocontent http://nn.mit-license.org/

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