---
[category:Migration]

###### [postdate]
# [postlink]Migracija iz IntenseDebate v FastComments[/postlink]

{{#unless isPost}}
Preberite ta prispevek, da prikažete, kako popolnoma migrirati iz IntenseDebate v FastComments.
{{/unless}}

{{#isPost}}
## Če ste na WordPressu

FastComments ima namenski WordPress vtičnik: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Vtičnik omogoča enostavno namestitev, nastavitev in sinhronizacijo. Če se odločite za to pot, lahko prezrete preostala navodila tukaj.

## Ročna, generična namestitev

### Izvoz obstoječih komentarjev

Da bi izvozili podatke o komentarjih in uporabnikih vaše strani iz IntenseDebate, pojdite v njihovem nadzornem pultu na Sites -> Your Site -> Tools -> XML Export.

Opazili boste, da ima datoteka, ki jo prejmete po elektronski pošti, skrivnostno končnico "gz". Če ste nekoliko tehnično nadarjeni, morda veste, da to pomeni "gzip" in je priljubljen in učinkovit način za stiskanje datotek.

### Ne odpirajte datoteke "gz"

Privzeta namestitev sistema Windows 10 ne bo mogla odpreti datoteke iz IntenseDebate. To je v redu, saj to v FastComments ni potrebno. Naša infrastruktura razume to stisnjeno datoteko.

Po tem, če ste prijavljeni, lahko <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tukaj naložite datoteko</a>. Izberite IntenseDebate iz spustnega seznama in naložite svojo datoteko.

### Počakajte nekaj minut

Uvoz v FastComments je "asynchronous". To pomeni, da sta nalaganje datoteke in obdelava ločeni koraki.

Tako, odvisno od velikosti vaših datotek, lahko takoj prejmete sporočilo o uspehu. Na strani za uvoz je na dnu tabela - vsak vrstica predstavlja poskus uvoza.
To stran lahko varno osvežite, da vidite stanje vašega uvoza in koliko vrstic je bilo do zdaj uvoženih.

### Ko je končano

Prejeli boste e-pošto, ko je uvoz končan - ne glede na to, ali je uspešen ali ne. Stran lahko zaprete, ko je nalaganje datoteke uspešno in vidite svoj uvoz na strani uvozov. Imela bo status "Requested" in ko se začne, bo status "Running".

Varno je ponovno uvoziti kolikokrat je potrebno - če pa vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>, da vam lahko pomagamo.

### Zamenjajte kodo IntenseDebate s FastComments

Gre preprosto za odstranitev majhnega odseka, ki vam ga ponudi IntenseDebate, in njegovo zamenjavo z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našo</a>.
Tudi IntenseDebate in FastComments lahko začasno delujeta na isti strani, da testirate in prilagajate videz in občutek. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pri tem vam lahko pomagamo</a>.

Če uporabljate IntenseDebate pripomočke in jih želite zamenjati, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas tukaj</a>.

### Hkratna migracija URL-jev

Komentarji sami so povezani z "link" polji v izvozu IntenseDebate, zato je preklop enostaven, dokler se vaši URL-ji ne spremenijo. Če želite migrirati URL-je in ohraniti svoje
komentarje, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nas obvestite</a> in pošljite stare in nove URL-je. Stran za pomoč omogoča nalaganje manjših besedilnih datotek, zato če
migrate več kot le nekaj URL-jev, ustvarite Excelovo tabelo.

### Povzetek

1. Izvozite svoje podatke
2. Uvozite v FastComments
3. Zamenjajte JavaScript kodo IntenseDebate s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Zakaj mi IntenseDebate ne pošlje moje datoteke?
Za večje strani IntenseDebate morda ne bo mogel ustvariti izvozne datoteke zaradi tehničnih omejitev na njihovi strani. Imamo možnost, da pobrano vaše obstoječe spletno mesto in prenesemo komentarje, vendar je to lahko
razmeroma prilagojeno in bo zaradi potrebnega časa zahtevalo, da imate podporni paket. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Tukaj lahko zahtevate pomoč pri tem</a>.
{{/isPost}}

---