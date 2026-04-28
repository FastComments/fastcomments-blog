---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Zaključani komentari su sada zaista zaključani[/postlink]

{{#unless isPost}}
Ikona zaključavanja konačno se prikazuje na zaključanim komentarima, a zaključani komentari više ne mogu biti uređivani ili obrisani dok ih administrator ne otključa.
{{/unless}}

{{#isPost}}

### Šta je novo

Moderatori su već dugo vremena mogli da zaključe komentare. Zaključavanje komentara sprečava nove odgovore, što je korisno kada se razgovor završava ili kada podrazgovor skrene sa teme.

Problem je bio što "zaključano" nije imalo mnogo težine. Čitaoci nisu imali vizuelnu indikaciju da je komentar zaključan. Iako su novi odgovori bili blokirani, originalni autor ili bilo ko sa pravom uređivanja mogao je još uvek da izmeni ili obriše komentar. To zaista nije zaključano. Ova ažuriranja ispravljaju oboje.

### Ikona zaključavanja

Kada moderator zaključa komentar, mala ikona katanca sada se pojavljuje u gornjem desnom uglu komentara, odmah pored ikone zakačivanja. Prikazuje se za svakog čitaoca - ne samo za moderatore. Otključavanje komentara uklanja ikonu.

Ikona poštuje svetli i tamni režim, isto kao i ikona zakačivanja.

### Uređivanje i brisanje su blokirani

Zaključani komentar ne može biti uređivan ili obrisan od strane bilo koga, uključujući administratore i moderatore. Ako želite da izmenite ili uklonite zaključani komentar, prvo ga otključajte, izvršite promenu, a zatim ponovo zaključajte ako želite.

Ovo se primenjuje na svaki put koji dodiruje komentar:

- Widget koji je okrenut korisnicima skriva stavke menija Uredi i Obriši na zaključanim komentarima.
- Javni API PATCH i DELETE krajnje tačke vraćaju grešku `locked` ako je ciljani komentar zaključan.
- Administratorski moderacijski UI prikazuje grešku sa zaključavanjem ako pokušate da obrišete bez prethodnog otključavanja.

### Izuzeci

Pojedini putevi namerno zaobilaze zaključavanje kako bi mogli da obave svoj posao:

- Brisanje naloga. Ako korisnik obriše svoj FastComments nalog, komentari se brišu bez obzira na stanje zaključavanja.
- Čišćenje korisnika za Tenant / SSO. Ista ideja za uklanjanje korisnika na nivou tenanta.
- Zakazano automatsko brisanje. Ako ste zakazali komentar da bude obrisan u određeno vreme, zakazivač ne mora da se brine o zaključavanju.
- Čišćenje duplikata. Alat za uklanjanje duplikata uklanja zaključane duplikate bez ceremonije.
- Banovanje moderatora sa "obriši sve komentare ovog korisnika". Banovanje korisnika i brisanje njegove istorije je jedna namerna akcija, tako da i uklanja zaključavanja.

Sve ostalo - widget, moderacijski UI, javni API, eksterni pozivaoci - poštuje zaključavanje.

### Oblik greške API

Ako pozovete javni API da biste izmenili ili obrisali zaključani komentar, dobićete odgovor poput:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Komentar je zaključan.",
    "translatedError": "Ovaj komentar je zaključan i ne može se uređivati ili brisati. Prvo ga otključajte."
}</div>

HTTP status je 401. Polje `translatedError` koristi konfigurisan jezik vašeg tenanta i bilo koji prilagođeni prevod koji ste postavili.

### Na kraju

Mala promena, ali zatvara prazninu koja je bila otvorena neko vreme. Zaključano sada znači zaključano.

Živeli!

{{/isPost}}