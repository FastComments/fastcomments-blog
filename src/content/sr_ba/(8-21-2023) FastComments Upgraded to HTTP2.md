---
[category:Performance]
###### [postdate]
# [postlink]FastComments unapređen na HTTP/2[/postlink]

{{#unless isPost}}
Napravili smo neka unapređenja infrastrukture koja dodatno poboljšavaju performanse FastComments-a!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Od lansiranja, FastComments je bio na HTTP/1.1. Nedavno smo prebacili celu našu infrastrukturu
u svim regionima na HTTP/2.

### Uticaj

Ova ažuriranja drže FastComments u skladu sa modernim standardima dok pružaju neka
poboljšanja u performansama. Loša strana je što neki stariji pregledači više nisu podržani.

### Zastarjeli pregledači i klijenti

Možete pronaći [nepodržane pregledače ovde](https://caniuse.com/http2). Glavni problem će biti IE11 koji
ima samo delimičnu podršku, međutim, ovi korisnici bi trebali preći na Edge.

Chrome, Firefox i drugi već godinama podržavaju HTTP/2, tako da smatramo da je sigurno napraviti ovu promenu.

### Prednosti performansi

FastComments je već prilično optimizovan u smislu posluživanih resursa i njihovog reda. Na primer,
widget za komentare obavlja samo nekoliko zahteva za učitavanje - početni iframe, zatim skriptu koja uključuje stilizaciju kako bi se smanjio broj zahteva, i zatim
zahtev prema API-ju kako bi dobili sve potrebne informacije. U poređenju s mnogim drugim servisima, prilično je kompaktno.

Dakle, ovo nije slučaj gde HTTP/2 zaista pomaže mnogo. Glavna prednost HTTP/2 je omogućavanje konkurentnih zahteva.

Međutim, HTTP/2 nam pomaže sa kompresijom! Zaglavlja se sada šalju u binarnom protokolu koji
je kompaktiniji, i određeni dodaci sa mnogo resursa će se učitati mnogo brže jer se zahtevi
mogu slati paralelno.

### U zaključku

Zahvaljujemo našim korisnicima na strpljenju prilikom sprovođenja ovih promena. Nadamo se da ćete
nastaviti da volite FastComments.

Živeli!

{{/isPost}}