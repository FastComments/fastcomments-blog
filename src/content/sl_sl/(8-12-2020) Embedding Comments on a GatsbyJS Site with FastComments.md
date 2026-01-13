---
[category:Integrations]
###### [postdate]
# [postlink]Vstavljanje komentarjev na GatsbyJS spletnem mestu z FastComments[/postlink]

{{#unless isPost}}
Zdaj lahko uporabite FastComments za vstavljanje komentarjev na spletno mesto, izdelano z Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnično terminologijo

#### Kaj je novega

Pred kratkim smo lansirali naš <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React komponento</a> za FastComments.

To odpira veliko priložnosti - vključno z integracijo FastComments z Gatsby.

#### Če ste napisali svoj ovitek

Če ste napisali svoj React ovitek za FastComments - razmislite o tem, da ga zamenjate z našim novim. Mi bomo ohranjali to abstrakcijo za vas - in vsebuje veliko
fancy stvari, kot je <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">samodejno ponovno nalaganje ob spremembah konfiguracije</a>.

#### Kako deluje

Ker FastComments ima React komponento kot ovitek okoli našega osnovnega widgeta - je le vprašanje, da uporabite našo React knjižnico za ustvarjanje widgeta na odjemalski strani.

To komponento v celoti podpiramo in jo bomo ohranjali posodobljeno.

#### Primeri?

Začeli smo nastavljati primere, ki jih lahko najdete <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">tukaj</a>.

#### Nočni način

Eden izmed primerov, ki ga imamo, je "nočni način" - prikazovanje FastComments na spletnem mestu s črno (ali zelo temno) ozadje: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Poleg tega, ker se widget odziva na spremembe konfiguracije, to pomeni, da imate lahko način za preklapljanje teme vašega spletnega mesta in enostavno poveste fastcomments-react, naj se posodobijo.

#### Na koncu

Upamo, da boste integracijo FastComments v vaše Gatsby spletno mesto hitro in enostavno.

Na zdravje!

{{/isPost}}

---