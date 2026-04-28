---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Zaključani komentari su sada zapravo zaključani[/postlink]

{{#unless isPost}}
Ikona zaključavanja se konačno pojavljuje na zaključanim komentarima, a zaključani komentari se više ne mogu uređivati ili brisati dok ih administrator ne otključa.
{{/unless}}

{{#isPost}}

### Šta je novo

Moderatori su već dugo mogli zaključavati komentare. Zaključavanje komentara sprečava nove odgovore, što je korisno kada je tema završena ili kada se podrazgovor odvija u pogrešnom smeru.

Problem je bio to što "zaključano" nije imalo mnogo težine. Čitaoci nisu imali vizuelnu indikaciju da je komentar zaključan. I iako su novi odgovori bili blokirani, izvorni autor ili bilo ko sa pristupom za uređivanje i dalje je mogao da menja ili briše komentar. To zapravo nije zaključano. Ova nadogradnja ispravlja oba problema.

### Ikona zaključavanja

Kada moderator zaključa komentar, mala ikona katanca se sada pojavljuje u gornjem desnom uglu komentara, odmah pored ikone zakači. Prikazuje se svakom čitaocu - ne samo moderatorima. Otključavanje komentara uklanja ikonu.

Ikona poštuje svetli i tamni režim, kao i ikona zakači.

### Uređivanje i brisanje su blokirani

Zaključani komentar ne može biti uređen ili obrisan od strane bilo koga, uključujući administratore i moderatore. Ako želite da uredite ili uklonite zaključani komentar, prvo ga otključajte, izvršite promenu, a zatim ponovo zaključajte ako želite.

Ovo važi za svaki put koji se dodiruje sa komentarom:

- Vidi korisnika skriva stavke menija Uredi i Obriši na zaključanim komentarima.
- Javni API PATCH i DELETE krajnje tačke vraćaju `locked` grešku ako je ciljani komentar zaključan.
- Admin moderacijski korisnički interfejs prikazuje zaključanu grešku ako pokušate da obrišete bez prethodnog otključavanja.

### Izuzeci

Nekoliko puteva namerno zaobilazi zaključavanje kako bi moglo da obavi svoj posao:

- Brisanje naloga. Ako korisnik obriše svoj FastComments nalog, njihovi komentari se čiste bez obzira na stanje zaključavanja.
- Čišćenje korisnika Tenanta / SSO. Ista ideja za uklanjanje korisnika na nivou tenanta.
- Zakazano automatsko brisanje. Ako ste zakazali komentar da se obriše u tačno vreme, planera ne mora brinuti o zaključavanjima.
- Čišćenje duplikata. Dedupe alat uklanja zaključane duplikate bez ceremonije.
- Banovanje moderatora sa "obriši sve komentare ovog korisnika". Banovanje korisnika i brisanje njihove istorije je jedna namerna radnja, tako da se takođe brišu zaključavanja.

Sve ostalo - widget, moderacijski UI, javni API, spoljni pozivaoci - poštuju zaključavanje.

### Oblik API greške

Ako pozovete javni API da uredite ili obrišete zaključani komentar, dobićete odgovor poput:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Komentar je zaključan.",
    "translatedError": "Ovaj komentar je zaključan i ne može biti uređen ili obrisan. Prvo ga otključajte."
}</div>

HTTP status je 401. Polje `translatedError` koristi lokalizaciju koju je konfigurisao vaš tenant i sve prilagođene prevode koje ste postavili.

### Zaključak

Mala promena, ali zatvara razliku koja je bila otvorena neko vreme. Zaključano sada znači zaključano.

Pozdrav!

{{/isPost}}