---
[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]Avtomatski transportni sistem za usmerjanje FastComments[/postlink]

{{#unless isPost}}
Predstavljamo Avtomatski transportni sistem za usmerjanje FastComments!
{{/unless}}

{{#isPost}}

## Uvod

Avtomatski transportni sistem za usmerjanje FastComments (FARTS) je naša transportna in servisna plast. FARTS pomaga pri zastoju, usmerja
promet na osnovi uporabnikove lokacije in potencialno obremenitve v prihodnosti. Sestavljen je iz več različnih sistemov, geo-zavedne DNS plasti, DB proxyja, replikacije DB,
upravljanja SSL certifikatov, obratnega proxyja in CDN, ki uporablja LRU predpomnilnik na diskih za predpomnjenje sredstev na robu.

## Aktivno-Aktivno

Najnovejša različica FART vsebuje vgrajen proxy in replikačno plast za našo bazo podatkov. To omogoča FastComments, da je Aktivno-Aktivno
z globalno pisno dostopnostjo, kar zagotavlja, da so naši FARTS na koncu dosledni. [Več podrobnosti tukaj](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Pristop, ki smo ga dejansko sprejeli na začetku, je bil, da ugotovimo, ali lahko ustvarimo aktivno-aktiven razvod MongoDB. Eden naših inženirjev (Sloperators) je to dejansko uspel s Opus 4.6, vendar smo se odločili, da je tveganje za to višje od izdelave našega lastnega izoliranega sistema.

## Rust na večjih obsegu

Del motivacije za ustvarjanje FART je bil zamenjati nekatere obstoječe storitve napisane v Javi. Po tem, ko smo o tem razmišljali nekaj časa, smo se odločili, da to združimo v eno storitev v Rustu, da bi zmanjšali obremenitev med izvajanjem. To je bila sprejemljiva zamenjava, saj FART ne uvajamo pogosto. FART je preveden z LTO, tako da ga lahko resnično "spustimo".

Porabili smo veliko časa za poskušanje optimizacije starega sistema v Javi z različnimi GC-ji itd., in na koncu smo se odločili, da async Rust + Mimalloc deluje precej bolje na istem strojni opremi z bistveno nižjimi zahtevami po pomnilniku, tako da je bila menjava očitna.

Rust se je izkazal za res odličnega za kodo, povezano z omrežjem, ki uporablja deljene kupčke in zaklepanje. Ni pa neobčutljiv na težave med izvajanjem.
Morda je vredno omeniti, da je koda, napisano s strani LLM-ov v Rustu, precej nagnjena k mrtvim zaklepanjem, in način, da to obidemo, je zasnovati sisteme kot enostavno razumljive strojne modele, namesto da bi bili le kupi async/await.

## FART Master

Vsaka namestitev vsebuje svoj FART Master. Master je odgovoren za usklajevanje cronov, webhooksov in podobno.

## Vpliv na stranke

Sistem FART deluje v produkciji že približno eno leto. Šele nedavno smo opravili migracijo na aktivno-aktivno namestitev.
Obstaja določeni vpliv pri branju vaših lastnih zapisov čez regije, kar je obravnavano v zgoraj povezanem blogu in [v dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART deluje tiho v ozadju, čeprav je njegova prisotnost vedno čutiti. Upamo, da boste našli naše sisteme hitrejše za vaše primere uporabe (večinoma uporabniške akcije, ki vodijo do sprememb v podatkih, bodo hitrejše v nekaterih regijah).

## Namestitve

Namestitev uporablja isti globalni usklajevalni sistem, ki ga uporabljamo za namestitev samih storitev. Dokumentacija FART priporoča, da Sloperators nikoli ne zaupa namestitvi, vedno preverite payload pred izdajo.

Po namestitvi FART opozorila sledijo politiki eskalacije: najprej soba, nato nadstropje, nato zgradba.

## Na koncu

Pravijo, da je internet serija cevi, vendar je dejansko serija vetrov.

Kot pri vseh velikih izdajah, smo veseli, da smo lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te spremembe. Navdušeni smo nad tem, kar prihaja.
FastComments bi morale bolje rasti in imeti boljšo dostopnost dolgo časa s tem delom. Kot pravi FART runbook: "Če zavohate nekaj, povejte nekaj". Sporočite nam spodaj, če odkrijete kakšne težave.

{{/isPost}}