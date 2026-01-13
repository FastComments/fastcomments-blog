---
[category:Features]

###### [postdate]

# [postlink]Profili, Bedževi i Direktna Poruka[/postlink]

{{#unless isPost}}U ovom izdanju imamo mnogo funkcija koje nagrađuju zajednice koje koriste FastComments i pomažu im da komuniciraju.{{/unless}}

{{#isPost}}

### Šta je Novo
FastComments je zvanično objavio korisničke profile i povezane funkcije.

### Korisnički Profili

Profil korisnika se sastoji od njihovog imena, statusa da li su online, njihove nedavne aktivnosti i mesta za komentarisanje njihovog profila.

Njihovi bedževi i napredovanje u sticanju bedževa takođe su prikazani ovde.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments Korisnički Profil" title="FastComments Korisnički Profil"></video>
</div>

Korisnici mogu videti svoj profil klikom na svoj avatar u delu komentara, ili [posetiti svoju stranicu naloga](https://fastcomments.com/auth/my-account).

Pored toga, možete poslati direktnu poruku korisniku sa njihovog profila.

### Modal za Korisnički Profil
Kada se izabere avatar korisnika, otvoriće se modal za profil. Ovo je takođe dodato za moderatore na stranici za moderaciju komentara.

### Nagrađivanje Korisnika Sa Bedževima

Bedževi su još jedan nedavni dodatak FastComments-u koji vam omogućava da nagradite korisnike vaša zajednice. Kreiranje bedža je jednostavno:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Kreiraj Bedž" title="Kreiraj Bedž" />
</div>

Bedževi se mogu dodeliti na osnovu sledećih uslova:

- Broj ostavljenih komentara
- Broj osvojenih glasova
- Broj primljenih odgovora
- Broj zakačenih komentara
- Veteran (vreme od prvog komentara)
- Kasno komentarisanje
- Brzo vreme odgovora
- Odgovor na specifičnu stranicu
- Moderatori - broj obrisanih komentara
- Moderatori - broj odobrenih komentara
- Moderatori - broj neodobrenih komentara
- Moderatori - broj pregledanih komentara
- Moderatori - broj komentara označenih kao spam
- Moderatori - broj komentara označenih kao ne spam

Kao što vidite, postoji mnogo tipova situacija za koje možemo nagraditi korisnike.

Možemo definisati više *nivoa* bedževa. Na primer, mogli bismo dodati `Broj Komentara` bedževe sa pragovima od 10, 100 i 1000 ostavljenih komentara. Dok korisnici
interaguju u vašoj zajednici, njihovi zarađeni bedževi će se **sakupljati** vremenom.

Ne zaboravimo na *Moderatore*. U mnogim zajednicama, ovo je nezahvalan posao. Dajte svojim moderatorima nešto da se pohvale konfigurisanjem bedževa za moderatore.

Takođe podržavamo nekoliko jedinstvenih slučajeva, poput `Noćne Sove` i `Brzog Vremena Odgovora` bedževa kako bismo prepoznali članove koji su aktivni kasno u noć, ili brzo odgovaraju. `Brzo Vreme Odgovora` najbolje funkcioniše kada se koriste live funkcije FastComments-a.

Kada se novi bedževi kreiraju, oni će automatski biti dodati postojećim članovima vaše zajednice koji ispunjavaju uslove.

### Direktno Poručivanje

Kupci su tražili mogućnost direktnog poručivanja korisnicima od lansiranja FastComments-a. Posle dve godine, sa radošću najavljujemo ovu funkciju i zahvaljujemo
onima koji su strpljivo čekali.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Direktno Poručivanje" title="FastComments Direktno Poručivanje"></video>
</div>

Direktno poručivanje omogućava članovima zajednice da međusobno šalju privatne poruke, ali je takođe korisno sredstvo za Moderatore i Administratore kako bi kontaktirali komentatore.

Kao i većina FastComments funkcija, sve funkcije direktnog poručivanja su uživo.

#### Asinhrono Direktno Poručivanje

Kada pošaljete poruku korisniku, možda će biti offline. U ovom slučaju ćemo poslati korisniku email obaveštenje da ima novu poruku.

#### Direktno Poručivanje Putem Emaila

Kada korisnik primi poruku putem emaila, ima mogućnost da odgovori tako što će odgovoriti na taj email.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM Email" title="DM Email" />
</div>

Kada to učini, njihov odgovor će se **uživo** pojaviti drugom korisniku u kartici Poruke njihovog profila.

### Sigurni SSO

FastComments Korisnički Profili su potpuno kompatibilni sa postojećim instalacijama Sigurnog SSO-a.

Stvari poput korisnikovih podešavanja privatnosti se takođe mogu konfigurirati putem `isProfileActivityPrivate` flag-a u SSO payload-u.

Po defaultu, `isProfileActivityPrivate` je true.

### Postojeći Kupci

Završili smo implementaciju ove funkcije za sve postojeće kupce na svim nivoima.

### Konfigurisanje Privatnosti

Gledajući svoj profil, imate opcije da:

- Onemogućite komentarisanje na vašem profilu.
- Sprečite da vaša aktivnost bude vidljiva drugima.
- Sprečite druge da vam šalju direktne poruke.

### Prikupljeni Podaci

Korisnički Profili se kreiraju na osnovu podataka koje trenutno imamo, kao što su njihovo ime, koje komentare su nedavno ostavili, i slično.

Nećemo prikupljati dodatne podatke kako bismo proširili profile korisnika. Smatramo da su Korisnički Profili sličniji tipičnom profilu korisnika na forumu.

### Na Zaključak

Smataramo da ove funkcije značajno proširuju FastComments kao platformu, i nadamo se da ćete ih naći korisnim i lakim za korišćenje.

Živeli!

{{/isPost}}

---