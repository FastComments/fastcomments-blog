---
[category:Features]

###### [postdate]
# [postlink]FastComments sada podržava Markdown[/postlink]

Bogatije iskustvo komentiranja stiglo je na FastComments s upotrebom Markdowa!

{{#isPost}}

Markdown je skup konvencija za stiliziranje teksta. Na primjer, da bismo stvorili podebljani tekst, mogli bismo \*\*to učiniti\*\*.
Umetanje običnih linkova znači samo lijepljenje sirove URL adrese, a slike rade kao i prije.

Evo Markdown cheatsheet-a koji je pružio Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Koju Markdown sintaksu podržava FastComments?

Potpuno podržavamo Markdown, osim naslova. Kada definiramo naslov, jednostavno ga prikazujemo kao običan tekst jer odvlači pažnju od toka razgovora. Naslovi
su za sadržaj poput blog postova i dokumenata - ne za razgovore.

FastComments je oduvijek podržavao slike putem [img]...[/img] sintakse. To će se i dalje podržavati jer je lakše razumjeti nego Markdownov.

### Miješanje sadržaja

Jedan komentar može sadržavati sve oblike formatiranja - markdown, linkove, slike, blokove koda i tablice.

### Izbjegavanje XSF/XSS napada

Prije, FastComments je slala običan tekst putem mreže i obrađivala ga na klijentu. Sada se HTML šalje putem mreže, a mi održavamo dvije verzije svakog komentara
u našoj bazi podataka kako bismo podržali funkcionalnosti poput uređivanja komentara.

Slanje HTML-a izravno u komentare ima svoje rizike - pa se svi generirani komentari obrađuju i čiste kako bi se spriječili napadi između web stranica i okvira.

### Izvoz podataka

Kada izvozite komentare, dobit ćete verziju koju je korisnik vidio kada je pisao svoj komentar. Ako želite dobiti sirovi HTML, kontaktirajte nas.

### Problemi s performansama

Postojanje previše funkcionalnosti ima naviku usporavanja stvari. To nije ono što želimo raditi na FastComments.
Dodavanje ove funkcionalnosti je **smanjilo** veličinu našeg klijentskog widgeta za ~400 bajta - sa 9.53kb na 9.12kb - što znači brže učitavanje stranica.

Iako je teoretski ova funkcionalnost mogla usporiti mehanizam spremanja komentara, nismo primijetili nikakvo pogoršanje performansi i kao i uvijek pratimo naše API-je.

### Kako to dobiti?

Podrška za Markdown automatski je implementirana svim našim korisnicima. Ne biste trebali vidjeti previše promjena u sadržaju objavljenom na vašoj stranici - osim što sada korisnici mogu podebljati, podvući i raditi neke zanimljive stvari
poput stvaranja jednostavnih tablica.

Kao i sa svim izdanjima značajki, radujemo se povratnim informacijama i iako imamo mnogo automatiziranih testova... ako primijetite bilo kakve probleme - javite nam!

Sretno komentiranje.

{{/isPost}}

---