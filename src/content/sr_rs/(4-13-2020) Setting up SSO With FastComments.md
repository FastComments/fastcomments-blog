---
[category:API & Development]

###### [postdate]
# [postlink]Podešavanje SSO sa FastComments[/postlink]

{{#unless isPost}}
FastComments pruža SSO rešenja za razne platforme i prilagođene integracije.
{{/unless}}

{{#isPost}}

# Pregled

## Šta je SSO?

SSO, ili jedinstvena prijava, je skup konvencija koje omogućavaju vama ili vašim korisnicima da koriste FastComments bez potrebe da kreiraju još jedan nalog.

Pod pretpostavkom da ne dozvoljavate anonimno komentarisanje, nalog je neophodan da bi se komentarisalo sa FastComments. Ovaj proces prijavljivanja činimo veoma lakim - korisnik jednostavno ostavlja
svoj e-mail kada komentarše. Ipak, razumemo da je čak i to dodatna prepreka koju neka mesta žele da izbegnu.

## Kako da ga dobijem?

Svi tipovi naloga trenutno dobijaju pristup SSO-u kao i podršku. Ipak, maksimalan broj SSO korisnika će varirati u zavisnosti od vašeg paketa.

### WordPress Korisnici

Ako koristite naš <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> plugin, tada nema potrebe da pišete bilo kakav kod! Jednostavno idite na Admin stranicu plugina, kliknite na SSO Podešavanja, i zatim omogućite.

Ovo će vas odvesti do čarobnjaka sa jednim dugmetom koji će kreirati vaš API ključ, poslati ga na vašu WordPress instalaciju i uključiti SSO. Ovo smo konsolidovali u jedno dugme za vas.

Imajte na umu da ako instalirate plugin prvi put, moraćete da pratite proces postavljanja pre nego što vidite administrativnu stranicu sa SSO Podešavanja dugmetom.

### Prilagođene Integracije

FastComments SSO koristi HMAC-SHA256 enkripciju kao mehanizam za implementaciju SSO-a. Prvo ćemo proći kroz ukupnu arhitekturu, dati primere i detaljne korake. Ipak, na kraju
ovog članka nalaze se uputstva za **migraciju sa Disqus i Commento**.

Tok procesa izgleda ovako:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Dijagram" title="FastComments SSO Dijagram" class="lozad" />
</div>

Nema potrebe da pišete nove API krajnje tačke sa FastComments SSO. Jednostavno enkriptujte korisnikove informacije koristeći vaš tajni ključ i prosledite payload u komentar widget.

Pružamo potpuno funkcionalne primere koda na nekoliko jezika/okvira uključujući NodeJS, Java/Spring i običan PHP. Iako koristimo ExpressJS u NodeJS primeru
i Spring u Java primeru, nisu potrebni nikakvi okviri/biblioteke u ovim okruženjima za implementaciju FastComments SSO - nativni crypto paketi funkcionišu.

Možete pronaći repozitorijum primera koda ovde:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO Primeri Koda</a>

#### Dobijanje Vašeg API Tajnog Ključa

Vaš API Tajni ključ može se preuzeti sa <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">ove stranice</a>. Ovu stranicu možete pronaći i tako što ćete otići na Moj Nalog,
kliknuti na API/SSO pločicu, i zatim kliknuti na "Dobij API Tajni Ključ".

#### Parametri Komentar Widget-a

Dokumentacija za API na visokom nivou za komentar widget može se pronaći <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovde</a> i klikom na "Prikaži Napredne Opcije". Pretražujte SSO na stranici.

Hajde da detaljnije objasnimo šta ovi parametri znače.

Komentar widget prihvata konfiguracioni objekat - već ste prošli to ako koristite FastComments da prosledite svoj id kupca (nazvan tenantId).

Da biste omogućili SSO, prosledite novi "sso" objekat, koji mora imati sledeće parametre. Vrednosti treba generisati **na serveru**.

- userDataJSONBase64: Korisnikovi podaci u JSON formatu, koji su zatim Base64 kodirani.
- verificationHash: HMAC-SHA256 hash kreiran od UNIX_TIME + userDataJSONBase64.
- timestamp: Trenutno unix vreme. **Ne sme biti u budućnosti, niti više od tri sata u prošlosti.**
- loginURL: URL koji komentar widget može prikazati da bi se korisnik prijavio.
- logoutURL: URL koji komentar widget može prikazati da bi se korisnik odjavio.
- loginCallback: Kada se obezbedi umesto login URL-a, funkcija koju će komentar widget pozvati kada se klikne dugme za prijavu.
- logoutCallback: Kada se obezbedi umesto logout URL-a, funkcija koju će komentar widget pozvati kada se klikne dugme za odjavu.

#### Korisnički Objekat

Korisnički objekat sadrži sledeću šemu:

- id (string, obavezan) (maks. 1k karaktera)
- email (string, obavezan) (maks. 1k karaktera). Napomena: Mora biti jedinstven.
- username (string, obavezan) (maks. 1k karaktera). Napomena: Korisničko ime ne može biti e-mail. Ne mora biti jedinstveno.
- avatar (string, opciono) (maks. 3k karaktera)
- optedInNotifications (boolean, opciono)
- displayLabel (string, opciono, maks. 100 karaktera). Ova oznaka će biti prikazana pored njihovog imena.
- websiteUrl (string, opciono, maks. 2000 karaktera). Ime korisnika će se povezati na ovo.

#### Obaveštenja

Da biste omogućili ili onemogućili obaveštenja, postavite vrednost optedInNotifications na true ili false respektivno. Prvi put kada korisnik učita stranicu sa ovom vrednošću u SSO payload-u,
njihova podešavanja obaveštenja će biti ažurirana.

#### VIP Korisnici i Specijalne Oznake

Možete prikazati posebnu oznaku pored imena korisnika koristeći opciono "displayLabel" polje.

#### Neautentifikovani korisnici

Da biste predstavili neautentifikovanog korisnika, jednostavno ne popunjavajte userDataJSONBase64, verificationHash, ili timestamp. Obavezno obezbedite loginURL.

#### Direktni Primeri za Serijalizaciju i Hashiranje Korisničkih Podataka

Više detalja kao primeri <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">ovde (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">ovde (java)</a> i
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">ovde (php)</a>.


### Migracija sa Disqus SSO

Najveće razlike između Disqus i FastComments SSO je to što Disqus koristi SHA1 za enkripciju dok mi koristimo SHA256.
To znači da je migracija sa Disqus laka - promenite algoritam hashiranja korišćen od SHA1 do SHA256 i ažurirajte imena svojstava prosleđenih UI-u.

### Migracija sa Commento SSO

Commento koristi drastično drugačiji pristup SSO - zahtevaju da imate krajnju tačku koju oni pozivaju da autentifikuju korisnika. FastComments je u obrnutom smeru - 
jednostavno enkodirajte i heshirajte korisnikove informacije koristeći vaš tajni ključ i prosledite ih.

Razumemo da bilo koja integracija može biti složen i bolan proces. Ne oklevajte da kontaktirate svog predstavnika ili koristite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranicu podrške</a>.

{{/isPost}}

---