---
[category:Performanse]
###### [postdate]
# [postlink]FastComments ažuriran na HTTP/2[/postlink]

{{#unless isPost}}
Napravili smo neka unapređenja infrastrukture koja dodatno poboljšavaju performanse FastComments!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

### Šta je novo

Od lansiranja, FastComments je koristio HTTP/1.1. Nedavno smo prebacili celu infrastrukturu
u svim regionima na HTTP/2.

### Uticaj

Ova ažuriranja drže FastComments u skladu sa modernim standardima, pružajući neka
poboljšanja u performansama. Nedostatak je to što neki stariji pregledači više nisu podržani.

### Zastarjeli pregledači i klijenti

Možete pronaći [nepodržane pregledače ovde](https://caniuse.com/http2). Glavni problem će biti IE11 koji
ima samo delimičnu podršku, međutim, ovi korisnici bi trebali preći na Edge.

Chrome, Firefox i drugi podržavaju HTTP/2 već godinama, tako da smatramo da je bezbedno napraviti ovu promenu.

### Koristi od performansi

FastComments je već prilično optimizovan u smislu resursa koji se poslužuju i njihovog redosleda. Na primer,
widget za komentare šalje samo nekoliko zahteva za učitavanje - inicijalni iframe, zatim skript koji uključuje stilizovanje za smanjenje broja zahteva, a zatim
zahtev za API da dobije sve potrebne informacije. U poređenju sa mnogim drugim uslugama, prilično je kompaktan.

Dakle, ovo nije slučaj gde HTTP/2 zaista puno pomaže. Glavna prednost HTTP/2 je mogućnost slanja istovremenih zahteva.

Međutim, HTTP/2 nam pomaže sa kompresijom! Hederi se sada šalju u binarnom protokolu koji
je kompaktniji, a određeni dodaci sa puno resursa će se učitavati mnogo brže jer se zahtevi
mogu redoslediti paralelno.

### Zaključak

Zahvaljujemo našim kupcima na strpljenju tokom implementacije ovih promena. Nadamo se da ćete
nastaviti da volite FastComments.

Pozdrav!

{{/isPost}}

---