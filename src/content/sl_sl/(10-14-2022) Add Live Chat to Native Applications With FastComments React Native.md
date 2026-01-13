---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Dodajte Live Chat v Nativne Aplikacije s FastComments React Native[/postlink]

{{#unless isPost}}
Po mesecih dela z veseljem sporočamo, da je fastcomments-react-native-sdk zdaj na različici 1.0 za splošno dostopnost.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta Članek Vsebuje Tehnične Izraze

### Kaj je Novega

Pri FastComments smo lansirali nov način za gradnjo React Native aplikacij s FastComments. Prej ste uporabili našo react-native obvoznico okoli
VanillaJS knjižnice. To je povzročilo številne težave z zakasnitvijo in pomnilnikom, saj je zahtevalo web view - brskalnik v vaši aplikaciji - samo za nalaganje naše knjižnice.

Sedaj smo **popolnoma** prenesli FastComments na React Native in napisali naš lasten WYSIWYG urejevalnik, da popolnoma odpravimo potrebo po web view.

Knjižnica podpira različne videze in postavitve. Na primer, tukaj je Erebus videz, ki je videz temnega stila za live-chat:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

Knjižnica je na voljo [na GitHubu pri FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) kot tudi
[na NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Prilagodljivo

Nova nativna knjižnica je zasnovana tako, da je prilagodljiva kot obstoječa spletna knjižnica.

Lahko:

- Prilagodite vse vire in ikone, ki jih uporablja knjižnica.
- Prilagodite slog vsakega komponente v knjižnici s posredovanjem objekta Styles od zgoraj.
- Prilagodite vse prevode.
- Uporabite enega od že vnaprej določenih ali skupnostno razvitega videza.
- Uporabite mnoge enake možnosti konfiguracije, ki jih podpira spletna knjižnica.

### Popoln Seznam Funkcij

Knjižnica podpira mnoge stvari. Nepopoln seznam vključuje:

- [x] Blokiranje
- [x] Reakcije na klepet
- [x] Otroški komentarji in odgovori
- [x] Po meri slog (kot vrsta stilskega lista)
- [x] Emotikoni
- [x] Oznake
- [x] Gif brskalnik - Z privzetimi trendi + iskalno zmogljivostjo. Slike in iskanje anonimne preko proxy.
- [x] Živo komentiranje
- [x] Izbor in nalaganje medijev
- [x] Nativni WYSIWYG urejevalnik s podporo za slike.
- [x] Obvestilna storitev (pridobivanje neprebranih obvestil uporabnika v ozadju za pošiljanje, itd.)
- [x] Seznam obvestil (prikazan ob klikom na zvonec). Podpira naročnine.
- [x] Paginarna (Gumbi)
- [x] Paginarna (Neskončno pomikanje)
- [x] Pripenjanje komentarjev
- [x] Varnostno, enostavno SSO in anonimno komentiranje.
- [x] Več predhodno določenih videzov.
- [x] Preklop za prikaz/skritje komentarjev
- [x] Temi
- [x] Kazalci aktivnosti uporabnikov
- [x] Glasovanje

### Kako Deluje

Knjižnica je popolna prepis FastComments odjemalca v TypeScript in React Native.

### Načrt za Dolgoročno

Dolgoročno bomo vzdrževali tako VanillaJS knjižnico kot tudi react-native knjižnico vzporedno, prav tako katere koli prihodnje nativne knjižnice, ki jih morda razvijemo.

### Kaj je Naslednje?

Veselimo se povratnih informacij uporabnikov in skupnosti, da bomo to knjižnico izboljšali s časom, prav tako kot smo to počeli z spletno ekosistemom.

### Na Zaključek

Vemo, da so to knjižnico nekateri dolgo čakali. Kot pri vseh pomembnih izdajah smo veseli, da smo si lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te knjižnice.

Na zdravje!

{{/isPost}}

---