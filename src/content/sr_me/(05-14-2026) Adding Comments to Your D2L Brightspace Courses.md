---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Dodavanje komentara na vaše D2L Brightspace kurse[/postlink]

{{#unless isPost}}
FastComments se sada instalira u D2L Brightspace u jednom koraku putem LTI 1.3 Dinamičke registracije, sa automatskim SSO, povezanim komentarima i kolaborativnim čatom za svaku kurse jedinicu.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada podržava D2L Brightspace putem IMS LTI 1.3 Advantage standarda, uključujući Dinamičku registraciju.
To znači da nema dodatka za instalaciju, nema razmene ključeva za koordinaciju, i nema povezivanja po kursevima. Vaš Brightspace
administrator jednostavno zalepi jedan URL u LTI Advantage registracioni ekran, a FastComments i Brightspace automatski završavaju
handshake. Instruktori zatim dodaju FastComments u bilo koju jedinicu na isti način na koji dodaju bilo koji drugi ekster nalni
alat, a studenti vide povezane komentare ugrađene direktno u sadržaj kurse.

<div class="text-center">
    <div class="sm">Povezani komentari ugrađeni kao tema unutar Brightspace jedinice</div>
    <img src="images/d2l-course-comments.png" alt="FastComments radi unutar D2L Brightspace jedinice" title="FastComments na Brightspace jedinici" />
</div>

### Kako početi

Sa vašeg FastComments kontrolne table, otvorite [LTI 1.3 Konfiguracionu stranicu](https://fastcomments.com/auth/my-account/lti-config),
izaberite **D2L Brightspace** iz padajućeg menija platforme, i kliknite **Generiši URL**. Dobijate URL registracije
za jednokratnu upotrebu koji je validan 30 minuta.

U Brightspace-u, vaš administrator otvara **Admin Tools > Manage Extensibility > LTI Advantage > Register Tool**, zalepi 
URL u polje **Endpoint za registraciju alata**, i šalje. Brightspace vrši registraciju sa FastComments, razmenjuje potpisne ključeve, 
i kreira unos alata. Popup se automatski zatvara kada je proces završen.

Nakon registracije, administrator omogućava alat i kreira implementaciju vezanu za org jedinice koje bi trebalo da imaju
pristup. Od tog trenutka pa nadalje, FastComments se pojavljuje u izboru sadržaja svakog kursa pod **Dodaj postojeći**.

### Dodavanje u kurs

Unutar bilo koje kurs jedinice, instruktor klikne **Dodaj postojeći**, izabire **FastComments** sa liste aktivnosti, i alat
se postavlja kao tema u jedinici. Preimenovanje teme, preuređivanje unutar jedinice, ograničavanje na specifične
grupe ili uslove otpuštanja, i prebacivanje vidljivosti svi koriste standardne Brightspace kontrole. Nema posebnog
FastComments podešavanja koje instruktori treba da nauče.

Za umetanje u tekst, isti FastComments alat je dostupan i putem **Insert Stuff** dijaloga HTML editora Brightspace-a pod
**LTI Advantage**. Ovo koristi LTI Deep Linking tok da postavi komentar direktno unutar čitanja,
uputstava za kviz, ili bilo koje druge HTML teme, tako da diskusija bude pored sadržaja o kojem se radi.

### Automatski SSO

Studenti nikada ne vide ekran za prijavu. LTI 1.3 pokretanje nosi identitet studenta Brightspace-a (`sub`, `name`, `email`,
i `picture`) potpisan privatnim ključem Brightspace-a. FastComments verifikuje potpis u odnosu na objavljeni
JWKS Brightspace-a, kreira sigurno SSO sesiju za korisnika, i prikazuje komentar widget. Komentari su dodeljeni
Brightspace nalogu studenta, a instruktori moderiraju koristeći svoj Brightspace identitet.

Mapiranje uloga je automatsko. Brightspace **Administrator** korisnici se prikazuju kao FastComments administratori, **Instructor** korisnici
kao moderatori, a svi ostali kao standardni komentatori. Nema odvojene liste korisnika koju treba održavati sa strane FastComments - ona prati ono što Brightspace kaže.

### Scoping fora

Svaka tema komentara je vezana za trojku: Brightspace domaćin, kurs, i link resursa. To znači da dva kursa koja
oba koriste temu "Reading Reflections" svako dobijaju svoju vlastitu diskusiju. Isto važi ako instruktor
doda FastComments dva puta u istom kursu (na primer, jednom kao temu jedinice i jednom kao inline umetanje unutar
HTML stranice) - svako postavljanje ima svoju temu.

Domaćin deo je namerno deo identifikatora teme. Ako vaša ustanova pokreće više Brightspace instanci
pod jednim FastComments nalogom, razgovori ostaju izolovani za svaku instancu čak i kada se ID-ovi kurseva preklapaju.

### Na kraju

Ako koristite D2L Brightspace, možete biti uživo sa FastComments unutar popodneva: generišite URL, zalepite ga
u Brightspace, i pustite instruktore da dodaju alat u svoje jedinice. Za potpuni vodič korak-po-korak uključujući
rešenja problema i snimke ekrana po stranici, pogledajte
[LTI 1.3 Vodič za instalaciju](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Ista integracija takođe
obuhvata Moodle, Blackboard, Sakai, Schoology, i bilo koju drugu LTI 1.3 Advantage platformu, ali Brightspace je bila
naša pilot tačka i tok je čvrsto postavljen tamo.

Pozdrav!

{{/isPost}}

---