---
[category:Features]

###### [postdate]
# [postlink]Jednostavna Podrška za Kodne Snippete sa FastComments[/postlink]

Neki od naših korisnika imaju sajtove i blogove vezane za razvoj softvera. U tim zajednicama je uobičajeno deliti kodne snippete. Evo kako FastComments to olakšava.

{{#isPost}}

FastComments omogućava deljenje koda jednostavno tako što se on kopira u polje za komentare. Može se kombinovati sa drugim tekstom i slikama, i ne zahteva da ručno dodajete bilo kakve oznake "koda"
za formatiranje. Samo nalepite!

Evo brze demonstracije koja prikazuje akciju.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demonstracija deljenja kodnih snippeta" title="Demonstracija deljenja kodnih snippeta"></video>

### Uticaj na Performanse

Dodavanje ove funkcije je dodalo samo ~150 bajtova klijentskom widget-u pošto većina funkcionalnosti ide sa strane servera. U stvari, ako ovo spojite sa nedavnim Markdown
funkcijama koje su dodate, veličina widget-a je zapravo opala sa ovim novim funkcijama!

### Stvari na koje treba obratiti pažnju

Ako imate zajednicu koja intenzivno deli kod, trebali biste razmotriti povećanje maksimalne veličine komentara kako biste olakšali deljenje kodnih snippeta. Ovo se može učiniti putem taba "Prilagodi"
u administratorskoj kontrolnoj tabli.

### Detekcija Koda

Kako bismo održali veličinu klijentskog widget-a niskom, automatski ćemo detektovati samo nalepjeni kod za C i slične jezike kao što su Python (Java, JavaScript, CSS, C++, na primer) koji koriste "{" ili razmake za kontrolu toka.
Ako često koristite jezik koji se ne detektuje automatski, obratite nam se.

Da ručno umetnete blok koda, napišite komentar kao: ```<code>(defun someLispCode(1, 2, 3))</code>```. Možemo automatski detektovati oko 150 jezika.

### Migracija Postojećih Komentara

Ako želite da migrirate na FastComments i imate puno komentara koji sadrže kodne snippete koje biste želeli da pravilno formatirate, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">možemo pomoći</a>.

### Na Zaključku

To je to! Uveli smo ovo u sve online zajednice na FastComments.

Srećno komentarisanje!

{{/isPost}}

---