---
[category:Moderacija]

###### [postdate]

# [postlink]Sakrivanje obeleženih komentara uz FastComments[/postlink]

{{#unless isPost}}Obeležavanje je dodato u FastComments. Pored toga, komentari mogu biti sakriveni na osnovu broja puta kada su obeleženi.{{/unless}}

{{#isPost}}

### Šta je novo

Korisnici sada mogu obeležavati komentare u okviru komentarskih niti koje hostuje FastComments. Moderatori mogu filtrirati obeležene komentare, kao i videti koliko puta su obeleženi.

Platforma se takođe može konfigurirati da automatski sakrije komentare kada su obeleženi određeni broj puta.

### Perspektiva komentatora

Kada korisnik ima važeću sesiju, može obeležavati komentare putem menija za uređivanje komentara.

Ovo je kompatibilno sa sledećim tipovima sesija:

- Anonimne sesije
- FastComments.com korisnička sesija (koristeći kolačiće trećih strana)
- Siguran SSO
- Jednostavan SSO

Obeleženi komentari će se nastaviti prikazivati, sve dok se ne dostigne konfigurisana granica obeležavanja.

### Za Moderatore

Moderatori mogu videti obeležene komentare koristeći `Obeleženo` filter, takođe dostupan direktno [ovde](https://fastcomments.com/auth/my-account/moderate-comments?byIPFromComment=&filter=flagged&text-search=&page=1&count=50).

Pored toga, broj puta kada je komentar obeležen vidljiv je Moderatorima i Administratorima.

Napomena:

- Ponovno postavljanje broja obeležavanja za komentar koji je bio `Neodobren` preko `Granice Neodobravanja` će `Ponovoodobriti` komentar.
- `Ponovnoodobravanje` `Obeleženog` komentara će **ponovno postaviti broj obeležavanja**.
- Ovo je funkcija kreirana radi pogodnosti.

### Konfiguracija

Konfiguraciju automatskog sakrivanja obeleženih komentara možete izvršiti na [Stranici za podešavanje moderacije komentara](https://fastcomments.com/auth/my-account/moderate-comments/settings).

### Postojeći kupci

Završili smo implementaciju ove funkcije za sve postojeće kupce na svim nivoima. Automatsko sakrivanje neodobrenih komentara nije omogućeno za nove ili postojeće kupce.

### Na kraju

Nadamo se da ćete smatrati ovaj novi set funkcija korisnim i lakim za korišćenje. 

Živeli!

{{/isPost}}

---