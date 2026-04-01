---
---
[category:Announcements]  
[category:Serious Posts]  
###### [postdate]  
# [postlink]Samodejni sistem za usmerjanje prevoza FastComments[/postlink]  
  
{{#unless isPost}}  
Predstavljamo Samodejni sistem za usmerjanje prevoza FastComments!  
{{/unless}}  
  
{{#isPost}}  
  
## Uvod  
  
Samodejni sistem za usmerjanje prevoza FastComments (FARTS) je naša transportna in storitvena plast. FARTs pomagajo pri zastoju, usmerjajo  
promet na podlagi lokacije uporabnika in potencialno obremenitve v prihodnosti. Sestavljen je iz več različnih sistemov, geo-zavedne DNS plasti, DB proxy, DB  
replikacije, upravljanja SSL certifikatov, obratnega proxyja in CDN, ki uporablja diskovni LRU predpomnilnik za shranjevanje sredstev na robu. Sistem podpira tako tihi kot glasni preklop.  
Tiha različica je zaželjena v produkciji.  
  
## Aktivna-aktivna  
  
Zadnja različica FART vsebuje vgrajen proxy in plast replikacije za našo bazo podatkov. To omogoča, da je FastComments aktivno-aktivni  
z globalno dostopnostjo pisanja, kar omogoča, da so naši FARTS na koncu dosledni. [Več podrobnosti tukaj](https://blog.fastcomments.com/(03-29-2026)-fastcomments-is-ready-for-space.html).  
  
Ena od pristopov, ki smo jih dejansko uporabili na začetku, je bil poskus, da bi ustvarili vilico MongoDB. Eden od naših inženirjev (Sloperators) je to dejansko  
uspel s programom Opus 4.6, vendar smo se odločili, da je tveganje za to večje od gradnje lastnega izoliranega sistema.  
  
Zadnje, kar bi želeli s čim takim kot je FART, je vedeti, da je prispel, vendar ne morete slediti viru. Dodali smo nadzor in diagnostiko,  
da spremljamo aktivno-aktivno replikacijo na podrobni ravni.  
  
## Rust na velikem obsegu  
  
Del motivacije za ustvarjanje FART je bil zamenjati nekatere obstoječe storitve, napisane v Javi. Po tem, ko smo si to malo ogledali, smo se odločili, da jih združimo v eno storitev na Rustu,  
da zmanjšamo obremenitev pri delovanju. To je bil sprejemljiv kompromis, saj FART ne nameščamo pogosto. FART je preveden z LTO, tako da ga lahko zares izkoristimo.  
  
Porabili smo veliko časa, da smo poskušali optimizirati staro Java sistem z različnimi GC-ji itd., in na koncu smo se le odločili, da async Rust + Mimalloc deluje bistveno  
bolje na istem strojni opremi z veliko nižjimi zahtevami po pomnilniku, tako da je bila preklopitev logična izbira.  
  
## FART glavni  
  
Vsaka namestitev vsebuje svoj FART glavni. Glavni je odgovoren za usklajevanje cronov, webhookov in podobno.  
  
## Učinek na stranke  
  
Sistem FART je bil v produkciji približno eno leto. Šele nedavno smo izvedli migracijo na aktivno-aktivno namestitev. Nov  
sistem nam daje večjo vidnost nad zakasnitvijo v sistemu, pa tudi manjše vzdrževalne obremenitve, tako da lahko zdaj preživimo več časa na funkcijah.  
  
FART deluje tiho v ozadju, čeprav je njegova prisotnost vedno čutiti. Upamo, da boste našli naše sisteme hitrejše za vaše primere rabe (večinoma uporabniške akcije, ki privedejo do sprememb v podatkih, bodo hitrejše v določenih regijah).  
  
## Namestitve  
  
Namestitev uporablja isti globalni usklajevalni sistem, ki ga uporabljamo za namestitev same storitve. Dokumentacija FARTS priporoča, da sloperators nikoli ne zaupajo namestitvi, vedno preverite vsebino pred sprostitvijo.  
  
Po namestitvi FART opozorila sledijo postopku eskalacije: najprej soba, nato nadstropje, nato stavba.  
  
## Zaključek  
  
Kot pri vseh večjih različicah smo veseli, da smo si vzeli čas za optimizacijo, testiranje in pravilno sprostitev te spremembe. Navdušeni smo nad tem, kar prihaja.  
FastComments bi moral dolgoročno bolje skalirati in imeti boljšo razpoložljivost s to delom. Kot pravi FART priročnik: "Če zavohate kaj, povejte to." Sporočite nam spodaj, če odkrijete kakšne težave.  
  
{{/isPost}}