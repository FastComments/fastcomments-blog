---
[category:API & Development]
###### [postdate]
# [postlink]Ažuriranje izbornika komentara[/postlink]

{{#unless isPost}}
Ovo ažuriranje je uglavnom za programere koji prilagođavaju FastComments. Napravili smo neke promjene u API-ju i optimizirali neke stvari.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Što je novo

Neki korisnici FastComments prilagođavaju widget za komentare. Ovo stvara ugovor
između vaših prilagodbi i naše implementacije. Dajemo sve od sebe da ne prekinemo ovaj
ugovor, ali kao dio ovog najavljivanja imamo malu promjenu koja može uzrokovati probleme.

### Za programere

CSS selektor za izbornik komentara je promijenjen.

Stari:

    .comment .menu .menu-content

Novi:

    .menu-content

### Postojeći korisnici

Ako već koristite selektor "menu-content" - čestitamo! Prošli smo kroz sve naše
korisnike koji koriste ovaj selektor i ažurirali njihove konfiguracije widgeta kako bismo spriječili prekide.

 javite nam ako imate bilo kakvih problema.

### Razlozi

Od kada je widget za komentare stvoren, izbornik komentara je bio isključivo CSS-driven padajući izbornik. Ovo
je jednostavan, brz način za implementaciju padajućeg izbornika koji također ne zahtijeva mnogo koda - dizajnerski
cilj FastComments.

Međutim, tijekom godina su se pojavili problemi.

Na primjer, kada područje komentara ima specifičnu visinu i može se pomaknuti, kao kod Streaming Chata,
pristup izborniku prema dnu je težak jer će izbornik pokušati ići izvan
površine koja se može pomaknuti. To čini dio izbornika nevidljivim i zahtijeva da
pomičete miša i ponovo pređete preko izbornika kako biste obavili bilo koji posao koji ste upravo pokušavali završiti. Smatrali smo
da je frustrirajuće za korištenje.

Neke su zaobilazne solucije napravljene, poput preokretanja smjera izbornika **gore**,
no to također ne funkcionira ako visina widgeta nije dovoljno visoka i ako se u izborniku nalazi mnogo stavki
- poput onih za administratore. U tom slučaju bi bilo idealno spustiti izbornik
ispod područja koje se može pomaknuti.

### Prednosti veličine

Jedna od prednosti ove promjene je što smo mogli apstrahirati mnogo koda u asinkrono učitavanje
modula. Ovo će nam omogućiti da proširimo akcije koje možete poduzeti na podacima komentara bez dodatnog opterećenja
početnog učitavanja widgeta. Ovo uvodi mrežni poziv kada prvi put pređete preko
izbornika za uređivanje, ali je početni paket vrlo mali (< 1kb) tako da to ne bi trebalo biti vrlo
primjetno.

Vrlo je teško nastaviti razvijati softver i istovremeno smanjivati njegovu veličinu tijekom vremena. Obično softver
počinje brzo, a zatim postaje spor. Zato smo uvijek sretni što možemo raditi na održavanju FastComments brzim:

    Prije: 28.76kb gzipped (108.02kb ukupno)
    Nakon: 28.39kb gzipped (105.79kb ukupno)

Manje koda je također manje koda za vaš preglednik da analizira prilikom učitavanja stranice. Utjecaj ovog će rasti kako se dodaju nove značajke.

### Prednosti performansi

Stari izbornik je renderirao sve stavke izbornika, i učitavao sve ekstenzije kako bi vidio imaju li ekstenzije
stavke za dodati, i također ih renderirao - za svaki komentar - kako bi sadržaj bio spreman za vaš miš.

Obično je obično samo 30 - 100 objekata, tako da to obično nije velika stvar, ali je utjecaj rastao. Novi sustav uklanja tu zabrinutost
jer se izbornik sada renderira samo po potrebi.

Kompenzacija je da je novi izbornik pozicioniran i renderiran korištenjem JS-a kako bismo postigli ono što želimo. Nastavit ćemo
optimizirati ga koliko možemo, ali trenutno dobro funkcionira.

### Zaključak

Zahvaljujemo našim kupcima na strpljenju tijekom uvođenja ovih promjena. Nadamo se da ćete
nastaviti voljeti FastComments.

Živjeli!

{{/isPost}}