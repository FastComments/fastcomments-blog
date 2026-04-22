---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Zaključani komentari sada su zapravo zaključani[/postlink]

{{#unless isPost}}
Ikona brava konačno se pojavljuje na zaključanim komentarima, a zaključani komentari se više ne mogu uređivati ili brisati dok ih admin ne otključa.
{{/unless}}

{{#isPost}}

### Što je novo

Moderatorima je već dugo omogućeno zaključavanje komentara. Zaključavanje komentara sprječava nove odgovore, što je korisno kada rasprava iscrpi svoje mogućnosti ili kada podrasprava skrene s puta.

Problem je bio u tome što "zaključano" nije imalo veliku težinu. Čitatelji nisu imali vizualnu indikaciju da je komentar zaključan. Iako su novi odgovori bili blokirani, originalni autor ili bilo tko s pristupom uređivanju mogao je i dalje urediti ili obrisati komentar. To zapravo nije zaključano. Ova nadogradnja rješava oba ta problema.

### Ikona brave

Kada moderator zaključa komentar, mala brava se sada pojavljuje u gornjem desnom kutu komentara, odmah pored ikone pribadače. Prikazuje se svim čitateljima - ne samo moderatorima. Otključavanje komentara uklanja je.

Ikona podržava svijetli i tamni način, isto kao i ikona pribadače.

### Uređivanje i brisanje su blokirani

Zaključani komentar ne može se uređivati ili brisati od strane ikoga, uključujući admina i moderatore. Ako želite urediti ili ukloniti zaključani komentar, prvo ga otključajte, napravite promjenu, zatim ponovo zaključajte ako želite.

Ovo se primjenjuje na sve putanje koje se tiču komentara:

- Widget koji se prikazuje korisnicima skriva stavke izbornika Uredi i Obriši na zaključanim komentarima.
- Javni API PATCH i DELETE krajnje točke vraćaju `locked` grešku ako je ciljani komentar zaključan.
- Admin UI za moderaciju prikazuje zaključanu grešku ako pokušate obrisati bez prethodnog otključavanja.

### Izuzeci

Nekoliko putanja namjerno zaobilazi zaključavanje kako bi mogli obaviti svoj posao:

- Brisanje računa. Ako korisnik izbriše svoj FastComments račun, njihovi komentari se čiste bez obzira na stanje zaključavanja.
- Čišćenje korisnika na razini najmoprimca / SSO. Ista ideja za uklanjanje korisnika na razini najmoprimca.
- Planirano automatsko brisanje. Ako ste planirali brisanje komentara u određeno vrijeme, planer ne mora brinuti o zaključavanjima.
- Čišćenje dupliciranih. Alat za dedupliciranje uklanja zaključane duplikate bez ceremonije.
- Banovi moderatorâ s "obriši sve komentare ovog korisnika". Banovanje korisnika i brisanje njihove povijesti je jedinstvena namjerna radnja, pa se tako brišu i zaključavanja.

Sve ostalo - widget, UI za moderaciju, javni API, vanjski pozivači - poštuje zaključavanje.

### Oblik API greške

Ako pozovete javni API za uređivanje ili brisanje zaključanog komentara, dobit ćete odgovor poput:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Komentar je zaključan.",
    "translatedError": "Ovaj komentar je zaključan i ne može se uređivati ili brisati. Prvo ga otključajte."
}</div>

HTTP status je 401. Polje `translatedError` koristi lokalizaciju vašeg najmoprimca i sve prilagođene prijevode koje ste postavili.

### Na kraju

Mala promjena, ali zatvara prazninu koja je bila otvorena neko vrijeme. Zaključano sada znači zaključano.

Živjeli!

{{/isPost}}

---