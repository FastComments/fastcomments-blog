---
[category:UI & Customization]
###### [postdate]
# [postlink]Nepročitani komentari su sada istaknuti sa FastComments[/postlink]

{{#unless isPost}}
Da li ste se ikada vratili na stranicu i želeli da nastavite sa čitanjem komentara odakle ste stali? FastComments sada stilizuje komentare koje ste propustili, što to čini lakšim.
{{/unless}}

{{#isPost}}

### Šta je novo

Da li ste se ikada vratili na stranicu i želeli da nastavite sa čitanjem komentara odakle ste stali? FastComments sada stilizuje komentare koje ste propustili, što to čini lakšim.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar u novom istaknutom komentaru." />
</div>

### Kako to dobiti

Svaki komentar koji je izazvao obaveštenje unutar aplikacije (odgovori, odgovori u istoj niti, ili komentari na stranici kojoj ste se prijavili), automatski će biti istaknut sa korisnikovim avatarom koji blago sija. Boju možete prilagoditi putem CSS-a koristeći `is-unread` klasu. Podrazumevano stilizovanje takođe podržava tamni mod.

Pored toga, nova `24hr` CSS klasa je dodata elementima komentara postavljenim u poslednjih 24 sata. Možete koristiti ovo za stilizovanje komentara takođe.

### Zašto istaknuti avatar?

Prepoznajemo da bi možda bilo bolje istaknuti ceo komentar. Međutim, to ima problema sa čitljivošću i stilizovanjem kod naših kupaca koji su prilagodili platformu da odgovara njihovom proizvodu. Otkrili smo da je blago isticanje avatara prilično nenametljiva promena u većini slučajeva. Ako želite, sjaj se može ukloniti i promeniti koristeći pravila prilagođavanja widgeta.

### U zaključku

Znamo da su neki dugo čekali ovu funkciju. Potrošili smo vreme birajući stilizovanje koje nije previše nametljivo, ali ipak korisno, i možda ćemo napraviti dodatne prilagodbe na osnovu povratnih informacija.

Živeli!

{{/isPost}}

---