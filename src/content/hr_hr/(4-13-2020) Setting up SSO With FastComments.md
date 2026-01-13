---
[category:API & Development]

###### [postdate]
# [postlink]Postavljanje SSO s FastCommentsom[/postlink]

{{#unless isPost}}
FastComments pruža SSO rješenja za razne platforme i prilagođene integracije.
{{/unless}}

{{#isPost}}

# Pregled

## Što je SSO?

SSO, ili prijava jednim klikom, je skup konvencija koje omogućavaju vama ili vašim korisnicima korištenje FastComments-a bez potrebe za stvaranjem novog računa.

Pretpostavljajući da ne dopuštate anonimne komentare, račun je potreban za komentiranje putem FastComment-a. Ovaj proces prijave činimo vrlo jednostavnim - korisnik jednostavno ostavlja
svoj email kada komentira. Međutim, razumijemo da je čak i to dodatna prepreka koju neka web-mjesta žele izbjeći.

## Kako ga dobiti?

Svi tipovi računa trenutno imaju pristup SSO-u kao i podrški. Međutim, maksimalan broj SSO korisnika će varirati ovisno o vašem paketu.

### WordPress korisnici

Ako koristite naš <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> dodatak, tada nema potrebe za pisanjem koda! Jednostavno idite na Administratorsku stranicu dodatka, kliknite na SSO postavke, a zatim na Omogući.

Ovo će vas odvesti do čarobnjaka s jednim gumbom koji će stvoriti vaš API ključ, poslati ga vašoj instalaciji WordPress-a i uključiti SSO. Sve smo to konsolidirali u jednim klikom gumba za vas.

Imajte na umu da, ako instalirate dodatak po prvi put, morat ćete proći postupak postavljanja prije nego što vidite administrativnu stranicu s gumbom SSO postavki.

### Prilagođene integracije

FastComments SSO koristi HMAC-SHA256 enkripciju kao mehanizam za implementaciju SSO-a. Prvo ćemo proći kroz opću arhitekturu, dati primjere i detaljne korake. Međutim, na kraju
ovog članka nalaze se upute za **migraciju s Disqus-a i Commento-a**.

Tijek izgleda ovako:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Dijagram" title="FastComments SSO Dijagram" class="lozad" />
</div>

Ne morate pisati nove API krajnje točke s FastComments SSO-om. Jednostavno šifrirajte korisnikove informacije koristeći vaš tajni ključ i proslijedite teret komentatorskom widgetu.

Pružamo potpuno funkcionalne primjere koda na nekoliko jezika/radnih okruženja uključujući NodeJS, Java/Spring i obični PHP. Iako koristimo ExpressJS u NodeJS primjeru
i Spring u Java primjeru, nisu potrebni nikakvi okviri/libraries u ovim radnim okruženjima za implementaciju FastComments SSO-a - nativne kripto biblioteke rade.

Možete pronaći repozitorij s primjerima koda ovdje:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">Primjeri koda za FastComments SSO</a>

#### Dobijte svoj API tajni ključ

Vaš API tajni ključ može se preuzeti s <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">ove stranice</a>. Ovu stranicu možete pronaći također odlazeći na Moj račun,
klikom na API/SSO pločicu, a zatim klikom na "Dobiti API tajni ključ".

#### Parametri komentatorskog widgeta

Visokorazinska API dokumentacija za komentatorski widget može se pronaći <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovdje</a> i klikom na "Prikaži napredne opcije". Pretražite SSO na stranici.

Idemo u više detalja o tome što ovi parametri znače.

Komentatorski widget uzima konfiguracijski objekt - već prolazite ovo ako koristite FastComments za proslijediti vaš ID korisnika (nazvan tenantId).

Da biste omogućili SSO, proslijedite novi "sso" objekt, koji mora imati sljedeće parametre. Vrijednosti bi trebale biti generirane **na serverskoj strani**.

- userDataJSONBase64: Podaci korisnika u JSON formatu, koji su potom Base64 kodirani.
- verificationHash: HMAC-SHA256 hash stvoren iz UNIX_TIME + userDataJSONBase64.
- timestamp: Trenutno unix vrijeme. **Ne smije biti u budućnosti, niti više od tri sata u prošlosti.**
- loginURL: URL koji komentatorski widget može prikazati za prijavu korisnika.
- logoutURL: URL koji komentatorski widget može prikazati za odjavu korisnika.
- loginCallback: Kada se umjesto URL-a za prijavu navede, funkcija koju će komentatorski widget pozvati kada klikne gumb za prijavu.
- logoutCallback: Kada se umjesto URL-a za odjavu navede, funkcija koju će komentatorski widget pozvati kada klikne gumb za odjavu.

#### Objekt korisnika

Objekt korisnika sadrži sljedeći shemu:

- id (string, obavezno) (maksimalno 1k znakova)
- email (string, obavezno) (maksimalno 1k znakova). Napomena: Mora biti jedinstven.
- username (string, obavezno) (maksimalno 1k znakova). Napomena: Korisničko ime ne može biti email. Ne mora biti jedinstveno.
- avatar (string, opcionalno) (maksimalno 3k znakova)
- optedInNotifications (boolean, opcionalno)
- displayLabel (string, opcionalno, maksimalno 100 znakova). Ova oznaka će biti prikazana pored njihovog imena.
- websiteUrl (string, opcionalno, maksimalno 2000 znakova). Ime korisnika će se povezati na ovo.

#### Obavijesti

Da biste omogućili ili onemogućili obavijesti, postavite vrijednost optedInNotifications na true ili false. Kada korisnik prvi put učita stranicu s ovom vrijednošću u SSO teretu,
njihove postavke obavijesti će se ažurirati.

#### VIP korisnici i posebne oznake

Možete prikazati posebnu oznaku pored imena korisnika koristeći opcionalno polje "displayLabel".

#### Neautorizirani korisnici

Da biste predstavili neautoriziranog korisnika, jednostavno ne popunite userDataJSONBase64, verificationHash, ili timestamp. Pružite loginURL.

#### Direktni primjeri za serijalizaciju i hashe korisničkih podataka

Više detalja kao primjeri <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">ovdje (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">ovdje (java)</a> i
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">ovdje (php)</a>.


### Migracija s Disqus SSO

Najveće razlike između Disqus-a i FastComments SSO-a su da Disqus koristi SHA1 za enkripciju dok mi koristimo SHA256.
To znači da je migracija s Disqus-a jednostavna - promijenite korišteni algoritam hashiranja iz SHA1 u SHA256 i ažurirajte imena svojstava koja se prosljeđuju sučelju.

### Migracija s Commento SSO

Commento koristi drastično drugačiji pristup SSO-u - zahtijevaju da imate krajnju točku koju oni pozivaju da autentificiraju korisnika. FastComments je obrnuto -
jednostavno kodirajte i hashirajte korisnikove informacije koristeći vaš tajni ključ i proslijedite ih.

Razumijemo da svaka integracija može biti komplicirani i bolni proces. Ne oklijevajte kontaktirati svog predstavnika ili koristiti <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranicu za podršku</a>.

{{/isPost}}

---