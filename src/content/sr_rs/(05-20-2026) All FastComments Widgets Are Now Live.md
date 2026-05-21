[category:Features]  
[category:Performance]  
###### [postdate]  
# [postlink]Svi FastComments widgeti su sada aktivni[/postlink]  

{{#unless isPost}}  
Svaki ugrađeni FastComments widget (broj komentara, najnoviji komentari, najpopularnije stranice, najnovije diskusije, pregled recenzija, lebdeći lajkovi) sada se ažurira u realnom vremenu.  
{{/unless}}  

{{#isPost}}  

### Šta je novo  

Glavni widget za komentare je bio aktivan od prvog dana. Manji ugrađeni widgeti, međutim, nisu bili. Widgeti za broj komentara, "najnoviji komentari" ili "najpopularnije stranice", itd, bili su srećni da pokažu broj koji je mogao biti zastareo do minut.  

Sada svaki widget koji FastComments šalje prijavljuje se za žive ažuriranje i odmah se osvežava :) Ovo uključuje i sažetke recenzija!  

### Koji widgeti  

Svi. Konkretno:  

- `FastCommentsCommentCount` - broj komentara po strani  
- `FastCommentsCommentCountBulk` - verzija za više brojeva koja ažurira mnoštvo brojeva na listi/arhivnoj stranici  
- `FastCommentsRecentComments` i `FastCommentsRecentCommentsV2`  
- `FastCommentsTopPages` i `FastCommentsTopPagesV2`  
- `FastCommentsRecentDiscussionsV2`  
- `FastCommentsReviewsSummaryWidget`  
- `FastCommentsFlyoverTrigger` (lebdeća oznaka za broj komentara)  
- `FastCommentsEmbedPageLikesFloating` (lebdeći lajkovi + broj komentara)  

### Šta treba da uradite  

Ništa. Ako već imate neki od ovih ugrađenih, osvežite stranicu jednom. Sledeći put kada se komentari postave, uređuju, obrišu, ili kada neko reaguje na stranicu, widget će se ažurirati.  

Stari `isLive: true` konfiguracioni flag na widgetima za broj komentara je sada suvišan - widgeti su uvek aktivni.  

Ako učitate widget JS sa našeg CDN-a, imate novu verziju, uključujući ako koristite jednu od naših wrapper biblioteka (React, Vue, itd).  

### Lajkovi su takođe aktivni  

Lebdeći widget za lajkove sada takođe reaguje na događaje lajkova i reakcija. Kliknite na srce na stranici i ostale otvorene kartice vide promenu broja.  

### Kako to funkcioniše  

Svaki widget otvara jednu WebSocket vezu. Widgeti koji prikazuju podatke za jednu specifičnu stranicu (`comment-count` (uključujući bulk), `reviews-summary`, `embed-page-likes-floating`) prijavljuju se na strim događaja te stranice. Widgeti koji prikazuju podatke koji obuhvataju jednog korisnika (`recent-comments`, `top-pages`, `recent-discussions`) prijavljuju se na tanak per-user pulz strim koji šalje signal kad god se nešto u tom korisniku promeni.  

Rezultat je da neaktivan widget praktično ne košta ništa, a aktivan widget prikazuje svež broj unutar sekunde ili dve nakon osnovne promene.  

### Održavanje keša  

Server-side keševi koji podržavaju ove widgete su nekada isticali na 60-sekundnom TTL-u. Sada se odmah poništavaju kada stigne relevantan događaj komentara ili reakcije, tako da prva odlazna zahtev nakon promene vraća sveže podatke, a ne verziju iz keša.  

### Na kraju  

Drago nam je što smo mogli odvojiti vreme da testiramo i optimizujemo ovu promenu kako bi naši kupci mogli uživati u istoj ceni kao i uvek. Smatramo da su  
živi sažeci recenzija posebno cool diferencijator za nas.  

Obavestite nas ispod ako primetite nešto što nije u redu.  

Pozdrav!  

{{/isPost}}