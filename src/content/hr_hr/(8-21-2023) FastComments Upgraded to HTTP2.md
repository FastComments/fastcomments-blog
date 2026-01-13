---
[category:Performance]
###### [postdate]
# [postlink]FastComments nadograđen na HTTP/2[/postlink]

{{#unless isPost}}
Napravili smo neka infrastrukturna poboljšanja koja dodatno poboljšavaju performanse FastCommenta!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

### Što je novo

Od lansiranja, FastComments je bio na HTTP/1.1. Nedavno smo prebacili cijelu našu infrastrukturu
u svim regijama na HTTP/2.

### Utjecaj

Ova nadogradnja drži FastComments u skladu s modernim standardima dok pruža neka
poboljšanja performansi. Nedostatak je to što neki stariji preglednici više nisu podržani.

### Obsolete preglednici i klijenti

Možete pronaći [nepodržane preglednike ovdje](https://caniuse.com/http2). Glavni problem bit će IE11 koji
ima samo djelomičnu podršku, no ti korisnici trebali bi preći na Edge.

Chrome, Firefox i drugi podržavaju HTTP/2 već godinama, tako da smatramo da je sigurno napraviti ovu promjenu.

### Prednosti performansi

FastComments je već prilično optimiziran u pogledu posluživanih resursa i njihovog redoslijeda. Na primjer,
widget za komentare šalje samo nekoliko zahtjeva za učitavanje - inicijalni iframe, zatim skriptu koja uključuje stiliziranje kako bi se smanjio broj zahtjeva, a zatim
zahtjev prema API-ju za sve potrebne podatke. U usporedbi s mnogim drugim uslugama, prilično je kompaktan.

Dakle, ovo nije slučaj gdje HTTP/2 stvarno puno pomaže. Glavna prednost HTTP/2 je omogućavanje istovremenih zahtjeva.

Međutim, HTTP/2 nam pomaže s kompresijom! Zaglavlja se sada šalju u binarnom protokolu koji
je kompaktniji, a određeni dodaci s puno resursa će se učitavati znatno brže jer se zahtjevi
mogu paralelno procesirati.

### Na kraju

Zahvaljujemo našim kupcima na strpljenju prilikom uvođenja ovih promjena. Nadamo se da
nastavite voljeti FastComments.

Živjeli!

{{/isPost}}

---