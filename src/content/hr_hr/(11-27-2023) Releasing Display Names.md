---
[category:Features]

###### [postdate]
# [postlink]Objavljivanje Prikaznih Imena[/postlink]

{{#unless isPost}}
FastComments uvijek podržava prikazna imena za SSO korisnike. Međutim, to nikada nije bilo dostupno običnim komentatorima. Danas se to mijenja!
{{/unless}}

{{#isPost}}

### Što je Novo

FastComments uvijek podržava prikazna imena za SSO korisnike. Međutim, to nikada nije bilo dostupno običnim komentatorima. Danas se to mijenja!

Na stranici [Podaci o Računu](https://fastcomments.com/auth/my-account/edit-details) sada možete ispuniti novo polje `Prikazno Ime`. `Prikazno Ime` će
se prikazivati na vašim komentarima i vašim profilima.

### Emojis

U prošlosti su korisnici imali poteškoća u korištenju emoji u korisničkim imenima, jer je bilo potrebno unijeti korisničko ime za prijavu. Međutim, sada `Prikazno Ime` može sadržavati emoji.

### Jedinstvenost i Zlostavljanje

Cilj `Prikaznog Imena` je da nije jedinstveno. Ako dva korisnika na FastComments.com, na dva vrlo različita glavna zajednice, imaju slična imena, želimo
da mogu postaviti svoje preferirano prikazno ime. Međutim, ne možemo ograničiti gdje ljudi komentiraju sa svojim globalnim FastComments računom, tako da to ponekad može
rezultirati zabunom.

Imati slično ime kao drugi korisnik ili moderator samo po sebi nije slučaj za zloupotrebu. Međutim, ako to zloupotrebljavate tako što namjerno imitirati druge korisnike, možda ćemo
onemogućiti ovu značajku na vašem računu, a bit ćete ograničeni na korištenje samo `korisničkog imena`.

### Prijava

Još uvijek koristite svoje korisničko ime za prijavu - **ne svoje prikazno ime!**

### Za Razvijače & Zamke

Uobičajeni `Korisnički` objekti izloženi putem API-ja sada imaju `displayName`.

### Zaključak

Kao i svi veći izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove značajke. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---