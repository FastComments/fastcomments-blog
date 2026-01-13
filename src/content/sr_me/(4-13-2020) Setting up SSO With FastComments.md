---
[category:API & Development]

###### [postdate]
# [postlink]Podešavanje SSO sa FastComments[/postlink]

{{#unless isPost}}
FastComments pruža SSO rešenja za različite platforme i prilagođene integracije.
{{/unless}}

{{#isPost}}

# Pregled

## Šta je SSO?

SSO, ili jedinstveno prijavljivanje, je skup konvencija koje omogućavaju vama ili vašim korisnicima da koriste FastComments bez potrebe da kreiraju još jedan račun.

Pod pretpostavkom da ne dozvoljavate anonimne komentare, potreban je račun za komentarisanje uz FastComments. Učinio sam ovaj proces prijavljivanja vrlo jednostavnim - korisnik samo ostavlja
svoj email kada komentariše. Ipak, razumemo da je čak i to dodatna prepreka koju neka mesta žele da izbegnu.

## Kako mogu to da dobijem?

Svi tipovi računa trenutno imaju pristup SSO-u kao i podršci. Međutim, maksimalan broj SSO korisnika će se razlikovati u zavisnosti od vašeg paketa.

### WordPress Korisnici

Ako koristite naš <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> dodatak, tada nema potrebe za pisanjem koda! Jednostavno idite na Admin stranicu dodatka, kliknite na SSO Postavke, a zatim Omogućite.

To će vas odvesti do čarobnjaka za jedan klik koji će kreirati vaš API ključ, poslati ga vašoj WordPress instalaciji i uključiti SSO. To smo konsolidovali u jedno dugme za vas.

Napomena: Ako instalirate dodatak po prvi put, moraćete da pratite proces podešavanja pre nego što vidite admin stranicu sa dugmetom za SSO Postavke.

### Prilagođene Integracije

FastComments SSO koristi HMAC-SHA256 enkripciju kao mehanizam za implementaciju SSO-a. Prvo ćemo proći kroz opštu arhitekturu, obezbediti primere i detaljne korake. Međutim, na kraju
ovog članka postoje uputstva za **migraciju sa Disqus i Commento**.

Tok protoka izgleda ovako:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Dijagram" title="FastComments SSO Dijagram" class="lozad" />
</div>

Ne morate pisati nove API krajnje tačke uz FastComments SSO. Jednostavno enkriptujte korisničke informacije koristeći svoj tajni ključ i prosledite teret komentaru.

Pružamo potpuno funkcionalne primere koda na nekoliko jezika/okruženja uključujući NodeJS, Java/Spring i običan PHP. Iako koristimo ExpressJS u NodeJS primeru
i Spring u Java primeru, nisu potrebni nikakvi okviri/biblioteke u ovim okruženjima za implementaciju FastComments SSO - nativni crypto paketi funkcionišu.

Možete pronaći repozitorij primera koda ovde:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO Primeri Koda</a>

#### Nabavite svoj API Tajni Ključ

Vaš API Tajni Ključ može se dobiti sa <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">ove stranice</a>. Ovu stranicu možete pronaći i odlaskom na Moj Račun,
klikom na API/SSO pločicu, a zatim klikom na "Dohvati API Tajni Ključ".

#### Parametri Komentatorske Opreme

Visoko nivo API dokumentacije za komentatorsku opremu može se pronaći <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovde</a> i klikom na "Prikaži Napredne Opcije". Pretražujte SSO na stranici.

Hajde da detaljnije razradimo šta ovi parametri znače.

Komponenta komentatorske opreme uzima objekat podešavanja - već prosleđujete ovo ako koristite FastComments za prosleđivanje svog korisničkog id (naziva tenantId).

Da biste omogućili SSO, prosledite novi "sso" objekat, koji mora imati sledeće parametre. Vrednosti treba generisati **na serveru**.

- userDataJSONBase64: Korisnički podaci u JSON formatu, koji su zatim Base64 kodirani.
- verificationHash: HMAC-SHA256 hash kreiran od UNIX_TIME + userDataJSONBase64.
- timestamp: Trenutno unix vreme. **Ne sme biti u budućnosti, niti više od tri sata u prošlosti.**
- loginURL: URL koji komponenta komentatorske opreme može prikazati za prijavu korisnika.
- logoutURL: URL koji komponenta komentatorske opreme može prikazati za odjavu korisnika.
- loginCallback: Kada je pružen umesto login URL-a, funkcija koju komponenta komentatorske opreme poziva kada se klikne na dugme za prijavu.
- logoutCallback: Kada je pružen umesto logout URL-a, funkcija koju komponenta komentatorske opreme poziva kada se klikne na dugme za odjavu.

#### Objekat Korisnika 

Objekat Korisnika sadrži sledeću šemu:

- id (string, obavezno) (maksimalno 1k karaktera)
- email (string, obavezno) (maksimalno 1k karaktera). Napomena: Mora biti jedinstven.
- username (string, obavezno) (maksimalno 1k karaktera). Napomena: Korisničko ime ne može biti email. Ne mora biti jedinstveno.
- avatar (string, opcionalno) (maksimalno 3k karaktera)
- optedInNotifications (boolean, opcionalno)
- displayLabel (string, opcionalno, maksimalno 100 karaktera). Ova oznaka će se prikazivati pored njihovog imena.
- websiteUrl (string, opcionalno, maksimalno 2000 karaktera). Ime korisnika će imati link na ovo.

#### Obaveštenja

Da biste omogućili ili onemogućili obaveštenja, postavite vrednost optedInNotifications na true ili false u skladu s tim. Prvi put kada korisnik učita stranicu sa ovom vrednošću u SSO teretu,
njihova podešavanja obaveštenja će biti ažurirana.

#### VIP Korisnici i Posebne Oznake

Možete prikazati posebnu oznaku pored imena korisnika korišćenjem opcionalnog "displayLabel" polja.

#### Neautentifikovani korisnici

Da biste predstavili neautentifikovanog korisnika, jednostavno nemojte popunjavati userDataJSONBase64, verificationHash ili timestamp. Pružite loginURL.

#### Direktni Primeri za Serijalizaciju i Hashing Korisničkih Podataka

Više detalja kao primeri <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">ovde (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">ovde (java)</a> i
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">ovde (php)</a>.


### Migracija sa Disqus SSO

Najveće razlike između Disqus i FastComments SSO je to što Disqus koristi SHA1 za enkripciju dok mi koristimo SHA256.
To znači da je migracija sa Disqus jednostavna - promenite algoritam haširanja sa SHA1 na SHA256 i ažurirajte nazive svojstava prosleđenih korisničkom interfejsu.

### Migracija sa Commento SSO

Commento koristi drastično drugačiji pristup SSO-u - zahtevaju da imate krajnju tačku koju oni pozivaju da autentifikuju korisnika. FastComments je suprotno - 
jednostavno kodirajte i hashujte korisničke informacije koristeći vaš tajni ključ i prosledite ih.

Razumemo da svaka integracija može biti složen i bolan proces. Ne ustručavajte se da kontaktirate svog predstavnika ili koristite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranicu za podršku</a>.

{{/isPost}}

---