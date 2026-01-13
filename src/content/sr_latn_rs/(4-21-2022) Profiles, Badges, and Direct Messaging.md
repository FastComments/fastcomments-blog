---
[category:Features]

###### [postdate]

# [postlink]Profili, Bedževi i Direktne Poruke[/postlink]

{{#unless isPost}}U ovom izdanju imamo mnoge funkcije koje nagrađuju zajednice koje koriste FastComments i pomažu im da komuniciraju.{{/unless}}

{{#isPost}}

### Šta je novo
FastComments je zvanično objavio profile korisnika i povezane funkcije.

### Profili korisnika

Profil korisnika sastoji se od njihovog imena, da li su online, njihove nedavne aktivnosti i mesta za komentarisanje na svom profilu.

Njihovi bedževi i napredak u sticanju bedževa takođe se prikazuju ovde.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments Profil korisnika" title="FastComments Profil korisnika"></video>
</div>

Korisnici mogu videti svoj profil klikom na svoj avatar u komentaru, ili [odlaskom na stranicu svog naloga](https://fastcomments.com/auth/my-account).

Pored toga, možete slati direktne poruke korisniku iz njihovog profila.

### Modal za korisnički profil
Kada se izabere avatar korisnika, otvorit će se Modal za profil. Ovo je takođe dodato za moderatore na stranici moderacije komentara.

### Nagrađivanje korisnika bedževima

Bedževi su još jedan nov dodatak FastComments koji vam omogućava da nagradite korisnike vaše zajednice. Kreiranje bedža je jednostavno:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Kreiraj bedž" title="Kreiraj bedž" />
</div>

Bedževi se mogu dodeliti na osnovu sledećih uslova:

- Broj ostavljenih komentara
- Broj dobijenih pozitivnih glasova
- Broj primljenih odgovora
- Broj pinenih komentara
- Veteran (vrijeme od prvog komentara)
- Kasno komentarisanje
- Brzo vreme odgovora
- Odgovor na specifičnu stranicu
- Moderatori - Broj obrisanih komentara
- Moderatori - Broj odobrenih komentara
- Moderatori - Broj neodobrenih komentara
- Moderatori - Broj pregledanih komentara
- Moderatori - Broj komentara označenih kao spam
- Moderatori - Broj komentara označenih kao ne spam

Kao što možete videti, postoji mnogo situacija u kojima možemo nagraditi korisnike.

Možemo definisati više *nivoua* bedževa. Na primer, možemo dodati bedževe za `Broj komentara` sa pragovima od 10, 100 i 1000 ostavljenih komentara. Kako korisnici
interaguju u vašoj zajednici, njihovi stečeni bedževi će se **nakupljati** tokom vremena.

Ne zaboravimo *moderatore*. U mnogim zajednicama, ovo je posao bez zahvalnosti. Dajte svojim moderatorima nešto čime mogu da se pohvale podešavanjem bedževa za moderatore.

Takođe podržavamo nekoliko jedinstvenih slučajeva, poput `Noćne ptice` i `Brzo vreme odgovora` bedževa kako bismo prepoznali članove koji su aktivni kasno u noć, ili brzo odgovaraju. `Brzo vreme odgovora` najbolje funkcioniše kada se koriste live funkcije FastComments.

Kada se novi bedževi kreiraju, automatski će biti dodati postojećim članovima vaše zajednice koji ispunjavaju uslove.

### Direktne poruke

Kupci su tražili mogućnost slanja direktnih poruka korisnicima od pokretanja FastComments. Posle dve godine, srećni smo što konačno možemo objaviti ovu funkciju i zahvaljujemo
onima koji su strpljivo čekali.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Direktne poruke" title="FastComments Direktne poruke"></video>
</div>

Direktne poruke omogućavaju članovima u zajednici da međusobno šalju poruke privatno, ali takođe služe kao koristan alat za moderatore i administratore za kontaktiranje komentatora.

Kao i većina funkcija FastComments, sve mogućnosti direktnih poruka su aktivne.

#### Asinhrone direktne poruke

Kada šaljete poruku korisniku, oni mogu biti offline. U tom slučaju ćemo poslati korisniku email obaveštenje da imaju novu poruku.

#### Direktne poruke putem emaila

Kada korisnik primi poruku putem emaila, ima mogućnost da odgovori tako što će odgovoriti na tu email poruku.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM Email" title="DM Email" />
</div>

Kada to učine, njihov odgovor će se **uživo** pojaviti drugom korisniku na kartici Poruka njihovog profila.

### Sigurni SSO

FastComments Profili korisnika su potpuno kompatibilni s postojećim instalacijama Sigurnog SSO.

Stvari poput postavki privatnosti korisnika takođe se mogu konfigurisati putem `isProfileActivityPrivate` zastavice u SSO payload-u.

Podrazumevano, `isProfileActivityPrivate` je tačno.

### Postojeći kupci

Završili smo s implementacijom ove funkcije za sve postojeće kupce na svim nivoima.

### Konfigurisanje privatnosti

Pogledom na svoj profil, postoje opcije da:

- Onemogućite komentarisanje na svom profilu.
- Sprečite da vaša aktivnost bude vidljiva drugima.
- Sprečite druge da vam šalju direktne poruke.

### Prikupljeni podaci

Profili korisnika se kreiraju na osnovu podataka koje imamo danas, poput njihovog imena, koje komentare su nedavno ostavili i slično.

Nećemo prikupljati dodatne podatke za proširenje profila korisnika. Smatramo da su profili korisnika više kao tipični profil korisnika na forumu.

### Na kraju

Mislimo da ove funkcije značajno proširuju FastComments kao platformu, i nadamo se da ćete ih pronaći korisnim i jednostavnim za korišćenje.

Pozdrav!

{{/isPost}}

---