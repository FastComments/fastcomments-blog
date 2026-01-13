---
[category:Features]

###### [postdate]

# [postlink]Posodobitev značk za april[/postlink]

{{#unless isPost}}Nekatere spremembe so bile narejene na značkah, dodane so bile nekatere funkcije in dodane so bile nekatere izboljšave, da se prepreči, da bi značke izginile, ko pride do ponovnega procesiranja.{{/unless}}

{{#isPost}}

### Novosti - Zlaganje značk

Pred včerajšnjim dnem, če ste imeli niz značk v skupnosti, kot so:

- Nov komentator (1 komentar)
- Član skupnosti (50 komentarjev)
- Ekspert (500 komentarjev)

... in uporabnik konča s 500 komentarji, bodo njegove značke prikazane na njegovih komentarjih tako:

    [Nov komentator] [Član skupnosti] [Ekspert]

V tem posebnem scenariju verjetno želimo, da se prikaže samo značko `Ekspert`. Večina naših strank to želi, vendar ne vse. Vse naše najemnike
nimajo iste nastavitve in to priznamo.

Kljub temu pa za skupnosti, ki sledijo zgoraj opisanim vzorcem, kar je večina, želijo, da se na komentarjih prikaže najbolj prestižna zanka.

Za obravnavo tega primera smo dodali koncept zanke, ki en zank **zamenja** drugo zanko. S tem lahko ustvarimo tok zank, ki jih uporabnik lahko doseže:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Zlaganje značk" title="Zlaganje značk" />
</div>

Interno temu pravimo *zlaganje značk*. Nova znamka "zloži" na vrh stare.

To lahko konfiguriramo tako, da uredimo značko in povemo, da zamenja drugo:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Nastavitev zlaganja značk" title="Nastavitev zlaganja značk" />
</div>

Očitno postane težko slediti, zato je bila seznam značk posodobljen, da zagotovi več informacij, vključno s tem, katera značko zamenja katero.

### Novosti - Izboljšave pri ponovnem procesiranju

Ko spremenite značko, moramo pregledati vse vaše uporabnike in določiti, ali bi še vedno morali "pridobiti" značko,
in posodobiti vse prikazane sloge značk in predpomnilnike, tako da se prikaže najnovejša različica.

Ponovno procesiranje več ne odstrani značke uporabnika ob shranjevanju, tudi če ne izpolnjuje več kriterijev **razen če se nastavljeni kriteriji spremenijo**.

Opomba za skrbnike - lahko zmanjšate prag kriterijev za značko, ne da bi ponovno procesiranje odstranilo to značko. Le **povečanje** praga bo
povzročilo ponoven procesiranje, ki lahko v nekaterih primerih odstrani značko.

Za več informacij nadaljujte v *Perspektivi komentatorja*.

### Perspektiva komentatorja

Ponovno procesiranje značk je zelo tvegano, saj uporabniki ljubijo svoje značke - in to priznamo! Ne želimo odvzeti uporabnikove značke, ker
so pridobili značko Odgovor zaradi 100 uporabnikov, ki so odgovorili na njihove komentarje, in nato kasneje 10 uporabnikov izbriše svoje komentarje ali jih odstranijo moderatorji.

Značka bi morala ostati, in ostane, razen...

Pri ponovnem procesiranju ne vemo, da prejšnji komentarji obstajajo, zato bi se značko lahko odstranilo nekaterim uporabnikom, če je značko urejeno, kot na primer, če je stil
posodobljen, ali če je nastavljeno zlaganje značk.

To se je zgodilo 17. aprila 2023, ko smo uvedli *Zlaganje značk* in nekatere skupnosti so omogočile to funkcijo.

Opazili smo dva scenarija:

1. Uporabniki so ugotovili, da so nekatere njihove značke izginile. Kar se je dejansko zgodilo, je, da so bile skrite vse razen najbolj prestižnih značk.
   - **Lahko prikažete vse svoje značke, če želite.** Preprosto kliknite meni s tremi pikami v zgornjem desnem kotu svojega profila in kliknite `Upravljanje značk`.
2. Nekatere značke so dejansko izginile nekaterim uporabnikom, kot v primeru značke Odgovor zgoraj. Da bi preprečili, da bi se to zgodilo v prihodnosti, smo
    izboljšali sistem ponovnega procesiranja, tako da se značko ne bo odstranilo, razen če se kriteriji za značko sami spremenijo in ne izpolnjujete več kriterijev, vendar
    odsvetujemo skrbnikom skupnosti, da to storijo, ker, še enkrat, uporabniki ljubijo svoje značke.

### Za moderatorje

Z vidika moderatorjev ni sprememb, razen tega, da boste v večini primerov videli manj značk. Namesto tega boste videli najbolj prestižne značke
vas in članov vaše skupnosti.

### Obstoječe stranke

Uvedli smo to funkcijo vsem obstoječim strankam na vseh ravneh! Zlaganje značk ni privzeto omogočeno in ga je treba ročno konfigurirati.

### Na koncu

Upamo, da boste to novo zbirko funkcij in popravkov našli koristno in enostavno za uporabo. 

Na zdravje!

{{/isPost}}