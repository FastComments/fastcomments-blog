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

Moderatori su dugo mogli da zaključavaju komentare. Zaključavanje komentara sprečava nove odgovore, što je korisno kada je tema iscrpljena ili kada razgovor odlazi u pogrešnom pravcu.

Problem je bio u tome što "zaključano" nije imalo mnogo težine. Čitaoci nisu imali vizuelnu indikaciju da je komentar zaključan. Iako su novi odgovori bili blokirani, originalni autor ili bilo ko sa pristupom za uređivanje mogao je da izmeni ili obriše komentar. To zaista nije zaključano. Ova nadogradnja rešava oba problema.

### Ikona zaključavanja

Kada moderator zaključa komentar, mala ikona katanca sada se pojavljuje u gornjem desnom uglu komentara, odmah pored ikone priče. Ona se pokazuje svim čitaocima - ne samo moderatorima. Otključavanje komentara je uklanja.

Ikona poštuje svetlu i tamnu temu, baš kao i ikona priče.

### Uređivanje i brisanje su blokirani

Zaključani komentar ne može biti uređen ili obrisan od strane bilo koga, uključujući administratore i moderatore. Ako želite da izmenite ili uklonite zaključani komentar, prvo ga otključajte, napravite promenu, a zatim ponovo zaključajte ako želite.

Ovo važi za svaki put koji se dotiče komentara:

- Widget za korisnike skriva stavke za Uređivanje i Brisanje na zaključanim komentarima.
- JAVNI API PATCH i DELETE krajnje tačke vraćaju grešku `locked` ako je ciljani komentar zaključan.
- Admin moderacijski UI prikazuje zaključanu grešku ako pokušate da obrišete bez prethodnog otključavanja.

### Izuzeci

Mali broj puteva namerno zaobilazi zaključavanje kako bi mogli da obave svoj posao:

- Brisanje naloga. Ako korisnik obriše svoj FastComments nalog, njihovi komentari se čiste bez obzira na stanje zaključavanja.
- Čišćenje korisnika na nivou zakupca / SSO. Ista ideja za uklanjanje korisnika na nivou zakupca.
- Zakazivanje automatskog brisanja. Ako ste zakazali komentar da bude obrisan u određeno vreme, planer ne mora da vodi računa o zaključavanjima.
- Čišćenje duplikata. Alat za uklanjanje duplikata briše zaključane duplikate bez ceremonije.
- Ban moderatora sa "obriši sve komentare ovog korisnika". Banovanje korisnika i uklanjanje njihove istorije je jedna namerna akcija, pa tako briše i zaključavanja.

Sve ostalo - widget, moderacijski UI, javni API, spoljni pozivači - poštuje zaključavanje.

### Oblik API greške

Ako pozovete javni API da uredite ili obrišete zaključani komentar, dobićete odgovor poput:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Komentar je zaključan.",
    "translatedError": "Ovaj komentar je zaključan i ne može biti uređen ili obrisan. Prvo ga otključajte."
}</div>

HTTP status je 401. Polje `translatedError` koristi podešeni jezik vašeg zakupca i bilo koju prilagođenu prevod koju ste postavili.

### Na kraju

Mala promena, ali zatvara razliku koja je bila otvorena neko vreme. Zaključano sada znači zaključano.

Živeli!

{{/isPost}}