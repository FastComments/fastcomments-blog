[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Reactie zonder een gebruikersnaam te kiezen[/postlink]

{{#unless isPost}}
FastComments kan nu elke nieuwe bezoeker een unieke, neutrale gebruikersnaam geven, zodat ze er nooit zelf een hoeven te verzinnen. De gedeelde Standaardgebruikersnaam wordt ook niet langer "genomen" door de eerste persoon die hem gebruikt.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Als je site geen login heeft, wordt een bezoeker die een reactie wil achterlaten gevraagd om twee dingen: een e‑mail en een gebruikersnaam.
De e‑mail is eenvoudig, maar de gebruikersnaam moet uniek zijn, wordt openbaar, en ze moeten er meteen over nadenken.

Deze release verwijdert die stap. Schakel **Generate Usernames Automatically** in bij je widget‑aanpassing, en elke nieuwe
bezoeker arriveert met een naam zoals `BraveOtter4172` al ingevuld. Ze kunnen deze behouden of erover typen. Hoe dan ook, ze
komen sneller bij het reactie‑veld.

### Inschakelen

Open je <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
zoek de sectie **Anonymization** en vink **Generate Usernames Automatically** aan. Er is verder niets meer te configureren.

Het werkt met of zonder **Allow Anonymous Comments**. Als je nog steeds een e‑mail van elke reageerder wilt, schakel anoniem reageren uit. Bezoekers voeren hun e‑mail in, de gebruikersnaam wordt voor hen geregeld, en dat is alles. Als je geen e‑mail nodig hebt, schakel anoniem reageren in en kan een bezoeker reageren zonder verder te typen dan de eigenlijke reactie.

### Wat bezoekers zien

Het gebruikersnaamveld is vooraf ingevuld met de gegenereerde naam. Het is een gewoon invoerveld, dus iedereen die onder een andere naam bekend wil staan, vervangt het gewoon. Niets is verborgen en niets wordt afgedwongen.

De namen bestaan uit twee woorden en een getal, dus ze zijn leesbaar en neutraal. Niemand eindigt als `user_83729`.

### Elke naam is uniek

Een gegenereerde naam wordt gecontroleerd tegen bestaande accounts voordat deze wordt aangeboden, en hij wordt gereserveerd voor de browsersessie van die bezoeker zodat de volgende bezoeker niet dezelfde krijgt. Ingelogde gebruikers, SSO‑gebruikers en bezoekers die al hebben gereageerd, krijgen nooit een nieuwe naam. Ze behouden de naam die ze al hebben.

Een terugkerende bezoeker die een e‑mail invoert die hij eerder heeft gebruikt, wordt gekoppeld aan zijn bestaande account, zodat een tweede bezoek geen tweede identiteit creëert, zelfs niet als de browser daartussen is gewist.

### Bugfix - De standaardgebruikersnaam is nu echt gedeeld

Sommigen van jullie hebben **Default Username** gebruikt met een waarde zoals "Anonymous" om hier al een heel eind te komen. Dat had een valkuil. Gebruikersnamen zijn uniek, dus de eerste bezoeker die reageerde als "Anonymous" met hun e‑mail bezat de naam, en de volgende bezoeker met een andere e‑mail kreeg te horen dat de gebruikersnaam al in gebruik was.

Dat is opgelost. De standaardgebruikersnaam wordt nu behandeld als een gedeelde weergavenaam in plaats van een identiteit. Elke bezoeker die deze behoudt, krijgt achter de schermen zijn eigen account, en allen worden weergegeven als "Anonymous". Gebruikersnamen die bezoekers zelf invoeren moeten nog steeds uniek zijn, zoals voorheen.

Als je beide instelt, wint de gegenereerde naam.

### Documentatie

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">De gids Generate Usernames Automatically</a>
beschrijft de optie en hoe deze interacteert met de andere instellingen voor anoniem reageren.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">De gids Default Username</a>
beschrijft het gedeelde‑naamgedrag.

### Conclusie

Deze kwam van een klant die een site runt waar bezoekers patiënten zijn die mogelijk slechts één stukje feedback achterlaten. Hen vragen om een e‑mail en een unieke gebruikersnaam was één vraag te veel. Als een instelling tussen jouw lezers en het reactie‑veld staat, laat het ons dan hieronder weten.

Proost!

{{/isPost}}