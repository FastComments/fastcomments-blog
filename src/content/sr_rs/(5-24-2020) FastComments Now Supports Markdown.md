---
[category:Features]

###### [postdate]
# [postlink]FastComments Sada Podržava Markdown[/postlink]

Bogatije iskustvo komentarisanja je stiglo na FastComments sa upotrebom Markdov.

{{#isPost}}

Markdown je skup konvencija za stilizovanje teksta. Na primer, da bismo napravili podebljanu reč mogli bismo \*\*to\*\*.
Umetanje običnih linkova znači samo nalepiti siroki URL, a slike rade kao i ranije.

Evo Markdown cheat sheeta, koji je obezbedio Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Koju Markdown Sintaksu FastComments Podržava?

Potpuno podržavamo Markdown, osim naslova. Kada definišemo naslov, jednostavno ga prikazujemo kao običan tekst jer odvlači pažnju od toka razgovora. Naslovi su za sadržaj poput blogova i dokumenata - ne za razgovore.

FastComments je oduvek podržavao slike putem [img]...[/img] sintakse. Ovo će nastaviti da se podržava jer je lakše za razumevanje od Markdown-ovog.

### Mešanje sadržaja

Jedan komentar može sadržati sve oblike formatiranja - markdown, linkove, slike, delove koda i tabele.

### Izbegavanje XSF/XSS Napada

Prethodno je FastComments slalo običan tekst preko mreže i parsiralo ga na klijentu. Sada, HTML se šalje preko mreže, i održavamo dve verzije svakog komentara u našoj bazi podataka kako bismo podržali funkcionalnosti poput uređivanja komentara.

Direktno slanje HTML-a u komentare ima svoje rizike - tako da se svi generisani komentari parsiraju i čiste kako bi se sprečili napadi prekograničnih sajtova i okvira.

### Ekspport podataka

Kada eksportujete komentare, dobićete verziju koju je korisnik video kada je napisao svoj komentar. Ako želite da dobijete sirovi HTML, kontaktirajte nas.

### Problemi sa Performansama

Kreativna prekomernost obično usporava stvari. To nije ono što želimo da radimo na FastComments.
Dodavanje ove funkcije je **smanjilo** veličinu našeg klijentskog widgeta za ~400 bajtova - sa 9.53kb na 9.12kb - što znači brže učitavanje stranica.

Dok bi teoretski ova funkcija mogla usporiti mehanizam skladištenja komentara, nismo primetili nikakva pogoršanja performansi i kao i uvek pratimo naše API-je.

### Kako da to dobijem?

Markdown podrška je automatski implementirana svim našim kupcima. Ne biste trebali videti previše promena u sadržaju postavljenom na vašu stranicu - osim što sada korisnici mogu podebljati, podvući i raditi neke zanimljive stvari kao što su kreiranje jednostavnih tabela.

Kao i kod svih izdanja funkcija, radujemo se povratnim informacijama i dok imamo mnogo automatizovanog testiranja... ako primetite bilo kakve probleme - javite nam!

Srećno komentarisanje.

{{/isPost}}