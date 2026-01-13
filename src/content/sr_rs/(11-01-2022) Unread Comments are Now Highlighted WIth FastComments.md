---
[category:UI & Customization]
###### [postdate]
# [postlink]Nepročitani komentari su sada istaknuti sa FastComments[/postlink]

{{#unless isPost}}
Da li ste se ikada vratili na stranicu i želeli da nastavite da čitate sekciju komentara gde ste stali? FastComments sada stilizuje komentare
koje ste propustili, čineći to lakim.
{{/unless}}

{{#isPost}}

### Šta je novo

Da li ste se ikada vratili na stranicu i želeli da nastavite da čitate sekciju komentara gde ste stali? FastComments sada stilizuje komentare
koje ste propustili, čineći to lakim.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar u novom komentaru istaknuto." />
</div>

### Kako to dobiti

Svaki komentar koji je pokrenuo obaveštenje unutar aplikacije (odgovori, odgovori u istoj niti, ili komentari na stranici
na koju ste pretplaćeni) biće automatski istaknut sa korisnikovim avatarom koji blago sija. Boja se može prilagoditi preko CSS-a
koristeći klasu `is-unread`. Podrazumevano stilizovanje takođe podržava tamni režim.

Pored toga, nova `24hr` CSS klasa je dodata elementima komentara postavljenim u poslednjih 24 sata. Možete ovo koristiti da stilizujete
komentare takođe.

### Zašto istaknuti avatar?

Razumemo da bi moglo biti poželjno istaknuti ceo komentar. Međutim, to ima probleme sa čitljivošću i stilizovanjem kod
naših klijenata koji su prilagodili platformu da se uklopi u njihov proizvod. Otkrili smo da je blago isticanje avatara prilično neupadljiva
promena u većini slučajeva. Ako je potrebno, sjaj se može ukloniti i promeniti koristeći pravila prilagođavanja vidžeta.

### Zaključak

Znamo da su neki dugo čekali ovu funkciju. Proveli smo vreme birajući stilizovanje koje nije previše upadljivo, ali i dalje korisno, i možda ćemo
napraviti dodatne izmene na osnovu povratnih informacija.

Živeli!

{{/isPost}}