---
[category:Features]

###### [postdate]
# [postlink]FastComments sada podržava Markdown[/postlink]

Bogatije iskustvo komentarisanja je stiglo u FastComments uz korištenje Markdowa!

{{#isPost}}

Markdown je skup konvencija za stilizovanje teksta. Na primer, da bismo napravili podebljanu reč, mogli bismo \*\*uraditi ovo\*\*.
Ubacio normalne linkove znači samo nalepiti sirovi URL, a slike rade kao i ranije.

Evo Markdown uputstva, koje je obezbedio Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Koju Markdown sintaksu podržava FastComments?

Potpuno podržavamo Markdown, osim naslova. Kada definišemo naslov, jednostavno ga prikazujemo kao običan tekst jer ometaju tok razgovora. Naslovi
su za sadržaj poput blog postova i dokumenata - ne za razgovore.

FastComments je oduvek podržavao slike putem [img]...[/img] sintakse. Ovo će i dalje biti podržano jer je lakše razumeti nego Markdown-ovu.

### Mešanje sadržaja

Jedan komentar može sadržavati sve oblike formatiranja - markdown, linkove, slike, kodne isječke i tabele.

### Izbegavanje XSF/XSS napada

Prethodno, FastComments je slao običan tekst preko mreže i analizirali smo ga na klijentu. Sada, HTML se šalje preko mreže, i održavamo dve verzije svakog komentara
u našoj bazi podataka kako bismo podržali funkcionalnosti poput uređivanja komentara.

Slanje HTML-a direktno u komentare nosi svoje rizike - tako da se svi generisani komentari analiziraju i čiste kako bi se sprečili napadi preko različitih sajtova i okvira.

### Izvozi podataka

Kada izvezete komentare, dobićete verziju koju je korisnik video kada je ukucao svoj komentar. Ako želite da dobijete sirovi HTML, kontaktirajte nas.

### Zabrinutosti oko performansi

Dodavanje funkcionalnosti ima običaj usporavati stvari. To nije ono što želimo da radimo u FastComments.
Dodavanje ove funkcije je **smanjilo** veličinu našeg klijentskog widget-a za ~400 bajtova - sa 9.53kb na 9.12kb - što znači brže učitavanje stranica.

Dok bi teoretski ova funkcija mogla usporiti mehanizam za čuvanje komentara, nismo primetili nikakva pogoršanja u performansama i kao i uvek pratimo naše API-je.

### Kako to da dobijem?

Podrška za Markdown je automatski implementirana svim našim klijentima. Ne biste trebali primetiti previše promena u sadržaju postavljenom na vaš sajt - osim što sada korisnici mogu podebljati, podvući i raditi neke zanimljive stvari
poput pravljenja jednostavnih tabela.

Kao i sa svim izdavanjima funkcionalnosti, radujemo se povratnim informacijama i iako imamo mnogo automatizovanih testiranja... ako primetite bilo kakve probleme - javite nam!

Srećno komentarisanje.

{{/isPost}}

---