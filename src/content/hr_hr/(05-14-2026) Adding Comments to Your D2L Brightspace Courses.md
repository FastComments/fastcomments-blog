---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Dodavanje komentara u svoje D2L Brightspace tečajeve[/postlink]

{{#unless isPost}}
FastComments se sada instalira u D2L Brightspace u jednom koraku putem LTI 1.3 dinamičke registracije, s automatskim SSO-om, uvrštenim komentarima i suradničkim chatom za svaku jedinicu tečaja.
{{/unless}}

{{#isPost}}

### Što je novo

FastComments sada podržava D2L Brightspace kroz IMS LTI 1.3 Advantage standard, uključujući dinamičku registraciju.
To znači da ne postoji dodatak za instalaciju, ni razmjena ključeva, niti vezivanje po tečaju. Vaš Brightspace
administrator zalijepi jedinstveni URL u ekran za registraciju LTI Advantage-a, a FastComments i Brightspace završavaju
handshake automatski. Instruktori tada dodaju FastComments u bilo koju jedinicu na isti način na koji dodaju bilo koji drugi vanjski
alat, a studenti vide uvrštene komentare izravno u sadržaju tečaja.

<div class="text-center">
    <div class="sm">Uvršteni komentari kao tema unutar Brightspace jedinice</div>
    <img src="images/d2l-course-comments.png" alt="FastComments radi unutar D2L Brightspace jedinice" title="FastComments na Brightspace jedinici" />
</div>

### Kako početi

Na svom FastComments nadzornoj ploči otvorite [stranicu za LTI 1.3 konfiguraciju](https://fastcomments.com/auth/my-account/lti-config),
odaberite **D2L Brightspace** iz padajućeg izbornika platformi i kliknite **Generiraj URL**. Dobivate URL za registraciju koji se koristi
jednom i vrijedi 30 minuta.

U Brightspace-u, vaš administrator otvara **Admin Tools > Manage Extensibility > LTI Advantage > Register Tool**, zalijepi URL
u polje **Endpoint za registraciju alata** i šalje. Brightspace izvršava handshake registracije
s FastComments, razmjenjuje ključeve za potpisivanje i kreira unos za alat. Popup se zatvara kada završi.

Nakon registracije, administrator omogućava alat i kreira implementaciju ograničenu na organske jedinice koje bi trebale imati
pristup. Od tog trenutka, FastComments se pojavljuje u odabiru sadržaja svakog tečaja pod **Dodaj postojeće**.

### Dodavanje u tečaj

Unutar bilo koje tečajne jedinice, instruktor klikne **Dodaj postojeće**, odabire **FastComments** sa popisa aktivnosti, a
alat se postavlja kao tema u jedinici. Preimenovanje teme, premještanje unutar jedinice, ograničavanje na određene
grupe ili uvjete otpuštanja, i prebacivanje vidljivosti koriste standardne kontrole Brightspace-a. Ne postoji odvojeni
ekran za postavke FastComments za instruktore.

Za uvršteno umetanje, isti alat FastComments također je dostupan putem HTML uređivača Brightspace-a u dijalog prozoru **Umetni stvari**
pod **LTI Advantage**. Ovo koristi LTI Deep Linking tok za izravno umetanje teme komentara unutar čitanja,
uputa za kviz ili bilo koje druge HTML teme, tako da rasprava bude pored sadržaja o kojem se radi.

### Automatski SSO

Studenti nikada ne vide ekran za prijavu. LTI 1.3 pokretanje nosi identitet studenta Brightspace-a (`sub`, `name`, `email`,
i `picture`) potpisan privatnim ključem Brightspace-a. FastComments provjerava potpis protiv objavljenog
JWKS-a Brightspace-a, izdaje sigurnu SSO sesiju za korisnika i prikazuje widget za komentare. Komentari se pripisuju
Brightspace računu studenta, a instruktori moderiraju koristeći svoj identitet Brightspace-a također.

Mapiranje uloga je automatsko. Korisnici **Administrator** Brightspace-a dolaze kao administratori FastComments-a, korisnici
**Instruktor** kao moderatori, a svi ostali kao standardni komentatori. Ne postoji odvojeni popis korisnika koji se održava
na strani FastComments-a - slijedi što god Brightspace kaže.

### Ograničavanje tema

Svaka tema komentara vezana je za trojku: domaćin Brightspace-a, tečaj i poveznicu resursa. To znači da dva
tečaja koja koriste temu "Refleksije o čitanju" svaka dobivaju svoju vlastitu raspravu. Isto vrijedi ako instruktor
doda FastComments dvaput u istom tečaju (na primjer, jednom kao temu jedinice i jednom kao uvrštenje unutar
HTML stranice) - svaka lokacija je vlastita tema.

Dio domaćina dio je identifikatora teme s razlogom. Ako vaša institucija pokreće više Brightspace instance
pod jednim računom FastComments, razgovori ostaju izolirani u svakoj instanci čak i kada se ID tečajeva preklapaju.

### Zaključno

Ako koristite D2L Brightspace, možete biti uživo s FastComments unutar poslijepodneva: generirajte URL, zalijepite ga
u Brightspace, i dopustite instruktorima da umetnu alat u svoje jedinice. Za potpuni korak-po-korak postupak uključujući
rješavanje problema i snimke na svakoj stranici, pogledajte
[Opći vodič za instalaciju LTI 1.3](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Ista integracija također
pokreće Moodle, Blackboard, Sakai, Schoology i sve druge LTI 1.3 Advantage platforme, ali Brightspace je bio naš pilot
cilj i tok je iznimno pouzdan tamo.

Pozdrav!

{{/isPost}}

---