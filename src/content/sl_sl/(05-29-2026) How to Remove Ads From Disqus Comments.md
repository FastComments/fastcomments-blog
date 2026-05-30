---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Kako odstraniti oglase iz Disqus komentarjev[/postlink]

{{#unless isPost}}
Na brezplačnem Disqus načrtu vaša sekcija s komentarji vsebuje oglase. Obstajata dva načina, kako se jih znebiti. Boljši način tudi pospeši nalaganje vaših komentarjev in prepreči sledenje vašim bralcem.
{{/unless}}

{{#isPost}}

Disqus financira svoj brezplačni načrt z dodajanjem oglasov v vašo sekcijo s komentarji, prav pod vašim vsebinam, na mestu, kjer vaši bralci komunicirajo z vami. Ti oglasi niso vaši. Ne izberete jih in ne zaslužite niti centa od njih. To je cena za brezplačno raven.

Obstajata dva prava načina, da jih odstranite.

## Možnost 1: Nadgradite svoj Disqus načrt

Neposredna pot je, da plačate Disqus. Njihovi plačljivi načrti onemogočijo oglase. Trenutne možnosti lahko najdete na <a href="https://disqus.com/pricing/" target="_blank">Disqus strani o cenah</a>.

To deluje, vendar je pomembno, da običajno razjasnite, kaj kupujete. Plačujete za odpravo negativne točke. Oglasi izginejo, ostalo pri Disqus pa ostane enako: območje za komentarje še vedno naloži težak paket skriptov tretjih oseb, in vaši bralci so še vedno sledeni na spletnih straneh, ki ga vključujejo. Plačujete, da odstranite oglase, ne da bi naredili sekcijo s komentarji lažjo ali bolj zasebno.

## Možnost 2: Preklopite na platformo, ki nikoli ne prikazuje oglasov

Drug način za odstranitev oglasov je uporaba platforme za komentiranje, ki jih sploh ne prikazuje. :)

Za samo 0,99 $/mesec, FastComments ponuja globoko zmogljivo funkcionalnost brez sledenja ali oglasov.

## Ohranite vsak komentar

Del, zaradi katerega so ljudje najbolj zaskrbljeni, je izguba obstoječe razprave. FastComments ima vgrajen uvoznik Disqus, ki prenese vaše komentarje, uporabniška imena, uporabniške avatarje, slike, glasovanja in časovne žige. Vse slike tudi premaknemo na naš lastni CDN za vas.

Če želite celovit, podroben vodnik, imamo posebno navodilo: [Migracija iz Disqus v FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Krajša različica je spodaj.

## Kako preklopiti v treh korakih

### 1. Izvozite svoje komentarje iz Disqus

Sledite <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus-ovim korakom izvoza</a>. Poslali vam bodo datoteko s končnico "gz". Ne potrebujete je odpreti ali razpakirati, in privzeta namestitev Windows tako ali tako ne more. Naša zadnja stran bere to stisnjeno datoteko neposredno.

### 2. Uvozite datoteko v FastComments

Ko se prijavite, pojdite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stran za uvoz</a>, izberite Disqus iz spustnega menija in naložite datoteko kot je. Uvoz se izvaja v ozadju; stran se bo samodejno posodabljala, medtem ko poteka, da vam prikaže število # od najdenih in uvoznih komentarjev. Varnostno je ponovno uvoziti kolikokrat koli potrebujete.

### 3. Zamenjajte Disqus kodo z naše

Odstranite Disqus kodo iz vaših strani in namesto tega dodajte <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments kodo</a>. Dokler se URL-ji vaših strani ne spremenijo, se vsi vaši uvoženi komentarji ujemajo točno tam, kjer so bili.

## Na WordPressu?

Če vaša stran deluje na WordPressu, preskočite ročne korake in namestite <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress vtičnik</a>. To obvlada namestitev, nastavitev in sinhronizacijo za vas, nato pa lahko deaktivirate Disqus.

## Preizkusite to, preden se odločite

Nimate potrebe, da preklopite vse naenkrat. Lahko začasno delujete tako Disqus kot FastComments na isti strani, da primerjate videz in občutek, preden se popolnoma preklopite. Če želite pomoč pri čemerkoli od tega, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a> in pomagali vam bomo skozi to.

Niste prepričani, koliko vas bo FastComments stalo? Vsak načrt je brez oglasov, in lahko preverite svoje število na <a href="https://fastcomments.com/pricing-calculator" target="_blank">računalu cen</a>. Če ste v EU, lahko ustvarite svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, tako da vaši podatki ostanejo v EU.

## Povzetek

1. Izvozite svoje podatke iz Disqus
2. Uvozite jih v FastComments
3. Zamenjajte Disqus kodo z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsovo</a>

To je to. Brez oglasov v vaši sekciji s komentarji, lažje strani in vsak komentar, ki ste ga že imeli.

Na zdravje!

{{/isPost}}