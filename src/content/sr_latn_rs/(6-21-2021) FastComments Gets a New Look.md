---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments dobija novi izgled[/postlink]

{{#unless isPost}} FastComments je ažuriran. Saznajte više o ažuriranju i kako ga možete dobiti. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Novi Izgled

Do danas, izgled i osećaj FastComments komentarskog vidgeta su se samo postepeno menjali. Danas objavljujemo
potpuno novu verziju!

Pogledajte poređenje u nastavku (pomaknite klizač za poređenje):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Postojeći Kupci

Budući da veliki deo naše korisničke baze prilagođava komentarski vidget, novi UI ćemo potpuno odvojiti. Ne biste trebali videti
promene dok se ne migrirate.

### Ko to dobija

Novi kupci koji se prijave od danas automatski će dobiti novi dizajn. Svi naši okviri, biblioteke i
pluginovi su ažurirani kako bi uključili novu verziju FastComments komentarskog vidgeta.

### Kraj podrške za prethodnu verziju

Trenutno ne postavljamo kraj podrške za prethodnu verziju komentarskog vidgeta. To ne znači da u budućnosti nećemo
najaviti jedan. Međutim, kada to učinimo, daćemo razuman rok (6 - 12 meseci od najave do povlačenja).

Naš automatski testni paket je ažuriran kako bi podržao različite verzije komentarskog vidgeta tako da će prethodna verzija
i dalje primati kontinuirano automatsko testiranje.

### Tamni Mod & Druge Karakteristike

Novi dizajn podržava tamni mod, baš kao i originalni komentarski vidget. Sve oznake i podešavanja funkcija su migrirane.

Što se tiče Tamnog Moda, sa starim komentar UI, resursi za Tamni Mod su uvek bili uključeni prilikom učitavanja stranice čak i kada
nisu korišćeni. To je bilo dodatnih 2kb koji su uvek preuzimani na klijent - čak i ako nisu bili potrebni.

Nova verzija komentarskog vidgeta preuzima ove resurse, uključujući stilizaciju, samo ako je to potrebno.

### Podrazumevani Avatar

Podrazumevani avatar korišćen u novom UI se razlikuje. Prilikom migracije, podrazumevani avatar korišćen u celom proizvodu u admin
kontrolnoj tabli i svim obaveštenjima putem e-pošte će takođe biti ažuriran.

### Implkacije pravila prilagođavanja

Svesni smo da kada pravimo promene u stilu javnog komentarskog vidgeta, možemo prekinuti prilagođavanja naših
kupaca. Ne brinite, pokrili smo vas i pregledali smo stilove prilagođenih vidgeta kako bismo se uverili da
nisu degradirani. Međutim, ako primetite probleme, javite nam.

### Implkacije performansi

Ukupna veličina komentarskog vidgeta povećana je sa 15.4kb na 17.4kb. Dok mislimo da je blago povećanje veličine paketa
zbog bolje vizuelne prezentacije vredno toga, planirali smo mere za smanjenje nazad.

U celini, novi UI se učitava brže, pošto su sada više resursa spojeni zajedno, što rezultira manjim brojem zahteva.

### Kako migrirati

#### Putem podrške

Jednostavno kontaktirajte svog predstavnika za podršku ili započnite razgovor [ovde](https://fastcomments.com/auth/my-account/help).

#### WordPress

Ako koristite **WordPress**, jednostavno nadogradite na najnoviju verziju i ažurirajte sve prilagođene stilove koje možda imate.

#### Prilagođene integracije

Ako koristite **VanillaJS** komentarski vidget, jednostavno promenite:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Na:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Ako koristite **React, Angular, ili Vue** biblioteke, jednostavno nadogradite na verziju 2.

### Neki "nerdski" statistički podaci

Od koncepcije, dizajna, i implementacije, ovo je bio projekat koji je trajao dva meseca i obuhvatio
**100+ datoteka** i promenio preko **devet hiljada linija koda**.

Takođe smo potpuno obnovili naš sistem gradnje kako bismo mogli imati zajedničku bazu koda između verzija komentarskog
vidgeta. Ovaj sistem nam omogućava da koristimo izraze vremena kompajliranja da uključimo samo kod za odgovarajuću verziju
UI, smanjujući veličinu paketa vidgeta.

### Razmišljanje unapred

Prethodni dizajn je trajao od 2019. do sredine 2021. godine. Nadamo se da će ovaj novi izgled voditi nas dalje u budućnost, a naša
nova infrastruktura za upravljanje više verzija komentarskog UI-a će omogućiti FastComments da raste bez prekida za naše
kupce tokom vremena.

Srećno komentarisanje!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---