---
[category:Features]
###### [postdate]
# [postlink]Obvestila po elektronski pošti omogočena za naročnine[/postlink]

{{#unless isPost}}
FastComments zdaj pošilja e-pošto uporabnikom za strani, na katere so naročeni.
{{/unless}}

{{#isPost}}

### Kaj je novega

S FastComments lahko uporabniki kliknejo na ikono zvonca v pripomočku za komentarje, da se naročijo na to stran. Obvestili jih bomo,
ko bodo na tej strani objavljeni novi komentarji ali ko bo nov komentar v nizu odgovorov, katerega del so.

To smo počeli že leta, vendar nismo pošiljali e-poštnih obvestil za te notifikacije - vidni so bili le na našem nadzornem plošči.

Zdaj bomo pošiljali e-poštna obvestila za te notifikacije.

### Novi tipi e-poštnih sporočil

Sedaj pošiljamo dva nova tipa e-poštnih sporočil. Prvo je, ko imate samo nekaj obvestil. Preprosto bomo navedli
nove komentarje v elektronski pošti.

Drugi tip e-poštnega sporočila, ki ga boste prejeli, vsebuje povezave do vsake strani, za katero ste prejeli obvestila. To se pošlje,
ko prejmete več obvestil.

Ta obvestila po elektronski pošti so samo za nove komentarje na straneh, na katere ste naročeni.

### Razpored pošiljanja obvestil po elektronski pošti

Obvestila po elektronski pošti se pošiljajo vsakih eno uro, da preprečimo prekomerno pošiljanje e-pošte. Izjema so strani, ki imajo več kot deset tisoč
komentarjev, v tem primeru bomo obvestila za to stran pošiljali le enkrat na dan.

### Za lastnike spletnih strani - prilagajanje e-pošt

Nova e-poštna predloga `Novi komentarji naročnin` bo kmalu na voljo za prilagajanje.

### Za razvijalce in posebnosti

Za uporabnike SSO obvestila po elektronski pošti privzeto ne bomo pošiljali. Morate poslati novo zastavico: `optedInSubscriptionNotifications: true` v uporabniškem objektu ali
v telesu za pripomoček za komentarje, da omogočite ta nova obvestila.

### V zaključku

Kot pri vseh večjih izdajah, smo veseli, da smo lahko vzeli čas za optimizacijo, testiranje in ustrezno izdajo te funkcije. Sporočite nam
spodaj, če naletite na kakšne težave.

Na zdravje!

{{/isPost}}

---