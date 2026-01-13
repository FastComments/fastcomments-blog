---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Sada Ima Backup Na Više Cloud Pružatelja[/postlink]

{{#unless isPost}}
Od travnja 2023., FastComments baze podataka sada se pohranjuju kod više cloud pružatelja radi dodatne opreza.
{{/unless}}

{{#isPost}}

### Što je novo

Prije je FastComments imao aktivne backup-ove baza podataka na višestrukim poslužiteljima, ali unutar istog cloud pružatelja.

FastComments prvenstveno koristi Linode za regije SAD-Zapad i EU, kao posebne implementacije baza podataka i aplikacija.

Svaka regija je prethodno imala svoju repliku baze podataka kao aktivni backup. Ako bi primarna baza podataka ikad bila izgubljena, iz bilo kojeg razloga, 
aktivni backup bi bio dostupan da zauzme njezino mjesto. Snapshots baze podataka također se izvode na tim backup-ima.

Sada smo dodali backup-e na drugog cloud pružatelja, tako da podaci u svakoj regiji nisu izolirani na jedan podatkovni centar po regiji.

Nova topologija baze podataka je:

- SAD-Zapad
  - Jedan klaster baze podataka na Linode u Kaliforniji.
  - **NOVO** Jedna aktivna replika na Hetzneru u Oregonu.
- EU
  - Jedan klaster baze podataka na Linode u Frankfurtu.
  - **NOVO** Jedna aktivna replika na Hetzneru u Falkensteinu.

Ove replike su aktivne, uvijek imaju najnoviju verziju baze podataka.

### Na zaključak

Kao i kod svih većih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove značajke. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---