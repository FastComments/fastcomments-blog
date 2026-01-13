---
[category:Features]

###### [postdate]
# [postlink]Laka Podrška za Kôd U FastComments[/postlink]

Neki od naših klijenata imaju sajtove i blogove vezane za softverski razvoj. U ovim zajednicama je uobičajeno deliti delove koda. Evo kako FastComments to olakšava.

{{#isPost}}

FastComments omogućava deljenje koda jednostavno tako što ga nalepite u okvir za komentare. Može se mešati sa drugim tekstom i slikama, i ne zahteva da ručno dodajete bilo kakve "kod" oznake za formatiranje. Jednostavno nalepite!

Evo brze demonstracije koja pokazuje kako to funkcioniše.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demonstracija deljenja koda" title="Demonstracija deljenja koda"></video>

### Performanse

Dodavanje ove funkcije je dodalo samo ~150 bajtova klijentskom vidgetu, pošto je većina funkcionalnosti obrađivana na serveru. U stvari, ako ovo spojite sa nedavnim Markdown funkcijama koje su dodate, veličina vidžeta se zapravo smanjila sa ovim novim funkcijama!

### Stvari na koje treba obratiti pažnju

Ako imate zajednicu koja intenzivno deli kod, trebali biste razmotriti povećanje maksimalne veličine komentara kako bi deljenje delova koda bilo lakše. Ovo se može uraditi preko "Prilagodi" taba na administratorskoj kontrolnoj tabli.

### Detekcija Koda

Da bismo smanjili veličinu klijentskog vidžeta, automatski ćemo detektovati nalepeni kod samo za jezike poput C i Python (Java, JavaScript, CSS, C++, na primer) koji koriste "{" ili razmake za kontrolu toka. Ako često koristite jezik koji nije automatski detektovan, obratite se nama.

Da biste ručno uneli blok koda, napišite komentar kao: ```<code>(defun someLispCode(1, 2, 3))</code>```. Možemo automatski detektovati oko 150 jezika. 

### Migracija Postojećih Komentara

Ako želite da migrirate na FastComments i imate puno komentara koji sadrže delove koda koje želite ispravno formatirati, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">možemo pomoći</a>.

### Na Zaključku

To je to! Uveli smo ovo za sve online zajednice na FastComments.

Srećno komentarisanje!

{{/isPost}}