---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Je Sada Obezbeđen na Više Oblaka[/postlink]

{{#unless isPost}}
Od aprila 2023. godine, FastComments baze podataka se sada čuvaju kod više provajdera oblaka za dodatnu sigurnost.
{{/unless}}

{{#isPost}}

### Šta je Novo

Prethodno je FastComments imao live backup baze podataka na više servera, ali u istom provajderu oblaka.

FastComments prvenstveno koristi Linode za US-West i EU regione, kao odvojene implementacije baze podataka i aplikacija.

Svaki region je ranije imao svoju repliku za bazu podataka kao live backup. Ako bi primarna baza podataka nekada bila izgubljena, iz bilo kojeg razloga, 
live backup bi bio dostupan da je zameni. Takođe se vrše snimci baze podataka na ovim backup-ovima.

Sada smo dodali backup na drugom provajderu oblaka, tako da podaci u svakom regionu nisu izolovani na jedan data centar po regionu.

Nova topologija baze podataka je:

- US-West
  - Jedan klaster baze podataka na Linode u Kaliforniji.
  - **NOVO** Jedna live replika na Hetzner-u u Oregonu.
- EU
  - Jedan klaster baze podataka na Linode u Frankfurtu.
  - **NOVO** Jedna live replika na Hetzner-u u Falkensteinu.

Ove replike su live, uvek imaju najnoviju verziju baze podataka. 

### Na Zaključku

Kao i svi glavni izdanja, drago nam je da smo mogli uložiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
u komentarima ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}