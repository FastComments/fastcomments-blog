---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle vtičnik[/postlink]

{{#unless isPost}}
FastComments zdaj ima posebni Moodle vtičnik z enotno prijavo, povezane komentarje in skupinski klepet za vaše tečaje.
{{/unless}}

{{#isPost}}

### Novosti

Navdušeni smo, da lahko napovemo uradni FastComments vtičnik za Moodle. Če ste uporabljali Moodle in želeli dodati
življenje, povezano komentiranje ali skupinski klepet svojim tečajem, je ta vtičnik preprost za uporabo. Nadomešča staro
ročno PHP rešitev s pravim Moodle vtičnikom, ki se namesti v nekaj minutah in se poveže z obstoječimi Moodle uporabniškimi
računi. Vtičnik deluje z Moodle 4.1 in novejšimi različicami, izvorna koda pa je na voljo na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Začetek uporabe

Za namestitev prenesite ZIP datoteko iz [GitHub repozitorija](https://github.com/FastComments/fastcomments-moodle) in jo
razpakirajte v `<moodle-root>/local/fastcomments`. Nato se prijavite kot skrbnik spletne strani in obiščite
**Sistem upravljanja > Obvestila**. Moodle bo zaznal nov vtičnik in ga samodejno namestil.

Ko je enkrat nameščen, pojdite na **Sistem upravljanja > Vtičniki > Lokalne vtičnike > FastComments** za konfiguracijo.
Potrebovali boste svoj **ID najemnika** (najdete ga v svojem FastComments nadzornem pultu) in svoj **API skrivni ključ**, če želite
uporabiti varno enotno prijavo, kar priporočamo.

Upoštevajte, da je ročno prenašanje iz GitHub-a začasno, medtem ko čakamo na odobritev vtičnika v imeniku Moodle vtičnikov.
Ko bo odobren, ga boste lahko namestili neposredno iz Moodleovega namestitvenega orodja za vtičnike.

### Slogi komentiranja

Vtičnik podpira tri sloge komentiranja, tako da lahko izberete tistega, ki najbolje ustreza vašim študentom in strukturi
tečaja.

**Komentarji** način postavi celoten komentatorski vtičnik pod vsebino strani. Študenti dobijo povezane odgovore, @omembe,
glasovanje za in proti, urejevalnik bogatega besedila, in obvestilni zvonček za naročanje na nove komentarje na strani.

<div class="text-center">
    <div class="sm">Komentarji na strani tečaja</div>
    <img src="images/moodle-course-comments.png" alt="Komentarji na tečaju" title="Komentarji na tečaju" />
</div>

**Collab Chat** način doda vrstico na vrhu strani, ki uporabnike spodbudi, da izberejo besedilo in začnejo razpravo. 
Poudarjeno besedilo je pritrjeno na vsebino, tako da pogovor ostane povezan z natančno tistim, o čemer se razpravlja. 
Prav tako prikazuje spletne uporabnike in število aktivnih razprav. Ta način ne prikaže spodnjega vtičnika.

<div class="text-center">
    <div class="sm">Sodelovan klepet pritrjen na izbrano besedilo</div>
    <img src="images/moodle-collab-chat.png" alt="Sodelovan klepet" title="Sodelovan klepet" />
</div>

**Collab Chat + Komentarji** vam omogoča obe funkciji hkrati. Študenti lahko izpostavijo besedilo za razprave v besedilu in
tudi uporabijo celoten vtičnik za komentiranje pod vsebino. To je odlično za tečaje, kjer želite hitro povratno informacijo
in daljša povezana pogovora.

<div class="text-center">
    <div class="sm">Oba sloga komentiranja aktivna na strani</div>
    <img src="images/moodle-page-comments.png" alt="Komentarji na strani" title="Komentarji na strani" />
</div>

### Samodejna enotna prijava

Vtičnik podpira tri načine enotne prijave. **Varna enotna prijava** je priporočena možnost. Uporabniška identiteta se
potrdi na strežniški strani z HMAC-SHA256 z uporabo vašega API skrivnega ključa, zato kredenciali nikoli niso razkriti
na odjemalcu. Z varno enotno prijavo so Moodle skrbniki samodejno sinhronizirani kot FastComments moderatorji, kar
pomeni, da lahko vaši skrbniki spletnih strani moderirajo komentarje brez dodatne nastavitve. Avatarji uporabnikov, imena in
e-poštni naslovi so vsi varno preneseni.

**Preprosta enotna prijava** prenese uporabniške podatke (ime, e-pošta, avatar) na odjemalcu brez podpisa. Hitro jo je
nastaviti, vendar je manj varna od HMAC pristopa. Nazadnje, **Brez** popolnoma onemogoči enotno prijavo, tako da uporabniki
komentirajo anonimno.

### Nastavitve obvestil uporabnika

Študenti lahko upravljajo nastavitve obvestil FastComments neposredno iz svojega Moodle profila. V razdelku **FastComments**
lahko preklapljajo obvestila o odgovorih (dobi e-pošto, ko nekdo odgovori na njihov komentar) in obvestila o naročninah (dobi
e-pošte za teme, na katere so se naročili). To vse ohranja na enem mestu in daje študentom nadzor nad tem, koliko e-pošte
prejmejo.

### Na koncu

Moodle vtičnik je zdaj na voljo. Za celotno navodilo za nastavitev si oglejte
[Moodle Integracijski vodič](https://docs.fastcomments.com/guide-installation-moodle.html), izvorna koda pa je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Sporočite nam spodaj, če imate kakšne povratne informacije!

Lep pozdrav!

{{/isPost}}

---