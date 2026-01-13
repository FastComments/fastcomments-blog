---
[category:Features]

###### [postdate]

# [postlink]Profili, Bedževi i Direktna Poruka[/postlink]

{{#unless isPost}}U ovom izdanju imamo mnogo funkcija koje nagrađuju zajednice koje koriste FastComments i pomažu im da komuniciraju.{{/unless}}

{{#isPost}}

### Šta je Novo
FastComments je zvanično objavio korisničke profile i povezane funkcije.

### Korisnički Profili

Korisnički profil se sastoji od njihovog imena, informacija da li su online, njihove nedavne aktivnosti i mesta za komentarisanje na njihovom profilu.

Njihovi bedževi i napredak u zarađivanju bedževa su takođe prikazani ovde.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments Korisnički Profil" title="FastComments Korisnički Profil"></video>
</div>

Korisnici mogu videti svoj profil klikom na svoj avatar u komentarskoj niti, ili [odlaskom na stranicu svog naloga](https://fastcomments.com/auth/my-account).

Pored toga, možete direktno poručiti korisniku sa njihovog profila.

### Modalni Prozor Korisničkog Profila
Kada se izabere avatar korisnika, otvorit će se modalni prozor profila. Ova funkcija je takođe dodana za moderatore na stranici za moderaciju komentara.

### Nagrađivanje Korisnika Bedževima

Bedževi su još jedan nedavni dodatak FastComments-u koji omogućava nagrađivanje korisnika vaše zajednice. Kreiranje bedža je lako:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Kreiraj Bedž" title="Kreiraj Bedž" />
</div>

Bedževi se mogu dodeliti na osnovu sledećih uslova:

- Broj ostavljenih komentara
- Broj dobijenih up-votova
- Broj primljenih odgovora
- Broj „prikazanih“ komentara
- Veteran (vreme od prvog komentara)
- Kasno večernje komentarisanje
- Brzo vreme odgovaranja
- Odgovor na određenu stranicu
- Moderatori - Broj obrisanih komentara
- Moderatori - Broj odobrenih komentara
- Moderatori - Broj neodobrenih komentara
- Moderatori - Broj pregledanih komentara
- Moderatori - Broj obeleženih kao spam
- Moderatori - Broj obeleženih kao ne spam

Kao što vidite, postoji mnogo vrsta situacija za koje možemo nagrađivati korisnike.

Možemo definisati više *nivoa* bedževa. Na primer, mogli bismo dodati bedževe `Broj Komentara` sa pragovima od 10, 100 i 1000 ostavljenih komentara. Kako korisnici komuniciraju u vašoj zajednici, njihovi zarađeni bedževi će se **stackovati** tokom vremena.

Ne zaboravimo na *Moderatore*. U mnogim zajednicama, ovo je posao koji se ne vrednuje. Dajte svojim moderatorima nešto da pokažu tako što ćete im konfigurirati bedževe.

Takođe podržavamo nekoliko jedinstvenih slučajeva, poput bedževa `Noćna Sova` i `Brzo Vreme Odgovaranja` kako bismo prepoznali članove koji su aktivni kasno u noć, ili koji brzo odgovaraju. `Brzo Vreme Odgovaranja` najbolje funkcioniše kada se koriste žive funkcije FastComments-a.

Kada se novi bedževi kreiraju, automatski će biti dodati postojećim članovima vaše zajednice koji ispunjavaju uslove.

### Direktna Poruka

Kupci su tražili mogućnost direktnog poručivanja korisnicima od lansiranja FastComments-a. Dve godine kasnije, sa zadovoljstvom najavljujemo ovu funkciju i zahvaljujemo onima koji su strpljivo čekali.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Direktna Poruka" title="FastComments Direktna Poruka"></video>
</div>

Direktna Poruka omogućava članovima zajednice da privatno međusobno poručuju, ali takođe služi kao koristan alat za Moderatore i Administratore da kontaktiraju komentatore.

Kao i većina funkcija FastComments-a, sve funkcije direktne poruke su žive.

#### Asinhrona Direktna Poruka

Kada poručite korisniku, on može biti van mreže. U tom slučaju, poslali bismo korisniku email u kojem ih obaveštavamo da imaju novu poruku.

#### Direktna Poruka putem Emaila

Kada korisnik primi poruku putem emaila, ima mogućnost da odgovori tako što će odgovoriti na taj email.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM Email" title="DM Email" />
</div>

Kada to učini, njihov odgovor će se pojaviti **uživo** drugom korisniku u tabu Poruka njihovog profila.

### Sigurni SSO

Korisnički Profili FastComments-a su u potpunosti kompatibilni sa postojećim instalacijama sigurnog SSO-a.

Stvari poput postavki privatnosti korisnika mogu se takođe konfigurirati putem `isProfileActivityPrivate` oznake u SSO payload-u.

Podrazumevano, `isProfileActivityPrivate` je tačno.

### Postojeći Kupci

Završili smo implementaciju ove funkcije za sve postojeće kupce u svim paketima.

### Konfiguracija Privatnosti

Gledajući svoj profil, postoje opcije da:

- Onemogućite komentarisanje na vašem profilu.
- Spriječite da vaša aktivnost bude vidljiva drugima.
- Spriječite druge da vam šalju direktne poruke.

### Prikupljeni Podaci

Korisnički Profili se kreiraju na osnovu podataka koje imamo danas, poput njihovog imena, koje komentare su nedavno ostavili itd.

Nećemo prikupljati dodatne podatke za proširenje profila korisnika. Smatramo da su Korisnički Profili više poput tipičnog profila korisnika na forumu.

### Zaključak

Smatteramo da ove funkcije značajno proširuju FastComments kao platformu, i nadamo se da ćete ih smatrati korisnim i lakim za korišćenje.

Živjeli!

{{/isPost}}

---