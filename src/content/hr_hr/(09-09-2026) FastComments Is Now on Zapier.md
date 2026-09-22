[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments je sada na Zapieru[/postlink]

{{#unless isPost}}
Povežite svoje komentare s tisućama aplikacija pomoću službene FastComments aplikacije za Zapier. Okidači se aktiviraju u trenutku kada je komentar objavljen, a bilo koja aplikacija može stvarati komentare, stranice i korisnike na vašoj web lokaciji.
{{/unless}}

{{#isPost}}

### Što je novo

Sada postoji službena FastComments aplikacija na [Zapier](https://zapier.com). Jednom se prijavite iz Zapier uređivača i možete poslati svaki novi komentar na Slack, zabilježiti ih u proračunsku tablicu, dodati komentatore u svoj CRM ili stvarati komentare iz podnošenja obrasca, bez pisanja ikakvog koda.

Prije toga, povezivanje FastCommentsa s drugim alatom značilo je postaviti vlastiti webhook primatelj ili pisati prema REST API‑u. Oba i dalje funkcioniraju. Zapier aplikacija je za slučajeve kada radije ne biste ništa pokretali.

### Okidači

Tri okidača, svi trenutni:

- **New Comment** aktivira se kada je komentar objavljen. Prema zadanim postavkama aktiviraju se samo odobreni, ne‑spam komentari, pa Zap koji objavljuje u javni kanal ne otkriva stvari koje su još u redu za moderiranje. Postoji potvrdni okvir za uključivanje svega.
- **Updated Comment** aktivira se kada je komentar uređivan, odobren, glasan, zakačen ili na drugi način promijenjen. Filtrirajte po polju odobrenja i postaje okidač „odobreni komentar“.
- **Deleted Comment** aktivira se kada je komentar izbrisan, uz cijeli komentar za vaše evidencije.

Svaki okidač ima opcionalni filter domene koji navodi domene konfigurirane na vašem računu, pa Zap može nadzirati jednu stranicu od mnogih.

Okidači su podržani webhookovima, a ne anketiranjem. FastComments isporučuje događaj Zapieru u trenutku kada se dogodi, ništa ne anketira vaš račun dok čeka, a čekanje ne troši API kredite.

### Radnje i pretrage

Radnje pozivaju FastComments API u vaše ime:

- **Create Comment** na bilo kojoj stranici, kao imenovani komentator ili postojeći SSO korisnik, opcionalno kao odgovor.
- **Create Page**, kako bi se stranica mogla navesti i ograničiti na grupe članova prije prvog komentara.
- **Create SSO User**, kako bi članovi iz vaših drugih alata mogli komentirati pod vlastitim identitetom.
- **Create Feed Post** i **Create Hash Tag**.
- **Flag Comment** za pregled moderatora.

Pretrage traže stvari za kasnije korake: **Find Comment** po ID‑u, **Find SSO User** po e‑mailu i **Find Page** po URL ID‑u. Uparite pretragu s odgovarajućom kreacijom u Zapierovom načinu „find or create“ i nedostajući korisnik ili stranica bit će stvoreni za vas.

### Nekoliko Zapova za početak

- New Comment, zatim Slack „Send Channel Message“. Mapirajte ime komentatora, komentar i URL stranice. Upotrijebite filter domene za usmjeravanje svake stranice na svoj kanal.
- New Comment, zatim Google Sheets „Create Spreadsheet Row“, s Deleted Comment koji dodaje red kao drugi Zap. Tablica postaje revizijski zapis.
- Updated Comment filtriran na Approved je true, zatim Gmail „Send Email“ kako biste obavijestili autora da je njegov komentar objavljen.
- Typeform „New Response“, zatim Create Comment na vašoj stranici s preporukama, s Approved neoznačenim, tako da pregledate svaki prije nego se pojavi.
- WordPress „New Post“, zatim Create Page, kako bi se svaki post registrirao prije prvog komentara.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) sadrži još, uključujući radni tijek za provisioniranje SSO korisnika iz vašeg alata za članstvo.

### Kako se povezuje

Aplikacija koristi OAuth. Kada dodate FastComments korak, Zapier traži vašu regiju (United States ili EU), preusmjerava vas na FastComments za prijavu i prikazuje stranicu pristanka koja navodi aplikaciju, račun s kojim će se povezati i tražene dozvole. Niti jedan API ključ se ne kopira u Zapier.

Osoba koja odobrava vezu mora biti API administrator na računu. Vlasnici računa to već imaju i mogu to odobriti drugim članovima tima na stranici Users.

Svaka veza prikazuje se pod **Integrate**, zatim **Connected Apps** u vašoj nadzornoj ploči, označena kao službena integracija, s informacijom kada je zadnji put korištena. Povlačenje veze tamo odmah prekida Zapier. Uključivanje Zapa stvara pretplatu na webhook koju možete vidjeti na stranici Webhooks s izvorom **API**, a isključivanje Zapa uklanja je.

### Koliko košta

Aplikacija je besplatna na svakom Zapier planu, uključujući i besplatni, a FastComments ne naplaćuje dodatno za nju. Okidači ne troše API kredite. Radnje i pretrage troše iste kredite kao poziv iz vašeg vlastitog koda, po jedan po pozivu u većini slučajeva.

### Dokumentacija

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) pokriva povezivanje računa, svaki okidač i radnju s njihovim poljima, primjere Zapova i rješavanje problema. Sama integracija je otvorenog koda na [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### Zaključak

Otvorite [fastcomments.com/zapier](https://fastcomments.com/zapier) kako biste pronašli aplikaciju, povezali svoj račun i izgradili svoj prvi Zap.

Kao i uvijek, javite nam u komentarima ako naiđete na bilo što.

Cheers!

{{/isPost}}