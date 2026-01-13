---
[category:Performance]
###### [postdate]
# [postlink]FastComments unapređen na HTTP/2[/postlink]

{{#unless isPost}}
Uveli smo neka unapređenja infrastrukture koja dodatno poboljšavaju performanse FastComments-a!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Od lansiranja, FastComments je koristio HTTP/1.1. Nedavno smo prešli celu našu infrastrukturu
u svim regionima na HTTP/2.

### Uticaj

Ova ažuriranja drže FastComments u skladu sa modernim standardima dok pružaju neka
poboljšanja performansi. Nedostatak je to što neki stariji pregledači više nisu podržani.

### Zastarjeli pregledači i klijenti

Možete pronaći [nepodržane pregledače ovde](https://caniuse.com/http2). Glavni problem će biti IE11 koji
ima samo delimičnu podršku, međutim, ovi korisnici bi trebali preći na Edge.

Chrome, Firefox i drugi podržavaju HTTP/2 već godinama, tako da smatramo da je bezbedno napraviti ovu promenu.

### Prednosti performansi

FastComments je već prilično optimizovan u pogledu resursa koji se isporučuju i njihovog redosleda. Na primer,
widget za komentare šalje samo nekoliko zahteva za učitavanje - inicijalni iframe, zatim skriptu koja uključuje stilizaciju kako bi smanjila broj zahteva, a zatim
zahtev ka API-ju za dobijanje svih potrebnih informacija. U poređenju sa mnogim drugim uslugama, prilično je kompaktan.

Tako da ovo nije slučaj gde HTTP/2 stvarno puno pomaže. Glavna prednost HTTP/2 je mogućnost slanja
paralelnih zahteva.

Međutim, HTTP/2 nam pomaže sa kompresijom! Zahtevi se sada šalju u binarnom protokolu koji
je kompaktniji, a određeni dodaci sa mnogo resursa će se učitati mnogo brže jer se zahtevi
mogu obaviti paralelno.

### Zaključak

Zahvaljujemo našim kupcima na strpljenju prilikom uvođenja ovih promena. Nadamo se da ćete
nastaviti da volite FastComments.

Pozdrav!

{{/isPost}}

---