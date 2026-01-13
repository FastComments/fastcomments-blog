---
[category:Tutorials]
[category:Integrations]
###### [postdate]
# [postlink]Vdelava komentarjev na spletnem mestu VueJS z FastComments[/postlink]

{{#unless isPost}}
Potrebujete vdelati komentarje v aplikacijo, razvito z Vue? Imamo rešitev.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnične izraze

#### Kaj je novega

FastComments zdaj ponuja komponento za Vue, ki je v skladu z našim VanillaJS vtičnikom.

Odločili smo se, da bomo knjižnico poimenovali fastcomments-vue. GitHub repozitorij z izvorno kodo najdete <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">tukaj</a>.

Repozitorij vsebuje tudi primer uporabe vtičnika.

Na voljo je na NPM, kar lahko najdete <a href="https://www.npmjs.com/package/fastcomments-vue" target="_blank">tukaj</a>.

#### Kako to deluje

Način delovanja te nove komponente je, da komponenta Vue deluje kot ovitek okoli obstoječega vtičnika FastComments.
 
To pomeni, da če dodamo funkcionalnosti našim obstoječim komponentam ali popravimo napake, boste še vedno takoj imeli koristi!

#### Zakaj nova komponenta?

Napisali smo vtičnik FastComments VanillaJS kot jedro našega poslovanja (skupaj z osnovnim strežnikom). To pomeni, da smo ga zasnovali tako, da ga je mogoče razširiti kot zdaj.

Čeprav brez te nove Vue knjižnice, bi lahko integrirali FastComments v vašo aplikacijo z ustvarjanjem lastne knjižnice, bi bila to velika ovira za sprejetje. Z neposredno podporo za Vue olajšamo sprejemanje FastComments za te vrste strank.

#### Vue 3.0

Imamo komponento, zgrajeno posebej za Vue 3.0, imenovano <a href="https://github.com/fastcomments/fastcomments-vue-next" target="_blank">fastcomments-vue-next</a>.

#### Enostranske aplikacije?

FastComments na svoji osnovi podpira SPA. Komponenta spremlja spremembe v objektu konfiguracije - tako da, če posodobite trenutno stran (imenovano urlId), se bo vtičnik ponovno prikazal.

#### Kaj se spreminja za obstoječe stranke

Za obstoječe stranke se ne spremeni nič - in **nič** ni narobe z uporabo različice VanillaJS za nove projekte. fastcomments-vue je odvisen od različice VanillaJS
FastComments in to bo vedno ostalo. Če bomo objavili Angular ali Vue komponente, bomo sledili istemu modelu.

Naš vtičnik VanillaJS je prvovrstni državljan FastComments. Ta izdaja je popolnoma *dodatna* k naši infrastrukturi.

Poleg tega vtičnik VanillaJS še vedno ostaja odlična rešitev za dodajanje vdelanih komentarjev na katero koli spletno stran, ki ne uporablja okvira, kot je statična stran.

#### Na koncu

Z izdajo knjižnice fastcomments-vue in prihodnjimi knjižnicami upamo, da bomo olajšali razvijalcem sprejemanje FastComments ob uporabi modernih razvojnih
metodologij. 

Na zdravje!

{{/isPost}}