---
[category:Migration]
###### [postdate]
# [postlink]Migracija iz Commento v FastComments[/postlink]

{{#unless isPost}}
Preberite ta zapis, da ugotovite, kako popolnoma migrirati iz Commento v FastComments.

## Ujeti problemi

Commento ne daje celotnih URL-jev. To, kar zagotavljajo, je samo ime domene, ki ji pripada komentarni niz - kot "fastcomments.com/some-page".
To pomeni, da mora uvoznik FastComments predpostaviti, kakšen protokol je, in privzeto uporablja https. Če zaženete uvoz in ne vidite svojih podatkov,
morda želite preveriti, ali je vaša spletna stran pravilno zaščitena.
{{/unless}}

{{#isPost}}
### Izvozite svoje obstoječe komentarje

Da bi izvozili podatke o komentarjih in uporabnikih vašega spletnega mesta iz Commento, pojdite na njihovo nadzorno ploščo, izberite Splošno in nato Izvoz podatkov.

Opazili boste, da ima datoteka, ki jo dobite po elektronski pošti, skrivnostno pripono "gz". Če ste nekoliko bolj tehnično spretni, boste morda vedeli, da to pomeni "gzip" in je priljubljen in učinkovit način za stiskanje datotek.

### Ne odpirajte "gz" datoteke

Privzeta namestitev sistema Windows 10 ne bo mogla odpreti datoteke iz Commento. To je v redu, ker tega ni treba narediti s FastComments. Naša backend aplikacija razume to stisnjeno datoteko.

Po tem, če ste prijavljeni, lahko greste <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tukaj za uvoz datoteke</a>. Izberite Commento iz spustnega menija in naložite svojo datoteko.

### Počakajte nekaj minut

Uvoz FastComments je "asinhron". To pomeni, da sta nalaganje datoteke in njeno obdelovanje ločeni koraki.

Tako, odvisno od velikosti vaše datoteke, boste morda takoj dobili sporočilo o uspehu. Na dnu strani za uvoz je tabela - vsak vrstica predstavlja poskus uvoza.
To stran lahko varno osvežite, da vidite status vašega uvoza in koliko vrstic je bilo do sedaj uvoženih.

### Ko je končano

Prejeli boste elektronsko sporočilo, ko bo uvoz končan - ne glede na to, ali je uspel ali ne. Stran lahko zaprete po uspešnem nalaganju datoteke in ko vidite svoj uvoz na strani Uvozi. Imel bo status "Zahtevano", ko se bo začel, bo status "V teku".

Varno je ponovno uvažati, kolikor je potrebno - če pa vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>, da vam lahko pomagamo.

### Zamenjajte kodo Commento s FastComments

Samo odstranite majhen del kode, ki vam ga daje Commento, in ga zamenjajte z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">mojo</a>.
Lahko celo začasno izvajate Commento in FastComments na isti spletni strani, da preizkusite in prilagodite videz. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pri tem vam lahko pomagamo</a>.

### Hkratna migracija URL-jev

Komentarji sami so povezani z "povezavami" v izvozu Commento, tako da dokler se vaši URL-ji ne spremenijo, je preklop enostaven. Če želite migrirati URL-je in obdržati svoje
komentarje, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nam sporočite</a> tako, da nam pošljete stare in nove URL-je. Stran za pomoč omogoča nalaganje manjših besedilnih datotek, zato če
migrirate več kot le nekaj URL-jev, ustvarite Excelovo tabelo.

### Povzetek

1. Izvozite svoje podatke
2. Uvozite v FastComments
3. Zamenjajte JavaScript kodo Commento s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## Ujeti problemi

Commento ne daje celotnih URL-jev. To, kar zagotavljajo, je samo ime domene, ki ji pripada komentarni niz - kot "fastcomments.com/some-page".
To pomeni, da mora uvoznik FastComments predpostaviti, kakšen protokol je, in privzeto uporablja https. Če zaženete uvoz in ne vidite svojih podatkov,
morda želite preveriti, ali je vaša spletna stran pravilno zaščitena.

## Zakaj Commento ne pošlje mojega datoteka?
Za večje spletne strani Commento morda ne bo mogel ustvariti izvozne datoteke zaradi tehničnih omejitev na njihovi strani. Imamo sposobnost, da obrežemo vaše obstoječe spletno mesto in izvlečemo komentarje iz njega, vendar je to lahko
dokaj prilagojeno in zaradi potrebnega časa bo zahtevalo, da imate paket podpore. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Tukaj lahko zaprosite za pomoč</a>.
{{/isPost}}

---