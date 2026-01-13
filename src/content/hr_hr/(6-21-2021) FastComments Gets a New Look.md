---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments dobiva novi izgled[/postlink]

{{#unless isPost}} FastComments je ažuriran. Saznajte više o ažuriranju i kako ga možete dobiti. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Novi izgled

Do danas, izgled i osjećaj FastComments widgeta za komentare su se samo postupno razvijali. Danas objavljujemo
potpuno novu verziju!

Pogledajte usporedbu u nastavku (povucite klizač za usporedbu):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Postojeći korisnici

Budući da mnogi naši korisnici prilagođavaju widget za komentare, novi korisnički sučelje držimo potpuno odvojenim. Ne biste trebali primijetiti
promjene dok ne dođe do migracije.

### Tko dobiva novi izgled

Novi korisnici koji se prijave od danas automatski će dobiti novi dizajn. Sve naše biblioteke, okviri i
dodaci su ažurirani kako bi uključili novu verziju widgeta za komentare FastComments.

### Kraj života prethodne verzije

Trenutno ne postavljamo kraj života prethodne verzije widgeta za komentare. To ne znači da to nećemo
objaviti u budućnosti. Međutim, kada to učinimo dat ćemo razuman period (6 - 12 mjeseci od objavljivanja do povlačenja).

Naš automatizirani sustav testiranja je ažuriran za podršku različitim verzijama widgeta za komentare tako da će prethodna verzija
i dalje primati kontinuirano automatizirano testiranje.

### Tamni način i druge značajke

Novi dizajn podržava tamni način, baš kao i originalni widget za komentare. Sve oznake značajki i postavke su migrirane.

Što se tiče tamnog načina, s starim korisničkim sučeljem za komentare, resursi za tamni način su uvijek uključeni prilikom učitavanja stranice, iako nisu
korišteni. To je bilo dodatnih 2kb koje je uvijek preuzimalo klijent - čak i kada nije bilo potrebno.

Nova verzija widgeta za komentare preuzima ove resurse, uključujući stiliziranje, samo ako je to potrebno.

### Zadani avatar

Zadani avatar koji se koristi u novom korisničkom sučelju je drugačiji. Tijekom migracije, zadani avatar korišten tijekom cijelog proizvoda u administracijskom
nadzoru i svim obavijesnim e-porukama također će biti ažuriran.

### Implikacije pravila prilagodbe

Svjesni smo da kada unosimo promjene u stiliziranje widgeta za komentare koji je vidljiv javnosti, možemo pokvariti prilagodbe naših korisnika. Ne brinite, imamo rešenje i pregledali smo stiliziranje svakog prilagođenog widgeta kako bismo osigurali da nije došlo do regresije. Međutim, ako primijetite probleme, javite nam.

### Implikacije performansi

Ukupna veličina widgeta za komentare povećana je s 15.4kb na 17.4kb. Iako smatramo da je malo povećanje veličine paketa
zbog poboljšanog izgleda korisničkog sučelja vrijedno toga, planirali smo mjere kako bismo smanjili ovu veličinu.

Sveukupno, novo korisničko sučelje se učitava brže, budući da su više resursa sada spojeno zajedno, što rezultira manjim brojem zahtjeva.

### Kako migrirati

#### Putem podrške

Jednostavno se obratite svom predstavniku podrške, ili započnite razgovor [ovdje](https://fastcomments.com/auth/my-account/help).

#### WordPress

Ako koristite **WordPress**, jednostavno se nadogradite na najnoviju verziju i ažurirajte bilo kakvo prilagođeno stiliziranje koje možda imate.

#### Prilagođene integracije

Ako koristite widget za komentare **VanillaJS**, jednostavno promijenite:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Na:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Ako koristite biblioteke **React, Angular, ili Vue** jednostavno se nadogradite na verziju 2.

### Neki ekskluzivni statistički podaci

Od koncepta, dizajna, i implementacije, ovo je bio dvomjesečni projekt koji je obuhvatio **100+ datoteka** i
izmijenio preko **devet tisuća linija koda**.

Potpuno smo također redizajnirali naš sustav izgradnje kako bismo mogli imati zajedničku bazu koda između verzija widgeta za komentare. Ovaj sustav nam omogućuje korištenje izraza u vrijeme kompajliranja kako bismo uključili samo kod za odgovarajuću verziju
UI, smanjujući veličinu paketa widgeta.

### Razmišljanje unaprijed

Prethodni dizajn trajao je od 2019. do sredine 2021. Nadamo se da će nas ovaj novi izgled odvesti dalje u budućnost, a naša nova infrastruktura za upravljanje višestrukim verzijama korisničkog sučelja za komentare omogućit će FastCommentsu da raste bez prekida za našu
bazu korisnika tijekom vremena.

Sretno komentiranje!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---