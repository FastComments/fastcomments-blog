---
[category:API & Development]
###### [postdate]
# [postlink]Ažuriranje menija komentara[/postlink]

{{#unless isPost}}
Ovo ažuriranje je prvenstveno za programere koji prilagođavaju FastComments. Napravili smo neka API poboljšanja i optimizacije.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Neki korisnici FastComments prilagođavaju widget za komentare. Ovo stvara ugovor
između vaših prilagođavanja i naše implementacije. Dajemo sve od sebe da ne prekinemo ovaj
ugovor, ali kao deo ove najave imamo malu prekidajuću promenu.

### Za programere

CSS selektor za meni komentara je promenjen.

Stari:

    .comment .menu .menu-content

Novi:

    .menu-content

### Postojeći korisnici

Ako već koristite selektor "menu-content" - čestitamo! Prošli smo kroz sve naše
korisnike koji koriste ovaj selektor i ažurirali njihove konfiguracije widgeta da sprečimo probleme.

 javite nam ako imate bilo kakvih problema.

### Objašnjenje

Pošto je widget za komentare napravljen, meni komentara je bio isključivo CSS-om vođen padajući meni. Ovo
je jednostavan, brz način da implementirate padajući meni koji takođe ne zahteva mnogo koda - dizajnerski
cilj FastComments.

Međutim, tokom godina se pojavilo nekoliko problema.

Na primer, kada oblast za komentare ima određenu visinu i može se skrolovati, kao kod Streaming Chat-a,
pristup meniju na dnu je težak jer će meni pokušati da ode van
oblasti skrolovanja. To čini deo menija nevidljivim i zahteva da
pomeriš miš i ponovo pređeš preko menija da izvršiš bilo koji posao koji si pokušavao da završiš. Smatrali smo
da je to frustirajuće za korišćenje.

Neki alternativni načini su implementirani, kao preokretanje pravca menija **naviše**,
ali ovo takođe ne radi ako visina widgeta nije dovoljna i postoji mnogo stavki u meniju - kao za administratore. U ovom slučaju bi bilo idealno da se meni spusti
ispod oblasti skrolovanja.

### Prednosti veličine

Jedna od prednosti ove promene je ta što smo uspeli da apstrahujemo mnogo koda u asinkrono učitavajući
modul. Ovo će nam omogućiti da proširimo akcije koje možete preduzeti na podacima o komentarima bez pravljenja
inicijalnog učitavanja widgeta prekomernim. Ovo uvodi mrežni poziv prvi put kada pređete mišem
preko menija za uređivanje, ali je početni paket vrlo mali (< 1kb) pa ovo ne bi trebalo biti jako primetno.

Veoma je teško nastaviti da evoluirate softver i takođe smanjite njegovu veličinu tokom vremena. Obično softver
 počinje brzo, a postaje spor. Dakle, uvek smo srećni kada možemo da zadržimo FastComments brzim:

    Pre: 28.76kb gzipped (108.02kb total)
    Posle: 28.39kb gzipped (105.79kb total)

Manje koda takođe znači manje koda koji vaš pretraživač mora da analizira prilikom učitavanja stranice. Uticaj ovog će rasti kako se dodaju nove funkcije.

### Prednosti performansi

Stari meni je prikazivao sve stavke menija, i učitavao sve ekstenzije da vidi da li ekstenzije
imaju stavke koje treba dodati, i prikazivao ih takođe - za svaki komentar - tako da je sadržaj bio spreman za vaš miš.

Obično ima samo 30 - 100 objekata pa to obično nije velika stvar, ali uticaj je rastao. Novi sistem uklanja ovu zabrinutost
jer se meni sada prikazuje samo na zahtev.

Kompenzacija je ta da je novi meni pozicioniran i prikazan koristeći JS da postigne ono što želimo. Nastavićemo
da ga optimizujemo koliko možemo, međutim trenutno se dobro ponaša.

### U zaključku

Hvala našim korisnicima na strpljenju prilikom uvođenja ovih promena. Nadamo se da ćete
nastaviti da volite FastComments.

Živeli!

{{/isPost}}

---