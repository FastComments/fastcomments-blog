---
[category:Features]
[category:API & Development]
###### [postdate]
# [postlink]FastComments Objavljuje Renderovanje na Serveru[/postlink]

{{#unless isPost}}
Dodajte komentare na vašu stranicu bez korišćenja JavaScript-a.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

## Šta je Novo

Od lansiranja početkom 2020. godine, FastComments je isključivo koristio JavaScript za renderovanje komentarskog vidgeta.

Šta ako vam kažemo da možete imati skoro sve iste suštinske funkcionalnosti, ali bez korišćenja JS?

<div class="text-center">
    <div class="sm">Ovo je snimak ekrana, prestanite da pokušavate da kliknete na njega.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

Gore navedeni snimak ekrana je FastComments komentarski vidget, bez JavaScript-a. [Možete pogledati ovu stranicu, bez JavaScript-a, ovde.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## Kako to Koristiti

Ako koristite WordPress, FastComments dodatak verzija 3.10.1 automatski dodaje podršku za SSR kao rezervnu opciju za vaše korisnike koji pretražuju sa isključenim JS-om.

Za prilagođene implementacije, preuzmite UI za niti komentara, jednostavno pozovite `/ssr/comments` za tu stranicu:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

Gde je `$urlId` URL, ili ID, stranice. Dokumentacija o ovome je [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

Na primer, sa PHP-om možemo poslati iframe na stranicu koja renderuje nit komentara unutar:

<div class="code"><div class="title">Primer SSR-a zasnovanog na PHP-u</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

Takođe možemo napraviti API poziv kako bismo dobili HTML za nit komentara, i renderovali ili sačuvali.

Potpuna dokumentacija je dostupna u [SSR Dokumentaciji na docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

Pošto volimo akronime koji zvuče kao da dolaze iz preduzeća, ne brinite, SSR podržava SSO. [Primer jedinstvenog prijavljivanja sa SSR-om je ovde.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## Lokalizacija

SSR zasnovan endpoint automatski lokalizuje odgovor na osnovu jezičkih header-a koje pretraživač šalje. Takođe može koristiti iste lokalizacione
prepiske kao i widget zasnovan na JavaScript-u.

## Zašto je Ovo Napravjeno

Jedna od glavnih primedbi na usluge poput FastComments je to što zahtevaju JS. Već činimo naš komentarski vidget što je moguće manjim i osiguravamo da ispunimo
SLAs za naše API pozive ispod 20ms, ali mnoge manje zajednice neće izabrati takvo rešenje ako to znači dodavanje JS-a na svoju stranicu.

Ovo takođe otvara mogućnost korišćenja renderujućih motora koji nemaju pristup JavaScript-u.

## Tehnologija

FastComments koristi svoj mali mikroframework za renderovanje UI. Ovaj framework koristi sličan pristup kao React, osim što su dozvoljene ručne dom manipulacije
van inicijalnog renderovanja.

Osnovna biblioteka komentarskog vidgeta ima jedinstvenu ulaznu tačku - uzima set stanja i kreira rezultantni HTML i CSS koji se renderuju. Ovo jednostavno pozivamo i na
serveru. Kada korisnik interaguje sa stranicom, stanje se menja i najnoviji HTML se preuzima. Ovo je napravljeno kao rezultat hackathona koji se desio kao deo novogodišnje proslave.

## Live Komentarisanje

Pošto se UI renderuje od strane servera, jednom, funkcije live komentarisanja trenutno nisu dostupne.

Pored toga, obaveštenja su trenutno nedostupna. Bićemo otvoreni za dodavanje ove funkcionalnosti u budućnosti.

## Performanse

UI renderovan na serveru koristi iste optimizacije skladištenja i renderujući motor kao i vidget zasnovan na JavaScript-u. Za male niti komentara, performanse
su zapravo bolje, jer korisnik ne mora preuzimati skriptu koja zatim preuzima komentare i renderuje UI.

## Crawlers i SEO

FastComments već dobro funkcioniše sa web crawler-ima; ako je SEO zabrinutost, korišćenje SSR-a nije obavezno.

## Buduće Aplikacije

Planiramo da pokrenemo Forum rešenje u budućnosti. Tradicionalno, forumi su paginirani i renderovani na serveru. Savremena forum rešenja se udaljavaju od ove
norme koristeći beskonačno skrolovanje i renderovanje na strani klijenta. Ne mislimo da je ovo jedina opcija za korišćenje treće strane Forum rešenja.

## Na Zaključak

Nadamo se da vam je ovaj vodič bio koristan i lak za čitanje. Slobodno komentarišite ispod sa bilo kojim pitanjima.

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