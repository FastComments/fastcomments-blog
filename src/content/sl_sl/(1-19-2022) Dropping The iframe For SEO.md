---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Opustitev iframe za SEO[/postlink]

{{#unless isPost}}
Izboljšali smo vidnost vaših komentarjev za iskalnike in povečali verjetnost, da bo vsebina pripisana vaši spletni strani.
{{/unless}}

{{#isPost}}

## Kaj je novega

Prej je FastComments pri iskanju s strani iskalnikov prikazoval vaše komentarje v iframe. To je zato, ker aplikacija zahteva uporabo iframe
za obvladovanje piškotov za seje vaših uporabnikov.

Vendar to predstavlja težavo za iskalnike, saj ne zagotavljajo, da bo vsebina v iframe pripisana vaši spletni strani.

Zdaj, ko prikaže komentarje, skript za vdelavo preveri, ali stran nalaga iskalnik. Če je tako, ne bo uporabil iframe!

## Koliko komentarjev je prikazanih

Iskalnikom bo prikazanih do 2.000 komentarjev za stran. Ti bodo razvrščeni glede na privzeto konfigurirano vrstno ureditev.

## Testiranja, ki smo jih izpeljali

Zagotovili smo, da iskalniki zdaj vidijo celotno nit komentarjev za stran, in testirali smo zmogljivost nalaganja celotnih nitih komentarjev hkrati.

## Vpliv na obstoječe stranke

Če ste obstoječa stranka, ki uporablja FastComments, je bila sprememba že uporabljena na vašem računu in ni potrebnih dodatnih ukrepov. Ko iskalniki ponovno indeksirajo vaše strani
vsi komentarji na teh straneh bi morali biti indeksirani.

## V zaključku

Upamo, da ste to posodobitev in njeno dokumentacijo našli koristno. Srečno komentiranje!

{{/isPost}}