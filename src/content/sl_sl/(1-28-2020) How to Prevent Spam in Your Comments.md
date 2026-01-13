---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Kako preprečiti spam v vaših komentarjih[/postlink]

Ni načina, da bi 100 % odpravili spam. Vendar pa FastComments izvaja vrsto ukrepov, ki pomagajo.

{{#isPost}}

## Dokumentacija za skrbnike spletnega mesta

Privzeta namestitev FastComments ima omogočeno filtriranje spama in neprimerne vsebine.

Te privzete nastavitve zagotavljajo ravnotežje med preprečevanjem spama in ne preveč vsiljivim delovanjem za večino skupnosti.

[Morda si želite ogledati vodnik za moderiranje](https://docs.fastcomments.com/guide-moderation.html).

## Kako to deluje

Naš filtrirni sistem za spam uporablja [Naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) za prepoznavanje spama.

Usposablja se skozi čas na podlagi tega, kar skrbniki označijo kot spam in ne spam.

FastComments deluje v iframe-u na vašem spletnem mestu. To otežuje avtomatiziranim botom, da bi ciljali na vaš del komentarjev. Vendar, če le-ti to storijo
in naš klasifikator ugotovi, da so njihovi komentarji "spamasto", bodo skriti pred vašimi uporabniki. Kot vsi drugi komentarji so tudi ti označeni kot
"potrebuje pregled" na [strani za moderiranje](https://fastcomments.com/auth/my-account/moderate-comments) nadzorne plošče.

Filtriranje neprimerne vsebine pa privzeto ne povzroči skritih komentarjev. Preprosto bo zamenjalo "slabe besede" z zvezdicami.

## Popolno blokiranje spama

Privzeto FastComments dovoli spam, vendar ga skrije in označi za pregled.

Če želite uporabniku sporočiti, da je bila njegova komentar zaznana kot spam in ga prositi, naj ga pregleda, to lahko storite v [Nastavitvah moderiranja](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
z omogočanjem nastavitve `Blokiraj spam`.

## Skrivanje neprimernih komentarjev

Neprimerne komentarje lahko skrijete z omogočanjem `Samodejno pošlji neprimerne komentarje v spam` v [Nastavitvah moderiranja](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Nastavitve

Filtriranje neprimerne vsebine in spama lahko posamezno izključite na strani [Nastavitev moderiranja](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Verifikacija komentarjev

FastComments uporablja sistem verifikacije, kjer so privzeto [neverificirani komentarji](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) označeni kot taki za vse uporabnike.

Z omogočanjem komentiranja brez popolne prijave se zniža ovira za vstop v razpravo. Oznaka neverificiranega lahko skrije prek pravil prilagajanja.

Neverificirani komentarji so privzeto prikazani, vendar jih je mogoče skriti, dokler ne postanejo verificirani po e-pošti, tako da omogočite `Samo samodejno odobrite verificirane komentarje`.

Upoštevajte, da so pri SSO vsi komentarji vedno verificirani. Če je uporabnik prijavljen v verificirano sejo, bodo njegovi komentarji vedno verificirani.

Neverificirani komentarji so prav tako lahko načrtovani za odstranitev.

## Za komentatorje

Če je vaš komentar zaznan kot spam, boste takoj videli sporočilo. To je, da vas obvesti, da bo komentar moral biti pregledan
preden se prikaže drugim. Zaznavanje spama ne more biti 100 % natančno, zato razumemo, če doživite nekaj frustracij. Če je vaš komentar zakonit, bi ga
moral skrbnik spletnega mesta prepoznati in označiti vaš komentar kot ne spam.

{{/isPost}}