---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments dobija novi izgled[/postlink]

{{#unless isPost}} FastComments je ažuriran. Saznajte više o ažuriranju i kako ga možete dobiti. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Novi izgled

Do danas, izgled i osećaj FastComments komentatorskog vidžeta su se samo postepeno razvijali. Danas objavljujemo
potpuno novu verziju!

Pogledajte poređenje ispod (povucite klizač da uporedite):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Postojeći klijenti

Budući da većina naših korisnika prilagođava komentatorski vidžet, novi UI smo potpuno odvojili. Ne bi trebali da primetite
nikakve promene dok ne budete migrirani.

### Ko to dobija

Novi klijenti koji se prijave od danas automatski će dobiti novi dizajn. Svi naši okviri, biblioteke i
pluginovi su ažurirani da uključuju novu verziju FastComments komentatorskog vidžeta.

### Krajnji rok za prethodnu verziju

Trenutno ne postavljamo krajnji rok za prethodnu verziju komentatorskog vidžeta. To ne znači da nećemo
objaviti jedan u budućnosti. Međutim, kada to učinimo, daćemo razuman period (6 - 12 meseci od objavljivanja do povlačenja).

Naš automatski testni set je ažuriran da podrži različite verzije komentatorskog vidžeta kako bi prethodna verzija
i dalje imala kontinualno automatsko testiranje.

### Tamni režim i druge funkcije

Novi dizajn podržava tamni režim, baš kao i originalni komentatorski vidžet. Svi oznake funkcija i podešavanja su migrirani.

Što se tiče tamnog režima, sa starim UI-jem, sredstva za tamni režim su uvek bila uključena prilikom učitavanja stranice čak i ako nisu
bila korišćena. To je bilo dodatnih oko 2kb koja su uvek preuzimana od klijenta - čak i ako nisu bila potrebna.

Nova verzija komentatorskog vidžeta preuzima ova sredstva, uključujući stilizaciju, samo ako je to potrebno.

### Podrazumevani avatar

Podrazumevani avatar korišćen u novom UI je drugačiji. Tokom migracije, podrazumevani avatar koji se koristi u celom proizvodu u
administrativnoj kontrolnoj tabli i svim obaveštenjima putem email-a biće takođe ažuriran.

### Implifikacije pravila prilagođavanja

Svesni smo da kada pravimo promene stilizacije u javno dostupnom komentatorskom vidžetu, možemo prekinuti prilagođavanja naših
klijenata. Ne brinite, obezbedili smo vas i pregledali smo svako prilagođeno stilizovanje vidžeta da se uverimo da nije
povučeno. Ipak, ako imate problema, javite nam.

### Impikacije performansi

Ukupna veličina komentatorskog vidžeta povećana je sa 15.4kb na 17.4kb. Iako verujemo da je blagi porast u veličini paketa
za koliko je UI bolji vredan toga, planirali smo mere kako bismo to smanjili.

Uopšteno, novi UI se učitava brže, jer su sada više sredstava pakovana zajedno, što dovodi do manjeg broja zahteva.

### Kako migrirati

#### Putem podrške

Jednostavno kontaktirajte svog predstavnika za podršku ili započnite razgovor [ovde](https://fastcomments.com/auth/my-account/help).

#### WordPress

Ako koristite **WordPress**, jednostavno se nadogradite na najnoviju verziju i ažurirajte bilo kakvu prilagođenu stilizaciju koju možda imate.

#### Prilagođene integracije

Ako koristite **VanillaJS** komentatorski vidžet, jednostavno promenite:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Na:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Ako koristite **React, Angular ili Vue** biblioteke, jednostavno se nadogradite na verziju 2.

### Neki neobični statistički podaci

Od koncepta, dizajna, do implementacije, ovo je bio dvomesečni projekat koji je obuhvatao više od **100+ datoteka** i
izmenio preko **devet hiljada linija koda**.

Takođe smo potpuno obnovili naš sistem izgradnje kako bismo mogli imati zajedničku osnovu koda između verzija komentatorskog
vidžeta. Ovaj sistem nam omogućava da koristimo izraze u vreme kompajliranja kako bismo uključili samo kod za odgovarajuću verziju
UI, smanjujući veličinu paketa vidžeta.

### Razmišljanje unapred

Prethodni dizajn nam je trajao od 2019. do sredine 2021. godine. Nadamo se da će ovaj novi izgled da nas odvede dalje u budućnost,
a naša nova infrastruktura za upravljanje više verzija komentatorskog UI-a omogućiti FastComments-u da raste bez prekida za našu
bazu klijenata tokom vremena.

Srećno komentarisanje!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---