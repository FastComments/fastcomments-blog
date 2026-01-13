---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Releases Server-Side Rendering[/postlink]

{{#unless isPost}}
Dodajte komentarisanje na vašu stranicu bez korišćenja JavaScript-a.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

## Šta je Novo

Od lansiranja početkom 2020. godine, FastComments je isključivo koristio JavaScript za renderovanje widget-a za komentare.

Šta ako bismo vam rekli da možete imati skoro sve iste osnovne funkcionalnosti, ali bez korišćenja JS?

<div class="text-center">
    <div class="sm">Ovo je screenshot, prestanite da pokušavate da ga kliknete.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Gore prikazan screenshot je FastComments widget za komentare, bez JavaScript-a. [Možete videti ovu stranicu, bez JavaScript-a, ovde.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Kako ga Koristiti

Ako koristite WordPress, FastComments plugin verzija 3.10.1 automatski dodaje podršku za SSR kao rezervnu opciju za vaše korisnike koji pretražuju sa onemogućenim JS.

Za prilagođene implementacije, preuzmite UI za thread komentara, jednostavno pozovite `/ssr/comments` za tu stranicu:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Gde je `$urlId` url, ili id, stranice. Dokumentacija o ovome je [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Na primer, uz PHP možemo poslati iframe na stranicu koja renderuje thread komentara unutra:

<div class="code"><div class="title">PHP-Zasnovani SSR Primer</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Takođe bismo mogli napraviti API poziv da dobijemo HTML za thread komentara, i renderujemo ili sačuvamo.

Potpuna dokumentacija je dostupna u [SSR Docs na docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Pošto volimo akronime koji zvuče kao za preduzeća, ne brinite, SSR podržava SSO. [Primer Jedinstvenog Prijavljivanja sa SSR je ovde.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Lokalizacija

SSR-bazirani endpoint automatski lokalizuje odgovor na osnovu jezičkih zaglavlja koje pregledač šalje. Takođe može koristiti iste lokalizacione
prepravke kao JavaScript zasnovani widget.

## Zašto je Ovo Napravljen

Jedna od glavnih primedbi na usluge poput FastComments je ta što zahtevaju JS. Već činimo naš widget za komentare što je moguće manjim i osiguravamo da ispunjavamo
naše API pozive SLAs < 20ms, ali mnoge manje zajednice neće izabrati takvo rešenje ako to znači dodavanje JS na svoju stranicu.

Ovo takođe otvara priliku da koriste motore za renderovanje koji nemaju pristup JavaScript-u.

## Tehnologija

FastComments koristi svoj mali mikroframework za renderovanje UI. Ovaj framework koristi sličan pristup kao React, osim što su dozvoljene ručne dom manipulacije
izvan inicijalnog renderovanja.

Osnovna biblioteka za widget komentara ima jedinstvenu tačku ulaza - uzima skup stanja i stvara rezultantni HTML i CSS koji treba da se rendere. Ovo jednostavno pozivamo i na
serveru. Kada korisnik interaguje sa stranicom, stanje se menja i poslednji HTML se preuzima. Ovo je izgrađeno kao rezultat hackathona koji se održao kao deo nove godine.

## Živi Komentarisanje

Pošto se UI renderuje od strane servera, jednom, funkcionalnosti živog komentarisanja nisu dostupne.

Dodatno, obaveštenja zvono trenutno nije dostupno. Bićemo otvoreni za dodavanje ove funkcije u budućnosti.

## Performanse

Serverom renderovani UI koristi iste optimizacije skladištenja i motor za renderovanje kao JavaScript zasnovani widget. Za male thread-ove komentara, performanse
su zapravo bolje, jer korisnik ne mora da preuzima skriptu koja zatim preuzima komentare i renderuje UI.

## Crawleri i SEO

FastComments već dobro funkcioniše sa web crawlers; ako je SEO briga, korišćenje SSR nije obavezno.

## Buduće Aplikacije

Planiramo da pokrenemo rešenje za Forum u budućnosti. Tradicionalno, forumi su paginirani, i server-side renderovani. Savremena rešenja za Forume odstupaju od ove
norme koristeći beskonačno skrolovanje i klijentsko renderovanje. Ne mislimo da to mora biti jedina opcija za korišćenje rešenja za Forum treće strane.

## Na Kraj

Nadamo se da ste pronašli ovaj vodič korisnim i lakim za čitanje. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Živeli!

<style>/*

Monokai Sublime stil. Izveden iz Monokai od noformnocontent http://nn.mit-license.org/

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