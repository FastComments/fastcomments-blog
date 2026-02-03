---
[category:Moderation]

###### [postdate]

# [postlink]Sakriti Oznake za Komentare uz FastComments[/postlink]

{{#unless isPost}}Označavanje je dodato u FastComments. Pored toga, komentari se mogu sakriti na osnovu broja puta kada su označeni.{{/unless}}

{{#isPost}}

### Šta je novo

Korisnici sada mogu označavati komentare u okvirima komentara koji su hostovani na FastComments. Moderatori mogu filtrirati prema označenim komentarima kao i videti koliko puta su bili označeni.

Platforma može biti takođe konfigurisana da automatski sakrije komentare kada su označeni određeni broj puta.

### Perspektiva Komentatora

Kada korisnik ima važeću sesiju, može označavati komentare putem menija za uređivanje komentara. 

Ovo je kompatibilno sa sledećim tipovima sesija:

- Anonimne sesije
- FastComments.com Korisnička Sesija (Koristeći 3rd Party Cookies)
- Sigurna SSO
- Jednostavna SSO

Oznake za komentare će se nastaviti prikazivati do postizanja konfigurisane oznake praga.

### Za Moderatore

Moderatori mogu videti označene komentare koristeći `Flagged` filter, koji je takođe dostupan direktno [ovde](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Pored toga, broj puta kada je komentar bio označen vidljiv je moderatorima i administratorima.

Napomena:

- Resetovanje broja oznaka za komentar koji je `Un-Approved` putem `Un-Approve Threshold` će `Re-Approve` komentar.
- `Re-Approving` `Flagged` komentara će **resetovati broj oznaka**.
- Ovo je funkcija stvorena kao pogodnost.

### Konfiguracija

Konfiguracija automatskog skrivanja označenih komentara može se izvršiti na [Stranici za Podešavanje Moderacije Komentara](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Postojeći Klijenti

Završili smo implementaciju ove funkcije za sve postojeće klijente na svim nivoima. Automatsko skrivanje neodobrenih komentara nije omogućeno za nove ili postojeće klijente.

### Zaključak

Nadamo se da ćete smatrati ovaj novi skup funkcija korisnim i jednostavnim za korišćenje. 

Živeli!

{{/isPost}}

---