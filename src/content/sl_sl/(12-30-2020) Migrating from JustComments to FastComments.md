---
[category:Migration]
###### [postdate]
# [postlink]Migracija iz JustComments na FastComments[/postlink]

{{#unless isPost}}
Preberite ta zapis, da vidite, kako se v celoti migrirati iz JustComments na FastComments.

Običajno gre za odstranitev majhnega dela kode, ki vam jo dajo, in njeno zamenjavo z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našo</a>.
Lahko celo začasno izvajate JustComments in FastComments na isti spletni strani, da preizkusite in prilagodite videz in občutek. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Lahko vam pri tem pomagamo</a>.
{{/unless}}

{{#isPost}}

Od leta 2021 bo JustComments prenehal delovati. Pri FastComments smo olajšali prehod na našo platformo.

Ugotovili boste, da FastComments ponuja mnoge iste funkcije, na katere ste navajeni, in še več.

## Razlike v cenah

Medtem ko JustComments uporablja sistem na osnovi kreditov, FastComments uporablja model s tremi prenosi. Z načrtom FastComments za 5 USD/mesec 
ste pokriti do 1 milijon nalaganj strani na mesec. Poleg tega so na voljo Pro in Enterprise načrti, ki jih lahko ogledate na <a href="https://fastcomments.com/traffic-pricing" target="_blank">strani z cenami</a>.

## Če uporabljate WordPress

FastComments ima namenjeni vtičnik za WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Vtičnik zelo olajša namestitev, nastavitev in sinhronizacijo. Vendar pa JustComments ne sinhronizira vaših komentarjev nazaj v vašo namestitev WordPress, kot to počne FastComments.
To pomeni, da boste po sinhronizaciji morali slediti korakom za izvoz in uvoz, ki so navedeni spodaj.

## Izvozite obstoječe komentarje

Uvoznik FastComments bo migriral vaše komentarje, uporabniška imena, uporabniške avatarje in slike v besedilu. Slike bomo brez težav prenesli na naše strežnike.

Da prenesete podatke o vaših komentarjih iz JustComments, pojdite na stran vašega računa.

## Uvozite v FastComments Admin

Ne skrbite glede odpiranja rezultantne datoteke iz JustComments.

Če ste prijavljeni, lahko <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tukaj uvozite datoteko</a>.

Izberite JustComments iz spustnega menija in naložite svojo datoteko.

### Identifikatorji strani

Med uvozom boste videli možnost izbire URL strani ali "ID predmeta". Če niste prepričani, katero izbrati, izberite URL strani. Če imate integracijo z JustComments,
kjer določite ID predmeta v konfiguraciji vtičnika, izberite ID predmeta.

### Počakajte nekaj minut

Uvoz FastComments je "asinkron". To pomeni, da sta nalaganje datoteke in njeno obdelovanje ločena koraka.

Tako lahko, odvisno od velikosti datoteke, takoj prejmete sporočilo o uspehu. Na strani uvoza na dnu je tabela - vsak vrstica predstavlja poskus uvoza.
To stran lahko brez skrbi osvežite, da vidite status vašega uvoza in koliko vrstic je bilo do sedaj uvoženih.

### Ko je končano

Prejeli boste e-pošto, ko bo uvoz končan - ne glede na to, ali uspe ali ne. Stran lahko zaprete, ko je nalaganje datoteke uspešno in vidite svoj uvoz na strani uvoza. I imela bo status "Zahtevano" in ko se začne status bo "V teku".

Ponovni uvoz je varen, kolikor želite - če pa se vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">se obrnite na nas</a>, da vam lahko pomagamo.

### Zamenjajte kodo JustComments s FastComments

Če ne uporabljate vtičnika JustComments za WordPress, gre preprosto za odstranitev majhnega dela kode, ki vam jo dajo, in njeno zamenjavo z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našo</a>.
Lahko celo izvajate JustComments in FastComments na isti spletni strani začasno, da preizkusite in prilagodite videz in občutek. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Lahko vam pri tem pomagamo</a>.

### Hkratna migracija URL-jev

Komentarji so po privzetku povezani z "pageUrl" polji v izvozu JustComments, zato je prehod enostaven, dokler se vaši URL-ji ne spremenijo. Če želite migrirati URL-je in obdržati svoje
komentarje, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nam sporočite</a> tako, da nam pošljete stare in nove URL-je. Pomoč omogoča nalaganje majhnih besedilnih datotek, zato če
migrirate več kot le nekaj URL-jev, ustvarite Excelovo tabelo.

## Povzetek

1. Izvozite svoje podatke
2. Uvozite v FastComments
3. Če niste na WordPress, zamenjajte JavaScript del JustComments z <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

{{/isPost}}