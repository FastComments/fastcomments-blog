---
[category:Features]

###### [postdate]

# [postlink]Profili, Bedževi i Direktne Poruke[/postlink]

{{#unless isPost}}U ovoj verziji imamo mnogo funkcija koje nagrađuju zajednice koje koriste FastComments i pomažu im da komuniciraju.{{/unless}}

{{#isPost}}

### Šta je novo
FastComments je zvanično objavio korisničke profile i povezane funkcije.

### Korisnički Profili

Korisnički profil se sastoji od imena korisnika, informacije da li je online, njihove nedavne aktivnosti i mesta za komentarisanje na svom profilu.

Njihovi bedževi i napredak u sticanju bedževa takođe su prikazani ovde.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments Korisnički Profil" title="FastComments Korisnički Profil"></video>
</div>

Korisnici mogu videti svoj profil klikom na svoj avatar u okviru komentara, ili [odlaskom na stranicu svog računa](https://fastcomments.com/auth/my-account).

Pored toga, možete direktno poručiti korisniku sa njihovog profila.

### Modal za Korisnički Profil
Kada se odabere avatar korisnika, otvoriće se modal za profil. Ovo je takođe dodato za moderatore na stranici za moderaciju komentara.

### Nagradni Bedževi za Korisnike

Bedževi su još jedan nedavni dodatak FastComments koji vam omogućava da nagradite korisnike vaše zajednice. Kreirati bedž je lako:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Kreirajte Bedž" title="Kreirajte Bedž" />
</div>

Bedževi se mogu dodeliti na osnovu sledećih kriterijuma:

- Broj ostavljenih komentara
- Broj dobijenih glasova
- Broj primljenih odgovora
- Broj pričvršćenih komentara
- Veteran (vreme od prvog komentara)
- Kasno komentarisanje
- Brzo vreme odgovora
- Odgovor na specifičnu stranicu
- Moderatori - Broj obrisanih komentara
- Moderatori - Broj odobrenih komentara
- Moderatori - Broj komentara koji nisu odobreni
- Moderatori - Broj pregledanih komentara
- Moderatori - Broj komentara označenih kao spam
- Moderatori - Broj komentara označenih kao ne-spam

Kao što možete videti, postoji mnogo vrsta situacija za koje možemo nagraditi korisnike.

Možemo definisati višestruke *nivoe* bedževa. Na primer, mogli bismo dodati `Broj Komentara` bedževe sa pragovima od 10, 100 i 1000 ostavljenih komentara. Kako se korisnici
interaguju u vašoj zajednici, njihovi zarađeni bedževi će se **nakupljati** tokom vremena.

Ne zaboravimo *Moderatore*. U mnogim zajednicama, ovo je nezahvalan posao. Pružite svojim moderatorima nešto što mogu da prikažu tako što ćete im konfigurisati bedževe za moderatore.

Takođe podržavamo nekoliko jedinstvenih slučajeva, poput `Noćne Sove` i `Brzo Vreme Odgovora` bedževa kako bismo prepoznali članove koji su aktivni kasno u noć, ili brzo odgovaraju. `Brzo Vreme Odgovora` najbolje funkcioniše kada se koriste žive funkcije FastComments.

Kada se kreiraju novi bedževi, automatski će biti dodati postojećim članovima vaše zajednice koji se kvalifikuju.

### Direktno Poručivanje

Kupci su tražili mogućnost direktnog poručivanja korisnika od lansiranja FastComments-a. Nakon dve godine, rado objavljujemo ovu funkciju i zahvaljujemo
onima koji su strpljivo čekali.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Direktno Poručivanje" title="FastComments Direktno Poručivanje"></video>
</div>

Direktno poručivanje omogućava članovima u zajednici da međusobno komuniciraju privatno, ali takođe služi kao koristan alat za moderatore i administratore da kontaktiraju komentatore.

Kao i većina funkcija FastComments, sve funkcije direktnog poručivanja su u realnom vremenu.

#### Asinhrono Direktno Poručivanje

Kada pošaljete poruku korisniku, on može biti offline. U tom slučaju, poslaćemo korisniku email obaveštenje da ima novu poruku.

#### Direktno Poručivanje Putem Email-a

Kada korisnik primi poruku putem email-a, ima mogućnost da odgovori na tu email poruku.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM Email" title="DM Email" />
</div>

Kada to učini, njihov odgovor će se **uživo** pojaviti drugom korisniku u tabu Poruka na njihovom profilu.

### Siguran SSO

FastComments Korisnički Profili su potpuno kompatibilni sa postojećim instalacijama sigurnog SSO-a.

Stvari poput postavki privatnosti korisnika takođe se mogu konfigurisati putem `isProfileActivityPrivate` oznake u SSO payload-u.

Podrazumevano, `isProfileActivityPrivate` je istinito.

### Postojeći Kupci

Završili smo implementaciju ove funkcije za sve postojeće kupce na svim nivoima.

### Konfigurisanje Privatnosti

Gledajući svoj profil, postoje mogućnosti da:

- Onemogućite komentarisanje na svom profilu.
- Sprečite da vaša aktivnost bude vidljiva drugima.
- Sprečite druge da vam šalju direktne poruke.

### Prikupljeni Podaci

Korisnički profili se kreiraju na osnovu podataka koje imamo danas, poput njihovog imena, koji su komentari nedavno ostavili itd.

Nećemo prikupljati dodatne podatke da bismo proširili profile korisnika. Želimo da gledamo na korisničke profile više kao na tipičan korisnički profil na forumu.

### Na Zaključak

Sm pensamos que estas características expanden enormemente a FastComments como plataforma, y esperamos que las encuentren útiles y fáciles de usar.

Cheers!

{{/isPost}}