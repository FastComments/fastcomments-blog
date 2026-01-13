---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]FastComments TypeScript Migracija Zavedena[/postlink]

{{#unless isPost}}
U pripremi za narednu deceniju razvoja, migrirali smo jednu od najvećih FastComments komponenti na TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

### Šta je Novo

U FastComments-u cenimo jezike sa statičkim tipovima. Konkretno, volim pristojne tipove sistema sa brzim kompajlerima. FastComments smo započeli sa potonjim - ili
bez kompajlera. Iako smo imali dve usluge napisane u modernom Javi tokom prve godine, glavne backend i frontend biblioteke su napisane u CJS JS koji radi na Node-u.

U pripremi za narednu deceniju razvoja, migrirali smo najveće FastComments komponente na TypeScript.

Ovo je uključivalo migraciju preko 130k linija koda (od toga je 100k backend) preko 1441 fajlova, i ispravljanje preko 8000 grešaka pri kompajliranju.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Snimak Ekrana" title="GitHub Snimak Ekrana" />
</div>

Ovo je urađeno u toku dva nedelje.

### Zamrzavanje Koda - Hvala Vam

Želeo bih da se zahvalim našim korisnicima na razumevanju bilo kakvih kašnjenja u ispravkama grešaka ili objavljivanju funkcija dok smo imali dvonedeljno
zamrzavanje koda kako bismo završili ovu nadogradnju. Hvala vam!

### Ispravljene Greške

Kao što možete zamisliti, ispravili smo nekoliko grešaka. Ove su se uglavnom odnosile na detekciju spama i keširanje. 

### Raskidajuće Promene

- Svi API krajnji tačke sada vraćaju status: 'failed' umesto mešavine "failed" i "failure" kao vrednosti statusa. "success" ostaje nepromenjen.
- Nećemo više po defaultu koristiti prvu konfiguraciju widgeta ako ne postoji podudaranje, umesto toga ćemo vratiti podrazumevanu sistemsku konfiguraciju.

### Kako je to Izgledalo?

Otkrili smo da, kao i obično, mnogi alati u NPM ekosistemu za pomoć u ovom zadatku nisu radili baš najbolje. Tako smo koristili LLM-ove da generišemo
skripte za obavljanje velikog dela posla. Na primer, koristili smo JSDoc, tako da smo mogli napisati skripte kako bismo uzeli JSDoc i konvertovali ih u TypeScript interfejse
i definicije tipova, i pravilno označili argumente funkcije i povratne tipove. Takođe smo koristili ove skripte da migriramo iz CJS u ESM, što je uključivalo prepisivanje
importa, eksportovanja, i otkrivanje uobičajenih problema u izvođenju, kao što su `__dirname`.

Da li sam pomenuo probleme u izvršavanju?

### Kako izgleda TypeScript 2025. godine?

TypeScript je lep jezik za pisanje poslovne logike. Ali, Java još uvek ima bolji DevEx. Ako Java, Go, ili Rust kompajlira, najverovatnije će raditi. Sa TypeScript-om,
mogu uraditi nešto poput:

    console.log(__dirname);

... i ovo će se kompajlirati.

Ali neće se izvršiti, sa modernim ES modulima. Vaša IDE će rado čak i automatski dovršiti `__dirname`, a zatim će se srušiti pri izvršavanju. Čini se kao Spring DI, ali lošije.

Možete takođe uraditi stvari kao što su:

    context.someImportantMethodToCall;

Sada, ovo je "izjava". To je validna "izjava". Na prvi pogled biste mogli pomisliti da pozivamo `someImportantMethodToCall`, ali to nije slučaj! Moja IDE, barem, ne
upozorava na ovo, a ni kompajler. Kod jednostavno neće uraditi ništa (osim ako `someImportantMethodToCall` nije klasa `getter`, u kom slučaju se implicitno poziva...)

Rešenje je:

    context.someImportantMethodToCall();

Mislim da ovo verovatno možete otkriti uz nešto poput eslint i neku "no no side-effects" pravilo, ali onda uključujete još jedan veliki set biblioteka koje treba održavati
aktuelnim, a zatim eslint treba da analizira celu vašu kod bazu pri svakoj izradi, alati su spori, i tako dalje - ne hvala. Uticaj na produktivnost bavljenjem sporim alatima poput eslint bio je
značajniji u mojoj karijeri u prethodnim poslovima nego "povećanje" produktivnosti koju sam ikada dobio od sitnica koje eslint ispravlja/preventira sa razmakom itd. Sada se pojavljuju brže alternative,
što je sjajno.

TypeScript je zaista lep zbog jezičkih karakteristika poput `Pick<User, 'username', 'email'>`. Ovo, u kombinaciji sa inferencijom tipa, pruža način da se dobiju tip-sigurni rezultati upita iz baze podataka za podskupove
većih objekata bez potrebe za definisanjem klase za svaki oblik. `Pick` me iznenađuje da Scala to nema. Tip Unije su takođe zaista lepe.

Inkremetalne izrade takođe rade razonodno dobro, samo smo povećali naše vreme izrade u CI za oko 5 - 10 sekundi u proseku, za izradu zajedničke biblioteke, frontend, i backend.

### Vremenski Okvir Razvoja

Za one koji su radoznali, evo kako je naš napredak izgledao:

- Prvi Dan: Pronađeno 5564 greške u 362 datoteke.
- Drugi Dan: Pronađeno 4034 greške u 239 datoteke.
- Treći Dan: Pronađeno 3784 greške u 191 datoteke.
- Četvrti Dan: Pronađeno 2974 greške u 169 datoteke.
- Peti Dan: Pronađeno 3000 greške u 171 datoteke.
- Šesti Dan: Pronađeno 2916 greške u 165 datoteke.
- Sedmi Dan: Pronađeno 2618 greške u 157 datoteke.
- Osmi Dan: Pronađeno 2253 greške u 109 datoteke.
- Deveti Dan: Pronađeno 1605 greške u 69 datoteke.
- Deseti Dan: Pronađeno 686 greške u 53 datoteke.
- Jedanaesti Dan: Backend Jedinične Testove Prošli
- Dvanaesti Dan: Počeli smo migrirati frontend, 3118 greške.
- Trinaesti Dan: Pronađeno 2172 greške.
- Četrnaesti Dan: Pronađeno 1224 greške.
- Petnaesti Dan: Pronađeno 498 greške.
- Šesnaesti Dan: Sve greške pri kompajliranju ispravljene.
- Sedamnaesti Dan: Objavljeno. E2E testovi prolaze. 30 minuta prekida tokom nepredviđenih problema u izvršavanju. :)

### Budućnost

Uradili smo ovo da podržimo razvoj za narednu deceniju. Sistem je sada dovoljno veliki da je brže razvijati sa sistemom tipova nego bez njega.

Takođe možete očekivati da će naša TypeScript biblioteka na NPM napredovati, jer je to već počela, budući da sada koristimo tu biblioteku u našem server i klijentskom kodu.

Takođe ćemo uskoro objaviti generisane klijentske SDK-ove direktno iz server koda, što je bila primarna motivacija za ovaj napor.

### Na Zaključak

Kao i kod svih glavnih izdanja, zadovoljni smo što smo mogli odvojiti vreme za optimizaciju, testiranje i pravilno objavljivanje ovih promena. Obavestite nas
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---