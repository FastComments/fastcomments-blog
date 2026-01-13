---
[category:Moderacija]

###### [postdate]

# [postlink]Sakrivanje označenih komentara sa FastComments[/postlink]

{{#unless isPost}}Označavanje je dodato u FastComments. Pored toga, komentari se mogu sakriti na osnovu broja puta kada su označeni.{{/unless}}

{{#isPost}}

### Šta je novo

Korisnik sada može da označava komentare u okviru komentarskih niti koje hostuje FastComments. Moderatori mogu da filtriraju po označenim komentarima, kao i da vide koliko puta su označeni.

Platforma se takođe može konfigurisati da automatski sakrije komentare kada su označeni određenim brojem puta.

### Perspektiva komentatora

Kada korisnik ima važeću sesiju, može da označi komentare putem menija za uređivanje komentara. 

Ovo je kompatibilno sa sledećim tipovima sesija:

- Anonimne sesije
- FastComments.com korisnička sesija (koristeći 3rd Party kolačiće)
- Bezbedan SSO
- Jednostavan SSO

Označeni komentari će se i dalje prikazivati, sve dok ne bude dostignut konfigurisanih prag označavanja.

### Za moderatore

Moderatori mogu da vide označene komentare koristeći `Flagged` filter, koji je takođe dostupan direktno [ovde](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Pored toga, broj puta kada je komentar označen je vidljiv moderatorima i administratorima.

Napomena:

- Resetovanje broja označavanja za komentar koji je `Un-Approved` putem `Un-Approve Threshold` će `Re-Approve` komentar.
- `Re-Approving` označenog komentara će **resetovati broj označavanja**.
- Ovo je funkcija stvorena iz praktičnosti.

### Konfiguracija

Konfigurisanje automatskog skrivanja označenih komentara može se izvršiti na [Stranici za podešavanje moderacije komentara](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Postojeći kupci

Završili smo implementaciju ove funkcije za sve postojeće kupce na svim nivoima. Automatsko sakrivanje neodobrenih komentara nije omogućeno za nove ili postojeće kupce.

### Na kraju

Nadamo se da ćete pronaći ovaj novi set funkcija korisnim i lakim za korišćenje. 

Živeli!

{{/isPost}}