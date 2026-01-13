---
[category:API & Development]
###### [postdate]
# [postlink]Ažuriranje Menija za Komentare[/postlink]

{{#unless isPost}}
Ovo ažuriranje je uglavnom namenjeno programerima koji prilagođavaju FastComments. Napravili smo neka API poboljšanja i optimizacije.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Jezik

### Šta je Novo

Neki FastComments korisnici prilagođavaju vidžet za komentare. Ovo stvara ugovor
između vaših prilagođavanja i naše implementacije. Dajemo sve od sebe da ne prekršimo ovaj
ugovor, ali kao deo ove objave imamo malu promenu koja može napraviti probleme.

### Za Programere

CSS selektor za meni komentara je promenjen.

Stari:

    .comment .menu .menu-content

Novi:

    .menu-content

### Postojeći Korisnici

Ako već koristite selektor "menu-content" - čestitamo! Pregledali smo sve naše
korisnike koji koriste ovaj selektor i ažurirali njihove konfiguracije vidžeta kako bismo sprečili greške.

Javite nam ako imate bilo kakve probleme.

### Razlozi

Od kada je vidžet za komentare napravljen, meni komentara je bio isključivo CSS-driven padajući meni. Ovo
je lep, jednostavan i brz način implementacije padajućeg menija koji takođe ne zahteva mnogo koda - dizajnerski
cilj FastComments-a.

Međutim, tokom godina pojavili su se problemi.

Na primer, kada područje za komentare ima određenu visinu i može se skrolovati, kao u slučaju Streaming Chata,
pristup meniju ka dnu je otežan jer će meni pokušati da ide izvan
područja koje se može skrolovati. Ovo čini deo menija nevidljivim i zahteva da
pomaknete miš i ponovo zadržite iznad menija kako biste obavili ono što ste pokušavali da završite. Smatrali smo
da je to frustrirajuće za korišćenje.

Neki workaround-ovi su napravljeni, kao preokretanje pravca menija **nagore**,
ali ovo takođe ne funkcioniše ako visina vidžeta nije dovoljno visoka i ako ima mnogo stavki
u meniju - kao za administratore. U ovom slučaju bi bilo idealno spustiti meni
ispod područja koje se može skrolovati.

### Prednosti Veličine

Jedna od prednosti ove promene je što smo mogli da apstraktujemo mnogo koda u asinkrono učitavani
modul. Ovo će nam omogućiti da proširimo akcije koje možete preduzeti na podacima o komentarima bez
upumpavanja početnog učitavanja vidžeta. Ovo introdukuje mrežni poziv prvi put kada zadržite
iznad menija za uređivanje, ali je početni paket vrlo mali (< 1kb) tako da ovo ne bi trebalo da bude veoma primetno.

Veoma je teško nastaviti da razvijate softver i takođe smanjujete njegovu veličinu tokom vremena. Obično softver
počinje brzo, a zatim usporava. Dakle, uvek smo srećni kada možemo da održavamo FastComments brzim:

    Pre: 28.76kb gzipped (108.02kb ukupno)
    Posle: 28.39kb gzipped (105.79kb ukupno)

Manje koda takođe znači manje koda koji vaš pregledač treba da parsira prilikom učitavanja stranice. Uticaj ovog će rasti kako se dodaju nove funkcije.

### Prednosti Performansi

Stari meni je učitavao sve stavke menija, i učitavao sve ekstenzije da vidi da li ekstenzije
imaju stavke za dodavanje, i takođe ih prikazivao - za svaki komentar - kako bi sadržaj bio spreman za vaš miš.

Obično ima samo 30 - 100 objekata, tako da to obično nije veliki problem, ali je uticaj rastao. Novi sistem uklanja ovu brigu
jer se meni sada prikazuje samo na zahtev.

Kompenzacija je to što je novi meni pozicioniran i prikazan korišćenjem JS da bismo postigli ono što želimo. 
Nastavićemo da ga optimizujemo koliko god možemo, međutim trenutno dobro funkcioniše.

### Na Zaključak

Zahvaljujemo našim korisnicima na strpljenju pri uvođenju ovih promena. Nadamo se da ćete
i dalje voleti FastComments.

Pozdrav!

{{/isPost}}