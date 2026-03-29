---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]FastComments Moodle Plugin[/postlink]

{{#unless isPost}}
FastComments ima zdaj poseben Moodle plugin s SSO, povezanimi komentarji in sodelovalnim klepetom za vaše tečaje.
{{/unless}}

{{#isPost}}

### Kaj je novega

Z veseljem sporočamo uradni FastComments plugin za Moodle. Če ste uporabljali Moodle in ste želeli dodati živo,
povezano komentiranje ali sodelovalni klepet v svoje tečaje, ta plugin to poenostavi. Zamenja staro ročno PHP rešitev
z ustreznim Moodle plug-inom, ki se namesti v nekaj minutah in se integrira z vašimi obstoječimi Moodle uporabniškimi računi. Plugin deluje
z Moodle 4.1 in novejšimi, izvorna koda je na voljo na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Začetek

Da namestite, pridobite plugin iz [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) in ga namestite
prek namestitvenega programa pluginov vaše Moodle strani. Alternativno ga lahko prenesete in ga razpakirate v
`<moodle-root>/local/fastcomments`, nato pa se vpišite kot skrbnik mesta in obiščite **Administracija mesta > Obvestila**.
Moodle bo zaznal nov plugin in ga samodejno namestil.

Ko je nameščen, pojdite na **Administracija mesta > Vtičniki > Lokalne vtičnike > FastComments** za konfiguracijo. Potrebovali boste svoj
**ID najemnika** (najdete ga v svojem FastComments nadzorni plošči) in svoj **API skrivni ključ**, če želite uporabiti Secure SSO, kar priporočamo.

### Slogi komentiranja

Plugin podpira tri stile komentiranja, tako da lahko izberete, kar najbolje deluje za vaše študente in strukturo tečaja.

**Način komentarjev** postavi celoten widget za komentarje pod vsebino strani. Študenti dobijo povezane odgovore, @omembe,
glasovanje in nasprotno glasovanje, urejevalnik bogatega besedila in zvočnik obvestil za naročanje na nove komentarje na strani.

<div class="text-center">
    <div class="sm">Komentarji na strani tečaja</div>
    <img src="images/moodle-course-comments.png" alt="Komentarji tečaja" title="Komentarji tečaja" />
</div>

**Collab Chat** način dodaja vrstico na vrhu strani, ki poziva uporabnike, da izberejo besedilo in začnejo razpravo. 
Izbrano besedilo je povezano s vsebino, tako da razprava ostane vezana na točno to, o čemer se razpravlja. Prav tako
prikazuje spletne uporabnike in število aktivnih razprav. Ta način ne prikaže spodnjega widgeta.

<div class="text-center">
    <div class="sm">Sodelovalni klepet povezan z izbranim besedilom</div>
    <img src="images/moodle-collab-chat.png" alt="Collab Chat" title="Collab Chat" />
</div>

**Collab Chat + Komentarji** vam omogoča oboje hkrati. Študenti lahko izberejo besedilo za inline razprave in tudi
uporabijo celoten widget za komentarje pod vsebino. To je odlično za tečaje, kjer želite hiter povratni odziv in
daljše povezane pogovore.

<div class="text-center">
    <div class="sm">Oba sloga komentiranja aktivna na strani</div>
    <img src="images/moodle-page-comments.png" alt="Komentarji strani" title="Komentarji strani" />
</div>

### Samodejni SSO

Plugin podpira tri načine SSO. **Secure SSO** je priporočena možnost. Podpisuje identiteto uporabnika na strežniški strani z
HMAC-SHA256 z uporabo vašega API skrivnega ključa, tako da podatki nikoli niso izpostavljeni na odjemalcu. Z Secure SSO,
Moodle skrbniki so samodejno sinhronizirani kot moderatorji FastComments, kar pomeni, da lahko vaši skrbniki mest moderirajo komentarje brez kakršne koli
dodatne nastavitve. Avatarji uporabnikov, imena in elektronski naslovi so vsi varno preneseni.

**Simple SSO** prenaša uporabniške podatke (ime, e-pošta, avatar) na odjemalski strani brez podpisa. Hitro je za nastavitev, vendar manj varno
kot pristop HMAC. Na koncu, **Noben** popolnoma onesposobi SSO, tako da uporabniki komentirajo anonimno.

### Prednostna obvestila uporabnikov

Študenti lahko upravljajo svoje nastavitve obvestil FastComments neposredno iz svojega Moodle profila. Pod sekcijo **FastComments**
lahko vklopijo obvestila o odgovorih (prejmejo e-poštno sporočilo, ko nekdo odgovori na njihov komentar) in obvestila o naročanju
(prejmejo e-poštna sporočila za razprave, na katere so se naročili). To vse ohranja na enem mestu in daje študentom
nadzor nad tem, koliko e-poštnih sporočil prejmejo.

### Na koncu

Moodle plugin je zdaj na voljo. Za celoten vodič za nastavitev si oglejte
[Moodle Integration Guide](https://docs.fastcomments.com/guide-installation-moodle.html), izvorna koda pa je na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Sporočite nam spodaj, če imate kakršne koli povratne informacije!

Na zdravje!

{{/isPost}}

---