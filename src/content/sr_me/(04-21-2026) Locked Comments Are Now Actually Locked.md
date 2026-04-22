---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Zaključani komentari su sada zaista zaključani[/postlink]

{{#unless isPost}}
Ikona zaključavanja konačno se prikazuje na zaključanim komentarima, a zaključani komentari se više ne mogu uređivati ili brisati dok ih admin ne otključa.
{{/unless}}

{{#isPost}}

### Šta je novo

Moderatori su već dugo u mogućnosti da zaključavaju komentare. Zaključavanje komentara sprečava nove odgovore, što je korisno kada se tema iscrpi ili kada se podrazgovor odmakne od teme.

Problem je bio u tome što "zaključano" nije imalo mnogo težine. Čitatelji nisu imali vizuelnu naznaku da je komentar zaključan. Iako su novi odgovori bili blokirani, originalni autor ili bilo ko s pristupom za uređivanje i dalje je mogao da editira ili obriše komentar. To zapravo nije zaključano. Ova ažuriranja ispravljaju oba problema.

### Ikona zaključavanja

Kada moderator zaključa komentar, mala ikona zaključavanja se sada pojavljuje u gornjem desnom uglu komentara, odmah pored ikone zakačivanja. Povoljno je vidljiva svim čitateljima - ne samo moderatorima. Otključavanje komentara uklanja ikonu.

Ikona poštuje svetli i tamni režim, isto kao i ikona zakačivanja.

### Uređivanje i brisanje su blokirani

Zaključani komentar se ne može urediti ili obrisati od strane bilo koga, uključujući admine i moderatore. Ako želite da uredite ili uklonite zaključani komentar, prvo ga otključajte, napravite promenu, a zatim ponovo zaključajte ako želite.

Ovo se odnosi na svaki put koji se dotiče komentara:

- Widget za korisnike skriva unose iz menija Uredi i Obriši na zaključanim komentarima.
- Javne API PATCH i DELETE tačke vraćaju `locked` grešku ako je ciljani komentar zaključan.
- Admin moderacija UI prikazuje zaključanu grešku ako pokušate da obrišete bez prethodnog otključavanja.

### Iznimke

Nekoliko puteva namerno zaobilazi zaključavanje kako bi moglo da obavi svoju funkciju:

- Brisanje naloga. Ako korisnik obriše svoj FastComments nalog, njihovi komentari se brišu bez obzira na stanje zaključavanja.
- Čišćenje korisnika za zakupca / SSO. Ista ideja za uklanjanje korisnika na nivou zakupa.
- Planirano automatsko brisanje. Ako ste zakazali komentar da se obriše u određenom trenutku, planer se ne treba brinuti o zaključavanjima.
- Čišćenje duplikata. Alat za uklanjanje duplikata uklanja zaključane duplikate bez ceremonije.
- Zabrane modERATORA s "obriši sve komentare ovog korisnika". Zabrana korisnika i brisanje njihove istorije predstavlja jednu namernu akciju, tako da se završavaju i zaključavanja.

Sve ostalo - widget, moderacija UI, javni API, spoljašnji pozivaoci - poštuje zaključavanje.

### Oblik API greške

Ako pozovete javni API da uredite ili obrišete zaključani komentar, dobićete odgovor poput:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Komentar je zaključan.",
    "translatedError": "Ovaj komentar je zaključan i ne može se urediti ili obrisati. Prvo ga otključajte."
}</div>

HTTP status je 401. Polje `translatedError` koristi podešeni jezik vašeg zakupca i bilo koju prilagođenu prevod koju ste postavili.

### Zaključak

Mala promena, ali zatvara prazninu koja je bila otvorena već neko vreme. Zaključano sada znači zaključano.

Pozdrav!

{{/isPost}}