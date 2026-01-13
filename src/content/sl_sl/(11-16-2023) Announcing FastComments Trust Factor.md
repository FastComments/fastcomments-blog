---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Napovedujemo FastComments Trust Factor[/postlink]

{{#unless isPost}}
FastComments sedaj uporablja več heuristik pri določanju, kaj je in kaj ni spam.
{{/unless}}

{{#isPost}}

### Novosti

Od 16. novembra 2023 je FastComments začel širiti način določanja zanesljivosti uporabnikov, da bi zmanjšal frustracije pri obvladovanju spam filtrov.

### Vpliv na uporabnike

Če ste dolgotrajen član obstoječe strani in so bili vaši komentarji ujeti v spam filter, je ta sprememba namenjena vam.

Prejeli smo številna poročila uporabnikov na straneh, ki delajo stvari, ki jih spam filtri ne marajo, kot je deljenje številnih povezav in podobno, in ti komentarji končajo v spamu ter so bodisi blokirani bodisi čakajo na odobritev moderatorja, odvisno od nastavitve strani.

### Vpliv na skrbnike strani in moderatorje

1. Morda boste videli manj komentarjev, ki bodo samodejno označeni kot spam od vaših najbolj aktivnih uporabnikov.
2. To ne spremeni zaznavanja spama na podlagi črnih seznamov besed/fraz. Obožovanje in filtrirane fraze bodo še vedno povzročile, da bodo komentarji šli v spam, če imate to nastavitev.

Številka Trust Factor sama po sebi trenutno ni razkrite skrbnikom strani ali moderatorjem, vendar je to nekaj, kar bomo raziskali v prihodnosti.

### Kako se izračuna Trust Factor

Trust Factor je številka od `0` do `100` in se vzdržuje na ravni posamezne strani.

Za določanje Trust Factorja se uporabljajo naslednji spremenljivke:

- Starost interakcije s spletno stranjo.
- Število odobrenih komentarjev.
- Število pripetih komentarjev.

Če ste član strani že več kot šest mesecev in ste zapustili več kot 50 odobrenih komentajev, boste imeli popoln rezultat zaupanja `100`.

Drugače je formula naslednja in se bo s časom razvijala:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Kjer:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Morda boste opazili `* 20` tukaj - pripeti komentarji imajo visoko težo. Če moderatorji pripnejo
vaše komentarje, ste verjetno obravnavani kot precej zanesljiv uporabnik.

### Za razvijalce & neprijetnosti

V API-ju ima `UserBadgeProgress` sedaj razkrite `autoTrustFactor` in `manualTrustFactor`.

`autoTrustFactor` izračunamo mi in ga ni mogoče zapisati prek API-ja.

Če želite sami nastaviti trust factor, lahko definirate `manualTrustFactor`. Sistem
bo nato uporabil to vrednost namesto tega, mi pa bomo še naprej ločeno vzdrževali vrednost `autoTrustFactor`.

### Zloraba Trust Factor

Kot pri vseh stvareh pričakujemo, da bo to zlorabljeno. Ljudje bodo gradili odnose s skupnostjo in potem uporabili
račun za objavo spama. Vendar menimo, da smo z razumljivimi privzetimi vrednostmi (šest mesecev, 50+ komentarjev) nastavili
prag dovolj visoko, da večini spammerjem to ne bo smiselno. Ko začnejo objavljati spam, lahko moderatorji takoj
prepovejo njihov račun. V prihodnosti bomo morda tudi dovolili moderatorjem, da prilagodijo trust factor.

### Na zaključek

Kot pri vseh velikih izdajah smo veseli, da smo si lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Povejte nam
spodaj, če odkrijete kakšne težave.

Na zdravje!

{{/isPost}}

---