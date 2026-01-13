---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments Dobija Novi Izgled[/postlink]

{{#unless isPost}} FastComments je ažuriran. Saznajte više o ažuriranju i kako ga možete dobiti. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

### Novi Izgled

Do danas, izgled i osećaj FastComments komentatorskog dodatka su se samo postepeno razvijali. Danas predstavljamo
potpuno novu verziju!

Proverite poređenje ispod (povucite klizač za poređenje):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Postojeći Kupci

Budući da veliki deo naše korisničke baze prilagođava komentatorski dodatak, novi UI je potpuno odvojen. Ne bi trebali primetiti
promene dok ne budete migrirani.

### Ko Dobija

Novi kupci koji se prijave od danas automatski će dobiti novi dizajn. Svi naši okviri, biblioteke i
dodaci su ažurirani kako bi uključili novu verziju komentatorskog dodatka FastComments.

### Kraj Životnog Veka Prethodne Verzije

Trenutno ne postavljamo kraj životnog veka prethodne verzije komentatorskog dodatka. To ne znači da nećemo
objaviti jedan u budućnosti. Međutim, kada to uradimo, daćemo razuman period (6 - 12 meseci od objave do povlačenja).

Naš automatski testni paket je ažuriran da podrži različite verzije komentatorskog dodatka, tako da prethodna verzija
nastavlja da dobija kontinuirano automatsko testiranje.

### Tamni Modul i Druge Funkcije

Novi dizajn podržava tamni modul, baš kao i originalni komentatorski dodatak. Sve oznake funkcija i podešavanja su migrirana.

Što se tiče tamnog modula, sa starim UI-jem za komentare, resursi za tamni modul su uvek bili uključeni prilikom učitavanja stranice, čak i ako nisu korišćeni. To je bilo dodatnih 2kb koji su uvek preuzimani na klijenta - čak i ako nisu bili potrebni.

Nova verzija komentatorskog dodatka preuzima ove resurse, uključujući stilizovanje, samo ako je potrebno.

### Podrazumevani Avatar

Podrazumevani avatar koji se koristi u novom UI-ju je drugačiji. Tokom migracije, podrazumevani avatar koji se koristi širom proizvoda u administratorskom panelu i svim obaveštenjima putem e-pošte će takođe biti ažuriran.

### Implijacije Pravila Prilagođavanja

Svesni smo da kada pravimo promene u stilizovanju javnog komentatorskog dodatka, možemo prekinuti prilagođavanja naših kupaca. Ne brinite, imamo vas pokrivene i pregledali smo stilizovanje prilagođenih dodataka kako bismo se uverili da nije došlo do degradacije. Međutim, ako primetite probleme, javite nam.

### Implijacije Performansi

Ukupna veličina komentatorskog dodatka povećana je sa 15.4kb na 17.4kb. Iako smatramo da je blago povećanje veličine paketa zbog poboljšanja u izgledu UI-a vredno toga, planirali smo mere da ga smanjimo.

U celini, novi UI se učitava brže, pošto su više resursa sada kombinovani, što rezultira manjim brojem zahteva.

### Kako Migrirati

#### Putem Podrške

Jednostavno kontaktirajte svog predstavnika za podršku, ili započnite razgovor [ovde](https://fastcomments.com/auth/my-account/help).

#### WordPress

Ako koristite **WordPress**, jednostavno ažurirajte na najnoviju verziju i ažurirajte bilo koje prilagođeno stilizovanje koje možda imate.

#### Prilagođene Integracije

Ako koristite **VanillaJS** komentatorski dodatak, jednostavno promenite:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Na:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Ako koristite **React, Angular, ili Vue** biblioteke, jednostavno ažurirajte na verziju 2.

### Neke Statistike za Tehničke Ljubitelje

Od koncepcije, dizajna, do implementacije, ovo je bio dvomesečni projekat koji je obuhvatao više od **100 datoteka** i promenio više od **devet hiljada linija koda**.

Takođe smo potpuno obnovili naš sistem izgradnje kako bismo mogli da imamo zajedničku bazu koda između verzija komentatorskog dodatka. Ovaj sistem nam omogućava da koristimo izraze u vreme kompilacije kako bismo uključili kod samo za odgovarajuću verziju UI-a, smanjujući veličinu paketa dodatka.

### Razmišljanje o Budućnosti

Prethodni dizajn je trajao od 2019. do sredine 2021. godine. Nadamo se da će nam ovaj novi izgled omogućiti da nastavimo dalje u budućnost, a naša nova infrastruktura za upravljanje višestrukim verzijama UI-a za komentare će omogućiti FastComments-u da raste bez prekida za našu korisničku bazu tokom vremena.

Srećno komentarisanje!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---