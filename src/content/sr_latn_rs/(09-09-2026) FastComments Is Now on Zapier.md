[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments je sada na Zapieru[/postlink]

{{#unless isPost}}
Povežite svoje komentare sa hiljadama aplikacija uz zvaničnu FastComments aplikaciju za Zapier. Okidači se aktiviraju u trenutku kada je komentar objavljen, a bilo koja aplikacija može kreirati komentare, stranice i korisnike na vašem sajtu.
{{/unless}}

{{#isPost}}

### Šta je novo

Sada postoji zvanična FastComments aplikacija na [Zapier](https://zapier.com). Jednom se prijavite iz Zapier editora i možete slati svaki novi komentar na Slack, beležiti ih u tabelu, dodavati komentatore u vaš CRM, ili kreirati komentare iz podnošenja forme, bez pisanja ikakvog koda.

Pre toga, povezivanje FastComments-a sa drugim alatom značilo je postavljanje sopstvenog prijemnika webhook-a ili pisanje prema REST API-ju. Obe opcije i dalje funkcionišu. Zapier aplikacija je za slučajeve kada radije ne biste ništa pokretali.

### Okidači

Tri okidača, svi trenutni:

- **New Comment** se aktivira kada je komentar objavljen. Podrazumevano se aktiviraju samo odobreni, ne‑spam komentari, tako da Zap koji objavljuje u javnom kanalu ne otkriva stvari koje su još u redu za moderaciju. Postoji polje za potvrdu da se uključe svi.
- **Updated Comment** se aktivira kada se komentar izmeni, odobri, oceni, zakači ili na drugi način promeni. Filtrirajte po polju odobrenog i postaje okidač za „odobreni komentar“.
- **Deleted Comment** se aktivira kada se komentar obriše, uz ceo komentar za vaše evidencije.

Svaki okidač ima opcioni filter domena koji navodi domene konfigurisane na vašem nalogu, tako da Zap može pratiti jedan sajt od mnogih.

Okidači se oslanjaju na webhook‑ove, a ne na periodično proveravanje. FastComments isporučuje događaj Zapier‑u u trenutku kada se desi, ništa ne proverava vaš nalog dok čeka, a čekanje ne košta API kredite.

### Akcije i pretrage

Akcije pozivaju FastComments API u vaše ime:

- **Create Comment** na bilo kojoj stranici, kao imenovani komentator ili postojeći SSO korisnik, opcionalno kao odgovor.
- **Create Page**, kako bi stranica mogla biti navedena i ograničena na grupe članova pre svog prvog komentara.
- **Create SSO User**, kako bi članovi iz vaših drugih alata mogli komentarisati pod svojim identitetom.
- **Create Feed Post** i **Create Hash Tag**.
- **Flag Comment** za pregled moderatora.

Pretrage traže stvari za kasnije korake: **Find Comment** po ID‑u, **Find SSO User** po emailu, i **Find Page** po URL ID‑u. Uparite pretragu sa odgovarajućim kreiranjem u Zapier‑ovom režimu „find or create“ i nedostajući korisnik ili stranica će biti kreirani za vas.

### Nekoliko Zap‑ova za početak

- New Comment, zatim Slack „Send Channel Message“. Mapirajte ime komentatora, komentar i URL stranice. Koristite filter domena da usmerite svaki sajt na njegov sopstveni kanal.
- New Comment, zatim Google Sheets „Create Spreadsheet Row“, uz Deleted Comment koji dodaje red kao drugi Zap. Tabela postaje auditni trag.
- Updated Comment filtriran na Approved je true, zatim Gmail „Send Email“ da obavesti autora da je njegov komentar objavljen.
- Typeform „New New Response “, zatim Create Comment na vašoj stranici svedočanstava sa Approved poljem neoznačenim, tako da pregledate svaki pre nego što se pojavi.
- WordPress „New Post“, zatim Create Page, kako bi svaki post bio registrovan pre prvog komentara.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) sadrži još, uključujući radni tok za provisioniranje SSO korisnika iz vašeg alata za članstvo.

### Kako se povezuje

Aplikacija koristi OAuth. Kada dodate FastComments korak, Zapier traži vašu regiju (United States ili EU), preusmerava vas na FastComments da se prijavite i prikazuje stranicu saglasnosti koja navode aplikaciju, nalog na koji će se povezati i tražena ovlašćenja. Nijedan API ključ se ne kopira u Zapier.

Osoba koja odobrava vezu mora biti API admin na nalogu. Vlasnici naloga to već imaju i mogu to odobriti drugim članovima tima na stranici Users.

Svaka veza se pojavljuje pod **Integrate, then Connected Apps** na vašem kontrolnom panelu, označena kao zvanična integracija, sa informacijom kada je poslednji put korišćena. Opoziv tamo odmah prekida vezu sa Zapier‑om. Uključivanje Zap‑a kreira pretplatu na webhook koju možete videti na stranici Webhooks sa izvorom **API**, a isključivanje Zap‑a je uklanja.

### Koliko košta

Aplikacija je besplatna na svakom Zapier planu, uključujući i besplatni, i FastComments ne naplaćuje dodatno za nju. Okidači ne troše API kredite. Akcije i pretrage troše iste kredite kao poziv iz vašeg koda, po jedan po pozivu u većini slučajeva.

### Dokumentacija

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) pokriva povezivanje naloga, svaki okidač i akciju sa njihovim poljima, primere Zap‑ova i rešavanje problema. Sama integracija je otvorenog koda na [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### Zaključak

Otvorite [fastcomments.com/zapier](https://fastcomments.com/zapier) da pronađete aplikaciju, povežete svoj nalog i izgradite svoj prvi Zap.

Kao i uvek, javite nam u komentarima ako naiđete na bilo šta.

Živeli!

{{/isPost}}

---