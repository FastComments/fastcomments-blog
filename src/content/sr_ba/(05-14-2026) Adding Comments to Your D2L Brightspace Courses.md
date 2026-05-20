---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Dodavanje komentara u vaše D2L Brightspace kurseve[/postlink]

{{#unless isPost}}
FastComments se sada instalira u D2L Brightspace u jednom koraku putem LTI 1.3 dinamičke registracije, sa automatskim SSO, uvoznim komentarima i kolaborativnim čatom za svaku jedinicu kursa.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada podržava D2L Brightspace putem IMS LTI 1.3 Advantage standarda, uključujući dinamičku registraciju.
To znači da nema dodatka za instalaciju, nijedne razmene ključeva koju treba koordinirati, i nikakvog povezivanja po kursevima. Vaš Brightspace
administrator samo zalepi jednu URL adresu u LTI Advantage registracionu stranicu, i FastComments i Brightspace automatski završavaju
upravnu razmenu. Instruktori zatim dodaju FastComments u bilo koju jedinicu na isti način na koji dodaju bilo koji drugi eksterni
alat, a studenti vide uvozne komentare ugneždene direktno u sadržaju kursa.

<div class="text-center">
    <div class="sm">Uvozni komentari ugneždeni kao tema unutar Brightspace jedinice</div>
    <img src="images/d2l-course-comments.png" alt="FastComments radi unutar D2L Brightspace jedinice" title="FastComments na Brightspace jedinici" />
</div>

### Kako početi

Sa vašeg FastComments kontrolnog panela, otvorite [LTI 1.3 Konfiguracionu stranicu](https://fastcomments.com/auth/my-account/lti-config),
izaberite **D2L Brightspace** iz padajućeg menija platforme, i kliknite **Generiši URL**. Dobijate URL za registraciju koji se može koristiti samo jednom
i važi 30 minuta.

U Brightspace-u, vaš administrator otvara **Admin Tools > Manage Extensibility > LTI Advantage > Register Tool**, zalepi
URL u polje **Endpoint registracije alata** i šalje. Brightspace obavlja upravnu razmenu
sa FastComments, razmenjuje ključeve za potpisivanje, i kreira unos alata. Popup se automatski zatvara kada je sve završeno.

Nakon registracije, administrator omogućava alat i kreira raspored ograničen na org jedinice koje bi trebale imati
pristup. Od tog trenutka, FastComments se pojavljuje u svakom kursu u meniju za izbor sadržaja pod **Dodaj postojeće**.

### Dodavanje u kurs

Unutar svake kursne jedinice, instruktor klikne **Dodaj postojeće**, izabere **FastComments** iz liste aktivnosti, i
alat se postavlja kao tema u jedinici. Preimenovanje teme, preuređivanje unutar jedinice, ograničavanje na specifične
grupe ili uslove otpuštanja, i podešavanje vidljivosti koristi standardne kontrole Brightspace-a. Ne postoji odvojena
stranica za podešavanje FastComments za instruktore.

Za inline uvođenje, isti FastComments alat je takođe dostupan preko **Insert Stuff** dijaloga HTML editora Brightspace
pod **LTI Advantage**. Ovo koristi LTI duboku povezanost da direktno umetne nit komentara unutar čitanja,
uputstva za kviz ili bilo koju drugu HTML temu, tako da diskusija bude pored sadržaja o kojem se radi.

### Automatski SSO

Studenti nikada ne vide ekran za prijavu. LTI 1.3 pokretanje nosi identitet studenta u Brightspace-u (`sub`, `name`, `email`,
i `picture`) potpisan privatnim ključem Brightspace-a. FastComments verifikuje potpis naspram Brightspace-ovog objavljenog
JWKS, mintuje sigurnu SSO sesiju za korisnika, i prikazuje vidžet za komentare. Komentari se dodeljuju Brightspace nalogu studenta,
a instruktori moderiraju koristeći svoj identitet na Brightspace-u.

Mapiranje uloga je automatsko. Brightspace **Administrator** korisnici dolaze kao FastComments administratori, **Instruktor** korisnici
kao moderatori, a svi ostali kao standardni komentatori. Ne postoji odvojena lista korisnika koju treba održavati na
FastComments strani - ona prati sve što Brightspace kaže.

### Ograničavanje niti

Svaka nit komentara je vezana za trojku: Brightspace domaćin, kurs, i poveznicu resursa. To znači da dva
kursa koja oboje koriste temu "Refleksije čitanja" dobijaju svoju vlastitu diskusiju. Isto važi ako instruktor
doda FastComments dvaput u istom kursu (na primer, jednom kao temu jedinice i jednom kao inline umetanje unutar
HTML stranice) - svako postavljanje je vlastita nit.

Domaćin deo je deo identifikatora niti s razlogom. Ako vaša institucija vodi više Brightspace instanci
pod jednim FastComments nalogom, razgovori ostaju izolovani na svaku instancu čak i kada se ID-evi kurseva preklapaju.

### Na kraju

Ako koristite D2L Brightspace, možete biti u žiži sa FastComments unutar poslepodneva: generišite URL, zalepite ga
u Brightspace, i dozvolite instruktorima da umetnu alat u svoje jedinice. Za potpuni korak-po-korak setup uključujući
troubleshooting i snimke po stranici, pogledajte
[LTI 1.3 Vodič za instalaciju](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Ista integracija pokriva
Moodle, Blackboard, Sakai, Schoology, i bilo koju drugu LTI 1.3 Advantage platformu, ali Brightspace je bio naš pilot
cilj i tok je čvrst tamo.

Pozdrav! 

{{/isPost}}

---