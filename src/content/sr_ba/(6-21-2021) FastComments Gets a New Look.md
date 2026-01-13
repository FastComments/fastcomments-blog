---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments dobija novi izgled[/postlink]

{{#unless isPost}} FastComments je ažuriran. Saznajte o ažuriranju i kako ga možete dobiti. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Novi izgled

Do danas, izgled i osećaj FastComments widgeta za komentare su se samo postupno razvijali. Danas, puštamo
novu verziju!

Pogledajte poređenje ispod (povucite klizač za poređenje):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Postojeći kupci

Pošto veliki deo naše korisničke baze prilagođava widget za komentare, održali smo novi UI potpuno odvojen. Ne biste trebali videti
promene dok ne budete preneseni.

### Ko dobija

Novi kupci koji se prijave od danas će automatski dobiti novi dizajn. Svi naši okviri, biblioteke i
dodaci su ažurirani kako bi uključili novu verziju FastComments widgeta za komentare.

### Prethodna verzija - Kraj životnog ciklusa

Trenutno ne postavljamo kraj životnog ciklusa prethodne verzije widgeta za komentare. To ne znači da nećemo
najaviti jedan u budućnosti. Međutim, kada to učinimo, daćemo razuman vremenski okvir (6 - 12 meseci od najave do povlačenja).

Naš automatski testni paket je ažuriran da podrži različite verzije widgeta za komentare, tako da prethodna verzija
i dalje prima kontinuirano automatsko testiranje.

### Tamni režim i druge funkcije

Novi dizajn podržava tamni režim, baš kao i originalni widget za komentare. Sve oznake i postavke funkcija su prenesene.

Što se tiče tamnog režima, sa starim UI-jem za komentare, resursi za tamni režim su uvek bili uključeni prilikom učitavanja stranice čak i ako nisu korišćeni. To je bilo dodatnih 2kb koji su uvek preuzimani na klijent - čak i ako nisu bili potrebni.

Nova verzija widgeta za komentare preuzima te resurse, uključujući stilove, samo ako su potrebni.

### Podrazumevani avatar

Podrazumevani avatar koji se koristi u novom UI-u je drugačiji. Tokom migracije, podrazumevani avatar korišćen širom proizvoda u administrativnoj nadzornoj ploči i svim obaveštenjima putem e-pošte takođe će biti ažuriran.

### Implifikacija pravila prilagođavanja

Svesni smo da, kada pravimo promene u stilu javnog widgeta za komentare, možemo prekinuti prilagođavanja naših kupaca. Ne brinite, pokrili smo to i prošli kroz stilizacije prilagođenih widgeta svih korisnika kako bismo osigurali da nisu nazadovali. Međutim, ako primetite probleme, javite nam.

### Implifikacija performansi

Ukupna veličina widgeta za komentare je porasla sa 15.4kb na 17.4kb. Iako mislimo da je malo povećanje veličine paketa zbog - koliko bolje izgleda UI - itekako vredno, planirali smo mere kako bismo to smanjili.

Sve u svemu, novi UI se učitava brže, pošto su više resursa sada spojeni zajedno, što rezultira manjim brojem zahteva.

### Kako migrirati

#### Putem podrške

Jednostavno se obratite svom predstavniku za podršku ili započnite razgovor [ovde](https://fastcomments.com/auth/my-account/help).

#### WordPress

Ako koristite **WordPress**, jednostavno se nadogradite na najnoviju verziju i ažurirajte bilo koju prilagodbu stila koju imate.

#### Prilagođene integracije

Ako koristite **VanillaJS** widget za komentare, jednostavno promenite:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Na:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Ako koristite biblioteke **React, Angular, ili Vue**, jednostavno se nadogradite na verziju 2.

### Neki zanimljivi statistički podaci

Od koncepcije, dizajna i implementacije, ovo je bio projekat koji je trajao dva meseca i obuhvatio **100+ fajlova** i promenio više od **devet hiljada redova koda**.

Takođe smo potpuno redizajnirali naš sistem izgradnje kako bismo mogli imati zajedničku bazu kodova između verzija widgeta za komentare. Ovaj sistem nam omogućava da koristimo izraze u vreme kompilacije kako bismo uključili samo kod za odgovarajuću verziju UI-a, smanjujući veličinu paketa widgeta.

### Razmišljanje unapred

Prethodni dizajn je trajao od 2019. do sredine 2021. Nadamo se da će ovaj novi izgled nositi nas dalje u budućnost, a naša nova infrastruktura za upravljanje više verzija UI-ja za komentare će omogućiti FastComments da raste bez prekida u našoj korisničkoj bazi tokom vremena.

Srećno komentarisanje!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---