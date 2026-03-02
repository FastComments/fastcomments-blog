---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments sedaj ima namenski Moodle vtičnik s SSO, podprtimi komentarji in sodelovalnim klepetom za vaše tečaje.
{{/unless}}

{{#isPost}}

### Kaj je novega

Z veseljem naznanjamo uradni FastComments vtičnik za Moodle. Če ste uporabljali Moodle in želite dodati žive,
podprte komentarje ali sodelovalni klepet vašim tečajem, ta vtičnik to poenostavi. Nadomešča staro ročno PHP rešitev
s pravim Moodle vtičnikom, ki se namesti v minuti in se integrira z obstoječimi Moodle uporabniškimi računi. Vtičnik deluje
z Moodle 4.1 in novejšimi, koda pa je na voljo na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Kako začeti

Da namestite, prenesite ZIP iz [GitHub repozitorija](https://github.com/FastComments/fastcomments-moodle) in ga razpakirajte
na `<moodle-root>/local/fastcomments`. Nato se prijavite kot skrbnik spletnega mesta in obiščite **Site Administration > Notifications**.
Moodle bo zaznal nov vtičnik in ga samodejno namestil.

Ko je nameščen, odprite **Site Administration > Plugins > Local plugins > FastComments** za konfiguracijo. Potrebovali boste svoj
**Tenant ID** (najdete ga v vašem FastComments nadzornem plošči) in **API Secret**, če želite uporabljati Secure SSO, kar priporočamo.

Upoštevajte, da je ročni prenos z GitHub začasen, medtem ko čakamo, da bo vtičnik odobren v imeniku Moodle vtičnikov. Ko bo odobren, ga boste lahko namestili neposredno iz vtičnika installerja Moodle.

### Slogi komentiranja

Vtičnik podpira tri sloge komentiranja, tako da lahko izberete, kar najbolje deluje za vaše študente in strukturo tečaja.

**Komentarji** način postavi celoten komentar vtičnik pod vsebino strani. Študenti dobijo podprte odgovore, @omembe,
glasovanje in negativno glasovanje, urejevalnik bogatega besedila ter obvestilni zvonec za naročanje na nove komentarje na strani.

<div class="text-center">
    <div class="sm">Komentarji na strani tečaja</div>
    <img src="images/moodle-course-comments.png" alt="Komentarji tečaja" title="Komentarji tečaja" />
</div>

**Collab Chat** način doda vrstico na vrhu strani, ki uporabnike poziva, da izberejo besedilo in začnejo razpravo. 
Označeno besedilo je povezano z vsebino, tako da razprava ostane vezana na tisto, o čemer se razpravlja. Prav tako
prikazuje spletne uporabnike in število aktivnih razprav. Ta način ne prikaže spodnjega vtičnika.

<div class="text-center">
    <div class="sm">Sodelovalni klepet pritrjen na izbrano besedilo</div>
    <img src="images/moodle-collab-chat.png" alt="Sodelovalni klepet" title="Sodelovalni klepet" />
</div>

**Collab Chat + Komentarji** vam omogoča, da oboje hkrati. Študenti lahko označijo besedilo za razprave v besedilu in
tudi uporabijo celoten komentar vtičnik pod vsebino. To je odlično za tečaje, kjer želite tako hitro povratno informacijo v besedilu kot
daljše podprte razprave.

<div class="text-center">
    <div class="sm">Oba sloga komentiranja aktivna na strani</div>
    <img src="images/moodle-page-comments.png" alt="Komentarji na strani" title="Komentarji na strani" />
</div>

### SSO, ki preprosto deluje

Vtičnik podpira tri SSO načine. **Secure SSO** je priporočena možnost. Uporabniška identiteta se podpisuje na strežniku z
HMAC-SHA256 z uporabo vašega API Secret, tako da podatki nikoli niso izpostavljeni na klientu. S Secure SSO so Moodle skrbniki
samodejno sinhronizirani kot moderatorji FastComments, kar pomeni, da lahko upravljajo komentarje brez dodatne nastavitve. 
Avatarji uporabnikov, imena in e-poštni naslovi so vsi preneseni varno.

**Simple SSO** prenaša uporabniške podatke (ime, e-pošta, avatar) na klientu brez podpisa. Hitro se nastavi, vendar je manj varen
od HMAC pristopa. Nazadnje, **Noben** popolnoma onemogoča SSO, tako da uporabniki komentirajo anonimno.

### Nastavitve obveščanja uporabnikov

Študenti lahko upravljajo svoje nastavitve obveščanja FastComments neposredno iz svoje Moodlega profila. V razdelku **FastComments**
lahko preklapljajo obvestila o odgovorih (prejmejo e-pošto, ko nekdo odgovori na njihov komentar) in obvestila o naročilih
(prejmejo e-poštna sporočila za teme, na katere so se naročili). To vse drži na enem mestu in študentom daje nadzor nad tem, koliko
e-pošte prejemajo.

### Na koncu

Moodle vtičnik je zdaj na voljo. Za celotno navodilo o nastavitvi si oglejte
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), koda pa je na voljo na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Sporočite nam spodaj, če imate kakršne koli povratne informacije!

Nazdravimo!

{{/isPost}}

---