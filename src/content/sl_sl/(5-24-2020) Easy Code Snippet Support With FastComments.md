---
[category:Features]

###### [postdate]
# [postlink]Enostavno podporo za kode s FastComments[/postlink]

Nekateri naši kupci imajo spletna mesta in bloge, povezane s programsko opremo. V teh skupnostih je običajno deliti kode. Tukaj je, kako FastComments to poenostavi.

{{#isPost}}

FastComments omogoča deljenje kode preprosto z lepljenjem v komentarno polje. To lahko mešate z drugim besedilom in slikami, ne da bi bilo potrebno ročno dodajati kakršnekoli "kode" oznake za oblikovanje. Preprosto prilepite!

Tukaj je hiter prikaz, ki to pokaže v akciji.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Demo deljenja kode" title="Demo deljenja kode"></video>

### Posledice za zmogljivost

Dodajanje te funkcije je povečalo velikost odjemniškega pripomočka le za približno 150 bajtov, saj večina funkcionalnosti deluje na strežniški strani. V resnici, če to združite z nedavnimi Markdown funkcijami, se je velikost pripomočka dejansko zmanjšala z novimi funkcijami!

### Stvari, ki jih je treba upoštevati

Če imate skupnost, ki močno deli kodo, bi morali razmisliti o povečanju največje velikosti komentarjev, da bi olajšali deljenje kode. To storite v razdelku "Prilagodi" na nadzorni plošči skrbnika.

### Odkrivanje kode

Da bi ohranili nizko velikost odjemniškega pripomočka, bomo samodejno odkrili prilepljeno kodo le za jezike, podobne C in Pythonu (Java, JavaScript, CSS, C++, na primer), ki uporabljajo "{" ali presledke za nadzor toka. Če pogosto uporabljate jezik, ki ni samodejno odkrit, nas kontaktirajte.

Če želite ročno vstaviti blok kode, napišite komentar kot: ```<code>(defun someLispCode(1, 2, 3))</code>```. Samodejno lahko odkrivamo približno 150 jezikov.

### Migracija obstoječih komentarjev

Če želite migrirati na FastComments in imate veliko komentarjev, ki vsebujejo kode, ki jih želite pravilno oblikovati, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">vam lahko pomagamo</a>.

### Na koncu

To je to! To smo uvedli v vseh spletnih skupnostih na FastComments.

Srečno komentiranje!

{{/isPost}}