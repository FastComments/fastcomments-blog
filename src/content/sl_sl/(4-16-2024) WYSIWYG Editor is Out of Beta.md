---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG urejevalnik je iz beta verzije[/postlink]

{{#unless isPost}}
Stranke se sedaj lahko odločijo za uporabo novega urejevalnika, ki ne uporablja vidnih povezujočih oznak za oblikovanje.
{{/unless}}

{{#isPost}}

### Kaj je novega

Uporabniki FastComment so vedno imeli možnost oblikovati svoje komentarje s povezujočimi oznakami, kot je `<b>to</b>`. To je zelo
poznano vsakomur, ki je v preteklosti uporabljal internetne forume ali mnoge naše konkurente, vendar pa nekateri uporabniki in
skupnosti pričakujejo drugačno vedenje.

Sedaj lahko oblikujete besedilo v območju komentarja brez povezujočih oznak, saj se vhodno besedilo lahko preklopi na `contenteditable`.

Za namene demonstracije je to omogočeno na tem blogu.

Napreden urejevalnik ima enak videz kot star urejevalnik, le da ne uporablja vidnih povezujočih oznak.

### Vklop naprednega urejanja

V prilagajanju pripomočkov lahko preprosto omogočite `Napreden urejevalnik` in shranite. Dokumentacija je [tukaj](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Za razvijalce & težave

Dokumentacijo za uporabo tega v kodi lahko najdete [tukaj](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), čeprav priporočamo uporabo UI za prilagajanje pripomočkov, saj bo to
pripeljalo do manj podatkov, poslanih v obeh smereh ob nalaganju strani.

Generirani HTML iz vsebine, ki jo lahko urejate, se rahlo razlikuje od starega urejevalnika besedilnega območja, zato to imejte v mislih
če obdelujete komentarje iz API-ja.

### Optimizacije

Ohranili smo pripomoček za komentarje, da ne bi rasel s to novo funkcionalnostjo, tako da smo to dodali kot razširitev, ki se naloži v ozadju
ko je ta funkcionalnost omogočena, kar ohranja privzeti pripomoček za komentarje majhen in lahek.

### V zaključku

Kot pri vseh večjih izdajah smo veseli, da smo lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcionalnosti. Sporočite nam
spodaj, če odkrijete kakšne težave.

Na zdravje!

{{/isPost}}

---