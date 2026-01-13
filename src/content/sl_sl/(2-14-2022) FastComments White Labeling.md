---
[category:API & Development]

###### [postdate]
# [postlink]Beljenje FastComments[/postlink]

{{#unless isPost}}
Beljenje, z popolno integracijo API in orodji za avtomatizacijo, prihaja v FastComments.
{{/unless}}

{{#isPost}}

## Kaj je novega

FastComments se zdaj lahko integrira z drugimi aplikacijami in tretjimi osebami prek beljenja. Beljenje vam omogoča, da ustvarite račune FastComments (imenovane najemniki), uporabnike, moderatorje in še več.

Zdaj ponujamo [obsežen API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) za avtomatizacijo integracije
s tretjimi osebami.

Zdaj lahko prek API-ja:

- Ustvarite stranke (otroške najemnike), ki jih upravlja vaš najemnik.
- Upravljate pakete, ki so na voljo vašim strankam, in kako boste obravnavali obračunavanje.
- Dodate in upravljate uporabnike v svojih upravljaških najemnikih.
- Dodate in upravljate moderatorje v svojih upravljaških najemnikih.
- Povabite moderatorje in pošljete povezave za prijavo uporabnikom najemnikov.

## Obračunavanje

Pri obračunavanju so na voljo dve možnosti:

1. Prek FastComments Flex se uporaba vaših otroških najemnikov samodejno združi in obračuna starševskemu najemniku. To lahko spremljate prek [Strani za analitiko obračunavanja](https://fastcomments.com/auth/my-account/analytics/billing).
2. Preko FastComments Pro dobite dostop do ustvarjanja fiksnega števila otroških najemnikov po fiksni mesečni ceni.

## Odstranitev blagovne znamke

Upravljani najemniki lahko omogočijo odstranitev blagovne znamke, kar odstrani naše logotipe iz vdelanega komentarja.

## Kako pridobiti beljenje

Trenutno načrti FastComments Flex in Pro ponujajo dostop do API-ja za beljenje.

## Skripte in Primeri

Primer skripte, ki uporablja API za nastavitev najemnika z uporabniki in moderatorji, [je na voljo tukaj](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Obsežna validacija

Vsak API vir vsebuje obsežne validacije in omejitve, s koristnimi sporočili o napakah, ki vas usmerjajo pri pravilni uporabi.

<div class="code"><div class="title">Podroben primer napake</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Uporabnik s tem id ne obstaja v tem najemniku. Najprej ustvarite uporabnika in ga nato naredite za moderatorja.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Druge uporabe

API-ji za [uporabnike najemnikov](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) in [moderatorje](https://docs.fastcomments.com/guide-api.html#moderator-structure) se lahko prav tako uporabijo za
dodajanje in upravljanje teh virov v vašem lastnem najemniku, ne glede na beleženje.

## Dokumentacija

Celotno dokumentacijo o beljenju in uporabi API-ja lahko najdete [tukaj](https://docs.fastcomments.com/guide-white-labeling.html).

## Na koncu

Upamo, da ste našli to posodobitev in njeno dokumentacijo koristne. Srečno z integracijo!

{{/isPost}}