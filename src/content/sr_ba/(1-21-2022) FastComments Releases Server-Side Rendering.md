---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Izdaje Rendering na Serveru[/postlink]

{{#unless isPost}}
Dodajte komentarisanje na svoju stranicu bez korištenja JavaScript-a.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

## Šta je Novo

Od lansiranja početkom 2020. godine, FastComments je isključivo koristio JavaScript za renderovanje vidžeta za komentare.

Šta ako bismo vam rekli da možete imati skoro sve iste suštinske funkcionalnosti, ali bez korištenja JS-a?

<div class="text-center">
    <div class="sm">Ovo je snimak ekrana, prestanite pokušavati da kliknete na njega.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Gore prikazani snimak ekrana je FastComments vidžet za komentare, bez JavaScript-a. [Možete pogledati ovu stranicu, bez JavaScript-a, ovde.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Kako To Koristiti

Ako koristite WordPress, FastComments dodatak verzije 3.10.1 automatski dodaje podršku za SSR kao rezervnu opciju za vaše korisnike koji pretražuju bez omogućene JS.

Za prilagođene implementacije, preuzmite UI za nit komentara, jednostavno pozovite `/ssr/comments` za tu stranicu:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Gde je `$urlId` url, ili id, stranice. Dokumentacija o ovome je [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Na primer, sa PHP-om možemo poslati iframe na stranicu koja renderuje nit komentara unutar:

<div class="code"><div class="title">PHP Primer SSR-a</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Takođe, mogli bismo napraviti API poziv da dobijemo HTML za nit komentara, i renderujemo ili sačuvamo.

Kompletna dokumentacija je dostupna u [SSR Dokumentima na docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Pošto volimo akronime koji zvuče poslovno, ne brinite, SSR podržava SSO. [Primer Single-Sign-On sa SSR je ovde.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Lokalizacija

SSR bazirani endpoint automatski lokalizuje odgovor na osnovu jezičkih zaglavlja koje pregledač šalje. Takođe može koristiti iste lokalizacione
override kao vidžet zasnovan na JavaScript-u.

## Zašto je Ovo Izgrađeno

Jedna od glavnih primedbi na servise poput FastComments je da zahtevaju JS. Već smo učinili naš vidžet za komentare što je moguće manjim, i osigurali smo da ispunjavamo
SLAs za API pozive od < 20ms, ali mnoge manje zajednice neće izabrati takvo rešenje ako to znači dodavanje JS-a na svoju stranicu.

Ovo takođe otvara priliku za korišćenje rendering engine-a koji nemaju pristup JavaScript-u.

## Tehnologija

FastComments koristi svoj mali mikroframework za renderovanje UI-a. Ovaj framework koristi sličan pristup React-u, osim što su manuelne manipulacije DOM-om
van inicijalnog renderovanja dozvoljene.

Osnovna biblioteka vidžeta za komentare ima jedan ulazni tačku - uzima set stanja i kreira rezultatni HTML i CSS za renderovanje. Ovo jednostavno pozivamo i na
serveru. Kada korisnik interaguje sa stranicom, stanje se menja i najnoviji HTML se preuzima. Ovo je izgrađeno kao rezultat hackathona koji se odigrao kao deo novog godine.

## Živote Komentarisanja

Pošto se UI renderuje od strane servera, jednom, funkcije live komentarisanja nisu dostupne.

Pored toga, obaveštenja zvono trenutno nije dostupno. Otvoreni smo za dodavanje ove funkcionalnosti u budućnosti.

## Performanse

Serverom renderovani UI koristi iste optimizacije skladišta i engine za renderovanje kao vidžet zasnovan na JavaScript-u. Za male niti komentara, performanse
su zapravo bolje, jer korisnik ne mora preuzeti skriptu koja zatim preuzima komentare i renderuje UI.

## Crawlers i SEO

FastComments već dobro radi sa web crawler-ima; ako je SEO briga, korišćenje SSR nije obavezno.

## Buduće Aplikacije

Planiramo lansiranje rešenja za Forume u budućnosti. Tradicionalno, forumi su paginirani i renderovani na serveru. Moderna rešenja za forume se udaljavaju od ove
norme korišćenjem beskonačnog skrolovanja i renderovanja na strani klijenta. Ne mislimo da ovo mora biti jedina opcija za korišćenje rešenja foruma treće strane.

## Na Zaključku

Nadamo se da ste pronašli ovaj vodič korisnim i lakim za čitanje. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Živeli!

<style>/*

Monokai Sublime stil. Proizvedeno iz Monokai od noformnocontent http://nn.mit-license.org/

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