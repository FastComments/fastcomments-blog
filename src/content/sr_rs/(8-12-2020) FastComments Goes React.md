---
[category:API & Development]
###### [postdate]
# [postlink]FastComments Goes React[/postlink]

{{#unless isPost}}
Trebate da ugradite komentare u aplikaciju razvijenu u React-u? Imamo rešenje za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Šta je Novo

FastComments sada ima React komponentu koja je funkcionalno izjednačena sa našim VanillaJS widgetom.

Odlučili smo da biblioteku nazovemo fastcomments-react. Možete pronaći GitHub repozitorijum sa izvorom <a href="https://github.com/FastComments/fastcomments-react" target="_blank">ovde</a>.

Repozitorijum takođe sadrži primer korišćenja widgeta.

Dostupan je na NPM-u, koji možete pronaći <a href="https://www.npmjs.com/package/fastcomments-react" target="_blank">ovde</a>.

#### Kako Radi

Način na koji ova nova komponenta funkcioniše je da je React komponenta obavijena oko postojećeg FastComments widgeta.
 
To znači da ako dodamo funkcionalnosti našim postojećim komponentama ili ispravimo greške, odmah ćete imati koristi!

#### Zašto Nova Komponenta?

Napisali smo FastComments VanillaJS widget da bude osnovna komponenta našeg poslovanja (uz osnovni backend). To znači da smo je dizajnirali da može biti proširena baš kao što to radimo sada.

Iako bez ove nove React biblioteke, mogli ste integrisati FastComments u vašu aplikaciju tako što biste napisali svoju biblioteku, to bi bila velika prepreka za usvajanje. Podržavajući
React direktno, olakšavamo usvajanje FastComments za ove vrste korisnika.

#### Aplikacije sa Jednom Stranicom?

FastComments podržava SPA kao svoju osnovu. Komponenta prati promene u objekat konfiguracije - tako da ako ažurirate trenutnu stranicu (koja se zove urlId), widget će se ponovo renderovati.

#### Šta se Menja za Postojeće Kupce 

Za postojeće kupce ništa se ne menja - i **nema** ništa loše u korišćenju VanillaJS verzije FastComments za nove projekte. fastcomments-react zavisi od VanillaJS
verzije FastComments i uvek će zavisiti. Ako objavimo Angular ili Vue komponente, pratimo isti model.

Naš VanillaJS widget je građanin prvog reda FastComments-a. Ovo izdanje je potpuno *aditivno* našoj infrastrukturi.

Pored toga, VanillaJS widget i dalje ostaje odlično rešenje za ugradnju komentara u svaku web stranicu koja ne koristi framework, poput statične stranice.

#### Zaključak

Objavljivanjem fastcomments-react biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima usvajanje FastComments-a dok koriste moderne razvojne
metodologije. 

Živeli!

{{/isPost}}