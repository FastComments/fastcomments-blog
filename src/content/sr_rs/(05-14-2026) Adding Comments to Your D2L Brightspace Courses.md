---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Dodavanje komentara u vaše D2L Brightspace kurse[/postlink]

{{#unless isPost}}
FastComments se sada instalira u D2L Brightspace u jednom koraku preko LTI 1.3 Dynamic Registration, sa automatskim SSO, uvođenjem komentara i kolaborativnim chatom za svaku jedinicu kursa.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada podržava D2L Brightspace kroz IMS LTI 1.3 Advantage standard, uključujući Dynamic Registration. To znači da nema dodatnog plugin-a za instalaciju, nema razmene ključeva za koordinaciju, i nema razvodnjavanja po kursu. Vaš Brightspace administrator zalepi jedan URL u LTI Advantage registracioni ekran, a FastComments i Brightspace automatski završavaju rukovanje. Instruktori zatim dodaju FastComments u svaku jedinicu na isti način na koji dodaju bilo koji drugi spoljašnji alat, a studenti vide uvođenje komentara direktno unutar sadržaja kursa.

<div class="text-center">
    <div class="sm">Uvođeni komentari kao tema unutar Brightspace jedinice</div>
    <img src="images/d2l-course-comments.png" alt="FastComments koji radi unutar D2L Brightspace jedinice" title="FastComments na Brightspace jedinici" />
</div>

### Kako početi

Iz vaše FastComments kontrolne table, otvorite [LTI 1.3 Configuration page](https://fastcomments.com/auth/my-account/lti-config), odaberite **D2L Brightspace** iz menija platforme, i kliknite na **Generate URL**. Dobijate URL za registraciju koji se može koristiti samo jednom i koji je važeći 30 minuta.

U Brightspace-u, vaš administrator otvara **Admin Tools > Manage Extensibility > LTI Advantage > Register Tool**, zalepi URL u polje **Tool initiation registration endpoint**, i šalje. Brightspace obavlja rukovanje registracije sa FastComments, razmenjuje potpisne ključeve, i kreira unos alata. Popup se automatski zatvara kada je proces završen.

Nakon registracije, administrator omogućava alat i kreira implementaciju ograničenu na organske jedinice koje treba da imaju pristup. Od tog trenutka, FastComments se pojavljuje u svakom izboru sadržaja kursa pod **Add Existing**.

### Dodavanje u kurs

Unutar bilo koje jednice kursa, instruktor klikne na **Add Existing**, izabere **FastComments** sa liste aktivnosti, i alat je postavljen kao tema u jedinici. Preimenovanje teme, preuređivanje unutar jedinice, ograničavanje na određene grupe ili uslove objave, i prebacivanje vidljivosti koriste standardne kontrole Brightspace-a. Ne postoji poseban ekran podešavanja FastComments za instruktore.

Za inline uvođenje, isti FastComments alat je takođe dostupan kroz **Insert Stuff** dijalog HTML editora Brightspace-a pod **LTI Advantage**. Ovo koristi LTI Deep Linking tok da ubaci nit komentara direktno unutar čitanja, uputstava za kviz, ili bilo koje druge HTML teme, tako da diskusija bude pored sadržaja o kojem se radi.

### Automatski SSO

Studenti nikada ne vide ekran za prijavu. LTI 1.3 pokretanje nosi identitet studenta Brightspace-a (`sub`, `name`, `email`, i `picture`) potpisan privatnim ključem Brightspace-a. FastComments verifikuje potpis protiv objavljenih JWKS Brightspace-a, kreira Secure SSO sesiju za korisnika, i prikazuje komentar widget. Komentari su dodeljeni Brightspace nalogu studenta, a instruktori moderiraju takođe koristeći svoj Brightspace identitet.

Mapiranje uloga je automatsko. Brightspace **Administrator** korisnici se prijavljuju kao FastComments administratori, **Instructor** korisnici kao moderatori, a svi ostali kao standardni komentatori. Ne postoji posebna lista korisnika koju treba održavati na strani FastComments - ona prati sve što kaže Brightspace.

### Ograničavanje nita

Svaka nit komentara je vezana za trojku: domaćin Brightspace-a, kurs, i resursnu vezu. To znači da dva kursa koja koriste temu "Reading Reflections" dobijaju svoju sopstvenu diskusiju. Isto važi ako instruktor doda FastComments dva puta u istom kursu (na primer, jednom kao temu jedinice i jednom kao inline uvođenje unutar HTML stranice) - svako postavljanje je svoju nit.

Domaća komponenta je deo identifikatora nita s razlogom. Ako vaša institucija ima više Brightspace instanci pod jednim FastComments nalogom, razgovori ostaju izolovani za svaku instancu čak i kada se ID-ovi kurseva preklapaju.

### U zaključku

Ako koristite D2L Brightspace, možete biti aktivni sa FastComments unutar jednog popodneva: generišite URL, zalepite ga u Brightspace, i omogućite instruktorima da dodaju alat u svoje jedinice. Za potpuni korak-po-korak vodič uključujući rešavanje problema i screenshot-ove, pogledajte
[LTI 1.3 Installation Guide](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Ista integracija pokriva i Moodle, Blackboard, Sakai, Schoology, i sve druge LTI 1.3 Advantage platforme, ali Brightspace je bio naš pilot cilj i tok je čvrst tamo.

Živeli!

{{/isPost}}