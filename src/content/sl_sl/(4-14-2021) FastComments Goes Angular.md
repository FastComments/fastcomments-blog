---
[category:API & Development]

###### [postdate]
# [postlink]FastComments gre v Angular[/postlink]

{{#unless isPost}}
Potrebujete v aplikacijo, razvito z Angularjem, vstaviti komentarje? Tu smo za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnično terminologijo

#### Kaj je novega

FastComments sedaj vsebuje komponento za Angular, ki je funkcionalno enakovredna našemu VanillaJS vtičniku.

Odločili smo se, da bomo knjižnico poimenovali ngx-fastcomments. GitHub repozitorij s izvorno kodo lahko najdete <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">tukaj</a>.

Repozitorij vsebuje tudi primer uporabljanja vtičnika v obliki Angular delovnega prostora.

Najdete ga na NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">tukaj</a>.

#### Kako deluje

Način delovanja te nove komponente je, da je Angular komponenta ovitek okoli obstoječega FastComments vtičnika.

To pomeni, da če dodamo nove funkcionalnosti našim obstoječim komponentam ali odpravimo napake, boste od tega lahko takoj imeli koristi!

#### Zakaj nova komponenta?

FastComments VanillaJS vtičnik smo napisali, da bi bil jedro našega poslovanja (skupaj z osnovnim backendom). To pomeni, da smo ga zasnovali tako, da ga je mogoče razširiti, tako kot to počnemo zdaj.

Čeprav bi brez te nove Angular knjižnice lahko integrirali FastComments v vašo aplikacijo z ustvarjanjem svoje lastne knjižnice, bi to predstavljalo velik ovire za sprejem. Z neposredno podporo za Angular olajšamo sprejem FastComments za te vrste strank.

#### Enostranske aplikacije?

FastComments podpira SPA-je v svoji osnovi. Komponenta spremlja spremembe v objektu konfiguracije s pomočjo zaznavanja sprememb. Na primer, če posodobite trenutno stran (imenovano urlId), se bo vtičnik ponovno izrisal. To omogoča enostavno izvajanje primerov uporabe, kot sta preklapljanje temnega načina ali dodajanje paginacije.

#### Kaj se spreminja za obstoječe stranke

Za obstoječe stranke se ne spreminja nič – in **nič** ni narobe, če v novih projektih uporabite različico FastComments VanillaJS. ngx-fastcomments je odvisen od različice FastComments VanillaJS in vedno bo. Če bomo izdali nove komponente, bomo sledili istemu modelu.

Naš VanillaJS vtičnik je prvorazredni član FastComments. Ta izdaja je povsem *dodatek* naši infrastrukturi.

Poleg tega še vedno ostaja VanillaJS vtičnik odlična rešitev za vstavljanje vgrajenih komentarjev v katero koli spletno stran, ki ne uporablja ogrodja, kot je statična stran.

#### V zaključku

Z izdajo knjižnice ngx-fastcomments in prihodnjih knjižnic upamo, da bomo olajšali sprejem FastComments za razvijalce, ki uporabljajo sodobne razvojne metodologije.

Na zdravje!

{{/isPost}}

---