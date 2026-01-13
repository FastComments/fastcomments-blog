---
[category:Features]
###### [postdate]
# [postlink]Obaveštenja putem Email-a Omogućena za Pretplate[/postlink]

{{#unless isPost}}
FastComments sada šalje emailove korisnicima za stranice na koje su pretplaćeni.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa FastComments korisnici mogu kliknuti na ikonu zvona na widgetu komentara da bi se pretplatili na tu stranicu. Obavestićemo ih
kada budu ostavljeni novi komentari na toj stranici, ili kada bude novi komentar u threadu odgovora u kojem učestvuju.

Ovo radimo već godinama, međutim nismo slali emailove za ova obaveštenja - bila su vidljiva samo na našem kontrolnom panelu.

Sada ćemo slati emailove za ova obaveštenja.

### Nova Tipovi Email-a

Sada šaljemo dva nova tipa emailova. Prvi je kada imate samo nekoliko obaveštenja. Jednostavno ćemo navesti
nove komentare u emailu za vas.

Drugi tip emaila koji ćete primiti sadrži linkove do svake stranice za koju ste primili obaveštenja. Ovo se šalje
kada primite mnoga obaveštenja.

Ovi obaveštenja putem email-a su samo za nove komentare na stranicama na koje ste pretplaćeni.

### Raspored Email Obaveštenja

Obaveštenja putem email-a se šalju svake sate kako bi se sprečilo prekomerno slanje emailova. Izuzetak je ako stranica u pitanju ima više od deset hiljada
komentara, u kojem slučaju ćemo slati obaveštenja za tu stranicu samo jednom dnevno.

### Za Vlasnike Sajtova - Prilagođavanje Email-ova

Novi `New Subscription Comments` šablon za email brzo će biti dostupan za prilagođavanje.

### Za Programere & Zamerke

Za SSO korisnike, nećemo slati obaveštenja putem email-a po default-u. Moraćete da prosledite novu oznaku: `optedInSubscriptionNotifications: true` u objektu korisnika, ili
u payload-u za widget komentara, da biste omogućili ova nova obaveštenja.

### Na Zaključku

Kao i svi veći izdaci, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---