[category:Features]  
[category:Performance]  
###### [postdate]  
# [postlink]Alle FastComments Widgets Er Nu Live[/postlink]  

{{#unless isPost}}  
Hver indlejret FastComments-widget (kommentarantal, seneste kommentarer, top sider, seneste diskussioner, anmeldelsesoversigt, flydende likes) opdateres nu i realtid.  
{{/unless}}  

{{#isPost}}  

### Hvad Er Nyt  

Den primære kommentar-widget har været live siden dag ét. De mindre indlejrede widgets var dog ikke. Kommentarantal, "seneste kommentarer" eller "top sider" widgets osv. kunne gladeligt vise et tal, der var op til et minut gammelt.  

Nu abonnerer hver widget, som FastComments sender ud, på live-opdateringer og opdateres med det samme :) Dette inkluderer også anmeldelsesoversigterne!  

### Hvilke Widgets  

Alle sammen. Konkret:  

- `FastCommentsCommentCount` - kommentarantal pr. side  
- `FastCommentsCommentCountBulk` - bulk versionen, der opdaterer mange tællere på en liste/arkivside  
- `FastCommentsRecentComments` og `FastCommentsRecentCommentsV2`  
- `FastCommentsTopPages` og `FastCommentsTopPagesV2`  
- `FastCommentsRecentDiscussionsV2`  
- `FastCommentsReviewsSummaryWidget`  
- `FastCommentsFlyoverTrigger` (den flydende kommentarantal badge)  
- `FastCommentsEmbedPageLikesFloating` (de flydende likes + kommentarantal)  

### Hvad Du Skal Gøre  

Intet. Hvis du allerede har nogen af disse indlejret, skal du bare opdatere siden én gang. Næste gang en kommentar bliver postet, redigeret, slettet, eller nogen reagerer på en side, vil widgeten opdatere.  

Den gamle `isLive: true` konfigurationsflag på kommentarantal widgets er nu overflødig - widgets er altid live.  

Hvis du indlæser widget JS fra vores CDN, har du den nye version, også hvis du bruger en af vores wrapper-biblioteker (React, Vue osv).  

### Likes Er Også Live  

Den flydende likes-widget reagerer også på like- og reaktionsevents nu. Klik på hjertet på en side, og andre åbne faner ser tælleren ændre sig.  

### Hvordan Det Fungerer  

Hver widget åbner en enkelt WebSocket-forbindelse. Widgets, der viser data for en specifik side (`comment-count` (herunder bulk), `reviews-summary`, `embed-page-likes-floating`) abonnerer på den sides hændelsesstream. Widgets, der viser data, der spænder over en lejer (`recent-comments`, `top-pages`, `recent-discussions`) abonnerer på en slank per-lejer puls-stream, der sender et signal, hver gang noget i den lejer ændrer sig.  

Resultatet er, at en inaktiv widget reelt koster ingenting, og en aktiv widget viser et friskt tal inden for et sekund eller to efter den underliggende ændring.  

### Cache Kohærens  

De server-side caches, der understøtter disse widgets, plejede at udløbe på en 60-sekunders TTL. De bliver nu ugyldige i det øjeblik, en relevant kommentar- eller reaktionsevent lander, så den første anmodning efter en ændring returnerer friske data, ikke den cachede version.  

### Som Konklusion  

Vi er glade for, at vi kunne tage os tid til at teste og optimere denne ændring, så vores kunder kan nyde det til samme pris som altid. Vi mener, at de live anmeldelsesoversigter er en særligt cool differentieringsfaktor for os.  

Lad os vide nedenfor, hvis du ser noget, der ikke er i orden.  

Skål!  

{{/isPost}}