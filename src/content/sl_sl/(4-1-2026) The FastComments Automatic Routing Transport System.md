[category:Announcements]
[category:Serious Posts]
###### [postdate]
# [postlink]HitroKomentarji Samodejni Usmerjevalni Transportni Sistem[/postlink]

{{#unless isPost}}
Predstavljamo HitroKomentarji Samodejni Usmerjevalni Transportni Sistem!
{{/unless}}

{{#isPost}}

## Uvod

HitroKomentarji Samodejni Usmerjevalni Transportni Sistem (FARTS) je naša transportna in servisna plast. FARTS pomagajo pri zastoju, usmerjajo
promet na podlagi lokacije uporabnika in potencialno obremenitve v prihodnosti. Sestavljen je iz več različnih sistemov, geo-ozaveščene DNS plasti, DB proxyja, DB
replikacije, upravljanja SSL certifikatov, obratnega proxyja in CDN, ki uporablja na disku shranjen LRU predpomnilnik za shranjevanje sredstev na robu.

## Aktivno-Aktivno

Zadnja različica FART vsebuje vgrajen proxy in replikacijsko plast za našo bazo podatkov. To omogoča HitroKomentarjem, da delujejo v načinu Aktivno-Aktivno
z globalno dostopnostjo pisanja, kar zagotavlja, da so naši FARTS na koncu dosledni. [Več podrobnosti tukaj](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).

Ena od pristopov, ki smo jih dejansko sprejeli na začetku, je bila, da preverimo, ali lahko ustvarimo aktivno-aktivno različico MongoDB. Eden naših inženirjev (Sloperators) je to dejansko uspel doseči s Opus 4.6, vendar smo se odločili, da je tveganje ob tem višje od gradnje lastnega izoliranega sistema.

## Rust na Veliko

Del motivacije za ustvarjanje FART je bilo nadomestiti nekatere obstoječe storitve, napisane v Javi. Po tem, ko so se pojavili, smo se odločili, da jih združimo v eno Rust storitev, da zmanjšamo obremenitev pri zagonu. To je bila sprejemljiva kompenzacija, saj FART ne nameščamo pogosto. FART je preveden z LTO, tako da ga lahko resnično pustimo, da se "raztrga".

Porabili smo veliko časa za prilagajanje starega Java sistema z različnimi GC-ji itd., in na koncu smo se odločili, da async Rust + Mimalloc deluje bistveno
bolje na isti strojni opremi z veliko manjšimi pomnilniškimi zahtevami, tako da je prehod bil samoumeven.

Izkazalo se je, da je Rust res odličen za kodo, povezano z omrežjem, ki uporablja deljene kupčke in zaklepe. Vendar pa ni neprepustna za težave pri izvajanju.
Morda je vredno omeniti, da je koda, napisana z LLM-ji v Rustu, precej nagnjena k mrtvim zaklepom, pot okoli tega pa je oblikovanje sistemov kot enostavno razumljivih stanja strojev, namesto preprosto kupov async/await.

## FART Mojster

Vsaka namestitev vsebuje svoj FART Mojster. Mojster je odgovoren za usklajevanje cronov, webhookov in tako naprej.

## Vpliv na Stranke

Sistem FART je v produkciji približno eno leto. Šele nedavno smo izvedli migracijo na Aktivno-Aktivno namestitev.
Obstaja nek vpliv pri branju svojih lastnih zapisov čez regije, kar je pokrito v zgoraj povezani blog objavi in [v dokumentaciji](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes).

FART deluje tiho v ozadju, čeprav je njegova prisotnost vedno občutena. Upamo, da boste našli naše sisteme hitrejše za vaše primere uporabe (večinoma uporabniške akcije, ki vodijo do sprememb v podatkih, bodo hitrejše v nekaterih regijah).

## Namestitve

Namestitev uporablja isti globalni usklajevalni sistem, ki ga uporabljamo za nameščanje samih storitev. Dokumentacija FART priporoča Sloperators, da nikoli ne zaupajo namestitvi, vedno preverijo tovor pred sprostitvijo.

Po namestitvi FART opozorila sledijo politiki eskalacije: najprej soba, nato nadstropje, nato stavba.

## Na Koncu

Pravijo, da je internet serija cevi, ampak je pravzaprav serija zvokov.

Kot pri vseh večjih izdajah smo veseli, da smo lahko našli čas za optimizacijo, testiranje in pravilno izdajo te spremembe. Navdušeni smo nad prihodnjimi novostmi.
HitroKomentarji bi morali bolje skalirati in imeti boljšo razpoložljivost na dolgi rok s tem delom. Kot pravi FART priročnik: "Če zaznaš nekaj, povej nekaj". Sporočite nam spodaj, če odkrijete kakršne koli težave.

{{/isPost}}