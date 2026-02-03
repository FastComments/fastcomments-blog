---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Voeg Live Chat toe aan Native Applicaties met FastComments React Native[/postlink]

{{#unless isPost}}
Na maanden van werk zijn we verheugd aan te kondigen dat fastcomments-react-native-sdk nu versie 1.0 heeft voor algemene beschikbaarheid.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technische Jargon

### Wat is Nieuw

Bij FastComments hebben we een nieuwe manier gelanceerd om React Native-applicaties te bouwen met FastComments. Voorheen gebruikte je onze react-native wrapper rond
de VanillaJS bibliotheek. Dit introduceerde verschillende geheugen- en latentieproblemen omdat er een webview nodig was - een browser in je app - alleen al om onze bibliotheek te laden.

We hebben FastComments nu **volledig** geport naar React Native en hebben onze eigen WYSIWYG-editor geschreven om de behoefte aan webviews volledig te elimineren.

De bibliotheek ondersteunt verschillende skins en indelingen. Hier is bijvoorbeeld de Erebus-skin, die een live-chat stijl donkere skin is:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

De bibliotheek is beschikbaar [op GitHub bij FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) evenals
[op NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Aanpasbaar

De nieuwe native bibliotheek is ontworpen om aanpasbaar te zijn, net als de bestaande webbibliotheek.

Je kunt:

- Alle middelen en iconen die de bibliotheek gebruikt aanpassen.
- De styling van elk component in de bibliotheek aanpassen door een Styles-object van bovenaf door te geven.
- Alle vertalingen aanpassen.
- Een van de vooraf gedefinieerde of door de gemeenschap ontwikkelde skins gebruiken.
- Veel van dezelfde configuratie-opties gebruiken die de webbibliotheek ondersteunt.

### Complete Kenmerkenlijst

De bibliotheek ondersteunt veel dingen. Een onvolledige lijst is:

- [x] Blokkeren
- [x] Chatreacties
- [x] Kindcommentaren en antwoorden
- [x] Aangepaste stijlen (als type stylesheet)
- [x] Emoticons
- [x] Rapporteren
- [x] Gif-browser - Met standaard trending + zoekmogelijkheid. Afbeeldingen en zoeken geanonimiseerd via proxy.
- [x] Live commentaar
- [x] Mediakeuze en uploads
- [x] Native WYSIWYG-editor met ondersteuning voor afbeeldingen.
- [x] Notificatiedienst (ontvang ongelezen meldingen van de gebruiker op de achtergrond om naar hen te pushen, enz.)
- [x] Meldingenlijst (toont bij klikken op de bel). Ondersteunt abonnementen.
- [x] Paginering (Knoppen)
- [x] Paginering (Oneindige Scroll)
- [x] Reacties vastzetten
- [x] Veilige, eenvoudige SSO en anoniem commentaar.
- [x] Verschillende vooraf gedefinieerde skins.
- [x] Show/Hide Comments Toggle
- [x] Draadjes
- [x] Gebruikersactiviteitsindicatoren
- [x] Stemmen

### Hoe het Werkt

De bibliotheek is een volledige herschreven versie van de FastComments-client in TypeScript en React Native.

### Lange Termijn Plan

Op de lange termijn zullen we zowel de VanillaJS-bibliotheek als de react-native-bibliotheek parallel onderhouden, evenals eventuele toekomstige native bibliotheken die we mogelijk ontwikkelen.

### Wat is de Volgende Stap?

We kijken uit naar feedback van gebruikers en de gemeenschap om deze bibliotheek in de loop van de tijd te verbeteren, net zoals we dat hebben gedaan met het webecosysteem.

### Ter Conclusie

We weten dat deze bibliotheek door sommigen lang is verwacht. Zoals bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om deze bibliotheek te optimaliseren, te testen en goed uit te geven.

Proost!

{{/isPost}}

---