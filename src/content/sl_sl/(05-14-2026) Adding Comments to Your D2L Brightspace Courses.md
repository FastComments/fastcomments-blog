---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Dodajanje komentarjev v vaše D2L Brightspace tečaje[/postlink]

{{#unless isPost}}
FastComments se zdaj namešča v D2L Brightspace v enem koraku preko LTI 1.3 Dinamične registracije, z avtomatskim SSO, komentarji v nitih in sodelovalnim klepetom za enoto vsakega tečaja.
{{/unless}}

{{#isPost}}

### Novosti

FastComments zdaj podpira D2L Brightspace skozi standard IMS LTI 1.3 Advantage, vključno z dinamično registracijo.
To pomeni, da ni potrebno nameščati nobenih vtičnikov, usklajevati izmenjave ključev in ni povezovanja na nivoju tečaja. Vaš Brightspace
administrator prilepi en sam URL v registracijsko okno LTI Advantage, FastComments in Brightspace pa avtomatsko zaključita
postopek handshakinga. Inštruktorji nato dodajo FastComments v katerokoli enoto na enak način, kot dodajajo katerokoli drugo zunanjo
orodje, in študenti vidijo komentarje v nitih, vgrajene neposredno v vsebino tečaja.

<div class="text-center">
    <div class="sm">Komentarji v nitih, vgrajeni kot tema znotraj Brightspace enote</div>
    <img src="images/d2l-course-comments.png" alt="FastComments deluje znotraj D2L Brightspace enote" title="FastComments na Brightspace enoti" />
</div>

### Začetek

Iz vaše nadzorne plošče FastComments odprite [stran za konfiguracijo LTI 1.3](https://fastcomments.com/auth/my-account/lti-config),
izberite **D2L Brightspace** iz spustnega menija platform in kliknite **Generiraj URL**. Dobili boste enkratni registracijski URL,
ki je veljaven 30 minut.

V Brightspaceu vaš administrator odpre **Admin Tools > Manage Extensibility > LTI Advantage > Register Tool**, prilepi
URL v polje **Endpoint za registracijo orodja** in odda. Brightspace izvede postopek handshakinga
z FastComments, izmenja podpisne ključe in ustvari vnos orodja. Pojavno okno se zapre, ko je postopek končan.

Po registraciji administrator omogoči orodje in ustvari razporeditev, določeno za org enote, ki bi morale imeti
dostop. Od tega trenutka naprej se FastComments prikaže v izbiralniku vsebine vsakega tečaja pod **Dodaj obstoječe**.

### Dodajanje v tečaj

Znotraj katerekoli enote tečaja inštruktor klikne **Dodaj obstoječe**, izbere **FastComments** iz seznama aktivnosti in
orodje je dodano kot tema v enoto. Preimovanje teme, spreminjanje njenega vrstnega reda znotraj enote, omejevanje na specifične
skupine ali pogoje sproščanja ter preklapljanje vidnosti uporabljajo standardne kontrole Brightspace. Ni ločenega
nastavitvenega okna FastComments, ki bi se ga morali inštruktorji učiti.

Za vgrajeno dodajanje je isto orodje FastComments na voljo tudi prek pogovornega okna **Vstavi stvari**
urejevalnika HTML Brightspace pod **LTI Advantage**. To uporablja tok LTI Deep Linking za neposredno vstavljanje komentarja
v nit znotraj branja, navodil za kviz ali katerekoli druge HTML teme, tako da razprava sedi ob vsebini, o kateri govori.

### Avtomatski SSO

Študenti nikoli ne vidijo prijavne strani. LTI 1.3 zagon prenaša identiteto študenta Brightspace (`sub`, `name`, `email`,
in `picture`), podpisano s strani Brightspaceovega zasebnega ključa. FastComments preveri podpis glede na objavljeni
JWKS Brightspace, ustvari varno sejo SSO za uporabnika in prikazuje widget za komentarje. Komentarji so pripisani študentovemu
računu Brightspace, in inštruktorji moderirajo z uporabo svoje Brightspace identitete.

Preslikava vlog je avtomatska. Uporabniki **Administrator** Brightspace pridejo kot administratorji FastComments, uporabniki **Inštruktor**
kot moderatorji, in vsi ostali kot običajni komentatorji. Ni ločenega seznama uporabnikov, ki bi ga bilo treba vzdrževati na strani FastComments - sledi vsem, kar Brightspace pravi.

### Obseg niti

Vsaka nit komentarja je povezana s trikom: gostiteljem Brightspace, tečajem in povezavo virov. To pomeni, da dva
tečaja, ki oba uporabljata temo "Refleksije branja", dobita svojo razpravo. Isto velja, če inštruktor
dvakrat doda FastComments v istem tečaju (na primer, enkrat kot temo enote in enkrat kot vgrajen dodatek znotraj 
HTML strani) - vsaka umestitev je svoja nit.

Del gostitelja je del identifikatorja niti namenoma. Če vaša institucija upravlja več Brightspace primerkov
pod enim računom FastComments, se pogovori ohranijo izolirani na vsakem primerku, tudi ko se ID-ji tečajev prekrivajo.

### Na koncu

Če upravljate D2L Brightspace, lahko z FastComments zaživite v popoldanskem času: generirate URL, ga prilepite
v Brightspace in pustite inštruktorjem, da orodje dodajo v svoje enote. Za popolno navodilo korak za korakom, ki vključuje
odpravljanje težav in posnetke po straneh, si oglejte
[Navodila za namestitev LTI 1.3](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Enaka integracija pokriva
tudi Moodle, Blackboard, Sakai, Schoology in katerokoli drugo LTI 1.3 Advantage platformo, vendar je Brightspace
bil naš pilotni cilj in postopek je tam trden.

Na zdravje!

{{/isPost}}

---