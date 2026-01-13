---
[category:Features]

###### [postdate]
# [postlink]Jednostavna Podrška za Code Snippet sa FastComments[/postlink]

Neki od naših klijenata imaju sajtove i blogove vezane za softverski razvoj. U ovim zajednicama je uobičajeno deliti delove koda. Evo kako FastComments to olakšava.

{{#isPost}}

FastComments omogućava deljenje koda jednostavno kopiranjem u okvir za komentare. Može se mešati s drugim tekstom i slikama, i ne zahteva da ručno dodajete bilo kakve "code" oznake za formatiranje. Samo kopirajte!

Evo brzog demoa koji pokazuje kako to funkcioniše.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demo deljenja koda" title="Demo deljenja koda"></video>

### Uticaj na Performanse

Dodavanje ove funkcije je povećalo veličinu klijentskog veba samo za oko ~150 bajtova, jer većina funkcionalnosti se obrađuje na serverskoj strani. U stvari, ako ovo kombinuješ sa novim Markdown funkcijama koje su dodate, veličina veba se zapravo smanjila sa ovim novim funkcijama!

### Stvari koje Treba Iznajmiti

Ako imate zajednicu koja intenzivno deli kod, trebali biste razmotriti povećanje maksimalne veličine komentara kako bi deljenje delova koda bilo lakše. To se može uraditi putem "Customize" taba na administratorskoj kontrolnoj tabli.

### Detekcija Koda

Da bismo zadržali veličinu klijentskog veba, automatski ćemo detektovati kopirani kod samo za C i slične jezike poput Pythona (Java, JavaScript, CSS, C++, na primer) koji koriste "{" ili razmake za kontrolni tok. Ako često koristite jezik koji nije automatski prepoznat, obratite nam se.

Da ručno umetnete blok koda, napišite komentar kao: ```<code>(defun someLispCode(1, 2, 3))</code>```. Možemo automatski prepoznati oko 150 jezika.

### Migracija Postojećih Komentara

Ako želite da migrirate na FastComments i imate puno komentara koji imaju delove koda koje želite da ispravno formatirate, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">možemo pomoći</a>.

### U Zaključku

To je to! Uveli smo ovo za sve online zajednice na FastComments.

Srećno komentarisanje!

{{/isPost}}