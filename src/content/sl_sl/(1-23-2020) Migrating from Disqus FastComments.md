---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Migracija iz Disqus na FastComments[/postlink]

{{#unless isPost}}
Preberite to objavo, da vidite, kako popolnoma migrirati iz Disqus na FastComments.

Če uporabljate Generično integracijo spletne strani z Disqus, je preprosto odstraniti majhen del kode, ki vam ga dajo, in ga zamenjati z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">najinim</a>.
Lahko celo začasno obdržite Disqus in FastComments na isti spletni strani, da preizkusite in prilagodite videz in občutek. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pri tem vam lahko pomagamo</a>.

Če ne uporabljate Generične integracije spletne strani, se bodo navodila razlikovala glede na vašo platformo - ponovno <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>.
{{/unless}}

{{#isPost}}
Obstaja veliko stvari, ki jih Disqus opravi prav, a kjer jim ne uspe, se pojavi FastComments.

## Če ste na WordPressu

FastComments ima namenski vtičnik za WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Vtičnik olajša namestitev, nastavitev in sinhronizacijo. Če se odločite za to pot, lahko prezrete preostala navodila tukaj.

## Ročna, generična namestitev

### Izvoz obstoječih komentarjev

Uvoznik FastComments bo migriral vaše komentarje, uporabniška imena, uporabniške avatare in slike v besedilu. Slike bomo brez težav premaknili na naše strežnike.

Ena stvar, ki jo Disqus opravi prav, je način, kako obravnava izvoz podatkov. Opazili boste, da po sledenju korakom v njihovem vodiču <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">tukaj</a> rezultantna
datoteka, ki jo prejmete po e-pošti, ima skrivnostno končnico "gz". Če ste malo bolj tehnično vešči, morda veste, da to pomeni "gzip" in je priljubljen in učinkovit način za kompresijo datotek. 

### Ne odpirajte datoteke "gz"

Privzeta namestitev Windows 10 ne bo mogla odpreti datoteke iz Disqus. To je v redu, ker tega ne potrebujete pri FastComments. Naša zadnja linija razume
to komprimirano datoteko, zato morate samo slediti njihovim navodilom <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">tukaj, da dobite to datoteko</a>.

Po tem, če ste prijavljeni, lahko greste <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tukaj, da uvozite datoteko</a>. Izberite Disqus s seznama in naložite svojo datoteko.

### Počakajte nekaj minut

Uvoz FastComments je "asinhron". To pomeni, da sta nalaganje datoteke in njeno obdelovanje ločeni koraki.

Tako lahko, odvisno od velikosti vaše datoteke, takoj prejmete sporočilo o uspehu. Na strani za uvoz na dnu je tabela - vsak vrstica predstavlja poskus uvoza.
To stran lahko brez skrbi osvežite, da vidite status vašega uvoza in koliko vrstic je bilo do sedaj uvoženih.

### Ko je končano

Prejeli boste e-poštno sporočilo, ko bo uvoz končan - ne glede na to, ali je uspešen ali ne. Stran lahko zaprete, ko nalaganje datoteke uspe in vidite svoj uvoz na strani Uvozi. Ima status, kot je "Zahtevano", in ko se začne, bo status "V teku".

Brez skrbi lahko uvozite večkrat, kolikor je potrebno - vendar, če vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>, da vam lahko pomagamo.

### Zamenjajte Disqus kodo s FastComments

Če uporabljate Generično integracijo spletne strani z Disqus, je preprosto odstraniti majhen del kode, ki vam ga dajo, in ga zamenjati z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">najinim</a>.
Lahko celo obdržite Disqus in FastComments na isti spletni strani, da preizkusite in prilagodite videz in občutek. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pri tem vam lahko pomagamo</a>.

Če ne uporabljate Generične integracije spletne strani, se bodo navodila razlikovala glede na vašo platformo - ponovno <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>.

### Migracija URL-jev hkrati

Komentarji so povezani s polji "link" v izvozu Disqus, zato, dokler se vaši URL-ji ne spremenijo, je preklop enostaven. Če želite migrirati URL-je in obdržati svoje
komentarje, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nam sporočite</a> tako, da nam pošljete stare in nove URL-je. Stran za pomoč omogoča nalaganje majhnih besedilnih datotek, zato, če
migrate več kot le nekaj URL-jev, ustvarite Excelovo tabelo.

### Povzetek

1. Izvozite svoje podatke
2. Uvozite v FastComments
3. Zamenjajte Disqus JavaScript kodo z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsovo</a>

## Zakaj Disqus ne pošlje moje datoteke?
Za večje spletne strani Disqus morda ne bo mogel ustvariti izvožene datoteke zaradi tehničnih omejitev na njihovi strani. Imamo sposobnost, da preberemo vašo obstoječo spletno stran in izvlečemo komentarje, vendar je to lahko precej prilagojeno in zaradi časa, ki je potreben, od vas zahteva, da imate paket podpore. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pomoc lahko zahtevate tukaj</a>.
{{/isPost}}