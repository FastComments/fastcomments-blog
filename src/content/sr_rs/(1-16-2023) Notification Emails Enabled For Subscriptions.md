---
[category:Features]
###### [postdate]
# [postlink]Obaveštenja putem Email-a omogućena za pretplate[/postlink]

{{#unless isPost}}
FastComments sada šalje email-ove korisnicima za stranice na koje su pretplaćeni.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa FastComments korisnici mogu kliknuti na ikonu zvona na widget-u za komentare kako bi se pretplatili na tu stranicu. Obavestićemo ih
kada novi komentari budu ostavljeni na toj stranici, ili kada postoji novi komentar u thread-u odgovora u kojem su deo.

To smo radili godinama, međutim nismo slali email-ove za ova obaveštenja - oni su bili vidljivi samo na našem kontrolnom panelu.

Sada ćemo slati email-ove za ova obaveštenja.

### Novi tipovi Email-a

Sada šaljemo dva nova tipa email-ova. Prvi je kada imate samo nekoliko obaveštenja. Jednostavno ćemo navesti
novi komentar u email-u za vas.

Drugi tip email-a koji ćete primiti sadrži linkove do svake stranice za koju ste dobili obaveštenja. Ovo se šalje
kada primite mnogo obaveštenja.

Ovi email-ovi za obaveštenja su samo za nove komentare na stranicama na koje ste pretplaćeni.

### Raspored Email Obaveštenja

Email obaveštenja se šalju svake sat vremena kako bi se sprečilo slanje prekomernih email-ova. Izuzetak je ako stranica u pitanju ima preko deset hiljada
komentara, u kom slučaju ćemo slati obaveštenja za tu stranicu samo jednom dnevno.

### Za vlasnike sajtova - Prilagođavanje Email-ova

Nova `New Subscription Comments` email šablon će uskoro biti dostupan za prilagođavanje.

### Za programere & Zamke

Za SSO korisnike, nećemo podrazumevano slati email obaveštenja. Moraćete da prosledite novu oznaku: `optedInSubscriptionNotifications: true` u objektu korisnika, ili
u payload-u za widget komentara, da biste omogućili ova nova obaveštenja.

### Na kraju

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---