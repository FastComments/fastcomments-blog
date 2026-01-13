---
[category:API & Development]
###### [postdate]
# [postlink]FastComments gre v React[/postlink]

{{#unless isPost}}
Potrebujete v aplikacijo, razvito v Reactu, vdelati komentarje? Imamo rešitev za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnične izraze

#### Kaj je novega

FastComments sedaj ima React komponento, ki je enakovredna naši VanillaJS vtičnici.

Odločili smo se, da jo poimenujemo fastcomments-react. GitHub repozitorij z izvorno kodo najdete <a href="https://github.com/FastComments/fastcomments-react" target="_blank">tukaj</a>.

Repozitorij vsebuje tudi primer uporabe vtičnice.

Na voljo je na NPM, ki ga najdete <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">tukaj</a>.

#### Kako deluje

Način delovanja te nove komponente je, da je React komponenta ovitek okoli obstoječe FastComments vtičnice.
 
To pomeni, da če dodamo funkcionalnosti našim obstoječim komponentam ali odpravimo napake, boste še vedno takoj imeli koristi!

#### Zakaj nova komponenta?

Napisali smo FastComments VanillaJS vtičnico, da bo temelj našega poslovanja (poleg osnovnega ozadja). To pomeni, da smo jo zasnovali tako, da jo je mogoče razširiti, prav tako kot zdaj.

Čeprav brez te nove React knjižnice, bi se lahko FastComments integriral v vašo aplikacijo z uporabo svoje lastne knjižnice, bi bila to velika ovira za sprejem. Z neposrednim podporo 
Reactu zelo olajšamo sprejem FastComments za te vrste strank.

#### Enostranske aplikacije?

FastComments podpira enostranske aplikacije (SPAs) v svoji osnovi. Komponenta spremlja spremembe objekta konfiguracije - tako da, če posodobite trenutno stran (imenovano urlId), se bo vtičnica
ponovno upodobila.

#### Kaj se spreminja za obstoječe stranke 

Nič se ne spremeni za obstoječe stranke - in **nič** ni narobe z uporabo različice VanillaJS FastComments za nove projekte. fastcomments-react je odvisen od različice VanillaJS
FastComments in vedno bo. Če bomo izdali Angular ali Vue komponente, bomo sledili istemu modelu.

Naša VanillaJS vtičnica je prvorazredna komponenta FastComments. Ta izdaja je popolnoma *dodaten* del naše infrastrukture.

Poleg tega VanillaJS vtičnica ostaja odlična rešitev za dodajanje vdelanih komentarjev v katero koli spletno stran, ki ne uporablja okvira, kot je statična stran.

#### Na koncu

Z izdajo knjižnice fastcomments-react in prihodnjih knjižnic se nadejamo, da bomo olajšali razvijalcem sprejetje FastComments ob uporabi modernih razvojnih
metodik. 

Na zdravje!

{{/isPost}}

---