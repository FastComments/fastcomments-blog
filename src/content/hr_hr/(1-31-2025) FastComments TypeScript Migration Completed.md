---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Završena migracija FastComments na TypeScript[/postlink]

{{#unless isPost}}
U pripremi za sljedeće desetljeće razvoja, migrirali smo jednu od najvećih komponenti FastCommentsa na TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Što je novo

U FastCommentsu cijenimo statički tipizirane jezike. Konkretno, sviđa mi se dobar sustav tipova s brzim kompilerima. FastComments smo započeli s potonjim - ili bez kompajlera. Dok smo imali dvije usluge napisane u modernom Javi u prvoj godini, glavne biblioteke backend-a i frontend-a bile su napisane u CJS JS koji radi na Nodeu.

U pripremi za sljedeće desetljeće razvoja, migrirali smo najveće komponente FastCommentsa na TypeScript.

To je uključivalo migraciju preko 130 tisuća linija koda (100 tisuća od toga je backend) kroz 1441 datoteku, i ispravak preko 8000 grešaka pri kompilaciji.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Screenshot" title="GitHub Screenshot" />
</div>

To je učinjeno tijekom dva tjedna.

### Zamrzavanje Koda - Hvala Vam

Želim zahvaliti našim korisnicima na strpljenju oko kašnjenja u ispravcima grešaka ili izdanjima značajki dok smo radili dvotjedno zamrzavanje koda kako bismo dovršili ovu nadogradnju. Hvala!

### Ispravljene Greške

Kao što možete zamisliti, ispravili smo nekoliko grešaka. Ove su se uglavnom odnosile na detekciju spama i predmemoriranje.

### Breaking Changes

- Svi API endpointi sada vraćaju status: 'failed' umjesto mješavine "failed" i "failure" kao statusne vrijednosti. "success" ostaje nepromijenjeno.
- Nećemo se više prema defaultu oslanjati na prvu konfiguraciju widgeta ako ne postoji podudaranje, umjesto toga vraćamo defaultnu konfiguraciju sustava.

### Kako je to izgledalo?

Otkrili smo da, kao i obično, mnogi alati u NPM ekosustavu koji pomažu u ovom zadatku nisu radili baš dobro. Tako smo koristili LLM-ove za generiranje skripti koje su obavile veliki dio posla. Na primjer, koristili smo JSDoc, tako da smo mogli napisati skripte koje uzimaju JSDoc i pretvaraju ih u TypeScript sučelja i definicije tipova, te pravilno označavaju argumente funkcija i povratne tipove. Također smo koristili te skripte za migraciju iz CJS u ESM, što je uključivalo prepisivanje import-a, export-a i otkrivanje uobičajenih problema tijekom izvođenja poput `__dirname`.

Jesam li spomenuo probleme tijekom izvođenja?

### Kako je TypeScript u 2025.?

TypeScript je lijep jezik za pisanje poslovne logike. No, Java i dalje ima bolji DevEx. Ako Java, Go ili Rust kompajlira, vrlo vjerojatno će raditi. S TypeScriptom, mogu napraviti nešto poput:

    console.log(__dirname);

... i ovo će se kompajlirati.

Ali neće se izvršiti s modernim ES modulima. Vaš IDE će rado automatski dovršiti `__dirname`, a onda će se raspasti tijekom izvođenja. Čini se kao Spring DI, ali gore.

Možete i raditi stvari poput:

    context.someImportantMethodToCall;

Sada, ovo je "izjava". To je važeća "izjava". Na prvi pogled mogli biste pomisliti da pozivamo `someImportantMethodToCall`, ali ne pozivamo! Moj IDE, barem, ne upozorava na ovo, niti to radi kompajler. Kod jednostavno neće raditi (osim ako `someImportantMethodToCall` nije `getter` klase, u tom slučaju se implicitno poziva...)

Ispravka je:

    context.someImportantMethodToCall();

Mislim da biste to mogli otkriti s nečim poput eslint-a i nekim pravilom "bez nuspojava", ali tada ćete povući još jedan veliki skup biblioteka koje treba održavati, a onda eslint mora analizirati cijelokupnu osnovu koda kod svake kompilacije, alati su spori itd. - ne hvala. Utjecaj na produktivnost u radu s sporim alatima poput eslint-a bio je značajniji u mojoj karijeri u prijašnjim poslovima nego "povećanje" produktivnosti koje sam ikada dobio od sitnica koje eslint ispravlja/sprječava s razmještajem itd. Sada se pojavljuju brže alternative, što je sjajno.

TypeScript je zaista lijep zbog značajki jezika poput `Pick<User, 'username', 'email'>`. Ovo, zajedno s inferencijom tipa, osigurava način da imamo tip-safe rezultate upita iz baze podataka za podskupove većih objekata bez potrebe za definiranjem klase za svaku formu. `Pick` je nešto na što sam iznenađen da Scala nema. Unije tipova su također stvarno lijepe.

Inkrementalne kompilacije također funkcionišu prilično dobro, samo smo povećali naše vrijeme izgradnje u CI za otprilike 5 - 10 sekundi u prosjeku, za izgradnju zajedničke biblioteke, frontend-a i backend-a.

### Tijek Razvoja

Za znatiželjne, evo kako je napredovanje izgledalo:

- Prvi dan: Pronađeno 5564 greške u 362 datoteke.
- Drugi dan: Pronađeno 4034 greške u 239 datoteka.
- Treći dan: Pronađeno 3784 greške u 191 datoteci.
- Četvrti dan: Pronađeno 2974 greške u 169 datoteka.
- Peti dan: Pronađeno 3000 grešaka u 171 datoteci.
- Šesti dan: Pronađeno 2916 grešaka u 165 datoteka.
- Sedmi dan: Pronađeno 2618 grešaka u 157 datoteka.
- Osmi dan: Pronađeno 2253 greške u 109 datoteka.
- Deveti dan: Pronađeno 1605 grešaka u 69 datoteka.
- Deseti dan: Pronađeno 686 grešaka u 53 datoteke.
- Jedanaesti dan: Backend unit testovi prolaze
- Dvanaesti dan: Početak migracije frontenda, 3118 grešaka.
- Trinaesti dan: Pronađeno 2172 greške.
- Četrnaesti dan: Pronađeno 1224 greške.
- Petnaesti dan: Pronađeno 498 grešaka.
- Šesnaesti dan: Sve greške pri kompilaciji su ispravljene.
- Sedamnaesti dan: Objavljeno. E2E testovi prolaze. 30 minuta zastoja zbog neočekivanih problema tijekom izvođenja. :)

### Budućnost

Učinili smo ovo kako bismo podržali razvoj za sljedeće desetljeće. Sustav je sada dovoljno velik da je brže razvijati s tipnim sustavom nego bez njega.

Također možete očekivati da će naša TypeScript biblioteka na NPM-u poboljšati, jer je već počela, budući da sada koristimo tu biblioteku u našem server i klijentskom kodu.

Također ćemo ubrzo objaviti generirane klijentske SDK-e izravno iz server koda, što je bila primarna motivacija oko ovih napora.

### U Zaključku

Kao i kod svih većih izdanja, drago nam je što smo mogli uzeti vrijeme za optimizaciju, testiranje i pravilno izdavanje ovih promjena. Javite nam u nastavku ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---