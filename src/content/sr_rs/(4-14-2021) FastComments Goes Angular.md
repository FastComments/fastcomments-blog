---
[category:API & Development]

###### [postdate]
# [postlink]FastComments Ide Angular[/postlink]

{{#unless isPost}}
Treba da ugradite komentare u aplikaciju razvijenu sa Angular-om? Mi smo tu da pomognemo.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Šta je Novo

FastComments sada ima Angular komponentu koja je u skladu sa našim VanillaJS widgetom.

Odlučili smo da biblioteku nazovemo ngx-fastcomments. Možete pronaći GitHub repozitorijum sa izvorim kodom <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">ovde</a>.

Repozitorijum takođe sadrži primer korišćenja widgeta u formi Angular radnog prostora.

Možete je pronaći na NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">ovde</a>.

#### Kako Funkcioniše

Način na koji ova nova komponenta funkcioniše je taj da je Angular komponenta omotač oko postojećeg FastComments widgeta.

To znači da ako dodamo nove funkcije našim postojećim komponentama ili ispravimo greške, odmah ćete imati koristi od toga!

#### Zašto Nova Komponenta?

Napisali smo FastComments VanillaJS widget da bude srž našeg poslovanja (uz osnovni backend). To znači da smo je dizajnirali da se proširuje baš kao što to radimo sada.

Iako bez ove nove Angular biblioteke, mogli ste integrisati FastComments u vašu aplikaciju pisanjem svoje biblioteke, to bi bilo veliki izazov za usvajanje. Podrškom za
Angular direktno olakšavamo usvajanje FastComments za ove tipove korisnika.

#### Aplikacije Jedne Stranice?

FastComments podržava SPA-e kao svoju osnovu. Komponenta prati promene u konfiguracionom objektu koristeći detekciju promena. Na primer, ako ažurirate trenutnu stranicu (nazvanu urlId) widget
će se ponovo prikazati. Ovo olakšava slučajeve korišćenja kao što su prebacivanje u tamni režim ili dodavanje paginacije.

#### Šta Se Meni Promeniti za Postojeće Korisnike 

Ništa se ne menja za postojeće korisnike - i nema **ničeg** lošeg u korišćenju VanillaJS verzije FastComments za nove projekte. ngx-fastcomments zavisi od VanillaJS
verzije FastComments i uvek će zavisiti. Ako objavimo nove komponente, pratimo isti model.

Naš VanillaJS widget je prvi građanin FastComments-a. Ovo izdanje je potpuno *aditivno* našoj infrastrukturi.

Pored toga, VanillaJS widget i dalje ostaje sjajno rešenje za umetanje ugrađenih komentara u bilo koju veb stranicu koja ne koristi okvir, poput statične stranice.

#### Zaključak

Objavljivanjem biblioteke ngx-fastcomments, i budućih biblioteka, nadamo se da možemo olakšati programerima usvajanje FastComments dok koriste moderne razvojne
metodologije. 

Živeli!

{{/isPost}}

---