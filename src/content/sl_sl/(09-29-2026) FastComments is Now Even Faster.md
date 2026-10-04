[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments je zdaj še hitrejši[/postlink]

{{#unless isPost}}
Odstranili smo en omrežni zahtevek pri nalaganju pripomočka za komentarje, s čimer smo še dodatno skrajšali čas nalaganja.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični žargon

### Kaj je novega

Kako FastComments deluje že približno pet let, je, da naložimo majhen skript, iframe se naloži, nato skript, ki vključuje njegov stil, in nato zahtevek do API-ja za vse, kar je potrebno za izris komentarjev. Čeprav se to sliši kot veliko, je to zelo kompaktno v primerjavi z večino sistemov!

Vendar je zdaj še en zahtevek manj. Odziv iframe, ki dostavi pripomoček, prav tako prenaša komentarje in vse podatke, ki jih uporabnik sprva potrebuje, zato zadnji API zahtevek ni več.

API ostaja vzdrževan za nazaj kompatibilnost za vse, ki so od njega odvisni.

### Nič za nastaviti

Za to ni nobene nastavitve in ni različice za nadgradnjo. Če vdelate FastComments z našim skriptom, ga že imate.

Vaša stran ostane neodvisna v obeh primerih. Pripomoček se še vedno naloži v iframe in še vedno ne blokira vaše vsebine, točno tako kot prej.

### Kje ne velja

Nekaj poti tega ne uporablja in se obnašajo natanko tako, kot so vedno:

- Iskalni pajki, ki že vdelajo komentarje neposredno v stran namesto v iframe
- Viri uporabniške aktivnosti in filtriranje hashtagov, ki berejo iz različnih končnih točk

### Zaključek

Upamo, da boste še naprej uživali v uporabi naše platforme in da bodo izboljšave, ki jih uvajamo, prinesle vrednost. :)

Na zdravje!

{{/isPost}}

---