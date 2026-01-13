---
[category:API & Development]
###### [postdate]
# [postlink]Ažuriranje menija za komentare[/postlink]

{{#unless isPost}}
Ova ažuriranja su uglavnom za programere koji prilagođavaju FastComments. Napravili smo neka API podešavanja i optimizacije.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Neki FastComments zakupci prilagođavaju vidžet za komentare. To stvara ugovor
između vaših prilagođavanja i naše implementacije. Trudimo se da ne prekršimo ovaj
ugovor, ali kao deo ove objave imamo jednu malu promenu koja može uzrokovati probleme.

### Za programere

CSS selektor za meni komentara je promenjen.

Stari:

    .comment .menu .menu-content

Novi:

    .menu-content

### Postojeći zakupci

Ako već koristite "menu-content" selektor - čestitamo! Prošli smo kroz sve naše
zakupce koji koriste ovaj selektor i ažurirali njihove konfiguracije vidžeta kako bismo sprečili prekide.

Javite nam ako imate bilo kakvih problema.

### Objašnjenje

Od kada je vidžet za komentare kreiran, meni komentara je bio isključivo CSS-driven padajući meni. Ovo
je jednostavan i brz način da implementirate padajući meni koji takođe ne zahteva mnogo koda - dizajnerski
cilj FastComments.

Međutim, tokom godina su se pojavili problemi.

Na primer, kada područje komentara ima određenu visinu i može se pomerati, poput Streaming Chata,
pristupanje meniju prema dnu je teško jer će meni pokušati da ide izvan
pomerljive površine s sadržajem. To čini deo menija nevidljivim i zahteva da
pomaknete miš i ponovo pređete mišem preko menija da biste uradili šta god ste pokušavali da završite. Smatrali smo
da je korišćenje frustrirajuće.

Napravili su se neka rešenja, kao što je preokretanje pravca menija **gore**,
ali ovo takođe ne funkcioniše ako visina vidžeta nije dovoljno visoka i ima mnogo stavki
aktivnosti u meniju - poput onih za administratore. U ovom slučaju, bilo bi idealno da se meni spusti
ispod pomerljivog sadržaja.

### Prednosti veličine

Jedna od prednosti ove promene je to što smo mogli da apstrahujemo mnogo koda u modulu koji se učitava asinhrono.
Ovo će nam omogućiti da proširimo akcije koje možete preduzeti na podacima o komentarima bez da učitavanje
vidžeta bude preveliko. Ovo uvodi mrežni poziv prvi put kada pređete mišem
preko menija za uređivanje, ali je početni paket veoma mali (< 1kb) tako da ovo ne bi trebalo da bude previše primetno.

Veoma je teško nastaviti sa razvojem softvera i takođe smanjiti njegovu veličinu tokom vremena. Obično softver
počinje brzo i postaje spor. Zato smo uvek srećni kada možemo da zadržimo FastComments brzim:

    Pre: 28.76kb gzipped (108.02kb ukupno)
    Posle: 28.39kb gzipped (105.79kb ukupno)

Manje koda takođe znači manje koda za vaš pregledač da analizira pri učitavanju stranice. Uticaj ovoga će se povećavati dok se dodaju nove funkcije.

### Prednosti performansi

Stari meni je prikazivao sve stavke menija, i učitavao sve ekstenzije da vidi da li ekstenzije
imaju stavke za dodavanje, i prikazivao i njih - za svaki komentar - kako bi sadržaj bio spreman za vaš miš.

Obično postoji samo 30 - 100 objekata, tako da to obično nije veliki problem, ali uticaj je rasao. Novi sistem uklanja ovu brigu
jer se meni sada prikazuje samo na zahtev.

Trgovina je u tome što je novi meni postavljen i prikazan pomoću JS kako bi se postiglo ono što želimo. Nastavićemo
da ga optimizujemo koliko možemo, međutim trenutno se dobro ponaša.

### Na kraju

Zahvaljujemo našim kupcima na strpljenju prilikom primene ovih izmena. Nadamo se da ćete
nastaviti da volite FastComments.

Živeli!

{{/isPost}}