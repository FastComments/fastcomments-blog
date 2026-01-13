---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Sada Ima Backup U Više Cloud Provajdera[/postlink]

{{#unless isPost}}
Od aprila 2023. godine, FastComments baze podataka se sada čuvaju u više cloud provajdera radi dodatne sigurnosti.
{{/unless}}

{{#isPost}}

### Šta je Novo

Prethodno je FastComments imao aktivne backup-ove baza podataka na više servera, ali u istom cloud provajderu.

FastComments primarno koristi Linode za regije US-West i EU, sa odvojenim implementacijama baza i aplikacija.

Svaka regija je ranije imala svoj repliku baze kao aktivni backup. Ako bi primarna baza ikad bila izgubljena, iz bilo kog razloga, 
aktivni backup bi bio dostupan da zauzme njeno mesto. Snimci baze podataka se takođe vrše na ovim backup-ovima.

Sada smo dodali backup-ove na drugom cloud provajderu, kako podaci u svakoj regiji ne bi bili izolovani na jedan datacentar po regiji.

Nova topologija baza podataka je:

- US-West
  - Jedan cluster baze podataka na Linode u Kaliforniji.
  - **NOVO** Jedna aktivna replika na Hetzner-u u Oregonu.
- EU
  - Jedan cluster baze podataka na Linode u Frankfurtu.
  - **NOVO** Jedna aktivna replika na Hetzner-u u Falkensteinu.

Ove replike su aktivne, uvek imaju najnoviju verziju baze podataka. 

### Zaključak

Kao i kod svih većih izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i ispravno objavimo ovu funkciju. Javite nam 
ispod ako primetite bilo kakve probleme.

Pozdrav!

{{/isPost}}