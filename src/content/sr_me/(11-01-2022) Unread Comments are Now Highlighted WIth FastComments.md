---
[category:UI & Customization]
###### [postdate]
# [postlink]Nepročitani komentari sada su istaknuti sa FastComments-om[/postlink]

{{#unless isPost}}
Da li ste se ikada vratili na stranicu i željeli da nastavite čitanje sekcije komentara gde ste stali? FastComments sada stilizuje komentare koje ste propustili, čineći to lakim.
{{/unless}}

{{#isPost}}

### Šta je novo

Da li ste se ikada vratili na stranicu i želeli da nastavite čitanje sekcije komentara gde ste stali? FastComments sada stilizuje komentare koje ste propustili, čineći to lakim.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar u novom komentaru istaknut." />
</div>

### Kako to dobiti

Svaki komentar koji je pokrenuo obaveštenje u aplikaciji (odgovori, odgovori u istoj niti, ili komentari na stranici na kojoj ste pretplaćeni),
automatski će biti istaknut sa korisnikovim avatarom koji blago svetli. Boja se može prilagoditi putem CSS-a koristeći klasu `is-unread`. 
Podrazumevani stil takođe podržava tamni režim.

Pored toga, nova `24hr` CSS klasa je dodata elementima komentara postavljenim u poslednjih 24 časa. Možete to koristiti za stilizovanje komentara takođe.

### Zašto istaknuti avatar?

Prepoznajemo da može biti poželjno istaknuti ceo komentar. Međutim, to ima problema sa čitljivošću i stilizovanjem za naše kupce koji su prilagodili platformu da se uklopi u njihov proizvod. Otkrili smo da je blago isticanje avatara prilično nezapažena promena u većini slučajeva. Ako je poželjno, sjaj se može ukloniti i promeniti koristeći pravila prilagođavanja widget-a.

### Na kraju

Znamo da je ova funkcija dugo čekana od strane nekih. Proveli smo vreme birajući stilizovanje koje nije previše nametljivo, ali i dalje korisno, i možda ćemo izvršiti dodatne prilagodbe na osnovu povratnih informacija.

Živeli!

{{/isPost}}

---