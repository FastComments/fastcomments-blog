---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Hoe spamberichten in uw opmerkingen te voorkomen[/postlink]

Er is geen manier om spam voor 100% te bestrijden. Maar FastComments implementeert een aantal maatregelen om te helpen.

{{#isPost}}

## Documentatie voor Sitebeheerders

Een standaard installatie van FastComments heeft zowel Spam- als Beledigingenfiltering ingeschakeld.

Deze standaardinstellingen vinden een balans tussen het voorkomen van spam en niet te opdringerig te zijn voor de meeste gemeenschappen.

[U wilt misschien de moderatiegids bekijken](https://docs.fastcomments.com/guide-moderation.html).

## Hoe het Werkt

Onze spamfilter maakt gebruik van een [Naive Bayes-classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) om spam te identificeren.

Het wordt in de loop van de tijd getraind op basis van wat beheerders markeren als spam en geen spam.

FastComments draait in een iframe op uw site. Dit maakt het moeilijker voor geautomatiseerde spambots om uw opmerkingen sectie te targeten. Als ze dat echter doen
en onze classifier ontdekt dat hun opmerkingen "spammy" zijn, zullen ze verborgen worden voor uw gebruikers. Net als alle andere opmerkingen worden ze ook gemarkeerd als
"beoordeling nodig" op de [moderatiepagina](https://fastcomments.com/auth/my-account/moderate-comments) van het dashboard.

Beledigingenfiltering leidt echter standaard niet tot verborgen opmerkingen. Het zal gewoon de "slechte woorden" maskeren met sterretjes.

## Spam Volledig Blokkeren

Standaard staat FastComments de spam toe, maar verbergt het en markeert het voor beoordeling.

Als u de gebruiker wilt vertellen dat hun opmerking als spam is gedetecteerd en hen wilt vragen deze te herzien, kan dit gedaan worden in [Moderatie-instellingen](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
door de instelling `Spam Blokkeren` in te schakelen.

## Beledigende Opmerkingen Verbergen

Beledigende opmerkingen kunnen worden verborgen door `Beledigende Opmerkingen Automatisch naar Spam Sturen` in te schakelen in [Moderatie-instellingen](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Instellingen

Zowel Belediging- als Spamfiltering kunnen individueel worden uitgeschakeld op de pagina [Moderatie-instellingen](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Opmerking Verificatie

FastComments maakt gebruik van een verificatiesysteem waarbij standaard, [onbevestigde opmerkingen](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) als zodanig worden gemarkeerd voor alle gebruikers om te zien.

Door gebruikers opmerkingen te laten plaatsen zonder volledig ingelogd te zijn, verlaagt dit de toegangsdrempel om deel te nemen aan een discussie. Het label onbevestigd kan verborgen worden via aanpassingsregels.

Onbevestigde opmerkingen worden standaard weergegeven, maar kunnen verborgen worden totdat ze via e-mail zijn bevestigd, door `Alleen Auto Goedkeuren Bevestigde Opmerkingen` in te schakelen.

Merk op dat bij SSO, alle opmerkingen altijd zijn bevestigd. Als een gebruiker is aangemeld in een bevestigde sessie, zullen hun opmerkingen ook altijd zijn bevestigd.

Onbevestigde opmerkingen kunnen ook worden gepland voor verwijdering.

## Voor Opmerkende Gebruikers

Als uw opmerking als spam wordt gedetecteerd, ziet u onmiddellijk een bericht. Dit is om u te laten weten dat de opmerking moet worden beoordeeld
voordat deze aan anderen wordt weergegeven. Spamdetectie kan niet 100% nauwkeurig zijn, dus we begrijpen als u enige frustratie ervaart. Als uw opmerking legitiem is, zou de
sitebeheerder in staat moeten zijn dat te herkennen en uw opmerking als geen spam te markeren.

{{/isPost}}

---