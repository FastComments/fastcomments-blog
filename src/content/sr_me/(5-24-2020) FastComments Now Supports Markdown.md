---
[category:Features]

###### [postdate]
# [postlink]FastComments sada podržava Markdown[/postlink]

Obogaćeno iskustvo komentarisanja stiglo je na FastComments upotrebom Markdown-a!

{{#isPost}}

Markdown je skup konvencija za stilizovanje teksta. Na primer, da bismo napravili podebljanu reč, mogli bismo \*\*uraditi ovo\*\*.
Umetanje običnih linkova znači samo kopiranje sirovog URL-a, a slike funkcionišu kao i pre.

Evo Markdown cheat sheeta, koji je obezbedio Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Koju Markdown sintaksu podržava FastComments?

Potpuno podržavamo Markdown, osim naslova. Kada definišemo naslov, jednostavno ga prikazujemo kao običan tekst jer ometa tok razgovora. Naslovi
su za sadržaj poput blog postova i dokumenata - ne za razgovore.

FastComments je oduvek podržavao slike pomoću [img]...[/img] sintakse. Ovo će ostati podržano jer je lakše za razumevanje od Markdown-ovog.

### Mešanje sadržaja

Jedan komentar može sadržati sve oblike formatiranja - markdown, linkove, slike, delove koda i tabele.

### Izbegavanje XSF/XSS napada

Ranije je FastComments slao običan tekst preko mreže i parsirao ga na klijentu. Sada, HTML se šalje preko mreže, i održavamo dve verzije svakog komentara
u našoj bazi podataka kako bismo podržali funkcionalnosti poput uređivanja komentara.

Slanje HTML-a direktno u komentare ima svoje rizike - tako da se svi generisani komentari parsiraju i čiste kako bi se sprečili napadi preko više sajtova i okvira.

### Izvozi podataka

Prilikom izvoza komentara dobićete verziju koju je korisnik video kada je otkucao svoj komentar. Ako želite da dobijete sirovi HTML, kontaktirajte nas.

### Problemi sa performansama

Dodavanje funkcionalnosti ima običaj da usporava stvari. To nije ono što želimo da radimo na FastComments.
Dodavanje ove funkcionalnosti je **smanjilo** veličinu našeg klijentskog widget-a za ~400 bajtova - sa 9.53kb na 9.12kb - što znači brže učitavanje stranica.

Iako bi teoretski ova funkcionalnost mogla usporiti mehanizam za čuvanje komentara, nismo primetili nikakve degradacije performansi i kao uvek pratimo naše API-je.

### Kako to da dobijem?

Podrška za Markdown je automatski raspoređena svim našim korisnicima. Ne biste trebali da primetite previše promena u sadržaju postavljenom na vaš sajt - osim što sada korisnici mogu da podebljaju, podvuku i rade neke zanimljive stvari
poput pravljenja jednostavnih tabela.

Kao i sa svim izdanjima funkcionalnosti, radujemo se povratnim informacijama i iako imamo mnogo automatizovanog testiranja... ako primetite bilo kakve probleme - javite nam!

Srećno komentarisanje.

{{/isPost}}