---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Dodavanje komentara u vaše D2L Brightspace kurseve[/postlink]

{{#unless isPost}}
FastComments se sada instalira u D2L Brightspace u jednom koraku putem LTI 1.3 Dynamic Registration, uz automatski SSO, uvezane komentare i kolaborativni chat za svaku jedinicu kursa.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada podržava D2L Brightspace putem IMS LTI 1.3 Advantage standarda, uključujući Dynamic Registration.
To znači da nema dodatka koji treba instalirati, nema razmene ključeva koju treba koordinisati i nema povezivanja po kursu. Vaš Brightspace
administrator kopira jedinstveni URL u ekran za registraciju LTI Advantage, a FastComments i Brightspace završavaju
rukovanje automatski. Instruktori tada dodaju FastComments u bilo koju jedinicu na isti način na koji dodaju bilo koji drugi eksterni
alat, a studenti vide uvezane komentare direktno u sadržaju kursa.

<div class="text-center">
    <div class="sm">Uvezani komentari postavljeni kao tema unutar Brightspace jedinice</div>
    <img src="images/d2l-course-comments.png" alt="FastComments u radu unutar D2L Brightspace jedinice" title="FastComments na Brightspace jedinici" />
</div>

### Kako početi

Sa svog FastComments kontrolnog panela, otvorite [LTI 1.3 konfiguracionu stranu](https://fastcomments.com/auth/my-account/lti-config),
izaberite **D2L Brightspace** iz padajućeg menija platforme, a zatim kliknite na **Generiši URL**. Dobijate jedinstveni URL za registraciju
koji važi 30 minuta.

U Brightspaceu, vaš administrator otvara **Admin Tools > Manage Extensibility > LTI Advantage > Register Tool**, kopira
URL u polje **Tool initiation registration endpoint** i šalje. Brightspace obavlja rukovanje registracijom
sa FastComments, razmenjuje potpisne ključeve i kreira unos alata. Popup prozor se zatvara kada je proces završen.

Nakon registracije, administrator omogućava alat i kreira implementaciju koja je ograničena na org jedinice koje bi trebale imati
pristup. Od tog trenutka, FastComments se prikazuje u svakom kursu pod **Dodaj postojeće**.

### Dodavanje u kurs

Unutar bilo koje kursne jedinice, instruktor klikne na **Dodaj postojeće**, izabere **FastComments** sa liste aktivnosti, i alat se
postavlja kao tema unutar jedinice. Preimenovanje teme, promena redosleda unutar jedinice, ograničavanje na specifične
grupe ili uslove otpuštanja, i menjanje vidljivosti koriste standardne kontrole Brightspacea. Nema posebnog
ekrana za podešavanje FastComments za instruktore.

Za inline uvezivanje, isti FastComments alat je takođe dostupan kroz **Insert Stuff** dijalog HTML editora Brightspace
pod **LTI Advantage**. Ovo koristi LTI Deep Linking tok da direktno postavi nit komentara unutar čitanja,
instrukcija za kviz ili bilo koje druge HTML teme, tako da diskusija bude pored sadržaja o kojem se radi.

### Automatski SSO

Studenti nikada ne vide ekran za prijavu. LTI 1.3 lansiranje nosi identitet studenta Brightspace (`sub`, `name`, `email`,
i `picture`) potpisan privatnim ključem Brightspacea. FastComments proverava potpis protiv Brightspace-ovih objavljenih
JWKS, kreira sigurnu SSO sesiju za korisnika, i prikazuje vidžet za komentare. Komentari se dodeljuju studentskom
Brightspace nalogu, a instruktori moderiraju koristeći svoj Brightspace identitet.

Mapiranje uloga je automatsko. Brightspace **Administrator** korisnici se pojavljuju kao FastComments administratori, **Instructor** korisnici
kao moderatori, a svi ostali kao standardni komentatori. Nema posebne liste korisnika koju treba održavati na strani FastComments
- prati šta god Brightspace kaže.

### Obuhvat niti

Svaka nit komentara je vezana za trojku: Brightspace host, kurs, i link resursa. To znači da dva kursa koja koriste temu
"Refleksije o čitanju" svaka dobijaju svoju diskusiju. Isto važi i ako instruktor doda FastComments dva puta u istom kursu
(npr. jednom kao temu jedinice i jednom kao inline uvezivanje unutar HTML stranice) - svaka postavka je svoja nit.

Deo domaćina je deo identifikatora niti namerno. Ako vaša institucija ima više Brightspace instanci
pod jednim FastComments nalogom, razgovori ostaju izolovani na svakoj instanci čak i kada se ID-ovi kurseva sudaraju.

### Na kraju

Ako koristite D2L Brightspace, možete biti u toku sa FastComments za popodne: generišite URL, kopirajte ga
u Brightspace, i pustite instruktore da dodaju alat u svoje jedinice. Za celu postavku korak po korak uključujući
troubleshooting i ekran slike po strani, pogledajte
[LTI 1.3 Vodič za instalaciju](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Ista integracija takođe
pokrije Moodle, Blackboard, Sakai, Schoology, i bilo koju drugu LTI 1.3 Advantage platformu, ali Brightspace je bila naša pilot
meta i tok je stabilan tamo.

Pozdrav!

{{/isPost}}

---