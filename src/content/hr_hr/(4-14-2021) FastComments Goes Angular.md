---
[category:API & Development]

###### [postdate]
# [postlink]FastComments ide na Angular[/postlink]

{{#unless isPost}}
Trebate umetnuti komentare u aplikaciju razvijenu s Angularom? Tu smo za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Što je novo

FastComments sada ima Angular komponentu koja je ravna s našim VanillaJS widgetom.

Odlučili smo nazvati biblioteku ngx-fastcomments. Izvorni kod možete pronaći u GitHub repozitoriju <a href="https://github.com/FastComments/fastcomments-angular" target="_blank">ovdje</a>.

Repozitorij također sadrži primjer korištenja widgeta u obliku Angular radnog prostora.

Možete ga pronaći na NPM <a href="https://www.npmjs.com/package/ngx-fastcomments" target="_blank">ovdje</a>.

#### Kako to funkcionira

Način na koji ova nova komponenta funkcionira je da je Angular komponenta omotač oko postojećeg FastComments widgeta.

To znači da ako dodamo nove funkcije našim postojećim komponentama ili ispravimo greške, još uvijek ćete odmah imati koristi!

#### Zašto nova komponenta?

Napisali smo FastComments VanillaJS widget kako bismo ga učinili srži našeg poslovanja (uz osnovnu backend infrastrukturu). To znači da smo ga dizajnirali da se proširuje baš onako kako sada radimo.

Iako bez ove nove Angular biblioteke, mogli ste integrirati FastComments u svoju aplikaciju pisanjem vlastite biblioteke, to bi predstavljalo veliki izazov za prihvaćanje. Podrškom za Angular izravno, olakšavamo usvajanje FastComments za ove vrste korisnika.

#### Aplikacije jedne stranice?

FastComments podržava SPA-e u svojoj osnovi. Komponenta prati promjene u konfiguracijskom objektu pomoću detekcije promjena. Na primjer, ako ažurirate trenutnu stranicu (nazvanu urlId), widget će se ponovo prikazati. Ovo olakšava implementaciju slučajeva korištenja poput prebacivanja tamnog načina rada ili dodavanja paginacije.

#### Što se mijenja za postojeće kupce

Nema promjena za postojeće kupce - i nema **ništa** loše u korištenju VanillaJS verzije FastComments za nove projekte. ngx-fastcomments ovisi o VanillaJS verziji FastComments i uvijek će ovisiti. Ako objavimo nove komponente, slijedit ćemo isti model.

Naš VanillaJS widget je prvoklasni građanin FastComments. Ovo izdanje je potpuno *dodano* našoj infrastrukturi.

Osim toga, VanillaJS widget i dalje ostaje sjajno rješenje za umetanje komentara u bilo koju web stranicu koja ne koristi okvir, poput statične stranice.

#### Zaključak

Objavljivanjem ngx-fastcomments biblioteke, i budućih biblioteka, nadamo se da možemo olakšati programerima usvajanje FastComments dok koriste moderne razvojne metodologije.

Živjeli!

{{/isPost}}