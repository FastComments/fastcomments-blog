---
[category:Security]

###### [postdate]
# [postlink]Objavljen Zapisnik Revizije[/postlink]

{{#unless isPost}}FastComments sada pruža detaljan zapis svih izmjena napravljenih putem platforme.{{/unless}}

{{#isPost}}

### Što je novo

Od ožujka, FastComments sada uključuje detaljnu reviziju s Pro planom, i za sve postojeće korisnike na poduzećima.

Sve administrativne radnje, bez obzira radi li se o pristupu podacima, izmjeni komentara ili deblokiranju korisnika, prate se i indeksiraju u zapisniku revizije.

### Kako to koristiti

Zapisnik revizije može se pristupiti odlaskom na `Manage Data` i zatim `Audit Logs`. Direktan link je [ovdje](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Da biste započeli, vidjet ćete stranicu poput sljedeće:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Zapisnik revizije" />
</div>

Ovdje možete pretraživati prema korisničkom imenu, IP adresi, vrsti radnje ili resursu.

Na primjer, filtriranje prema resursu:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Odabir resursa zapisnika revizije" />
</div>

Također možemo ući u detalje unosa u zapisniku revizije, pa čak i vidjeti povezani objekt koji je izmijenjen.

Na primjer, možemo ući u unos za blokiranje korisnika:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Detalji unosa zapisnika revizije" />
</div>

Ovdje možemo vidjeti tko je blokirao korisnika (korisnik s korisničkim imenom `winrid`). Možemo vidjeti da je to trajna blokada, a također imamo korisnički ID i e-mail blokiranog, zajedno s tekstom
iz kojeg su blokirani.

Možemo vidjeti IP koji je stvorio blokadu, ali je IP izvorne osobe koja je komentirala namjerno izostavljen radi njihove privatnosti.

Da bismo vidjeli sve događaje od `winrid`, jednostavno možemo kliknuti na ikonu filtra s desne strane, pored njihovog korisničkog imena.

### Ograničavanje pristupa

Podacima u zapisniku revizije mogu pristupiti samo korisnici s dozvolom `Manage Data`.

### Zadržavanje

Svi unosi u zapisniku revizije čuvaju se dvije godine. Međutim, zapisnik revizije se briše kada se vaš račun izbriše.

### Pristup API-ju

[Dokumentacija za API zapisnika revizije je ovdje.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Vidjet ćete da se zapisnik revizije može
sortirati i paginirati na nekoliko različitih načina, ovisno o vašem slučaju korištenja.

### Postojeći korisnici

Ako ste na Pro ili ekvivalentnom planu, primijetit ćete da je zapisnik revizije automatski omogućen! Ako želite dobiti pristup, obratite se svom predstavniku podrške.

### Što je izostavljeno

Jedina vrsta promjena koja je izostavljena su stvarni komentari i njihovi glasovi. To je zato što smo otkrili da su naši kupci uglavnom zainteresirani za administrativnu
stranu prilikom revizije, a ne nužno zainteresirani za reviziju onoga što ljudi komentiraju. Ove vrste radnji također dodaju značajnu buku u zapisnik.

Međutim, ako je to zahtjev, obratite se, pa možemo razgovarati o omogućavanju toga za vas.

### Na kraju

Nadamo se da ćete pronaći ovo područje naše ponude korisnim, UI jednostavnim za korištenje, a API brzim. 

Živjeli!

{{/isPost}}