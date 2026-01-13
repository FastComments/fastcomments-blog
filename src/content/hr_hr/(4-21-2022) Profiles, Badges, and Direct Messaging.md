---
[category:Features]

###### [postdate]

# [postlink]Profili, Bedževi i Izravno Poručivanje[/postlink]

{{#unless isPost}}U ovom izdanju imamo mnogo značajki koje nagrađuju zajednice koje koriste FastComments i pomažu im u komunikaciji.{{/unless}}

{{#isPost}}

### Što je novo
FastComments je službeno objavio Korisničke Profile i povezane značajke.

### Korisnički Profili

Profil korisnika sastoji se od njihovog imena, informacije o tome jesu li online, njihove nedavne aktivnosti i mjesta za komentiranje na njihovom profilu.

Njihovi bedževi i napredak u dobivanju bedževa također su prikazani ovdje.

<div class="text-center">
    <video src="/images/profile.webm" autoplay loop muted alt="FastComments Korisnički Profil" title="FastComments Korisnički Profil"></video>
</div>

Korisnici mogu vidjeti svoj profil klikom na svoj avatar u razgovoru, ili [odlaskom na svoju stranicu računa](https://fastcomments.com/auth/my-account).

Uz to, možete izravno poručivati korisniku s njihovog profila.

### Modalni Prozor Korisničkog Profila
Kada se odabere avatar korisnika, otvorit će se Modalni Prozor Profila. Ovo je također dodano za moderatore na stranici za Moderaciju Komentara.

### Nagrađivanje Korisnika Bedževima

Bedževi su još jedan nedavni dodatak FastComments koji vam omogućava nagrađivanje korisnika vaše zajednice. Kreiranje bedža je lako:

<div class="text-center">
    <img src="/images/create-badge.png" alt="Kreiraj Bedž" title="Kreiraj Bedž" />
</div>

Bedževi se mogu dodijeliti na temelju sljedećih uvjeta:

- Broj Ostavljenih Komentara
- Broj Osvojenih Up-Votova
- Broj Primljenih Odgovora
- Broj Prikovanih Komentara
- Veteran (vrijeme od prvog komentara)
- Komentiranje Kasno Noću
- Brzo Vrijeme Odgovora
- Odgovor na Specifičnu Stranicu
- Moderatori - Broj Izbrisanih Komentara
- Moderatori - Broj Odobrenih Komentara
- Moderatori - Broj Neodobrenih Komentara
- Moderatori - Broj Pregledanih Komentara
- Moderatori - Broj Komentara Označenih kao Spam
- Moderatori - Broj Komentara Označenih kao Nije Spam

Kao što vidite, postoji mnogo tipova situacija za koje možemo nagraditi korisnike.

Možemo definirati više *razina* bedževa. Na primjer, mogli bismo dodati bedževe `Broj Komentara` s pragovima od 10, 100 i 1000 ostavljenih komentara. Kako se korisnici
interagiraju u vašoj zajednici, njihovi zarađeni bedževi će se **nakupljati** s vremenom.

Ne zaboravimo *Moderatore*. U mnogim zajednicama, ovo je nezahvalan posao. Dajte svojim moderatorima nešto što će moći pokazati konfigurišući bedževe za moderatore.

Također podržavamo nekoliko jedinstvenih slučajeva, poput `Noćne Ptice` i `Brzo Vrijeme Odgovora` bedževa kako bismo prepoznali članove koji su aktivni kasno noću, ili brzo odgovaraju. `Brzo Vrijeme Odgovora` najbolje funkcionira kada se koriste žive značajke FastComments-a.

Kada se kreiraju novi bedževi, automatski će biti dodijeljeni postojećim članovima vaše zajednice koji ispunjavaju uvjete.

### Izravno Poručivanje

Kupci su tražili mogućnost izravnog poručivanja korisnicima od samog lansiranja FastComments-a. Nakon dvije godine, sretni smo što možemo konačno objaviti ovu značajku, i zahvaljujemo
onima koji su strpljivo čekali.

<div class="text-center">
    <video src="/images/dm-example.webm" autoplay loop muted alt="FastComments Izravno Poručivanje" title="FastComments Izravno Poručivanje"></video>
</div>

Izravno poručivanje omogućava članovima u zajednici da međusobno šalju privatne poruke, ali također služi kao koristan alat za Moderatore i Administratore da kontaktiraju komentatore.

Kao i većina FastComments-a, sve značajke izravnog poručivanja su aktivne.

#### Asinkrono Izravno Poručivanje

Kada pošaljete poruku korisniku, oni mogu biti offline. U tom slučaju poslat ćemo korisniku e-mail obavijestivši ih da imaju novu poruku.

#### Izravno Poručivanje putem E-pošte

Kada korisnik primi poruku putem e-maila, imaju mogućnost odgovoriti odgovaranjem na taj e-mail.

<div class="text-center">
    <img src="/images/email-dm.png" alt="DM E-mail" title="DM E-mail" />
</div>

Kada to učine, njihov odgovor će se **uživo** pojaviti drugom korisniku na kartici Poruke njihovog profila.

### Sigurni SSO

Korisnički Profili FastComments su potpuno kompatibilni s postojećim instalacijama sigurnog SSO-a.

Stvari poput postavki privatnosti korisnika također se mogu konfigurirati putem `isProfileActivityPrivate` oznake u SSO payload-u.

Podrazumijevano, `isProfileActivityPrivate` je true.

### Postojeći Kupci

Završili smo implementaciju ove značajke za sve postojeće kupce na svim razinama.

### Konfiguriranje Privatnosti

Pogledom na svoj profil, postoje opcije za:

- Onemogućavanje komentiranja na vašem profilu.
- Sprječavanje da vaša aktivnost bude vidljiva drugima.
- Sprječavanje drugih da vas izravno poručuju.

### Prikupljeni Podaci

Korisnički Profili se kreiraju na temelju podataka koje imamo danas, poput njihovog imena, kakve komentare su nedavno ostavili i slično.

Nećemo prikupljati dodatne podatke za proširenje profila korisnika. Volimo misliti na Korisničke Profile više kao na tipični profil korisnika na forumu.

### Zaključak

Mislimo da ove značajke uvelike proširuju FastComments kao platformu, i nadamo se da ćete ih smatrati korisnim i jednostavnim za korištenje.

Živjeli!

{{/isPost}}