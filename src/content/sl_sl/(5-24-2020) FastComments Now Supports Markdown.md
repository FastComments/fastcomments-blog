---
[category:Features]

###### [postdate]
# [postlink]FastComments zdaj podpira Markdown[/postlink]

Bogatejša izkušnja komentiranja je prišla na FastComments z uporabo Markdowna!

{{#isPost}}

Markdown je niz konvencij za stiliziranje besedila. Na primer, da ustvarimo krepko besedo, lahko \*\*to storimo\*\*.
Vstavljanje običajnih povezav pomeni preprosto lepljenje surovega URL-ja, slike delujejo tako kot prej.

Tukaj je opis Markdowna, ki ga je pripravila Github: <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Različne sintakse Markdowna, ki jih podpira FastComments

Popolnoma podpiramo Markdown, razen naslovov. Pri definiranju naslova ga preprosto prikažemo kot običajno besedilo, saj odvrnejo od poteka pogovora. Naslovi
so namenjeni vsebini, kot so blog objave in dokumenti - ne pogovorom.

FastComments je vedno podpiral slike prek sintakse [img]...[/img]. To bo še naprej podprto, saj je enostavneje razumeti kot tisto v Markdownu.

### Mešanje vsebin

En sam komentar lahko vsebuje vse oblike formatiranja - markdown, povezave, slike, kode in tabele.

### Izogibanje napadom XSF/XSS

Prej je FastComments pošiljal navadno besedilo prek omrežja in ga analiziral na stranki. Zdaj se HTML pošilja prek omrežja, in v naši bazi podatkov vzdržujemo dve različici vsakega komentarja,
da podpiramo funkcionalnosti, kot je urejanje komentarjev.

Pošiljanje HTMLja neposredno v komentarje ima svoje tveganja - zato se vsi generirani komentarji analizirajo in čistijo, da se preprečijo napadi iz različnih spletnih mest in okvirjev.

### Izvozi podatkov

Ko izvozite komentarje, boste dobili različico, ki jo je uporabnik videl, ko je napisal svoj komentar. Če želite dobiti surov HTML, nas kontaktirajte.

### Skrbi glede zmogljivosti

Obsežne funkcionalnosti imajo navado upočasniti stvari. To ni tisto, kar želimo početi pri FastComments.
Dodajanje te funkcionalnosti je **zmanjšalo** velikost našega vtičnika na strani stranke za ~400 bajtov - s 9.53kb na 9.12kb - kar pomeni hitrejše nalaganje strani.

Čeprav teoretično lahko ta funkcionalnost upočasni mehanizem shranjevanja komentarjev, nismo opazili nobenih degradacij v zmogljivosti in kot vedno spremljamo naše API-je.

### Kako to dobim?

Podpora za Markdown je bila samodejno uvedena vsem našim strankam. Ne bi smeli opaziti preveč sprememb v vsebini, objavljeni na vaši strani - razen zdaj lahko uporabniki krepijo, podčrtajo ter izvajajo nekatere lepe stvari,
kot so ustvarjanje preprostih tabel.

Kot pri vseh izdajah funkcionalnosti se veselimo povratnih informacij in čeprav imamo veliko avtomatiziranega testiranja... če opazite kakršnekoli težave - nam sporočite!

Srečno komentiranje.

{{/isPost}}