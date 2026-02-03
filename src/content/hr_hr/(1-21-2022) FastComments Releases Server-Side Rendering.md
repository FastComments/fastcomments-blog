---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments objavljuje renderiranje na strani poslužitelja[/postlink]

{{#unless isPost}}
Dodajte komentiranje na svoju stranicu bez korištenja JavaScripta.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

## Što je novo

Od lansiranja početkom 2020., FastComments je isključivo koristio JavaScript za renderiranje widgeta za komentiranje.

Što ako vam kažemo da možete imati gotovo sve iste bitne funkcionalnosti, ali bez korištenja JS-a?

<div class="text-center">
    <div class="sm">Ovo je snimka zaslona, prestanite pokušavati kliknuti na nju.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Gornja snimka zaslona prikazuje FastComments widget za komentiranje, bez JavaScripta. [Možete pogledati ovu stranicu, bez JavaScripta, ovdje.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Kako to koristiti

Ako koristite WordPress, verzija 3.10.1 dodatka FastComments automatski dodaje podršku za SSR kao rezervu za vaše korisnike koji pregledavaju s onemogućenim JS-om.

Za prilagođene implementacije, preuzmite UI za nit komentara, jednostavno pozovite `/ssr/comments` za tu stranicu:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Gdje je `$urlId` url ili id stranice. Dokumentacija o ovome je [ovdje](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Na primjer, s PHP-om možemo poslati iframe na stranicu koja renderira nit komentara unutar:

<div class="code"><div class="title">Primjer SSR-a temeljen na PHP-u</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Također, možemo napraviti API poziv kako bismo dobili HTML za nit komentara i renderirali ili pohranili ga.

Potpuna dokumentacija je dostupna u [SSR dokumentima na docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Budući da volimo akronime zvučne kao poduzeće, ne brinite, SSR podržava SSO. [Primjer jedinstvenog prijavljivanja s SSR-om je ovdje.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Lokalizacija

SSR temeljen endpoint automatski lokalizira odgovor na temelju jezičnih zaglavlja koje preglednik šalje. Također može koristiti ista lokalizacijska
zamjena kao JavaScript temeljen widget.

## Zašto je ovo napravljeno

Jedna od glavnih pritužbi na usluge poput FastComments je ta da zahtijevaju JS. Već činimo naš widget za komentiranje što je moguće manjim i osiguravamo da ispunjavamo
SLAs poziva našeg API-ja od < 20ms, ali mnoge manje zajednice neće odabrati takvo rješenje ako to znači dodavanje JS-a na svoju stranicu.

To također otvara priliku za korištenje renderirajućih motora koji nemaju pristup JavaScriptu.

## Tehnologija

FastComments koristi svoj mali mikro okvir za renderiranje UI-a. Ovaj okvir koristi sličan pristup Reactu, osim što su dozvoljene ručne dom manipulacije
izvan inicijalnog renderiranja.

Osnovna biblioteka widgeta za komentare ima jedinu ulaznu točku - uzima skup stanja i stvara rezultate HTML-a i CSS-a koji se renderiraju. Ovo također jednostavno pozivamo na
poslužitelju. Kada korisnik komunicira sa stranicom, stanje se mijenja i najnoviji HTML se preuzima. Ovo je napravljeno kao rezultat hackathona koji se održao na početku nove godine.

## Živo komentiranje

Budući da se UI renderira s poslužitelja, jednom, značajke živog komentiranja trenutno nisu dostupne.

Osim toga, zvono za obavijesti trenutno nije dostupno. Otvoreni smo za dodavanje ove značajke u budućnosti.

## Performanse

UI renderiran s poslužitelja koristi iste optimizacije pohrane i motor renderiranja kao i widget temeljen na JavaScriptu. Za male niti komentara, performanse
su zapravo bolje, jer korisnik ne mora preuzeti skriptu koja zatim preuzima komentare i renderira UI.

## Crawleri i SEO

FastComments već dobro funkcionira s web crawlerima; ako je SEO briga, korištenje SSR-a nije obavezno.

## Buduće primjene

Planiramo lansiranje rješenja za forume u budućnosti. Tradicionalno, forumi su paginirani i renderirani s poslužitelja. Moderna rješenja foruma udaljavaju se od ove
norme koristeći beskonačno pomicanje i renderiranje na klijentskoj strani. Ne mislimo da to mora biti jedina opcija za korištenje rješenja treće strane za forume.

## Na kraju

Nadamo se da ste pronašli ovaj vodič korisnim i lako čitljivim. Slobodno komentirajte ispod s bilo kakvim pitanjima.

Pozdrav!

<style>/*

Monokai Sublime stil. Izvedeno iz Monokai od noformnocontent http://nn.mit-license.org/

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