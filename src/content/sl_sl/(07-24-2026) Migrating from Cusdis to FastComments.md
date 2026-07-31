[category:Migration]
###### [postdate]
# [postlink]Migriranje iz Cusdis v FastComments[/postlink]

{{#unless isPost}}
Preberite ta prispevek, da vidite, kako popolnoma migrirati iz Cusdis v FastComments, vključno z vašimi nitmi, statusom moderacije in URL-ji strani.
{{/unless}}

{{#isPost}}

Cusdis je lahkoten, odprtokodni sistem za komentarje. Če ste ga presegli in želite funkcije, kot so filtriranje spama, glasovanja, reakcije, obvestila, SSO in popolna nadzorna plošča za moderiranje, FastComments zdaj neposredno uvozi vaše podatke iz Cusdis.

## Izvoz vaših obstoječih komentarjev

Iz nadzorne plošče Cusdis zahtevajte popoln izvoz podatkov. Cusdis vam zagotovi eno datoteko JSON, ki vsebuje vaše projekte, strani in vsak komentar, skupaj z njihovimi nitmi in statusom odobritve. Glede na vašo nastavitvijo Cusdis se izvoz pošlje po e-pošti ali takoj prenese.

Ni ničesar, kar bi bilo treba urejati ali razpakirati. Ohranite datoteko ".json" takšno, kot je, naš strežnik pa jo prebere neposredno.

## Uvoz v FastComments

Ko ste prijavljeni, pojdite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">sem za uvoz datoteke</a>. Iz spustnega menija izberite **Cusdis (.json)** in naložite vašo datoteko.

### Počakajte nekaj minut

Uvoz v FastComments je "asinkronen". Nalaganje datoteke in njena obdelava sta ločena koraka. Za majhno datoteko se sporočilo o uspehu prikaže takoj. Na dnu strani za uvoz je tabela, vsaka vrstica pa predstavlja poskus uvoza. Osvežite stran, da spremljate status in koliko komentarjev je bilo doslej uvoženih.

### Ko je končano

Prejeli boste e-pošto, ko se uvoz konča, ne glede na to, ali je uspel ali ne. Po uspešnem nalaganju in ko vidite, da je vaš uvoz naveden s statusom "Requested" ali "Running", je varno zapreti stran.

Ponovni uvoz je varen. FastComments ujemajo vsak komentar po njegovem izvirnem ID-ju iz Cusdis, zato ponovni zagon uvoza posodobi vaše obstoječe komentarje namesto ustvarjanja podvojenih. Če uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stopite v stik z nami</a> in pomagali bomo.

## Kaj se uvozi

- **Nitenje odgovorov.** Cusdis gnezdijo odgovore na več nivojev, FastComments pa obnovi celotno strukturo staršev in otrok.
- **Status moderacije.** Odobreni komentarji ostanejo odobreni. Komentarji, ki še čakajo na odobritev, pristanejo v vaši FastComments moderacijski vrsti, da jih lahko pregledate.
- **Avtorji.** Ime in e-pošta vsakega komentatorja se preneseta, registrirani uporabniki FastComments pa se ujemajo po e-pošti.
- **Oblikovanje.** Komentarji v Cusdis so napisani v Markdownu. FastComments izriše isti Markdown, vključno s povezavami, slikami in prelomom vrstic, zato se vaše niti berejo natanko tako kot prej.

Komentarji, ki so bili izbrisani v Cusdis, ostanejo izpuščeni, zato vaše uvožene niti ostanejo čiste.

## Zamenjajte Cusdis pripomoček

Ko so vaši podatki preneseni, odstranite majhen Cusdis delček s svoje strani in vstavite <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našega</a>. Začasen čas lahko poganjate Cusdis in FastComments vzporedno, da najprej preizkusite videz in občutek. Podpiramo številna front‑end ogrodja, ki jih <a href="https://fastcomments.com/install-wizard" target="_blank">lahko najdete tukaj</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">S tem vam lahko pomagamo</a>.

### Migriranje URL-jev hkrati

Cusdis poveže vsak komentar z URL-jem njegove strani, zato je preklop preprost, dokler se vaši URL-ji ne spremenijo. Če se tudi vaši URL-ji spreminjajo, najprej uvozite svoje podatke iz Cusdis, nato uporabite vgrajeno orodje <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> pod Upravljanje podatkov, da premaknete svoje komentarje na nove lokacije. Vnesete lahko celotno domeno, celoten URL ali URL ID za staro in novo lokacijo, tako da en par "od" in "do" premakne vse ustrezne strani hkrati. Orodje teče v ozadju in vas obvesti po e‑pošti, ko se konča.

Če raje, da to uredimo mi (če imate veliko strani), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nas obvestite</a> o starih in novih URL-jih.

## EU

Če ste v EU, boste verjetno želeli ustvariti svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, da bodo vaši podatki o strankah ostali v EU.

## Povzetek

1. Izvozite svoje podatke iz Cusdis kot JSON
2. Naložite jih na stran za uvoz FastComments in izberite **Cusdis (.json)**
3. Zamenjajte Cusdis delček z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

{{/isPost}}

---