---
[category:API & Development]

###### [postdate]
# [postlink]Nastavitev SSO z FastComments[/postlink]

{{#unless isPost}}
FastComments nudi rešitve SSO za različne platforme in prilagojene integracije.
{{/unless}}

{{#isPost}}

# Pregled

## Kaj je SSO?

SSO, oziroma enotna prijava, je niz konvencij, ki omogočajo vam ali vašim uporabnikom uporabo FastComments brez potrebe po ustvarjanju novega računa.

Ob predpostavki, da ne omogočate anonimnega komentiranja, je za komentiranje z FastComments potreben račun. Proces prijave olajšamo - uporabnik preprosto pusti svoj e-naslov, ko komentira. Vendar razumemo, da je to dodatna ovira, ki se ji nekatere spletne strani želijo izogniti.

## Kako ga pridobim?

Vse vrste računov trenutno pridobijo dostop do SSO kot tudi podporo. Vendar se bo največje število uporabnikov SSO razlikovalo glede na vaš paket.

### Uporabniki WordPressa

Če uporabljate naš <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> vtičnik, potem ni potrebno pisati nobene kode! Preprosto pojdite na administrativno stran vtičnika, kliknite na Nastavitve SSO in nato omogočite.

To vas bo pripeljalo do čarovnika za pritisk na en gumb, ki bo ustvaril vaš API ključ, ga poslal na vašo WordPress namestitev in vklopil SSO. Ta proces smo združili v pritisk na en gumb za vas.

Upoštevajte, da če vtičnik nameščate prvič, boste morali najprej zaključiti postopek nastavitve, preden boste videli administrativno stran z gumbom Nastavitve SSO.

### Prilagojene integracije

FastComments SSO uporablja HMAC-SHA256 šifriranje kot mehanizem za implementacijo SSO. Najprej bomo prešli čez splošno arhitekturo, predstavili primere in podrobne korake. Na koncu tega članka so navodila za **migracijo iz Disqus in Commento**.

Potek izgleda takole:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="Diagram FastComments SSO" title="Diagram FastComments SSO" class="lozad" />
</div>

Ni vam treba pisati nobenih novih API končnih točk z FastComments SSO. Preprosto šifrirajte podatke uporabnika z uporabo vašega tajnega ključa in prenesite podatkovno sporočilo v vtičnik za komentiranje.

Zagotovili smo popolnoma funkcionalne primere kode v več jezikih/času izvajanja, vključno z NodeJS, Java/Spring in čisto PHP. Čeprav v primeru NodeJS uporabljamo ExpressJS in v primeru Jave Spring, za implementacijo FastComments SSO ni potrebno nobenih frameworkov/knjižnic v teh časih izvajanja - funkcionalni so nativni paketi za šifriranje.

Kodepise lahko najdete tukaj:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">Primere kode FastComments SSO</a>

#### Pridobite svoj API Tajni ključ

Vaš API Tajni ključ lahko pridobite z <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">te strani</a>. To stran lahko najdete tudi tako, da greste na Moj račun, kliknete na ploščico API/SSO in nato kliknete "Pridobite API Tajni ključ".

#### Parametri vtičnika za komentiranje

Dokumentacija API na visoki ravni za vtičnik za komentiranje je na voljo <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">tukaj</a>, kjer kliknete "Prikaži napredne možnosti". Na strani poiščite SSO.

Poglejmo podrobneje, kaj ti parametri pomenijo.

Vtičnik za komentiranje sprejema konfiguracijski objekt - ta se že posreduje, če uporabljate FastComments za posredovanje vašega ID stranke (imenovan tenantId).

Za omogočanje SSO posredujte nov objekt "sso", ki mora imeti naslednje parametre. Vrednosti je treba generirati **na strežniku**.

- userDataJSONBase64: Podatki uporabnika v JSON formatu, ki so nato Base64 kodirani.
- verificationHash: HMAC-SHA256 hash, ustvarjen iz UNIX_TIME + userDataJSONBase64.
- timestamp: Trenutni unix čas. **Ne sme biti v prihodnosti ali več kot tri ure v preteklosti.**
- loginURL: URL, ki ga vtičnik za komentiranje lahko prikaže za prijavo uporabnika.
- logoutURL: URL, ki ga vtičnik za komentiranje lahko prikaže za odjavo uporabnika.
- loginCallback: Ko je navedeno namesto prijavnega URL-ja, funkcija, ki jo vtičnik za komentiranje pokliče ob kliku na gumb za prijavo.
- logoutCallback: Ko je navedeno namesto odjavnega URL-ja, funkcija, ki jo vtičnik za komentiranje pokliče ob kliku na gumb za odjavo.

#### Objekt uporabnika

Objekt uporabnika vsebuje naslednjo shemo:

- id (niz, obvezno) (maksimalno 1k znakov)
- email (niz, obvezno) (maksimalno 1k znakov). Opomba: Mora biti edinstven.
- username (niz, obvezno) (maksimalno 1k znakov). Opomba: Uporabniško ime ne more biti e-naslov. Ni potrebno, da je edinstven.
- avatar (niz, neobvezno) (maksimalno 3k znakov)
- optedInNotifications (boolean, neobvezno)
- displayLabel (niz, neobvezno, maksimalno 100 znakov). Ta oznaka bo prikazana poleg njihovega imena.
- websiteUrl (niz, neobvezno, maksimalno 2000 znakov). Ime uporabnika bo povezano na to.

#### Obvestila

Za omogočanje ali onemogočanje obvestil nastavite vrednost optedInNotifications na true ali false. Ob prvem obremenitvi strani s to vrednostjo v SSO podatkovnem sporočilu se bodo nastavitve obvestil uporabnika posodobile.

#### VIP uporabniki in posebne oznake

Lahko prikažete posebno oznako poleg imena uporabnika z uporabo neobveznega polja "displayLabel".

#### Neavtorizirani uporabniki

Da predstavite neavtoriziranega uporabnika, preprosto ne napolnite userDataJSONBase64, verificationHash ali timestamp. Navedite loginURL.

#### Neposredni primeri za serializacijo in hasiranje podatkov uporabnika

Več podrobnosti in primeri <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">tukaj (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">tukaj (java)</a> in
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">tukaj (php)</a>.


### Migracija iz Disqus SSO

Največje razlike med Disqus in FastComments SSO so, da Disqus uporablja SHA1 za šifriranje, medtem ko mi uporabljamo SHA256.
To pomeni, da je migracija iz Disqus enostavna - spremenite algoritem hasiranja, ki se uporablja iz SHA1 v SHA256 in posodobite imena lastnosti, ki se posredujejo v uporabniški vmesnik.

### Migracija iz Commento SSO

Commento uporablja drastično drugačen pristop SSO - zahtevajo, da imate končno točko, ki jo pokličejo za avtentikacijo uporabnika. FastComments pa je obratno - preprosto kodirajte in hasirajte informacije uporabnika z uporabo vašega tajnega ključa in jih posredujte naprej.

Zavedamo se, da je lahko katera koli integracija zapleten in boleč proces. Ne oklevajte, da se obrnete na svojega predstavnika ali uporabite <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stran za podporo</a>.

{{/isPost}}

---