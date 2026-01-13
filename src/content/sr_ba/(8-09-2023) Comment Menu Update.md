---
[category:API & Development]
###### [postdate]
# [postlink]Ažuriranje menija komentara[/postlink]

{{#unless isPost}}
Ovo ažuriranje je uglavnom za programere koji prilagođavaju FastComments. Napravili smo neka API poboljšanja i neke optimizacije.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Neki FastComments korisnici prilagođavaju vidžet komentara. Ovo stvara ugovor
između vaših prilagodbi i naše implementacije. Dajemo sve od sebe da ne prekinemo ovaj
ugovor, ali kao deo ove najave imamo malu promenu koja nekompatibilna.

### Za programere

CSS selektor za meni komentara je promenjen.

Stari:

    .comment .menu .menu-content

Novi:

    .menu-content

### Postojeći korisnici

Ako već koristite "menu-content" selektor - čestitamo! Proučili smo sve naše
korisnike koji koriste ovaj selektor i ažurirali njihove konfiguracije vidžeta kako bismo sprečili probleme.

Obavestite nas ako imate bilo kakvih problema.

### Razlozi

Od kada je stvoren vidžet komentara, meni komentara je isključivo bio padajući meni vođen CSS-om. 
Ovo je jednostavan, brz način implementacije padajućeg menija koji takođe ne zahteva mnogo koda - dizajnerski
cilj FastComments.

Međutim, tokom godina, pojavljivali su se problemi.

Na primer, kada prostor za komentare ima određenu visinu i može se skrolovati, kao u slučaju Streaming Chata,
pristup meniju ka dnu je težak jer će se meni pokušati pomeriti van
prostora koji se može skrolovati. Ovo čini deo menija nevidljivim i zahteva da
pomerite miša i ponovo pređete preko menija da biste završili ono što ste pokušavali da uradite. Smatrali smo
da je frustrirajuće koristiti ga.

Neki alternativni načini su napravljeni, kao što je preokretanje pravca menija **gore**,
ali to takođe ne funkcioniše ako visina vidžeta nije dovoljna i ako ima mnogo akcija
u meniju - kao za administratore. U ovom slučaju bi bilo idealno spustiti meni 
ispod prostora koji se može skrolovati.

### Prednosti veličine

Jedna od prednosti ove promene je da smo mogli da apstrahujemo mnogo koda u asinkrono učitavajući
modul. Ovo će nam omogućiti da proširimo akcije koje možete preduzeti na komentarskim podacima bez kljucanja
inicijalnog učitavanja vidžeta. Ovo uvodi mrežni poziv prvi put kada pređete mišem
preko menija za uređivanje, ali je inicijalni paket vrlo mali (< 1kb) tako da ovo ne bi trebalo biti vrlo primetno.

Veoma je teško nastaviti sa razvojem softvera i takođe smanjivati njegovu veličinu tokom vremena. Obično softver
počinje brzo i postaje spor. Dakle, uvek smo srećni da radimo na tome da FastComments ostane brz:

    Pre: 28.76kb gzipped (108.02kb ukupno)
    Posle: 28.39kb gzipped (105.79kb ukupno)

Manje koda takođe znači manje koda koji vaš pretraživač mora da analizira pri učitavanju stranice. Uticaj ovoga će rasti kako se dodaju nove funkcije.

### Prednosti performansi

Stari meni je učitavao sve stavke menija i učitavao sve ekstenzije da vidi da li ekstenzije
imaju stavke za dodavanje, i to je takođe učitavao - za svaki komentar - kako bi sadržaj bio spreman za vaš miš.

Obično ima samo 30 - 100 objekata pa to obično nije velika stvar, ali uticaj je rastao. Novi sistem uklanja ovu brigu
jer se meni sada učitava samo na zahtev.

Kompenzacija je ta što je novi meni pozicioniran i renderovan koristeći JS da bi ostvario ono što želimo. 
Nastavićemo da ga optimizujemo koliko možemo, međutim trenutno se dobro ponaša.

### U zaključnoj reči

Zahvaljujemo našim kupcima na strpljenju prilikom uvođenja ovih promena. Nadamo se da ćete
nastaviti da volite FastComments.

Pozdrav!

{{/isPost}}