---
[category:Features]
###### [postdate]
# [postlink]Obaveštajne E-pošte Omogućene za Pretplate[/postlink]

{{#unless isPost}}
FastComments sada šalje e-pošte korisnicima za stranice na koje su pretplaćeni.
{{/unless}}

{{#isPost}}

### Šta je novo

Sa FastComments korisnici mogu da kliknu na ikonu zvona na komentarskom vidgetu da bi se pretplatili na tu stranicu. Obavestićemo ih
kada budu ostavljeni novi komentari na toj stranici, ili kada postoji novi komentar u threadu odgovora u kojem su deo.

To radimo već godinama, međutim nismo slali e-pošte za ove obaveštenja - ona su bila vidljiva samo na našem kontrolnom panelu.

Sada ćemo slati e-pošte za ova obaveštenja.

### Novi Tipovi E-pošte

Sada šaljemo dva nova tipa e-pošte. Prvi je kada imate samo nekoliko obaveštenja. Jednostavno ćemo
navigirati nove komentare u e-pošti za vas.

Drugi tip e-pošte koju ćete primiti sadrži linkove ka svakoj stranici za koju ste primili obaveštenja. Ovo se šalje
kada primite mnogo obaveštenja.

Ove obaveštajne e-pošte su samo za nove komentare na stranicama na koje ste pretplaćeni.

### Raspored Obaveštenja E-poštom

Obaveštajne e-pošte se šalju svake sate kako bi se sprečili prekomerni e-mailovi. Izuzetak je ako strana o kojoj se radi ima preko deset hiljada
komentara, u kom slučaju ćemo slati obaveštenja za tu stranicu samo jednom dnevno.

### Za Vlasnike Sajta - Prilagođavanje E-pošte

Nova `New Subscription Comments` šablon e-pošte će uskoro biti dostupan za prilagođavanje.

### Za Razvojne Programere & Zanimljivosti

Za SSO korisnike, nećemo slati obaveštajne e-pošte po defaultu. Moraćete da prosledite novu oznaku: `optedInSubscriptionNotifications: true` u objektu korisnika, ili
u korisničkom sadržaju za komentarsku vidget, da omogućite ova nova obaveštenja.

### U Zaključku

Kao i sve velike verzije, drago nam je da smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno puštanje ove funkcije. Javite nam
u komentarima ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---