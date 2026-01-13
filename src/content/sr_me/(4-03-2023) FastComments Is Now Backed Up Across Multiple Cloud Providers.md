---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Sada Ima Backup Na Više Cloud Pružaoca[/postlink]

{{#unless isPost}}
Od aprila 2023. godine, FastComments baze podataka se sada čuvaju kod više cloud pružioca radi dodatne opreznosti.
{{/unless}}

{{#isPost}}

### Šta je Novo

Prethodno je FastComments imao aktivne backup-ove baza podataka na više servera, ali u istom cloud pružiocu.

FastComments primarno koristi Linode za US-West i EU regione, kao odvojene implementacije baza podataka i aplikacija.

Svaki region je prethodno imao svoju repliku za bazu podataka kao aktivni backup. Ako bi primarna baza podataka ikada bila izgubljena, iz bilo kog razloga, 
aktivni backup bi bio dostupan da je zameni. Takođe se vrše snimci baze podataka na ovim backup-ovima.

Sada smo dodali backup-e na drugog cloud pružioca, tako da podaci u svakom regionu nisu izolovani na jedan data centar po regionu.

Nova topologija baze podataka je:

- US-West
  - Jedan klaster baze podataka na Linode-u u Kaliforniji.
  - **NOVO** Jedna aktivna replika na Hetzner-u u Oregonu.
- EU
  - Jedan klaster baze podataka na Linode-u u Frankfurtu.
  - **NOVO** Jedna aktivna replika na Hetzner-u u Falkenštajnu.

Ove replike su aktivne, uvek imaju najnoviju verziju baze podataka. 

### Na Zaključku

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam 
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}