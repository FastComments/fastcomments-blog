---
[category:Značajke]

###### [postdate]
# [postlink]Jednostavna podrška za isječke koda s FastComments[/postlink]

Neki od naših klijenata imaju stranice i blogove povezane s razvojem softvera. U ovim zajednicama uobičajeno je dijeliti isječke koda. Evo kako FastComments to olakšava.

{{#isPost}}

FastComments omogućava dijeljenje koda jednostavno tako da ga zalijepite u kutiju za komentare. Može se miješati s drugim tekstom i slikama, a ne zahtijeva da ručno dodajete bilo kakve "code" oznake za formatiranje. Jednostavno zalijepite!

Evo brze demonstracije kako to izgleda.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demonstracija dijeljenja isječaka koda" title="Demonstracija dijeljenja isječaka koda"></video>

### Performanse

Dodavanje ove značajke dodalo je samo ~150 bajtova klijentskom widgetu jer je većina funkcionalnosti obrađena na poslužiteljskoj strani. Zapravo, ako ovo spojite s nedavnim dodatcima za Markdown, veličina widgeta je zapravo smanjena s ovim nedavnim značajkama!

### Stvari koje treba napomenuti

Ako imate zajednicu koja intenzivno dijeli kod, trebali biste razmotriti povećanje maksimalne veličine komentara kako biste olakšali dijeljenje isječaka koda. To se može učiniti putem kartice "Prilagodi" na administratorskoj ploči.

### Otkrivanje koda

Kako bismo održali veličinu klijentskog widgeta niskom, automatski ćemo otkrivati zalijepljeni kod samo za jezike poput C i Pythona (Java, JavaScript, CSS, C++, na primjer) koji koriste "{" ili razmake za kontrolu toka.
Ako često koristite jezik koji se ne otkriva automatski, obratite nam se.

Za ručno umetanje isječka koda, napišite komentar kao: ```<code>(defun someLispCode(1, 2, 3))</code>```. Možemo automatski otkriti oko 150 jezika.

### Migracija postojećih komentara

Ako želite migrirati na FastComments i imate puno komentara koji imaju isječke koda koje biste željeli ispravno formatirati, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">možemo pomoći</a>.

### Na kraju

To je to! Uveli smo ovo u sve online zajednice na FastComments.

Sretno komentiranje!

{{/isPost}}