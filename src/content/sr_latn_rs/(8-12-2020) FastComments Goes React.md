---
[category:API & Development]
###### [postdate]
# [postlink]FastComments ide ka Reactu[/postlink]

{{#unless isPost}}
Treba da ugradite komentare u aplikaciju razvijenu sa React? Imamo rešenje za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Šta je novo

FastComments sada ima React komponentu koja je na nivou funkcionalnosti sa našim VanillaJS widgetom.

Odlučili smo da nazovemo biblioteku fastcomments-react. Možete pronaći GitHub repozitorijum sa izvorni kod <a href="https://github.com/FastComments/fastcomments-react" target="_blank">ovde</a>.

Repozitorijum takođe sadrži primer korišćenja widgeta.

Dostupan je na NPM-u, koji možete pronaći <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">ovde</a>.

#### Kako funkcioniše

Način na koji nova komponenta funkcioniše je da je React komponenta omotač oko postojećeg FastComments widgeta.

To znači da ako dodamo funkcije postojećim komponentama ili popravimo greške, odmah ćete imati koristi!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS widget da bude jezgro našeg poslovanja (uz osnovni backend). To znači da smo ga dizajnirali da bude proširiv upravo na način na koji to radimo sada.

Iako bez ove nove React biblioteke, mogli ste integrisati FastComments u vašu aplikaciju tako što ćete napisati svoju biblioteku, to bi predstavljalo veliki izazov za usvajanje. Podržavanjem
Reacta direktno, olakšavamo usvajanje FastComments za ove tipove korisnika.

#### Aplikacije sa jednom stranicom?

FastComments podržava SPA-e na svojoj osnovi. Komponenta prati promene u objekat konfiguracije - tako da ako ažurirate trenutnu stranicu (nazvanu urlId) widget
će se ponovo prikazati.

#### Šta se menja za postojeće korisnike 

Ništa se ne menja za postojeće korisnike - i **ništa** nije loše u korišćenju VanillaJS verzije FastComments za nove projekte. fastcomments-react zavisi od VanillaJS
verzije FastComments i uvek će zavisiti. Ako objavimo Angular ili Vue komponente, pratimo isti model.

Naš VanillaJS widget je prvorazredni građanin FastComments. Ovo izdanje je potpuno *dodato* našoj infrastrukturi.

Pored toga, VanillaJS widget i dalje ostaje odlično rešenje za ugradnju komentara u bilo koju web stranicu koja ne koristi framework, poput statične stranice.

#### Na kraju

Objavljivanjem fastcomments-react biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima usvajanje FastComments dok koriste moderne razvojne
metodologije. 

Živeli!

{{/isPost}}

---