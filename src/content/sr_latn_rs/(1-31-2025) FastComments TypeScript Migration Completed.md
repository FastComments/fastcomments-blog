---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Završena migracija FastComments na TypeScript[/postlink]

{{#unless isPost}}
U pripremi za narednu deceniju razvoja, migrirali smo jednu od najvećih komponenti FastComments na TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

U FastComments-u cenimo jezike sa statički dodeljenim tipovima. Konkretno, sviđa mi se pristojne tipne sisteme sa brzim kompajlerima. FastComments je počeo sa potonjim - ili bez kompajlera. Dok smo u prvoj godini imali dve usluge napisane u modernom Javi, glavne backend i frontend biblioteke su napisane u CJS JS koji radi na Node-u.

U pripremi za narednu deceniju razvoja, migrirali smo najveće komponente FastComments-a na TypeScript.

To je uključivalo migraciju preko 130k linija koda (od toga 100k je backend) kroz 1441 fajl, i ispravku više od 8000 grešaka prilikom kompajliranja.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Screenshot" title="GitHub Screenshot" />
</div>

Ovo je urađeno tokom dva nedelje.

### Zamrzavanje koda - Hvala

Želim da se zahvalim našim korisnicima na strpljenju u vezi sa kašnjenjima u ispravkama grešaka ili ispuštanju novih funkcija dok smo imali dvonedeljno zamrzavanje koda kako bismo završili ovu nadogradnju. Hvala!

### Ispravke grešaka

Kao što možete zamisliti, ispravili smo nekoliko grešaka. Ove su se većinom odnosile na detekciju spama i keširanje.

### Prekinute promene

- Svi API krajnji tačke sada vraćaju status: 'failed' umesto mešavine "failed" i "failure" kao vrednosti statusa. "success" ostaje nepromenjen.
- Nećemo više podrazumevati prvu konfiguraciju widget-a ako ne postoji podudaranje, umesto toga ćemo vratiti podrazumevanu sistemsku konfiguraciju.

### Kako je bilo?

Otkrili smo da, kao i obično, mnogi alati u NPM ekosistemu koji pomažu u ovom zadatku nisu dobro funkcionisali. Tako da smo koristili LLM-ove za generisanje skripti za obavljanje većeg dela posla. Na primer, puno smo koristili JSDoc, tako da smo mogli napisati skripte koje uzimaju JSDoc i konvertuju ih u TypeScript interfejse i definicije tipova, i pravilno anotiraju argumente funkcija i povratne tipove. Takođe smo koristili ove skripte za migraciju iz CJS u ESM, što je uključivalo prepisivanje
uvoz, izvoz i detekciju uobičajenih problema tokom izvršavanja poput `__dirname`.

Da li sam spomenuo probleme tokom izvršavanja?

### Kako je TypeScript 2025. godine?

TypeScript je lep jezik za pisanje poslovne logike. Ali, Java još uvek ima bolji DevEx. Ako Java, Go, ili Rust kompajlira, najverovatnije će raditi. Sa TypeScript-om, mogu učiniti nešto poput:

    console.log(__dirname);

... i ovo će se kompajlirati.

Ali neće se izvršavati, sa modernim es modulima. Vaš IDE će rado čak i automatski dopuniti `__dirname`, a zatim će doći do greške tokom izvršavanja. Deluje kao Spring DI, ali lošije.

Takođe možete raditi stvari kao što su:

    context.someImportantMethodToCall;

Sada, ovo je "izjava". To je validna "izjava". Na prvi pogled biste mogli pomisliti da zovemo `someImportantMethodToCall`, ali ne zovemo! Moj IDE, bar, ne upozorava na ovo, i niti kompajler. Kod neće uraditi ništa (osim ako `someImportantMethodToCall` nije klasa `getter`, u kojem slučaju se implicitno poziva...)

Rešenje je:

    context.someImportantMethodToCall();

Mislim da ovo možete pratiti sa nečim poput eslint-a i nekim pravilom "bez nuspojava", ali tada uključujete još jedan veliki skup biblioteka koje treba ažurirati, i tada eslint mora da analizira cijelu vašu kod bazu na svakoj build, alati su spori, i tako dalje - ne, hvala. Uticaj na produktivnost zbog sporih alata poput eslint-a je bio značajniji u mojoj karijeri u prethodnim poslovima nego "povećanje" produktivnosti koje sam ikada dobio od manjih stvari koje eslint ispravlja/sprečava sa razmacima itd. Sada dolaze brži alternativi, što je sjajno.

TypeScript je zaista dobar zbog jezičkih karakteristika kao što je `Pick<User, 'username', 'email'>`. Ovo, u kombinaciji sa inferencijom tipova, pruža način za dobijanje tip-sigurnih rezultata upita iz baze podataka za podskupove većih objekata bez potrebe da definišemo klasu za svaku formu. `Pick` je nešto što me iznenađuje da Scala nema. Tip Unije su takođe veoma korisne.

Inkrementalna gradnja takođe dobro funkcioniše, samo smo povećali vreme gradnje u CI za oko 5 - 10 sekundi u proseku, za gradnju deljene biblioteke, frontenda i backend-a.

### Tajming razvoja

Za one radoznale, evo kako je naš napredak izgledao:

- Prvi dan: Pronađeno 5564 grešaka u 362 fajla.
- Drugi dan: Pronađeno 4034 grešaka u 239 fajla.
- Treći dan: Pronađeno 3784 grešaka u 191 fajlu.
- Četvrti dan: Pronađeno 2974 grešaka u 169 fajlova.
- Peti dan: Pronađeno 3000 grešaka u 171 fajlu.
- Šesti dan: Pronađeno 2916 grešaka u 165 fajlova.
- Sedmi dan: Pronađeno 2618 grešaka u 157 fajlova.
- Osmi dan: Pronađeno 2253 greške u 109 fajlova.
- Deveti dan: Pronađeno 1605 grešaka u 69 fajlova.
- Deseti dan: Pronađeno 686 grešaka u 53 fajla.
- Jedanaesti dan: Backend jedinični testovi prolaze.
- Dvanaesti dan: Početak migracije frontenda, 3118 grešaka.
- Trinaesti dan: Pronađeno 2172 grešaka.
- Četrnaesti dan: Pronađeno 1224 grešaka.
- Petnaesti dan: Pronađeno 498 grešaka.
- Šesnaesti dan: Sve greške prilikom kompajliranja ispravljene.
- Sedamnaesti dan: Objavljeno. E2E testovi prolaze. 30 minuta zastoja tokom neočekivanih problema pri izvršavanju. :)

### Budućnost

Ovo smo uradili da podržimo razvoj za narednu deceniju. Sistem je sada dovoljno velik da je brže razvijati sa tipnim sistemom nego bez njega.

Možete se takođe očekivati da će naša TypeScript biblioteka na NPM poboljšati, kao što je već počela da se poboljšava, pošto sada koristimo tu biblioteku u našem server i klijent kodu.

Takođe ćemo uskoro objaviti generisane klijentske SDK-ove direktno iz serverskog koda, što je bila glavna motivacija za ovaj napor.

### U zaključku

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ovih promena. Javite nam ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---