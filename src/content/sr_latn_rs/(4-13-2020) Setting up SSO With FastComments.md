---
[category:API & Development]

###### [postdate]
# [postlink]Postavljanje SSO-a sa FastComments[/postlink]

{{#unless isPost}}
FastComments pruža SSO rešenja za različite platforme i prilagođene integracije.
{{/unless}}

{{#isPost}}

# Pregled

## Šta je SSO?

SSO, ili jedinstveno prijavljivanje, je skup konvencija koje omogućavaju vama ili vašim korisnicima da koriste FastComments bez potrebe za kreiranjem još jednog naloga.

Pod pretpostavkom da ne dozvoljavate anonimne komentare, nalog je potreban za komentarisanje sa FastComments. Proces registracije činimo veoma jednostavnim - korisnik jednostavno ostavlja
svoj email kada komentariše. Međutim, razumemo da je čak i to dodatna prepreka koju neka mesta žele da izbegnu.

## Kako da to dobijem?

Svi tipovi naloga trenutno imaju pristup SSO-u kao i podršku. Međutim, maksimalan broj SSO korisnika će se razlikovati u zavisnosti od vašeg paketa.

### WordPress korisnici

Ako koristite naš <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> dodatak, tada nema koda koji treba napisati! Samo idite na Administrativnu stranu dodatka, kliknite na SSO podešavanja, a zatim omogućite.

Ovo će vas odvesti do čarobnjaka sa jednim dugmetom koji će kreirati vaš API ključ, poslati ga vašem WordPress instalaciji i uključiti SSO. Konsolidovali smo ovo u jedno klik dugme za vas.

Imajte na umu da, ako instalirate dodatak po prvi put, moraćete da pratite proces podešavanja pre nego što vidite administrativnu stranu sa dugmetom SSO podešavanja.

### Prilagođene integracije

FastComments SSO koristi HMAC-SHA256 enkripciju kao mehanizam za implementaciju SSO-a. Prvo ćemo proći kroz opštu arhitekturu, pružiti primere i detaljne korake. Međutim, na kraju
ovog članka postoje uputstva za **migraciju sa Disqusa i Commenta**.

Tok protoka izgleda ovako:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Dijagram" title="FastComments SSO Dijagram" class="lozad" />
</div>

Ne morate pisati nove API krajnje tačke sa FastComments SSO. Jednostavno enkriptujte korisnikove informacije koristeći vaš tajni ključ i prosledite teret podataka u vidžet komentara.

Pružamo potpuno funkcionalne primere koda na nekoliko jezika/okruženja uključujući NodeJS, Java/Spring i obični PHP. Iako koristimo ExpressJS u NodeJS primeru
i Spring u Java primeru, nisu potrebni okviri/biblioteke u ovim okruženjima za implementaciju FastComments SSO - nativni crypto paketi rade.

Možete pronaći repozitorij sa primerima koda ovde:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO Primeri Koda</a>

#### Dobijanje vašeg API Tajnog Ključa

Vaš API Tajni Ključ može se dobiti sa <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">ove stranice</a>. Takođe možete pronaći ovu stranicu tako što ćete otići na Moj Nalog,
kliknuti na API/SSO karticu, a zatim kliknuti na "Dobij API Tajni Ključ".

#### Parametri vidžeta za komentare

Visok nivo API dokumentacije za vidžet komentara može se pronaći <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovde</a> i klikom na "Prikaži Napredne Opcije". Pretražите SSO na stranici.

Idemo u više detalja o tome šta ovi parametri znače.

Vidžet za komentare uzima objekt konfiguracije - već prosledite ovo ako koristite FastComments da prosledite vaš ID kupca (naziva tenantId).

Da biste omogućili SSO, prosledite novi "sso" objekat, koji mora imati sledeće parametre. Vrednosti treba generisati **na serverskoj strani**.

- userDataJSONBase64: Korisnikovi podaci u JSON formatu, koji su zatim Base64 enkodirani.
- verificationHash: HMAC-SHA256 heš kreiran od UNIX_TIME + userDataJSONBase64.
- timestamp: Trenutno unix vreme. **Ne sme biti u budućnosti, niti više od tri časa u prošlosti.**
- loginURL: URL koji vidžet za komentare može prikazati za prijavu korisnika.
- logoutURL: URL koji vidžet za komentare može prikazati za odjavu korisnika.
- loginCallback: Kada se navede umesto login URL-a, funkcija koju će vidžet za komentare pozvati kada se pritisne dugme za prijavu.
- logoutCallback: Kada se navede umesto logout URL-a, funkcija koju će vidžet za komentare pozvati kada se pritisne dugme za odjavu.

#### Objekt korisnika

Objekt Korisnika sadrži sledeću shemu:

- id (string, obavezno) (maksimalno 1k karaktera)
- email (string, obavezno) (maksimalno 1k karaktera). Napomena: Mora biti jedinstven.
- username (string, obavezno) (maksimalno 1k karaktera). Napomena: Korisničko ime ne može biti email. Ne mora biti jedinstveno.
- avatar (string, opcionalno) (maksimalno 3k karaktera)
- optedInNotifications (boolean, opcionalno)
- displayLabel (string, opcionalno, maksimum 100 karaktera). Ova oznaka će se prikazati pored njihovog imena.
- websiteUrl (string, opcionalno, maksimalno 2000 karaktera). Ime korisnika će se povezati sa ovim.

#### Obaveštenja

Da biste omogućili ili onemogućili obaveštenja, postavite vrednost optedInNotifications na true ili false, prema tome. Prvi put kada korisnik učita stranicu sa ovom vrednošću u SSO teretu,
njihova podešavanja obaveštenja će biti ažurirana.

#### VIP korisnici i specijalne oznake

Možete prikazati specijalnu oznaku pored imena korisnika koristeći opcionalno polje "displayLabel".

#### Neautentifikovani korisnici

Da biste prikazali neautentifikovanog korisnika, jednostavno nemojte popunjavati userDataJSONBase64, verificationHash, ili timestamp. Pružite loginURL.

#### Direktni primeri za serijalizaciju i heširanje korisničkih podataka

Više detalja kao primeri <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">ovde (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">ovde (java)</a> i
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">ovde (php)</a>.


### Migracija sa Disqus SSO

Najveće razlike između Disqusa i FastComments SSO su u tome što Disqus koristi SHA1 za enkripciju dok mi koristimo SHA256.
To znači da je migracija sa Disqusa jednostavna - promenite algoritam heširanja sa SHA1 na SHA256 i ažurirajte nazive svojstava koja se prosledjuju u UI.

### Migracija sa Commento SSO

Commento koristi drastično drugačiji pristup SSO-u - zahtevaju da imate krajnju tačku koju oni pozivaju da autentifikujete korisnika. FastComments je obrnuto - 
jednostavno enkodirajte i heširajte informacije korisnika koristeći vaš tajni ključ i prosledite ih.

Razumemo da svaka integracija može biti složen i bolan proces. Ne oklevajte da se obratite svom predstavniku ili koristite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranicu za podršku</a>.

{{/isPost}}

---