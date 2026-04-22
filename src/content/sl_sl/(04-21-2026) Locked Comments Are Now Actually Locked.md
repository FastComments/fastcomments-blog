---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Zaklenjeni komentarji so zdaj dejansko zaklenjeni[/postlink]

{{#unless isPost}}
Ikona zaklepanja se končno prikaže pri zaklenjenih komentarjih, zaklenjenih komentarjev pa ni več mogoče urejati ali brisati, dokler jih skrbnik ne odklenje.
{{/unless}}

{{#isPost}}

### Kaj je novega

Moderatorji so lahko že dolgo časa zaklepali komentarje. Zaklepanje komentarja preprečuje nove odgovore, kar je uporabno, ko se je tema izčrpala ali ko se podpogovor odmakne od teme.

Težava je bila, da "zaklenjeno" ni imelo velike teže. Bralci niso imeli vizualne indikacije, da je komentar zaklenjen. In čeprav so bili novi odgovori blokirani, je lahko izvirni avtor ali kdorkoli s pravicami za urejanje še vedno urejal ali brisal komentar. To ni resnično zaklenjeno. Ta posodobitev odpravlja obe težavi.

### Ikona zaklepanja

Ko moderator zaklene komentar, se v zgornjem desnem kotu komentarja prikaže majhna ključavnica, tik ob ikoni pripenjala. Prikaže se vsakemu bralcu - ne le moderatorjem. Odklepanje komentarja to odstraniti.

Ikona upošteva svetli in temni način, enako kot ikona pripenjala.

### Urejanje in brisanje sta blokirana

Zaklenjenega komentarja ni mogoče urejati ali brisati od nikogar, vključno s skrbniki in moderatorji. Če želite urediti ali odstraniti zaklenjen komentar, ga najprej odklenite, izvedite spremembo, nato pa ga ponovno zaklenite, če želite.

To velja za vsak način, ki se nanaša na komentar:

- Widget na uporabniški strani skrije vnose za urejanje in brisanje na zaklenjenih komentarjih.
- Javni API PATCH in DELETE končne točke vrnejo napako `locked`, če je ciljni komentar zaklenjen.
- Uporabniški vmesnik za moderacijo skrbnika prikaže napako zaklepanja, če poskusite izbrisati brez predhodnega odklepanja.

### Izjeme

Nekaj poti namerno obide zaklep, da lahko opravljajo svoje naloge:

- Izbris računa. Če uporabnik izbriše svoj račun FastComments, se njegovi komentarji očistijo ne glede na stanje zaklepa.
- Čiščenje uporabnikov za najemnike / SSO. Enaka ideja za odstranitev uporabnika na ravni najemnika.
- Načrtovano samodejno brisanje. Če ste načrtovali, da se bo komentar izbrisal ob določenem času, se načrtovalnik ne potrebuje ukvarjati z zaklepi.
- Čiščenje podvojenih. Orodje za odstranjevanje podvojenih odstrani zaklenjene podvojene brez ceremonije.
- Prepoved moderatorja z "izbriši vse komentarje tega uporabnika". Prepoved uporabnika in brisanje zgodovine je en sam nameren postopek, zato se tudi zaklepi odstranijo.

Vse drugo - widget, uporabniški vmesnik za moderacijo, javni API, zunanje klice - spoštuje zaklep.

### Oblika napake API

Če pokličete javni API za urejanje ali brisanje zaklenjenega komentarja, boste dobili odgovor kot:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Komentar je zaklenjen.",
    "translatedError": "Ta komentar je zaklenjen in ga ni mogoče urejati ali brisati. Najprej ga odklenite."
}</div>

HTTP status je 401. Polje `translatedError` uporablja lokalizacijo vašega najemnika in vse prilagojene prevode, ki ste jih nastavili.

### Na koncu

Majhna sprememba, vendar zapira vrzel, ki je bila odprta že nekaj časa. Zaklenjeno zdaj pomeni zaklenjeno.

Na zdravje!

{{/isPost}}