---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Migracija FastComments TypeScript O完成[/postlink]

{{#unless isPost}}
U pripremi za narednu deceniju razvoja, migrirali smo jednu od najvećih komponenti FastComments na TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

U FastComments cenimo jezike sa statički definisanim tipovima. Konkretno, sviđa mi se pristojan sistem tipova sa brzim kompajlerima. FastComments je započeo sa potonjim - ili
bez kompajlera. Dok smo imali dve usluge napisane u modernom Javi tokom prve godine, glavne biblioteke za backend i frontend su napisane u CJS JS-u koji radi na Node.

U pripremi za narednu deceniju razvoja, migrirali smo najveće FastComments komponente na TypeScript.

To je uključivalo migraciju više od 130k linija koda (od čega je 100k backend) preko 1441 fajla, i ispravku preko 8000 grešaka prilikom kompajliranja.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Screenshot" title="GitHub Screenshot" />
</div>

Ovo je urađeno u dva nedelje.

### Zamrzavanje Koda - Hvala

Želim da se zahvalim našim korisnicima što su se nosili sa bilo kakvim kašnjenjima u ispravkama grešaka ili izdavanju funkcionalnosti dok smo radili dvonedeljno zamrzavanje koda da bismo završili ovu nadogradnju. Hvala vam!

### Ispravljene Greške

Kao što možete zamisliti, ispravili smo nekoliko grešaka. One su se većinom odnosile na detekciju spama i keširanje.

### Promene koje su neizbežne

- Svi API endpoini sada vraćaju status: 'failed' umesto mešavine "failed" i "failure" kao vrednosti statusa. "success" ostaje nepromenjen.
- Nećemo se više podrazumevati na prvu konfiguraciju widget-a ako nema podudaranja, umesto toga, vraćaćemo podrazumevanu sistemsku konfiguraciju.

### Kako je to izgledalo?

Otkrili smo da, kao i obično, mnogi alati u NPM ekosistemu za pomoć u ovom zadatku nisu dobro radili. Tako smo koristili LLM-ove da generišemo
skripte koje rade većinu posla. Na primer, mnogo smo koristili JSDoc, tako da smo mogli napisati skripte koje preuzimaju JSDoc i konvertuju ih u typescript interfejse
i definicije tipova, i pravilno anotiraju argumente funkcija i tipove povratka. Takođe smo koristili ove skripte za migraciju sa CJS na ESM, što je uključivalo prepisivanje
importa, eksportovanja i detekciju uobičajenih runtime problema kao što je `__dirname`.

Da li sam pomenuo runtime probleme?

### Kako je TypeScript 2025. godine?

TypeScript je lep jezik za pisanje poslovne logike. Ali, Java i dalje ima bolji DevEx. Ako Java, Go, ili Rust kompajliraju, najverovatnije će raditi. Sa TypeScript-om,
mogu učiniti nešto poput:

    console.log(__dirname);

... i ovo će se kompajlirati.

Ali neće se izvršiti, sa modernim es modulima. Vaš IDE će čak i autokompletirati `__dirname`, a onda će se srušiti tokom izvršavanja. Deluje kao Spring DI, ali gore.

Takođe možete raditi stvari poput:

    context.someImportantMethodToCall;

Sada, ovo je "izjava". To je važeća "izjava". Na prvi pogled možete pomisliti da pozivamo `someImportantMethodToCall`, ali ne pozivamo! Moj IDE, bar, ne
upozorava na to, niti to radi kompajler. Kod neće uraditi ništa (osim ako je `someImportantMethodToCall` klasa `getter` u kom slučaju se implicitno poziva...)

Rešenje je:

    context.someImportantMethodToCall();

Mislim da to možete otkriti sa nečim poput eslint-a i nekim pravilom "nema sporednih efekata", ali onda uvlačite još jedan veliki skup biblioteka da ih održavate u toku,
i onda eslint mora da analizira celu vašu kod bazu na svakoj gradnji, alati su spori, i tako dalje - ne, hvala. Uticaj na produktivnost zbog spore alate poput eslint-a bio je
značajniji u mojoj karijeri u prethodnim poslovima nego "povećanje" produktivnosti koje sam ikada dobio od malih stvari koje eslint ispravlja/spriječava sa razmakom itd. Sada se pojavljuju brže alternative, što je sjajno.

TypeScript je zaista dobar zbog jezičkih karakteristika poput `Pick<User, 'username', 'email'>`. Ovo, u kombinaciji sa inferencijom tipa, pruža način da imajte tip-sigurne rezultate upita iz baze podataka za podskupove
većih objekata bez potrebe da definišete klasu za svaki oblik. `Pick` je nešto što me iznenađuje da Scala nema. Tip Unije su takođe jako korisne.

Inkrementalne gradnje takođe dobro funkcionišu, samo smo povećali naše vreme gradnje u CI za oko 5 - 10 sekundi u proseku, za izgradnju zajedničke biblioteke, frontend-a i backend-a.

### Vremenska Linija Razvoja

Za one koji su znatiželjni, evo kako je izgledala naša progresija:

- Prvi dan: Pronađeno 5564 greške u 362 fajla.
- Drugi dan: Pronađeno 4034 greške u 239 fajla.
- Treći dan: Pronađeno 3784 greške u 191 fajlu.
- Četvrti dan: Pronađeno 2974 greške u 169 fajlova.
- Peti dan: Pronađeno 3000 greške u 171 fajlu.
- Šesti dan: Pronađeno 2916 greške u 165 fajlova.
- Sedmi dan: Pronađeno 2618 greške u 157 fajlova.
- Osmi dan: Pronađeno 2253 greške u 109 fajlova.
- Deveti dan: Pronađeno 1605 greške u 69 fajlova.
- Deseti dan: Pronađeno 686 greške u 53 fajlova.
- Jedanaesti dan: Backend jedinični testovi su prošli
- Dvanaesti dan: Počeli smo sa migracijom frontend-a, 3118 grešaka.
- Trinaesti dan: Pronađeno 2172 greške.
- Četrnaesti dan: Pronađeno 1224 greške.
- Petnaesti dan: Pronađeno 498 greške.
- Šesnaesti dan: Sve greške prilikom kompajliranja ispravljene.
- Sedamnaesti dan: Izdato. E2E testovi prolaze. 30 minuta zastoja tokom neočekivanih runtime problema. :)

### Budućnost

Učinili smo ovo da podržimo razvoj za narednu deceniju. Sistem je sada dovoljno velik da je brže razvijati sa sistemom tipova nego bez njega.

Takođe možete očekivati da će naša TypeScript biblioteka na NPM poboljšati, kako je već počela, jer sada koristimo tu biblioteku u našem serverskom i klijentskom kodu.

Uskoro ćemo takođe objaviti generisane klijentske SDK-e direktno iz serverskog koda, što je bila primarna motivacija za napor.

### U Zaključku

Kao i kod svih velikih izdanja, drago nam je da smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ove izmene. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---