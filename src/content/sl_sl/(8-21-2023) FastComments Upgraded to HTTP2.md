---
[category:Performance]
###### [postdate]
# [postlink]FastComments nadgrajen na HTTP/2[/postlink]

{{#unless isPost}}
Izvedli smo nekaj nadgradenj infrastrukture, ki še izboljšujejo zmogljivost FastComments!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnično terminologijo

### Kaj je novega

Od lansiranja je FastComments deloval na HTTP/1.1. Nedavno smo preklopili celotno infrastrukturo
v vseh regijah na HTTP/2.

### Vpliv

Ta posodobitev ohranja FastComments posodobljen s sodobnimi standardi, hkrati pa nudi nekatere
izboljšave zmogljivosti. Slaba stran je, da nekateri starejši brskalniki niso več podprti.

### Stari brskalniki in odjemalci

[Ne-podprte brskalnike najdete tukaj](https://caniuse.com/http2). Glavni problem bo IE11, ki
ima le parcialno podporo, vendar bi se ti uporabniki morali preusmeriti na Edge.

Chrome, Firefox in drugi podpirajo HTTP/2 že leta, zato menimo, da je varno izvesti to spremembo.

### Koristi zmogljivosti

FastComments je že precej optimiziran glede na služene vire in njihov vrstni red. Na primer,
widget za komentarje služi le nekaj zahtevkov za nalaganje - začetni iframe, nato skripto, ki vključuje stilizacijo za zmanjšanje števila zahtevkov, in nato
zahtevo do API za pridobitev vseh potrebnih informacij. V primerjavi z mnogimi drugimi storitvami je precej kompakten.

Torej, to ni primer, kjer HTTP/2 resnično pomaga. Glavna korist HTTP/2 je omogočanje sočasnih zahtevkov.

Vendar pa nam HTTP/2 pomaga pri kompresiji! Glave so zdaj poslane v binarnem protokolu, ki
je bolj kompakten, in določeni vtičniki z veliko viri se bodo naložili mnogo hitreje, saj se zahtevki
lahko usmerjajo v vzporedju.

### Na zaključek

Hvala našim strankam za potrpljenje pri uvajanju teh sprememb. Upamo, da
še naprej uživate v FastComments.

Na zdravje!

{{/isPost}}

---