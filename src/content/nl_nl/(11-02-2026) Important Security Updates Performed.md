[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Belangrijke beveiligingsupdates uitgevoerd[/postlink]

{{#unless isPost}}
We hebben het besturingssysteem op al onze servers gepatcht om een recente Linux TCP-kwetsbaarheid te verhelpen, en Node.js bijgewerkt om de oktober beveiligingsrelease op te nemen. Er is geen actie van uw kant nodig.
{{/unless}}

{{#isPost}}

### Wat is nieuw

We hebben onlangs twee beveiligingsupdates voltooid binnen de FastComments-infrastructuur: een besturingssysteemupdate om een kwetsbaarheid in de TCP-code van de Linux-kernel te verhelpen, en een Node.js-update om de nieuwste beveiligingsrelease op te nemen.

### Linux-kernel

Al onze servers zijn gepatcht en draaien nu een kernel die de fix voor <a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a> bevat.

Dit is een use-after-free in de IPv4 TCP-code van de kernel. De kernel kon de IP-opties die aan een verbinding waren gekoppeld vrijgeven terwijl een andere CPU ze nog aan het lezen was, bijvoorbeeld tijdens het opbouwen van het SYNACK-antwoord tijdens een TCP-handshake. De fix wacht totdat geen enkele CPU meer dat geheugen kan lezen voordat het wordt vrijgegeven.

### Node.js

FastComments draait op Node.js, en we hebben geüpdatet naar versie 24.22.1, de gepatchte release voor de 24.x-reeks van de <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">october 2026 Node.js-beveiligingsrelease</a>.

Die release verhelpt 10 kwetsbaarheden in de ondersteunde Node.js-versies. 8 daarvan treffen de 24.x-reeks, en 4 daarvan worden als hoog geclassificeerd: twee in TLS-validatie van IP-adressen, één in DNS-naamafhandeling, en één in de Brotli-decoder. Het werkt ook de meegeleverde afhankelijkheden bij, waaronder OpenSSL, c-ares, Undici en het CA‑certificaatbundel.

### Wat u moet doen

Niets. Deze updates worden volledig aan onze kant uitgevoerd, dus uw widgets, API‑integraties en SSO‑configuraties hebben geen wijzigingen nodig.

### Concluderend

Het up-to-date houden van onze infrastructuur is een doorlopend onderdeel van het draaien van FastComments, en we zullen dergelijke updates blijven toepassen zodra ze worden uitgebracht. Als u vragen heeft, laat het ons dan hieronder weten.

Proost!

{{/isPost}}

---