---
[category:Moderation]

###### [postdate]

# [postlink]Skrivanje označenih komentara sa FastComments[/postlink]

{{#unless isPost}}Označavanje je dodato u FastComments. Pored toga, komentari se mogu sakriti na osnovu broja puta kada su označeni.{{/unless}}

{{#isPost}}

### Šta je novo

Korisnici sada mogu da označavaju komentare u okviru komentarskih niti koje hostuje FastComments. Moderatori mogu da filtriraju označene komentare kao i da vide koliko puta su označeni.

Platforma se takođe može konfigurisati da automatski sakrije komentare kada su označeni određeni broj puta.

### Perspekcija komentatora

Kada korisnik ima važeću sesiju, može da označi komentare putem menija za uređivanje komentara.

Ovo je kompatibilno sa sledećim tipovima sesija:

- Anonimne sesije
- FastComments.com korisnička sesija (koristeći kolačiće trećih strana)
- Sigurni SSO
- Jednostavni SSO

Označeni komentari će nastaviti da se prikazuju, sve dok se ne dostigne konfigurisana granica označavanja.

### Za Moderatore

Moderatori mogu da vide označene komentare koristeći `Flagged` filter, koji je takođe dostupan direktno [ovde](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Pored toga, broj puta kada je komentar označen vidljiv je moderatorima i administratorima.

Napomena:

- Resetovanje broja označavanja za komentar koji je `Un-Approved` putem `Un-Approve Threshold` će `Re-Approve` komentar.
- `Re-Approving` označenog komentara će **resetovati broj označavanja**.
- Ovo je funkcija koja je napravljena radi pogodnosti.

### Konfiguracija

Konfigurisanje automatskog skrivanja označenih komentara može se obaviti na [stranici za podešavanje moderacije komentara](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Postojeći kupci

Završili smo implementaciju ove funkcionalnosti za sve postojeće kupce na svim nivoima. Automatsko skrivanje neodobrenih komentara nije omogućeno za nove ili postojeće kupce.

### Zaključak

Nadamo se da ćete pronaći ovaj novi set funkcija korisnim i jednostavnim za korišćenje.

Živeli!

{{/isPost}}

---