[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments je zdaj na Zapier[/postlink]

{{#unless isPost}}
Povežite svoje komentarje s tisoči aplikacijami z uradno aplikacijo FastComments za Zapier. Sprožilci se aktivirajo takoj, ko je komentar objavljen, in katera koli aplikacija lahko ustvari komentarje, strani in uporabnike na vašem spletnem mestu.
{{/unless}}

{{#isPost}}

### Kaj je novega

Zdaj je na voljo uradna aplikacija FastComments na [Zapier](https://zapier.com). Enkrat se prijavite v urejevalniku Zapier in lahko pošljete vsak nov komentar v Slack, jih zabeležite v preglednico, dodate komentatorje v vaš CRM ali ustvarite komentarje iz oddaje obrazca, brez pisanja kode.

Pred tem je bilo povezovanje FastComments z drugo orodjem pomenilo postavitev lastnega prejemnika webhookov ali pisanje proti REST API-ju. Obe možnosti še vedno delujeta. Aplikacija Zapier je namenjena primerom, ko raje ne bi poganjali ničesar.

### Sprožilci

Tri sprožilci, vsi takojšnji:

- **New Comment** se sproži, ko je komentar objavljen. Privzeto se sprožijo le odobreni, ne‑spam komentarji, tako da Zap, ki pošilja v javni kanal, ne razkrije stvari, ki so še v moderacijski vrsti. Obstaja potrditveno polje za vključitev vsega.
- **Updated Comment** se sproži, ko je komentar urejen, odobren, glasovan, pripet ali na drug način spremenjen. Filtrirajte po polju approved in postane sprožilec "approved comment".
- **Deleted Comment** se sproži, ko je komentar izbrisan, z celotnim komentarjem za vaše evidence.

Vsak sprož sprožilec ima neobvezen filter domen, ki prikazuje domene, nastavljene na vašem računu, tako da lahko Zap spremlja eno spletno mesto izmed več.

Sprožilci temeljijo na webhookih, ne na povpraševanju. FastComments pošlje dogodek Zapier takoj, ko se zgodi, nič ne poizveduje vašega računa med čakanjem, in čakanje ne porabi API kreditov.

### Dejanja in iskanja

Dejanja kličejo FastComments API v vašem imenu:

- **Create Comment** na katerikoli strani, kot imenovani komentator ali obstoječi SSO uporabnik, po želji kot odgovor.
- **Create Page**, tako da je stran lahko navedena in omejena na skupine članov pred njenim prvim komentarjem.
- **Create SSO User**, tako da lahko člani iz vaših drugih orodij komentirajo pod lastno identiteto.
- **Create Feed Post** in **Create Hash Tag**.
- **Flag Comment** za pregled moderatorja.

Iskanja poiščejo podatke za kasnejše korake: **Find Comment** po ID-ju, **Find SSO User** po e‑naslovu in **Find Page** po URL ID-ju. Združite iskanje z ustreznim ustvarjanjem v načinu "find or create" v Zapier in manjkajoči uporabnik ali stran se ustvarita za vas.

### Nekaj Zapov za začetek

- New Comment, nato Slack "Send Channel Message". Preslikajte ime komentatorja, komentar in URL strani. Uporabite filter domen, da usmerite vsako spletno mesto v svoj kanal.
- New Comment, nato Google Sheets "Create Spreadsheet Row", pri čemer Deleted Comment doda vrstico kot drugi Zap. Preglednica postane revizijski sled.
- Updated Comment, filtrirano, ko je Approved true, Gmail "Send Email", da avtorju sporočite, da je njegov komentar objavljen.
- Typeform "New Response", Create Comment na vaši strani z izjavami, pri čemer je Approved neoznačen, tako da pregledate vsakega, preden se prikaže.
- WordPress "New Post", Create Page, tako da je vsak objave registrirana pred prvim komentarjem.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) vsebuje več, vključno z delovnim tokom za zagotavljanje SSO uporabnikov iz vašega orodja za članstvo.

### Kako se poveže

Aplikacija uporablja OAuth. Ko dodate korak FastComments, Zapier vas vpraša za vašo regijo (United States ali EU), vas pošlje na FastComments za prijavo in prikaže stran za soglasje, ki navaja aplikacijo, račun, s katerim se bo povezala, in zahtevana dovoljenja. Noben API ključ ni kopiran v Zapier.

Oseba, ki odobri povezavo, mora biti API skrbnik na računu. Lastniki računov to že imajo in lahko to dodelijo drugim članom ekipe na strani Users.

Vsaka povezava se prikaže pod **Integrate**, nato **Connected Apps** v vašem nadzorni plošči, označena kot uradna integracija, z datumom zadnje uporabe. Preklic tam takoj prekine povezavo z Zapier. Vklop Zapa ustvari naročnino na webhook, ki jo lahko vidite na strani Webhooks z virom **API**, in izklop Zapa jo odstrani.

### Koliko stane

Aplikacija je brezplačna v vsakem načrtu Zapier, vključno s prostim, FastComments pa za to ne zaračuna dodatno. Sprožilci ne porabijo API kreditov. Dejanja in iskanja porabijo enake kredite kot klic iz vaše lastne kode, po enega na klic v večini primerov.

### Dokumentacija

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) pokriva povezovanje računa, vsak sprožilec in dejanje s svojimi polji, primere Zapov in odpravljanje težav. Sama integracija je odprtokodna na [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### Zaključek

Odprite [fastcomments.com/zapier](https://fastcomments.com/zapier), da najdete aplikacijo, povežete svoj račun in ustvarite svoj prvi Zap.

Kot vedno, spodaj nam sporočite, če naletite na kakršnekoli težave.

Živjo!

{{/isPost}}

---