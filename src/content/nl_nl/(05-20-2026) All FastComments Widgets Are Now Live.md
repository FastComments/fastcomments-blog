---
[category:Features]  
[category:Performance]  
###### [postdate]  
# [postlink]Alle FastComments-widgets zijn nu live[/postlink]  

{{#unless isPost}}  
Elke ingebedde FastComments-widget (commentaantallen, recente opmerkingen, top pagina's, recente discussies, samenvatting van beoordelingen, drijvende likes) wordt nu in realtime bijgewerkt.  
{{/unless}}  

{{#isPost}}  

### Wat is er nieuw  

De belangrijkste commentaarwidget is sinds dag één live. De kleinere ingebedde widgets waren dat echter niet. Commentaantallen, "recente opmerkingen" of "top pagina's" widgets, enz., toonden met plezier een getal dat tot een minuut verouderd was.  

Nu abonneert elke widget die FastComments verzendt zich op live-updates en vernieuwt deze onmiddellijk :) Dit omvat ook de samenvattingen van beoordelingen!  

### Welke widgets  

Allemaal. Concreet:  

- `FastCommentsCommentCount` - het aantal opmerkingen per pagina  
- `FastCommentsCommentCountBulk` - de bulkversie die veel aantallen bijwerkt op een lijst-/archiefpagina  
- `FastCommentsRecentComments` en `FastCommentsRecentCommentsV2`  
- `FastCommentsTopPages` en `FastCommentsTopPagesV2`  
- `FastCommentsRecentDiscussionsV2`  
- `FastCommentsReviewsSummaryWidget`  
- `FastCommentsFlyoverTrigger` (de drijvende badge voor het aantal opmerkingen)  
- `FastCommentsEmbedPageLikesFloating` (de drijvende likes + commentaantal)  

### Wat u moet doen  

Niets. Als u al een van deze ingebed heeft, ververs de pagina eenmaal. De volgende keer dat er een opmerking wordt geplaatst, bewerkt, verwijderd of iemand op een pagina reageert, zal de widget worden bijgewerkt.  

De oude `isLive: true` configuratievlag op de commentaantal widgets is nu overbodig - widgets zijn altijd live.  

Als u de widget JS van onze CDN laadt, heeft u de nieuwe versie, inclusief als u een van onze wrapper-bibliotheken gebruikt (React, Vue, enz.).  

### Likes zijn ook live  

De drijvende likes-widget reageert nu ook op like- en reactie-evenementen. Klik op het hart op een pagina en andere open tabbladen zien het aantal veranderen.  

### Hoe het werkt  

Elke widget opent een enkele WebSocket-verbinding. Widgets die gegevens voor één specifieke pagina tonen (`comment-count` (inclusief bulk), `reviews-summary`, `embed-page-likes-floating`) abonneren zich op de evenementstream van die pagina. Widgets die gegevens tonen die zich uitstrekken over een tenant (`recent-comments`, `top-pages`, `recent-discussions`) abonneren zich op een dunne pulsstroom per tenant die een signaal verzendt telkens wanneer er iets in die tenant verandert.  

Het resultaat is dat een inactieve widget effectief niets kost en een actieve widget binnen een seconde of twee een vers getal toont na de onderliggende wijziging.  

### Cachecoherentie  

De serverzijde caches die deze widgets ondersteunen, vervielen voorheen op een TTL van 60 seconden. Ze worden nu ongeldig op het moment dat een relevant commentaar- of reactie-evenement zich voordoet, zodat de eerste aanvraag na een wijziging verse gegevens retourneert, niet de gecachete versie.  

### Conclusie  

We zijn blij dat we de tijd konden nemen om deze wijziging te testen en te optimaliseren, zodat onze klanten hiervan kunnen genieten tegen dezelfde prijzen als altijd. We denken dat de live beoordelingssamenvattingen een bijzonder coole differentiator voor ons zijn.  

Laat het ons hieronder weten als u iets opmerkt dat niet klopt.  

Proost!  

{{/isPost}}  

---