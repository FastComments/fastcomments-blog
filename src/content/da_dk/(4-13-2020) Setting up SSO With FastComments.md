---
[category:API & Development]

###### [postdate]
# [postlink]Opsætning af SSO Med FastComments[/postlink]

{{#unless isPost}}
FastComments tilbyder SSO-løsninger til forskellige platforme og tilpassede integrationer.
{{/unless}}

{{#isPost}}

# Oversigt

## Hvad er SSO?

SSO, eller single-sign-on, er et sæt konventioner, der bruges til at lade dig eller dine brugere bruge FastComments uden at skulle oprette endnu en konto.

Forudsat at du ikke tillader anonyme kommentarer, kræves der en konto for at kommentere med FastComments. Vi gør denne tilmeldingsproces meget enkel - brugeren efterlader blot deres email, når de kommenterer. Vi forstår dog, at selv det er ekstra friktion, som nogle steder ønsker at undgå.

## Hvordan får jeg det?

Alle kontotyper får i øjeblikket adgang til SSO samt support. Dog vil det maksimale antal SSO-brugere variere afhængigt af din pakke.

### WordPress-brugere

Hvis du bruger vores <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a>-plugin, er der ikke noget kode at skrive! Gå simpelthen til pluginets Admin-side, klik på SSO-indstillinger, og aktiver det.

Dette vil tage dig til en enkelt-knap-guiden, som vil oprette din API-nøgle, sende den til din WordPress-installation og aktivere SSO. Vi har samlet dette til et enkelt klik for dig.

Bemærk, at hvis du installerer pluginet for første gang, skal du følge opsætningsprocessen, før du ser admin-siden med SSO-indstillingsknappen.

### Tilpassede integrationer

FastComments SSO bruger HMAC-SHA256 kryptering som mekanismen til at implementere SSO. Først vil vi gennemgå den overordnede arkitektur, give eksempler og detaljerede trin. Dog er der i slutningen af denne artikel instruktioner til **migrering fra Disqus og Commento**.

Flowet ser sådan ud:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Diagram" title="FastComments SSO Diagram" class="lozad" />
</div>

Du behøver ikke at skrive nye API-endepunkter med FastComments SSO. Krypter blot brugerens oplysninger ved hjælp af din hemmelige nøgle og send payloaden til kommentarklienten.

Vi leverer fuldt funktionelle kodeeksempler i flere sprog/runtime, herunder NodeJS, Java/Spring og ren PHP. Selvom vi bruger ExpressJS i NodeJS-eksemplet og Spring i Java-eksemplet, er der ikke nødvendige rammer/biblioteker i disse runtime til at implementere FastComments SSO - de native krypto-pakker fungerer.

Du kan finde kodeeksempelets repository her:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">FastComments SSO Kodeeksempler</a>

#### Få din API-hemmelige nøgle

Din API-hemmelige nøgle kan hentes fra <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">denne side</a>. Du kan også finde denne side ved at gå til Min Konto, klikke på API/SSO-flisen, og derefter klikke på "Få API-hemmelig nøgle".

#### Kommentar-widgetparametre

Høj-niveau API-dokumentation for kommentarklienten kan findes <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">her</a> ved at klikke på "Vis avancerede muligheder". Søg efter SSO på siden.

Lad os gå mere i detaljer om, hvad disse parametre betyder.

Kommentarklienten tager et konfigurationsobjekt - du passer allerede dette, hvis du bruger FastComments til at videregive dit kunde-id (kaldes tenantId).

For at aktivere SSO skal du videregive et nyt "sso"-objekt, som skal have følgende parametre. Værdierne skal genereres **server-side**.

- userDataJSONBase64: Brugerens data i JSON-format, som derefter er Base64-kodet.
- verificationHash: HMAC-SHA256-hash genereret fra UNIX_TIME + userDataJSONBase64.
- timestamp: Den nuværende unix-tid. **Må ikke være i fremtiden, eller mere end tre timer tilbage i tiden.**
- loginURL: En URL, som kommentarklienten kan vise for at logge brugeren ind.
- logoutURL: En URL, som kommentarklienten kan vise for at logge brugeren ud.
- loginCallback: Når den er givet i stedet for login-URL’en, en funktion, som kommentarklienten vil kalde, når login-knappen klikkes.
- logoutCallback: Når den er givet i stedet for logout-URL’en, en funktion, som kommentarklienten vil kalde, når logout-knappen klikkes.

#### Brugerobjektet 

Brugerobjektet indeholder følgende skema:

- id (streng, påkrævet) (maks. 1k tegn)
- email (streng, påkrævet) (maks. 1k tegn). Bemærk: Skal være unik.
- username (streng, påkrævet) (maks. 1k tegn). Bemærk: Brugernavnet må ikke være en email. Skal ikke være unikt.
- avatar (streng, valgfri) (maks. 3k tegn)
- optedInNotifications (boolean, valgfri)
- displayLabel (streng, valgfri, maks. 100 tegn). Denne etiket vises ved siden af deres navn.
- websiteUrl (streng, valgfri, maks. 2000 tegn). Brugerens navn vil linke til dette.

#### Notifikationer

For at aktivere eller deaktivere notifikationer, sæt værdien af optedInNotifications til true eller false henholdsvis. Den første gang brugeren indlæser siden med denne værdi i SSO-payloaden, vil deres notifikationsindstillinger blive opdateret.

#### VIP-brugere & Specielle etiketter

Du kan vise en særlig etiket ved siden af brugerens navn ved at bruge det valgfri "displayLabel"-felt.

#### Uautoriserede brugere

For at repræsentere en uautoriseret bruger, skal du blot undlade at udfylde userDataJSONBase64, verificationHash eller timestamp. Angiv en loginURL.

#### Direkte eksempler på serialisering og hashing af brugerdata

Mere detaljer som eksempler <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">her (js)</a>, 
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">her (java)</a> og 
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">her (php)</a>.


### Migrering fra Disqus SSO

De største forskelle mellem Disqus og FastComments SSO er, at Disqus bruger SHA1 til kryptering, mens vi bruger SHA256. 
Dette betyder, at migrering fra Disqus er nemt - skift hash-algoritmen fra SHA1 til SHA256 og opdater egenskaberne, der sendes til UI'en.

### Migrering fra Commento SSO

Commento bruger en drastisk anderledes SSO-tilgang - de kræver, at du har et endpoint, som de kalder for at godkende brugeren. FastComments er den anden vej rundt - 
krypter og hash blot brugerens oplysninger med din hemmelige nøgle og send dem videre.

Vi forstår, at enhver integration kan være en kompliceret og smertefuld proces. Tøv ikke med at kontakte din repræsentant eller brug <a href="https://fastcomments.com/auth/my-account/help" target="_blank">support-siden</a>.

{{/isPost}}

---