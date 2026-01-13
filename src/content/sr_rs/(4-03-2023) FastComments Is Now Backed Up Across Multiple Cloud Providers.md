---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Sada Ima Sigurnosne Kopije Na Više Cloud Provajdera[/postlink]

{{#unless isPost}}
Od aprila 2023. godine, FastComments baze podataka sada su smeštene kod više cloud provajdera kao dodatna mera opreza.
{{/unless}}

{{#isPost}}

### Šta je novo

Ranije je FastComments imao aktivne kopije baza podataka na više servera, ali unutar istog cloud provajdera.

FastComments primarno koristi Linode za regione US-West i EU, sa odvojenim implementacijama baza podataka i aplikacija.

Svaki region je ranije imao svoju replikaciju baze kao aktivnu kopiju. Ako bi primarna baza nekada bila izgubljena, iz bilo kog razloga, 
aktivna kopija bi bila dostupna da je zameni. Snapshots baze podataka se takođe obavljaju na ovim kopijama.

Sada smo dodali kopije na drugom cloud provajderu, tako da podaci u svakom regionu više nisu izolovani u jedan datacentar po regionu.

Nova topologija baze podataka je:

- US-West
  - Jedan klaster baza podataka na Linode u Kaliforniji.
  - **NOVO** Jedna aktivna replika na Hetzneru u Oregonu.
- EU
  - Jedan klaster baza podataka na Linode u Frankfurtu.
  - **NOVO** Jedna aktivna replika na Hetzneru u Falkenštajnu.

Ove replike su aktivne, uvek imaju najnoviju verziju baze podataka. 

### U zaključku

Kao i kod svih glavnih izdanja, srećni smo što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
u komentarima ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---