---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]FastComments TypeScript Migracija Končana[/postlink]

{{#unless isPost}}
V pripravi na naslednje desetletje razvoja smo eno največjih komponent FastComments preselili v TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnično terminologijo

### Kaj je novega

Pri FastComments cenimo jezike z statičnimi tipi. Natančneje, imam rad dostojne sisteme tipov z hitrimi prevajalniki. FastComments smo začeli s slednjim - ali
brez prevajalnika. Medtem ko smo imeli dve storitvi napisani v modernem Javi v prvem letu, so glavne knjižnice backend in frontend bile napisane v CJS JS, ki deluje na Node.

V pripravi na naslednje desetletje razvoja smo preselili največje komponente FastComments v TypeScript.

To je vključevalo migracijo več kot 130 tisoč vrstic kode (100 tisoč jih je na backendu) preko 1441 datotek, ter odpravo več kot 8000 napak pri prevajanju.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="Posnetek zaslona GitHub" title="Posnetek zaslona GitHub" />
</div>

To je bilo opravljeno v dveh tednih.

### Zamrznitev kode - Hvala

Rad bi se zahvalil našim strankam za razumevanje morebitnih zamud pri odpravljanju napak ali izdajah funkcij, saj smo opravili dvotedensko zamrznitev kode, da dokončamo to nadgradnjo. Hvala!

### Odpravljene napake

Kot si lahko predstavljate, smo odpravili nekaj napak. Te so večinoma povezane z zaznavanjem neželene pošte in predpomnjenjem.

### Prelomne spremembe

- Vsi API končnički zdaj vračajo status: 'failed' namesto mešanice "failed" in "failure" kot vrednosti statusa. "success" ostaja nespremenjen.
- Ne bomo več privzeto uporabljali prve konfiguracije vtičnika, če ni ujemanja, temveč bomo vrnili privzeto sistemsko konfiguracijo.

### Kakšno je bilo?

Ugotovili smo, da mnoge orodja v NPM ekosistemu, ki pomagajo pri tej nalogi, niso delovala prav dobro. Zato smo uporabili LLM za generiranje skript, da smo opravili velik del dela. Na primer, močno smo uporabili JSDoc, tako da smo lahko napisali skripte, da vzamejo JSDoc in jih pretvorijo v TypeScript vmesnike in definicije tipov ter pravilno annotirajo argumente funkcij in vrste vračanja. Te skripte smo prav tako uporabili za migracijo iz CJS v ESM, kar je vključevalo ponovno pisanje uvozov, izvozov ter zaznavanje pogostih težav pri izvajanju, kot je `__dirname`.

Ali sem omenil težave pri izvajanju?

### Kako je TypeScript leta 2025?

TypeScript je prijazen jezik za pisanje poslovne logike. Vendar pa Java še vedno nudi boljšo uporabniško izkušnjo. Če Java, Go ali Rust prevaja, bo verjetno deloval. Pri TypeScriptu lahko naredim nekaj tako:

    console.log(__dirname);

... in to se bo prevedlo.

Ampak ne bo delovalo, z modernimi es moduli. Vaš IDE se bo veselil, da bo celo dopolnil `__dirname`, nato pa bo ob izvajanju propadel. Zdi se kot Spring DI, ampak slabše.

Prav tako lahko počnete stvari, kot so:

    context.someImportantMethodToCall;

Zdaj je to "izjava". Je veljavna "izjava". Na prvi pogled bi morda pomislili, da kličemo `someImportantMethodToCall`, vendar tega ne počnemo! Moj IDE, vsaj, ne opozarja na to, prav tako ne prevajalnik. Koda ne bo naredila ničesar (razen če je `someImportantMethodToCall` metode `getter` v čemur primeru se implicitno pokliče...)

Rešitev je:

    context.someImportantMethodToCall();

Mislim, da lahko to verjetno zaznate z nečim, kot je eslint in nekim pravilom "brez stranskih učinkov", toda potem pripeljete še en velik niz knjižnic, da jih ohranjate posodobljene, in potem mora eslint analizirati celotno vašo kodo ob vsakem gradnji, orodja so počasna, in tako naprej - ne hvala. Vpliv na produktivnost pri reševanju po počasnih orodjih, kot je eslint, je bil v moji karieri v prejšnjih delih bolj pomemben od produktivnosti "povišanja", ki sem jo kdajkoli dobil od manjših stvari, ki jih eslint odpravlja/preprečuje s presledki itd. Sedaj prihajajo hitrejše alternative, kar je odlično.

TypeScript je res prijeten zaradi jezikovnih lastnosti, kot sta `Pick<User, 'username', 'email'>`. To, v kombinaciji z inferenco tipov, omogoča način za pridobivanje tipno varnih rezultatov poizvedb iz podatkovne baze za podmnožice večjih objektov, ne da bi bilo treba definirati razred za vsak obliko. `Pick` je nekaj, česar me preseneča, da Scala nima. Tipne unije so prav tako res prijetne.

Inkrementalna gradnja tudi deluje razmeroma dobro, povprečno smo povečali naše čase gradnje v CI za približno 5 - 10 sekund, za gradnjo skupne knjižnice, frontend-a in backend-a.

### Časovnica razvoja

Za tiste, ki jih zanima, je izgledalo takole:

- Prvi dan: Odkrili 5564 napak v 362 datotekah.
- Drugi dan: Odkrili 4034 napak v 239 datotekah.
- Tretji dan: Odkrili 3784 napak v 191 datotekah.
- Četrti dan: Odkrili 2974 napak v 169 datotekah.
- Peti dan: Odkrili 3000 napak v 171 datotekah.
- Šesti dan: Odkrili 2916 napak v 165 datotekah.
- Sedmi dan: Odkrili 2618 napak v 157 datotekah.
- Osmi dan: Odkrili 2253 napak v 109 datotekah.
- Deveti dan: Odkrili 1605 napak v 69 datotekah.
- Deseti dan: Odkrili 686 napak v 53 datotekah.
- Enajsti dan: Vse enote testov backend uspešno opravijo
- Dvanajsti dan: Začnemo migracijo frontend-a, 3118 napak.
- Tretji dan: Odkrili 2172 napak.
- Četrti dan: Odkrili 1224 napak.
- Peti dan: Odkrili 498 napak.
- Šesti dan: Vse napake pri prevajanju odpravljene.
- Sedmi dan: Izdano. E2E testi uspešno opravijo. 30 minut zastoja med nepričakovanimi težavami pri izvajanju. :)

### Prihodnost

To smo naredili, da bi podprli razvoj za naslednje desetletje. Sistem je zdaj dovolj velik, da je hitreje razvijati s sistemom tipov kot brez njega.

Prav tako lahko pričakujete, da se bo naša TypeScript knjižnica na NPM izboljšala, saj se je že začela, saj zdaj to knjižnico uporabljamo v naši strežniški in odjemalski kodi.

Kmalu bomo tudi izdali generirane odjemalske SDK-je neposredno iz strežniške kode, kar je bila primarna motivacija za ta trud.

### V zaključku

Kot pri vseh večjih izdajah smo veseli, da smo imeli čas optimizirati, testirati in pravilno izdati te spremembe. Sporočite nam
spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}

---