---
[category:Migration]
###### [postdate]
# [postlink]Migracija iz Muut komentarjev na FastComments[/postlink]

{{#unless isPost}}
Preberite to objavo, da izveete, kako popolnoma migrirati iz Muut na FastComments.

Gre preprosto za to, da odstranite majhen del kode, ki vam ga ponudi Muut, in ga nadomestite z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Tudi Muut in FastComments lahko začasno delujeta na isti strani, da preizkusite in prilagodite videz in občutek. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pri tem vam lahko pomagamo</a>.
{{/unless}}

{{#isPost}}
### Izvoz obstoječih komentarjev

Uvoznik FastComments bo migriral vaše komentarje, uporabniška imena, uporabniške avatarje in slike v besedilu. Slike bomo brez težav premaknili na naše strežnike.

Da bi izvozili podatke o komentarjih in uporabnikih vaše strani iz Muut, odprite njihov nadzorni panel, pojdite na Integracije in nato na JSON Izvoz.

Opazili boste, da ima datoteka, ki jo prejmete po e-pošti, skrivnostno končnico "gz". Če ste nekoliko tehnično podkovani, morda veste, da to pomeni "gzip" in je priljubljen ter učinkovit način za stiskanje datotek. 

### Ne odpirajte datoteke "gz"

Privzeta namestitev Windows 10 ne bo mogla odpreti datoteke iz Muut. To je v redu, saj s FastComments tega ni treba. Naša podpora razume to stisnjeno datoteko.

Po tem, če ste prijavljeni, lahko <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank"> tukaj uvozite datoteko</a>. Izberite Muut iz spustnega menija in naložite svojo datoteko.

Vnesite URL vaše spletne strani. To je zato, ker Muut ne posreduje teh informacij v izvozu.

### Počakajte nekaj minut

Uvoz FastComments je "asinkron". To pomeni, da sta nalaganje datoteke in njeno obdelovanje ločena koraka.

Torej, odvisno od velikosti vaše datoteke, lahko takoj prejmete sporočilo o uspehu. Na strani uvoza je na dnu tabela - vsaka vrstica predstavlja poskus uvoza.
To stran lahko brezskrbno osvežite, da vidite status vašega uvoza in koliko vrstic je bilo doslej uvoženih.

### Ko je končano

Prejeli boste e-poštno sporočilo, ko bo uvoz končan - ne glede na to, ali uspe ali ne. Stran lahko zaprete, ko je nalaganje datoteke uspešno in vidite svoj uvoz na strani Uvozi. Imel bo status "Zahtevano", ko se začne, pa bo status "Poteka".

Varno je uvoziti, kolikokrat je potrebno - vendar, če vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>, da vam lahko pomagamo.

### Zamenjajte Muut kodo s FastComments

Gre preprosto za to, da odstranite majhen del kode, ki vam ga ponudi Muut, in ga nadomestite z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Tudi Muut in FastComments lahko začasno delujeta na isti strani, da preizkusite in prilagodite videz in občutek. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pri tem vam lahko pomagamo</a>.

### Hkratna migracija URL-jev

Komentarji sami so povezani s "povezavami" v izvozu Muut, tako da je preklop enostaven, dokler se vaši URL-ji ne spremenijo. Če želite migrirati URL-je in obdržati svoje
komentarje, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nas obvestite</a> tako, da nam pošljete stare in nove URL-je. Stran za pomoč omogoča nalaganje manjših besedilnih datotek, zato, če
migrate več kot le nekaj URL-jev, ustvarite Excelovo tabelo.

### Povzetek

1. Izvozite svoje podatke
2. Uvozite v FastComments
3. Zamenjajte Muut JavaScript kodo z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Zakaj mi Muut ne pošlje datoteke?
Za večje strani Muut morda ne bo mogel ustvariti izvozne datoteke zaradi tehničnih omejitev na njihovem koncu. Imamo možnost, da strgamo vašo obstoječo stran in potegnemo komentarje z nje, vendar je to lahko
kar precej po meri in zaradi potrebnega časa bo zahtevalo, da imate Paket podpore. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Tukaj lahko zaprosite za pomoč</a>.
{{/isPost}}

---