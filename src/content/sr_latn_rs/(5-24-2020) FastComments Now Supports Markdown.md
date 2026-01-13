---
[category:Features]

###### [postdate]
# [postlink]FastComments Sada Podržava Markdown[/postlink]

Bogatija iskustva u komentisanju su stigla na FastComments uz upotrebu Markdown-a!

{{#isPost}}

Markdown je skup konvencija za stilizovanje teksta. Na primer, da bismo kreirali podebljanu reč mogli bismo \*\*to uraditi\*\*.
Ubacivanje običnih linkova znači samo kopirati sirovi URL, a slike rade kao i ranije.

Evo Markdown cheat sheet-a, koji je obezbedio Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Koju Markdown sintaksu FastComments podržava?

Potpuno podržavamo Markdown, osim naslova. Kada definišemo naslov, jednostavno ga prikazujemo kao običan tekst jer odvraća pažnju od toka razgovora. Naslovi
su za sadržaj kao što su blog postovi i dokumenti - ne za razgovore.

FastComments je uvek podržavao slike putem [img]...[/img] sintakse. Ovo će biti i dalje podržano jer je lakše za razumevanje od Markdown-ove.

### Mešanje sadržaja

Jedan komentar može sadržati sve oblike formatiranja - markdown, linkove, slike, delove koda, i tabele.

### Izbegavanje XSF/XSS Napada

Prethodno je FastComments slalo običan tekst preko mreže i analiziralo ga na klijentu. Sada se HTML šalje preko mreže, a mi održavamo dve verzije svakog komentara
u našoj bazi podataka kako bismo podržali funkcionalnosti poput uređivanja komentara.

Slanje HTML-a direktno u komentare nosi određene rizike - tako da se svi generisani komentari analiziraju i čiste kako bi se sprečili napadi između sajtova i između okvira.

### Izvozi podataka

Kada izvozite komentare, dobićete verziju koju je korisnik video kada je napisao svoj komentar. Ako želite da dobijete sirovi HTML, kontaktirajte nas.

### Problemi sa Performansama

Proširenje funkcija ima običaj da usporava stvari. To nije ono što želimo da radimo na FastComments-u.
Dodavanje ove funkcije je **smanjilo** veličinu našeg klijentskog vidgeta za ~400 bajta - sa 9.53kb na 9.12kb - što znači brže učitavanje stranica.

Iako bi teoretski ova funkcija mogla usporiti mehanizam čuvanja komentara, nismo primetili nikakve degradacije performansi i kao uvek pratimo naše API-je.

### Kako to da dobijem?

Markdown podrška je automatski implementirana svim našim kupcima. Ne biste trebali primetiti previše promena u sadržaju postavljenom na vašem sajtu - osim što sada korisnici mogu podebljati, podvući i raditi neke fancy stvari
kao što je kreiranje jednostavnih tabela.

Kao i sa svim izdanjima funkcija, radujemo se povratnim informacijama i dok imamo mnogo automatskog testiranja... ako primetite bilo kakve probleme - javite nam!

Srećno komentarisanje.

{{/isPost}}