---
[category:Features]

###### [postdate]
# [postlink]Jednostavna Podrška za Kodne Isječke sa FastComments[/postlink]

Neki od naših korisnika imaju sajtove i blogove vezane za softverski razvoj. U ovim zajednicama je uobičajeno deliti kodne isječke. Evo kako FastComments to olakšava.

{{#isPost}}

FastComments omogućava deljenje koda jednostavno tako što ga nalepite u polje za komentare. Može se mešati sa drugim tekstom i slikama, i ne zahteva da ručno dodajete bilo kakve "kod" oznake da biste dodali formatiranje. Jednostavno nalepite!

Evo brzog prikaza kako to funkcioniše.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demonstracija Deljenja Kodnih Isječaka" title="Demonstracija Deljenja Kodnih Isječaka"></video>

### Impikacije na Performanse

Dodavanje ove funkcije je povećalo veličinu klijentske dodatne aplikacije za samo ~150 bajtova, pošto većina funkcionalnosti obrađuje server. U stvari, ako ovo spojite sa nedavnim Markdown funkcijama, veličina widgeta se zapravo smanjila sa ovim novim funkcijama!

### Stvari koje Treba Imajte na Umu

Ako imate zajednicu koja intenzivno deli kod, trebalo bi da razmotrite povećanje maksimalne veličine komentara kako biste olakšali deljenje kodnih isječaka. Ovo se može uraditi putem "Prilagoditi" taba na admin panelu.

### Detekcija Koda

Da bismo smanjili veličinu klijentskog widgeta, automatski ćemo detektovati nalepjeni kod samo za jezike poput C i Pythona (Java, JavaScript, CSS, C++, na primer) koji koriste "{" ili razmake za kontrolu toka. Ako često koristite jezik koji se ne detektuje automatski, obratite nam se.

Da biste ručno umetnuli blok koda, napišite komentar kao: ```<code>(defun someLispCode(1, 2, 3))</code>```. Možemo automatski detektovati oko 150 jezika. 

### Migracija Postojećih Komentara

Ako želite da pređete na FastComments i imate puno komentara koji sadrže kodne isječke koje želite pravilno formatirati, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">možemo pomoći</a>.

### Na Kraj

To je to! Uveli smo ovo u sve online zajednice na FastComments.

Srećno komentarisanje!

{{/isPost}}