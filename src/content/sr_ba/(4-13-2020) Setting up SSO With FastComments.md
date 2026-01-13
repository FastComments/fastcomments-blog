---
[category:API & Development]

###### [postdate]
# [postlink]Podešavanje SSO sa FastComments[/postlink]

{{#unless isPost}}
FastComments nudi SSO rešenja za različite platforme i prilagođene integracije.
{{/unless}}

{{#isPost}}

# Pregled

## Šta je SSO?

SSO, ili single-sign-on, je skup konvencija koje omogućavaju vama ili vašim korisnicima da koriste FastComments bez potrebe da kreiraju drugi nalog.

Pretpostavljajući da ne dozvoljavate anonimno komentarisanje, potreban je nalog da biste komentarisali sa FastComments. Ovaj proces registracije činimo veoma jednostavnim - korisnik samo ostavlja svoju
email adresu kada komentariše. Ipak, razumemo da je čak i to dodatna prepreka koju neka mesta žele da izbegnu.

## Kako da to dobijem?

Svi tipovi naloga trenutno dobijaju pristup SSO-u kao i podršku. Međutim, maksimalan broj SSO korisnika će varirati u zavisnosti od vašeg paketa.

### WordPress korisnici

Ako koristite naš <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> dodatak, tada nema potrebe za pisanjem koda! Jednostavno idite na Administratorsku stranicu dodatka, kliknite na SSO Podešavanja, a zatim omogućite.

To će vas odvesti do čarobnjaka sa jednim klikom koji će kreirati vaš API ključ, poslati ga vašoj WordPress instalaciji i aktivirati SSO. Ovo smo konsolidovali u jedno dugme za vas.

Napomena: ako prvi put instalirate dodatak, moraćete da pratite proces podešavanja pre nego što vidite administratorsku stranicu sa dugmetom SSO Podešavanja.

### Prilagođene integracije

FastComments SSO koristi HMAC-SHA256 enkripciju kao mehanizam za implementaciju SSO-a. Prvo ćemo proći kroz celokupnu arhitekturu, pružiti primere i detaljne korake. Ipak, na kraju 
ovog članka se nalaze uputstva za **migraciju sa Disqus i Commento**.

Tok protoka izgleda ovako:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Dijagram" title="FastComments SSO Dijagram" class="lozad" />
</div>

Ne morate pisati nove API krajnje tačke sa FastComments SSO. Jednostavno enkriptujte informacije o korisniku koristeći vaš tajni ključ i prosledite payload u comment widget.

Pružamo potpuno funkcionalne primere koda na nekoliko jezika/okruženja uključujući NodeJS, Java/Spring i obični PHP. Iako koristimo ExpressJS u NodeJS primeru
i Spring u Java primeru, ne postoje framework-i/biblioteke potrebni u ovim okruženjima za implementaciju FastComments SSO - nativni crypto paketi funkcionišu.

Možete pronaći repozitorij sa primerima koda ovde:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO Primeri Koda</a>

#### Dobijanje vašeg API Tajnog Ključa

Vaš API Tajni Ključ se može preuzeti sa <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">ove stranice</a>. Takođe možete pronaći ovu stranicu tako što ćete otići na Moj Nalog,
kliknuti na API/SSO pločicu, a zatim kliknuti "Dobij API Tajni Ključ".

#### Parametri Comment Widget-a

Visoko nivo API dokumentacija za comment widget može se pronaći <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovde</a> i klikom na "Prikaži Napredne Opcije". Pretražite SSO na stranici.

Hajde da detaljnije razmotrimo šta ovi parametri znače.

Comment widget prihvata konfiguracioni objekat - već ga prosleđujete ako koristite FastComments da prosledite svoj korisnički ID (nazvan tenantId).

Da biste omogućili SSO, prosledite novi "sso" objekat, koji mora sadržavati sledeće parametre. Vrednosti bi trebale biti generisane **na serverskoj strani**.

- userDataJSONBase64: Podaci o korisniku u JSON formatu, koji se zatim Base64 kodiraju.
- verificationHash: HMAC-SHA256 hash kreiran od UNIX_TIME + userDataJSONBase64.
- timestamp: Trenutno unix vreme. **Ne sme biti u budućnosti, niti više od tri sata unazad.**
- loginURL: URL koji comment widget može prikazati za prijavu korisnika.
- logoutURL: URL koji comment widget može prikazati za odjavu korisnika.
- loginCallback: Kada je dato umesto URL-a za prijavu, funkcija koju comment widget poziva kada se klikne na dugme za prijavu.
- logoutCallback: Kada je dato umesto URL-a za odjavu, funkcija koju comment widget poziva kada se klikne na dugme za odjavu.

#### User Objekat 

User objekat sadrži sledeću šemu:

- id (string, obavezno) (maksimalno 1k karaktera)
- email (string, obavezno) (maksimalno 1k karaktera). Napomena: Mora biti jedinstven.
- username (string, obavezno) (maksimalno 1k karaktera). Napomena: Korisničko ime ne može biti email. Ne mora biti jedinstveno.
- avatar (string, opcionalno) (maksimalno 3k karaktera)
- optedInNotifications (boolean, opcionalno)
- displayLabel (string, opcionalno, maksimalno 100 karaktera). Ova oznaka će se prikazati pored njihovog imena.
- websiteUrl (string, opcionalno, maksimalno 2000 karaktera). Ime korisnika će se povezati na ovo.

#### Obaveštenja

Da biste omogućili ili onemogućili obaveštenja, postavite vrednost optedInNotifications na true ili false, u zavisnosti od slučaja. Kada korisnik prvi put učita stranicu sa ovom vrednošću u SSO payload-u,
njihova podešavanja obaveštenja će biti ažurirana.

#### VIP korisnici i posebne oznake

Možete prikazati posebnu oznaku pored imena korisnika koristeći opcionalno polje "displayLabel".

#### Neautentifikovani korisnici

Da biste predstavili neautentifikovanog korisnika, jednostavno nemojte popunjavati userDataJSONBase64, verificationHash ili timestamp. Pružite loginURL.

#### Direktni primeri za serijalizaciju i hashiranje podataka o korisniku

Više detalja sa primerima <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">ovde (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">ovde (java)</a> i
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">ovde (php)</a>.

### Migracija sa Disqus SSO

Najveće razlike između Disqus i FastComments SSO su to što Disqus koristi SHA1 za enkripciju, dok mi koristimo SHA256.
To znači da je migracija sa Disqus jednostavna - promenite algoritam hashiranja koji se koristi sa SHA1 na SHA256 i ažurirajte nazive svojstava koja se prosleđuju korisničkom interfejsu.

### Migracija sa Commento SSO

Commento koristi drastično drugačiji pristup SSO-u - zahtevaju da imate krajnju tačku koju oni pozivaju za autentifikaciju korisnika. FastComments je obrnuto - 
jednostavno enkriptujete i hashirate informacije o korisniku koristeći vaš tajni ključ i prosledite ih.

Razumemo da svaka integracija može biti komplikovan i bolan proces. Ne oklevajte da kontaktirate svog predstavnika ili koristite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranicu za podršku</a>.

{{/isPost}}

---