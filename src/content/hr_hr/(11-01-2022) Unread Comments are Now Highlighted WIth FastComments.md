---
[category:UI & Customization]
###### [postdate]
# [postlink]Nepročitani komentari sada su istaknuti uz FastComments[/postlink]

{{#unless isPost}}
Jeste li se ikada vratili na stranicu i htjeli nastaviti čitati odjeljak s komentarima gdje ste stali? FastComments sada stilizira komentare
koje ste propustili, čineći to jednostavnim.
{{/unless}}

{{#isPost}}

### Što je novo

Jeste li se ikada vratili na stranicu i htjeli nastaviti čitati odjeljak s komentarima gdje ste stali? FastComments sada stilizira komentare
koje ste propustili, čineći to jednostavnim.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar u novom istaknutom komentaru." />
</div>

### Kako to dobiti

Svaki komentar koji je izazvao obavijest unutar aplikacije (odgovori, odgovori u istom nizu, ili komentari na stranici
na kojoj ste pretplaćeni), automatski će biti istaknut s korisnikovim avatarom koji lagano svijetli. Boja se može prilagoditi putem CSS-a
koristeći `is-unread` klasu. Zadano stiliziranje također podržava tamni način.

Dodatno, nova `24hr` CSS klasa je dodana elementima komentara objavljenim unutar posljednja 24 sata. Možete koristiti ovo za stiliziranje
komentara također.

### Zašto istaknuti avatar?

Priznajemo da bi moglo biti poželjno istaknuti cijeli komentar. Međutim, to ima probleme s čitljivošću i stiliziranjem kod
naših klijenata koji su prilagodili platformu da odgovara njihovom proizvodu. Utvrdili smo da je blago isticanje avatara prilično neupadljiva
promjena u većini slučajeva. Ako želite, sjaj se može ukloniti i promijeniti koristeći pravila prilagodbe widgeta.

### Na kraju

Znamo da su neki dugo čekali ovu funkciju. Proveli smo vrijeme birajući stiliziranje koje nije previše upadljivo, ali ipak korisno, i možda ćemo
napraviti daljnje prilagodbe na temelju povratnih informacija.

Živjeli!

{{/isPost}}

---