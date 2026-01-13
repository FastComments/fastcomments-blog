---
[category:Migration]
###### [postdate]
# [postlink]Migracija iz Hyvor Talk na FastComments[/postlink]

{{#unless isPost}}
Preberite ta prispevek, da vidite, kako popolnoma migrirati iz Hyvor Talk na FastComments.

Če uporabljate ročni način namestitve s kodo Hyvor Talk, je to preprosto vprašanje odstranitve majhnega odlomka, ki vam ga dajo, in zamenjave z <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Tudi Hyvor in FastComments lahko začasno delujeta na isti strani, da preizkusite in prilagodite videz in občutek. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pomagali vam bomo pri tem</a>.

Če ne uporabljate namestitve na osnovi odlomka kode, se bodo navodila razlikovala glede na vašo platformo – spet <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>.
{{/unless}}

{{#isPost}}

## Če ste na WordPressu

FastComments ima namenski WordPress vtičnik: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Vtičnik omogoča zelo enostavno namestitev, nastavitev in sinhronizacijo. Če se odločite za to možnost, lahko prezrete preostala navodila tukaj. Poskrbite le,
da boste sinhronizirali svoje komentarje Hyvor Talk nazaj v vašo namestitev WordPress.

Če to ne deluje za vas, kot poročajo nekateri naši kupci, boste morda želeli uporabiti naš WordPress vtičnik, vendar izvesti uvoz podatkov
z izvozom iz Hyvor Talk ročno. Uvoze podatkov lahko najdete v [Upravljaj podatke -> Uvozi komentare](https://fastcomments.com/auth/my-account/manage-data/import).

## Ročna, generična namestitev

### Izvozite svoje obstoječe komentarje

Uvoznik FastComments bo migriral vaše komentarje, uporabniška imena, slike uporabnikov, emojije in slik e. Premaknili bomo slike na naše strežnike brez težav.

Od leta 2022 Hyvor Talk ne izvaža e-poštnih naslovov ali glasov gor/dol. Če lahko dobite izvoz z njimi s temi informacijami, ga lahko uvozimo.

### Uvozite datoteko .JSON

Ko imate prenos Hyvor izvoza, se prijavite v svoj nadzorni ploščo FastComments in pojdite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tukaj, da uvozite datoteko</a>. Izberite Hyvor Talk iz spustnega seznama in naložite svojo datoteko.

### Počakajte nekaj minut

Uvoz FastComments je "asinkron". To pomeni, da sta nalaganje datoteke in njeno obdelavo ločena koraka.

Tako da, odvisno od velikosti vaše datoteke, lahko takoj prejmete sporočilo o uspehu. Na strani za uvoz na dnu je tabela - vsak vrstica predstavlja poskus uvoza.
To stran lahko varno osvežite, da preverite stanje vašega uvoza in koliko vrstic je bilo doslej uvoženih.

### Ko je končano

Prejeli boste e-pošto, ko bo uvoz končan - ne glede na to, ali je uspel ali ne. Stran lahko zaprete, ko nalaganje datoteke uspe, in vidite svoj uvoz na strani uvoza. Imel bo status "Zahtevano", ko se začne, pa bo status "V teku".

Varno je ponovno uvoziti kolikor krat je potrebno - če pa vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>, da vam lahko pomagamo.

### Zamenjajte kodo Hyvor Talk s FastComments

Če uporabljate namestitev na osnovi odlomka kode s Hyvor, je to preprosto vprašanje odstranitve majhnega odlomka, ki vam ga dajo, in zamenjave z <a href="https://fastcomments.com/install-wizard" target="_blank">našim</a>.
Podpiramo tudi mnoge ogrodja sprednjega konca, ki [jih lahko najdete tukaj](https://fastcomments.com/install-wizard). Tudi Hyvor in FastComments lahko začasno delujeta na isti strani, da preizkusite in prilagodite videz in občutek. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pomagali vam bomo pri tem</a>.

Če ne uporabljate namestitve na osnovi odlomka kode, se bodo navodila razlikovala glede na vašo platformo – spet <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>.

Ponujamo čarobno orodje za samo-servisiranje [tukaj](https://fastcomments.com/install-wizard).

### Hkrati migriranje URL-jev

Komentarji so sami vezani na polja id strani v izvozu, tako da dokler se vaši URL-ji ne spremenijo, je preklapljanje enostavno. Če želite migrirati URL-je in obdržati svoje
komentarje, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nam sporočite</a> tako, da nam pošljete stare in nove URL-je. Stran za pomoč omogoča nalaganje majhnih besedilnih datotek, tako da
če migrirate več kot le nekaj URL-jev, ustvarite Excelovo tabelo.

### EU

Če ste v EU, boste verjetno želeli ustvariti svoj račun na [eu.fastcomments.com](https://eu.fastcomments.com), da ostanejo vaši podatki strank v EU.

### Povzetek

1. Izvozi svoje podatke
2. Uvozi v FastComments
3. Zamenjaj JavaScript odlomka Hyvor z <a href="https://fastcomments.com/install-wizard" target="_blank">FastCommentsovim</a>

## Zakaj mi Hyvor ne pošlje datoteke?
Za večje strani Hyvor morda ne bo mogel ustvariti izvozne datoteke zaradi tehničnih omejitev na njihovi strani. Imamo zmožnost, da zberemo vaše obstoječe mesto in privzdignemo komentarje z njega, vendar je to lahko
dokaj po meri in zaradi časa, ki je vključen, bo zahtevalo, da imate podporni paket. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Tukaj lahko zahtevate pomoč pri tem</a>.
{{/isPost}}

---