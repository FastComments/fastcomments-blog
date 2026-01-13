---
[category:UI & Customization]
###### [postdate]
# [postlink]Nepročitani komentari su sada istaknuti uz FastComments[/postlink]

{{#unless isPost}}
Ikada ste se vratili na stranicu i želeli da nastavite sa čitanjem dela komentara gde ste stali? FastComments sada stilizuje komentare
koje ste propustili, čineći to lakim.
{{/unless}}

{{#isPost}}

### Šta je novo

Ikada ste se vratili na stranicu i želeli da nastavite sa čitanjem dela komentara gde ste stali? FastComments sada stilizuje komentare
koje ste propustili, čineći to lakim.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar u novom komentaru istaknut." />
</div>

### Kako ga dobiti

Bilo koji komentar koji je izazvao obaveštenje unutar aplikacije (odgovori, odgovori u istoj nit, ili komentari na stranici
na kojoj ste pretplaćeni), biće automatski istaknuti sa korisnikovim avatarom koji blago sjaji. Boju može biti moguće prilagoditi putem CSS
koristeći `is-unread` klasu. Podrazumevano stilizovanje takođe podržava tamni režim.

Dodatno, nova `24hr` CSS klasa je dodata elementima komentara postavljenim u poslednjih 24 časa. Možete koristiti ovo da stilizujete
komentare takođe.

### Zašto istaknuti avatar?

Prepoznajemo da može biti bolje istaknuti ceo komentar. Međutim, ovo ima pitanja čitljivosti i stilizovanja sa
našim kupcima koji su prilagodili platformu da odgovara njihovom proizvodu. Otkrili smo da je blago isticanje avatara prilično neupadljiva
promena u većini slučajeva. Ako je potrebno, sjaj može biti uklonjen i promenjen koristeći pravila prilagođavanja widget-a.

### Na kraju

Znamo da je ova funkcija dugo čekana od strane nekih. Proveli smo vreme birajući stilizovanje koje nije previše upadljivo, ali i dalje korisno, i možda ćemo
napraviti dalja podešavanja na osnovu povratnih informacija.

Živeli!

{{/isPost}}

---