---
[category:Moderation]

###### [postdate]

# [postlink]Sakrivanje označenih komentara s FastComments[/postlink]

{{#unless isPost}}Označavanje je dodano u FastComments. Osim toga, komentari se mogu skrivati na temelju broja puta kada su označeni.{{/unless}}

{{#isPost}}

### Što je novo

Korisnici sada mogu označavati komentare unutar komentatorskih razgovora koje hosta FastComments. Moderatori mogu filtrirati označene komentare, kao i vidjeti koliko su puta bili označeni.

Platforma se također može konfigurirati da automatski sakriva komentare kada su označeni određeni broj puta.

### Perspektiva komentatora

Kada korisnik ima valjanu sesiju, može označiti komentare putem izbornika za uređivanje komentara. 

To je kompatibilno s sljedećim tipovima sesija:

- Anonimne sesije
- FastComments.com korisnička sesija (koristeći kolačiće trećih strana)
- Siguran SSO
- Jednostavni SSO

Označeni komentari nastavit će se prikazivati, sve dok se ne dostigne konfigurirani prag označavanja.

### Za Moderatore

Moderatori mogu vidjeti označene komentare koristeći `Označeno` filtriranje, koje je također dostupno izravno [ovdje](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Osim toga, broj puta kada je komentar bio označen vidljiv je Moderatorima i Administratorima.

Napomena:

- Ponovno postavljanje broja označavanja za komentar koji je bio `Ne-odobren` putem `Praga Ne-Odobravanja` će `Ponovo-odobriti` komentar.
- `Ponovno-odobravanje` `Označenog` komentara će **ponovno postaviti broj označavanja**.
- Ovo je značajka kreirana iz pogodnosti.

### Konfiguracija

Konfiguraciju automatskog skrivanja označenih komentara moguće je izvršiti na [Stranici za postavke moderacije komentara](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Postojeći kupci

Završili smo uvođenje ove značajke za sve postojeće kupce na svim razinama. Automatsko skrivanje neodobrenih komentara nije omogućeno za nove ili postojeće kupce.

### Na kraju

Nadamo se da ćete pronaći ovaj novi skup značajki korisnim i jednostavnim za korištenje. 

Živjeli!

{{/isPost}}

---