---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Jeziki, uporabljeni v komentarjih, lahko zdaj omejimo[/postlink]

{{#unless isPost}}
Nekatere skupnosti želijo omejiti jezike, ki se uporabljajo. To je zdaj mogoče z FastComments.
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments si je vedno prizadeval podpirati čim večje število jezikov in lokalnih nastavitev.

Vendar pa nekatere skupnosti želijo omejiti jezike, ki se uporabljajo za komunikacijo in pisanje komentarjev.

Namesto da bi to uveljavili kot pravilo in potencialno prepovedali uporabnike, ga je zdaj mogoče izrecno konfigurirati na platformi.

### Kako to nastaviti

V isti UI za prilagoditev widgetov, s katerim ste verjetno že seznanjeni, lahko zdaj izberete enega ali več jezikov, v katerih lahko pišete komentarje.

Platforma bo ob oddaji komentarja poskušala v realnem času ugotoviti jezik komentarja. Če je zaupanje v ugotovljeni jezik
večje od 70 % in se ujema z dovoljenim jezikom, je komentar dovoljen.

Če napisan komentar ni v jeziku, ki ga določa vaša konfiguracija, bo uporabniku prikazano sporočilo o napaki v njegovem jeziku.

### Vpliv na razvijalce

Ta konfiguracija bo vplivala tudi na komentarje, shranjene prek API-ja.

Prejeli boste napako, kot je naslednja:

            status: 'failed',
            reason: `Komentar izgleda kot da je v enem od teh jezikov: [es], vendar so dovoljeni samo [en,fr].`,
            code: 'language-not-allowed',
            translatedError: "Sporočilo o napaki v jeziku uporabnika."

### Za zaključek

Kot pri vseh večjih izdajah smo veseli, da smo si lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Sporočite nam
spodaj, če odkrijete kakšne težave.

Na zdravje!

{{/isPost}}