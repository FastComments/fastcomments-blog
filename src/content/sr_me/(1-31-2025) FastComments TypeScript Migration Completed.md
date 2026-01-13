---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]FastComments TypeScript Migracija Zatvorena[/postlink]

{{#unless isPost}}
U pripremi za narednu deceniju razvoja, migrirali smo jednu od najvećih FastComments komponenti na TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Jezik

### Šta je Novo

U FastComments cenimo statički tipizovane jezike. Konkretno, sviđa mi se pristojan sistem tipova sa brzim kompajlerima. FastComments smo počeli sa ovim poslednjim - ili bez kompajlera. Dok smo imali dve usluge napisane u modernom Java tokom prve godine, glavne backend i frontend biblioteke su napisane u CJS JS koji radi na Node.

U pripremi za narednu deceniju razvoja, migrirali smo najveće FastComments komponente na TypeScript.

To je uključivalo migraciju preko 130k linija koda (100k od toga je backend) kroz 1441 datoteku, i ispravku više od 8000 grešaka u kompajliranju.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Screenshot" title="GitHub Screenshot" />
</div>

To je urađeno tokom dve nedelje.

### Zamrzavanje Koda - Hvala

Želeo bih da se zahvalim našim korisnicima na razumevanju za bilo kakva kašnjenja u ispravkama grešaka ili objavljivanju funkcionalnosti dok smo obavljali zamrzavanje koda tokom dve nedelje kako bismo završili ovu nadogradnju. Hvala vam!

### Ispravljene Greške

Kao što možete zamisliti, ispravili smo nekoliko grešaka. Ove su uglavnom bile vezane za detekciju spama i keširanje. 

### Promene Koje Uvode Prekid

- Svi API endpointi sada vraćaju status: 'failed' umesto mešavine "failed" i "failure" kao vrednosti statusa. "success" ostaje nepromenjen.
- Više nećemo podrazumevati prvu konfiguraciju widgeta ako nema podudaranja, umesto toga ćemo vratiti podrazumevanu sistemsku konfiguraciju.

### Kako je Bilo?

Otkrili smo da, kao i obično, mnogi alati u NPM ekosistemu koji pomažu u ovom zadatku nisu funkcionisali baš dobro. Tako smo koristili LLM-ove za generisanje
skripti za obavljanje velikog dela posla. Na primer, puno smo koristili JSDoc, tako da smo mogli pisati skripte koje uzimaju JSDoc i konvertuju ih u TypeScript interfejse
i definicije tipova, a pravilno anotiraju argumente funkcija i tipove povratka. Takođe smo koristili ove skripte za migraciju sa CJS na ESM, što je uključivalo prepisivanje
importa, eksportovanja, i detekciju uobičajenih problema u radu kao što je `__dirname`.

Jesam li pomenuo probleme u radu?

### Kako je TypeScript u 2025?

TypeScript je lep jezik za pisanje poslovne logike. Ali, Java još uvek ima bolju DevEx. Ako Java, Go ili Rust kompajlira, najverovatnije će raditi. Sa TypeScript-om,
mogu uraditi nešto poput:

    console.log(__dirname);

... i ovo će se kompajlirati.

Ali neće se izvršiti, sa modernim es module-ima. Vaš IDE će radosno čak i automatski dopuniti `__dirname`, a zatim će se „srušiti“ prilikom izvršavanja. Deluje kao Spring DI, ali gore.

Takođe možete raditi stvari poput:

    context.someImportantMethodToCall;

Sada, ovo je "izjava". To je validna "izjava". Na prvi pogled mogli biste pomisliti da pozivamo `someImportantMethodToCall`, ali ne! Moj IDE, barem, ne upozorava na ovo, niti to radi kompajler. Kod će jednostavno ne raditi (osim ako `someImportantMethodToCall` nije klasa `getter`, u kom slučaju se implicitno poziva...)

Ispravka je:

    context.someImportantMethodToCall();

Mislim da to verovatno možete detektovati nečim poput eslint i nekim "no no side-effects" pravilom, ali tada povlačite još jedan veliki set biblioteka koje treba održavati ažurnim, a
onda eslint mora da analizira celokupnu bazu koda pri svakoj izgradnji, alati su spori, i tako dalje - ne hvala. Utica produktivnosti radu sa sporim alatima poput eslint-a bio je
značajniji u mojoj karijeri u prethodnim poslovima nego "poboljšanje" produktivnosti koje sam ikada dobio od minornih stvari koje eslint ispravlja/sprječava sa razmakom itd. Sada izlaze brži
alternativi, što je sjajno.

TypeScript je zaista lep zbog jezičkih karakteristika kao što su `Pick<User, 'username', 'email'>`. Ovo, u kombinaciji sa inferencijom tipa, pruža način da se imaju tip-sigurni rezultati upita iz baze podataka za podskupove
većih objekata bez potrebe da se definiše klasa za svaki oblik. `Pick` je nešto što me iznenađuje što Scala nema. Type Unije su takođe veoma lepe.

Inkrementalne izgradnje takođe funkcionišu razmerno dobro, samo smo povećali vreme naše izgradnje u CI za oko 5 - 10 sekundi u proseku, za izgradnju zajedničke biblioteke, frontend-a i backend-a.

### Vreme Razvoja

Za one radoznale, evo kako je izgledala naša progresija:

- Prvi Dan: Pronađeno 5564 greške u 362 datoteke.
- Drugi Dan: Pronađeno 4034 greške u 239 datoteka.
- Treći Dan: Pronađeno 3784 greške u 191 datoteci.
- Četvrti Dan: Pronađeno 2974 greške u 169 datoteka.
- Peti Dan: Pronađeno 3000 greške u 171 datoteci.
- Šesti Dan: Pronađeno 2916 greške u 165 datoteka.
- Sedmi Dan: Pronađeno 2618 greške u 157 datoteka.
- Osmi Dan: Pronađeno 2253 greške u 109 datoteka.
- Deveti Dan: Pronađeno 1605 greške u 69 datoteka.
- Deseti Dan: Pronađeno 686 greške u 53 datoteke.
- Dan 11: Backend Jedinične Testove Prolaze
- Dan 12: Početak migracije frontend-a, 3118 grešaka.
- Dan 13: Pronađeno 2172 greške.
- Dan 14: Pronađeno 1224 greške.
- Dan 15: Pronađeno 498 grešaka.
- Dan 16: Sve greške u kompajliranju ispravljene.
- Dan 17: Objavljeno. E2E testovi prolaze. 30 minuta zastoja tokom neočekivanih problema u radu. :)

### Budućnost

Uradili smo ovo kako bismo podržali razvoj za narednu deceniju. Sistem je sada dovoljno velik da je brže razvijati sa sistemom tipa nego bez njega.

Takođe očekujte da će naša TypeScript biblioteka na NPM poboljšati, već je počela da se unapređuje, pošto sada koristimo tu biblioteku u našem server i klijentskom kodu.

Takođe ćemo uskoro objaviti generisane klijentske SDK-ove direktno iz serverskog koda, što je bila glavna motivacija za ovaj napor.

### U Zaključku

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ovih promena. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---