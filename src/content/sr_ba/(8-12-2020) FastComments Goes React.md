---
[category:API & Development]
###### [postdate]
# [postlink]FastComments ide na React[/postlink]

{{#unless isPost}}
Potrebno je ugraditi komentare u aplikaciju razvijenu u React-u? Tu smo za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Šta je novo

FastComments sada ima React komponentu koja je na istom nivou funkcionalnosti kao naš VanillaJS widget.

Odlučili smo da biblioteku nazovemo fastcomments-react. GitHub repozitorij sa izvorim kodom možete pronaći <a href="https://github.com/FastComments/fastcomments-react" target="_blank">ovde</a>.

Repozitorij takođe sadrži primer korištenja widgeta.

Dostupan je na NPM-u, koji možete pronaći <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">ovde</a>.

#### Kako to funkcioniše

Način na koji nova komponenta radi je da je React komponenta omotač oko postojećeg FastComments widgeta.

To znači da ako dodamo nove funkcije našim postojećim komponentama ili ispravimo greške, vi ćete odmah dobiti taj korisnička poboljšanja!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS widget da bude osnovna funkcija našeg poslovanja (uz osnovni backend). To znači da smo ga dizajnirali da bude proširiv baš na način na koji to radimo sada.

Iako bez ove nove React biblioteke, mogli ste integrirati FastComments u svoju aplikaciju kreiranjem vlastite biblioteke, to bi predstavljalo veliki izazov u prihvatanju. Podrškom za React direktno činimo usvajanje FastComments mnogo lakšim za ove tipove klijenata.

#### Aplikacije jedne stranice?

FastComments podržava SPA-e u svom jezgru. Komponenta prati promene u config objektu - tako da ako ažurirate trenutnu stranicu (nazvanu urlId) widget će se ponovo prikazati.

#### Šta se menja za postojeće klijente

Nema promene za postojeće klijente - i **nema** ništa pogrešno u korišćenju VanillaJS verzije FastComments za nove projekte. fastcomments-react zavisi od VanillaJS
verzije FastComments i uvek će zavisiti. Ako objavimo Angular ili Vue komponente, slijedićemo isti model.

Naš VanillaJS widget je prva klasa građanin FastComments-a. Ovo izdanje je potpuno *dodatno* našoj infrastrukturi.

Pored toga, VanillaJS widget i dalje ostaje odlično rešenje za umetanje ugrađenih komentara u bilo koju web stranicu koja ne koristi framework, kao što je statična stranica.

#### Na kraju

Objavljivanjem fastcomments-react biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima da usvoje FastComments dok koriste moderne metode razvoja.

Živjeli!

{{/isPost}}

---