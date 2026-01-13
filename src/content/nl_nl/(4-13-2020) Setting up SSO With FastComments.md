---
[category:API & Development]

###### [postdate]
# [postlink]SSO Instellen Met FastComments[/postlink]

{{#unless isPost}}
FastComments biedt SSO-oplossingen voor verschillende platforms en aangepaste integraties.
{{/unless}}

{{#isPost}}

# Overzicht

## Wat is SSO?

SSO, of single-sign-on, is een set van conventies die zijn ontworpen om jou of je gebruikers in staat te stellen FastComments te gebruiken zonder een ander account aan te maken.

Aangenomen dat je anonieme opmerkingen niet toestaat, is een account vereist om met FastComments te kunnen reageren. We maken dit aanmeldproces heel eenvoudig - de gebruiker laat gewoon hun e-mailadres achter wanneer ze reageren. We begrijpen echter dat zelfs dat extra wrijving met zich meebrengt die sommige sites willen vermijden.

## Hoe krijg ik het?

Alle accounttypes krijgen momenteel toegang tot SSO, evenals ondersteuning. Het maximale aantal SSO-gebruikers verschilt echter afhankelijk van je pakket.

### WordPress-gebruikers

Als je onze <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> plugin gebruikt, dan is er geen code die je hoeft te schrijven! Ga eenvoudig naar de Admin-pagina van de plugin, klik op SSO-instellingen en schakel het in.

Je wordt geleid naar een wizard met één knop die je API-sleutel aanmaakt, deze naar je WordPress-installatie verstuurt en SSO inschakelt. We hebben dit samengevoegd tot één klik voor jou.

Let op dat als je de plugin voor de eerste keer installeert, je het installatieproces moet volgen voordat je de admin-pagina met de SSO-instellingenknop kunt zien.

### Aangepaste integraties

FastComments SSO gebruikt HMAC-SHA256-encryptie als het mechanisme om SSO te implementeren. Eerst zullen we de algehele architectuur doornemen, voorbeelden geven en gedetailleerde stappen bieden. Aan het einde van dit artikel zijn er instructies voor **migreren van Disqus en Commento**.

De flow ziet er als volgt uit:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Diagram" title="FastComments SSO Diagram" class="lozad" />
</div>

Je hoeft geen nieuwe API-endpoints te schrijven met FastComments SSO. Versleutel eenvoudig de informatie van de gebruiker met je geheime sleutel en geef de payload door aan de opmerkingwidget.

We bieden volledig functionele codevoorbeelden in verschillende talen/uitvoeringstijden, waaronder NodeJS, Java/Spring en vanilla PHP. Hoewel we ExpressJS gebruiken in het NodeJS-voorbeeld en Spring in het Java-voorbeeld, zijn er geen frameworks/bibliotheken vereist in deze uitvoeringstijden om FastComments SSO te implementeren - de native crypto-pakketten werken.

Je kunt de codevoorbeeldrepository hier vinden:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO Code Voorbeelden</a>

#### Verkrijg je API Geheime Sleutel

Je API-geheim kan worden opgehaald van <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">deze pagina</a>. Je kunt deze pagina ook vinden door naar Mijn Account te gaan, op de API/SSO-tegel te klikken en vervolgens op "API Geheime Sleutel Krijgen" te klikken.

#### Parameters van de Opmerkingwidget

Hoog-niveau API-documentatie voor de opmerkingwidget is te vinden <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">hier</a> en door op "Geavanceerde opties tonen" te klikken. Zoek naar SSO op de pagina.

Laten we dieper ingaan op wat deze parameters betekenen.

De opmerkingwidget neemt een configuratieobject aan - je geeft dit al door als je FastComments gebruikt om je klant-ID (tenantId genoemd) door te geven.

Om SSO in te schakelen, geef een nieuw "sso" object door, dat de volgende parameters moet hebben. De waarden moeten **serverzijde** worden gegenereerd.

- userDataJSONBase64: De gegevens van de gebruiker in JSON-formaat, die vervolgens Base64-gecodeerd zijn.
- verificationHash: De HMAC-SHA256-hash die is gemaakt van UNIX_TIME + userDataJSONBase64.
- timestamp: De huidige unix-tijd. **Mag niet in de toekomst zijn of meer dan drie uur in het verleden.**
- loginURL: Een URL die de opmerkingwidget kan tonen om de gebruiker in te loggen.
- logoutURL: Een URL die de opmerkingwidget kan tonen om de gebruiker uit te loggen.
- loginCallback: Wanneer deze in plaats van de login-URL wordt opgegeven, een functie die de opmerkingwidget zal aanroepen wanneer de inlogknop wordt aangeklikt.
- logoutCallback: Wanneer deze in plaats van de logout-URL wordt opgegeven, een functie die de opmerkingwidget zal aanroepen wanneer de uitlogknop wordt aangeklikt.

#### Het Gebruikersobject 

Het gebruikersobject bevat het volgende schema:

- id (string, verplicht) (max. 1k tekens)
- email (string, verplicht) (max. 1k tekens). Opmerking: Moet uniek zijn.
- username (string, verplicht) (max. 1k tekens). Opmerking: De gebruikersnaam kan geen e-mailadres zijn. Hoeft niet uniek te zijn.
- avatar (string, optioneel) (max. 3k tekens)
- optedInNotifications (boolean, optioneel)
- displayLabel (string, optioneel, max. 100 tekens). Dit label wordt naast hun naam weergegeven.
- websiteUrl (string, optioneel, max. 2000 tekens). De naam van de gebruiker zal hier naartoe linken.

#### Meldingen

Om meldingen in of uit te schakelen, stel je de waarde van optedInNotifications in op true of false. De eerste keer dat de gebruiker de pagina laadt met deze waarde in de SSO-payload, worden hun meldingsinstellingen bijgewerkt.

#### VIP-gebruikers & Speciale Labels

Je kunt een speciaal label naast de naam van de gebruiker weergeven door het optionele veld "displayLabel" te gebruiken.

#### Niet-geauthenticeerde gebruikers

Om een niet-geauthenticeerde gebruiker weer te geven, vul je eenvoudigweg userDataJSONBase64, verificationHash of timestamp niet in. Geef een loginURL op.

#### Directe Voorbeelden voor het Serialiseren en Hashen van Gebruikersgegevens

Meer details als voorbeelden <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">hier (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">hier (java)</a> en
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">hier (php)</a>.


### Migreren van Disqus SSO

De grootste verschillen tussen Disqus en FastComments SSO is dat Disqus SHA1 gebruikt voor encryptie, terwijl wij SHA256 gebruiken.
Dit betekent dat migreren van Disqus eenvoudig is - verander het hash-algoritme van SHA1 naar SHA256 en werk de eigenschapsnamen die aan de UI worden doorgegeven bij.

### Migreren van Commento SSO

Commento gebruikt een drastisch andere SSO-aanpak - zij vereisen dat je een endpoint hebt waarvan zij aanroepen om de gebruiker te authentiseren. FastComments is het tegenovergestelde - 
versleutel en hash eenvoudigweg de informatie van de gebruiker met je geheime sleutel en geef het door.

We begrijpen dat elke integratie een gecompliceerd en pijnlijk proces kan zijn. Aarzel niet om contact op te nemen met je vertegenwoordiger of gebruik de <a href="https://fastcomments.com/auth/my-account/help" target="_blank">ondersteuningspagina</a>.

{{/isPost}}

---