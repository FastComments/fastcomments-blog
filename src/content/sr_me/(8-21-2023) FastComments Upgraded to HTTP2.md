---
[category:Performance]
###### [postdate]
# [postlink]FastComments je unapređen na HTTP/2[/postlink]

{{#unless isPost}}
Napravili smo neka unapređenja infrastrukture koja još više poboljšavaju performanse FastComments-a!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehničku terminologiju

### Šta je novo

Od lansiranja, FastComments je bio na HTTP/1.1. Nedavno smo prešli celu našu infrastrukturu
u svim regionima na HTTP/2.

### Uticaj

Ova ispravka održava FastComments ažurnim sa modernim standardima dok pruža neka
poboljšanja u performansama. Nedostatak je to što neki stariji pretraživači više nisu podržani.

### Zastareli pretraživači i klijenti

Možete pronaći [nepodržane pretraživače ovde](https://caniuse.com/http2). Glavni problem će biti IE11 koji
ima samo delimičnu podršku, međutim, ovi korisnici bi trebalo da pređu na Edge.

Chrome, Firefox i drugi podržavaju HTTP/2 već godinama, tako da smatramo da je sigurno napraviti ovu promenu.

### Prednosti performansi

FastComments je već prilično optimizovan u pogledu resursa koji se isporučuju i njihovog redosleda. Na primer,
widget za komentare isporučuje samo nekoliko zahteva za učitavanje - inicijalni iframe, zatim skriptu koja uključuje stilizovanje kako bi se smanjio broj zahteva, i zatim
zahtev ka API-ju za dobijanje svih potrebnih informacija. U poređenju sa mnogim drugim uslugama, prilično je kompaktan.

Dakle, ovo nije slučaj gde HTTP/2 zaista nudi mnogo pomaganja. Glavna prednost HTTP/2 je omogućavanje paralelnih zahteva.

Međutim, HTTP/2 nam pomaže u kompresiji! Headeri se sada šalju u binarnom protokolu koji
je kompaktniji, a određeni dodaci sa puno resursa će se učitavati mnogo brže jer se zahtevi
mogu slati paralelno.

### Zaključak

Zahvaljujemo našim korisnicima na strpljenju dok uvodimo ove promene. Nadamo se da ćete
nastaviti da volite FastComments.

Pozdrav!

{{/isPost}}

---