---
[category:Features]
###### [postdate]
# [postlink]Omogućena Notifikacijska E-pošta za Pretplate[/postlink]

{{#unless isPost}}
FastComments sada šalje e-poštu korisnicima za stranice na koje su se pretplatili.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa FastComments korisnici mogu kliknuti na ikonu zvonca na widgetu komentara da se pretplate na tu stranicu. Obavestićemo ih
kada su novi komentari ostavljeni na toj strani, ili kada postoji novi komentar u threadu odgovora u kojem učestvuju.

To smo radili godinama, međutim nismo slali e-poštu za ove notifikacije - one su bile samo vidljive na našoj kontrolnoj tabli.

Sada ćemo slati e-poštu za ove notifikacije.

### Novi Tipovi E-pošte

Sada šaljemo dva nova tipa e-pošte. Prvi je kada imate samo nekoliko notifikacija. Jednostavno ćemo
navesti nove komentare u e-pošti za vas.

Drugi tip e-pošte koju ćete primiti sadrži linkove do svake stranice za koju ste dobili notifikacije. Ovo se šalje
kada primite puno notifikacija.

Ove notifikacijske e-pošte su samo za nove komentare na stranicama na koje ste se pretplatili.

### Raspored Notifikacijskih E-pošta

Notifikacijske e-pošte se šalju svake sati kako bi se sprečila prekomerna e-pošta. Izuzetak je ako strana u pitanju ima više od deset hiljada
komentara, u kom slučaju ćemo slati notifikacije za tu stranicu samo jednom dnevno.

### Za Vlasnike Sajta - Prilagođavanje E-pošte

Nova `New Subscription Comments` e-mail šablon će uskoro biti dostupan za prilagođavanje.

### Za Programere & Problemi

Za SSO korisnike, nećemo slati notifikacijske e-pošte po defaultu. Moraćete da prosledite novu zastavicu: `optedInSubscriptionNotifications: true` u objektu korisnika, ili
u payload-u za widget komentara, da omogućite ove nove notifikacije.

### Na Zaključak

Kao i sve velike verzije, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---