[category:Features]  
[category:Performance]  
###### [postdate]  
# [postlink]Sve FastComments Widgeti Su Sada Aktivni[/postlink]  

{{#unless isPost}}  
Svaki ugradni FastComments widget (brojevi komentara, recent comments, top pages, recent discussions, reviews summary, floating likes) se sada ažurira u realnom vremenu.  
{{/unless}}  

{{#isPost}}  

### Šta je Novo  

Glavni comment widget je bio aktivan od prvog dana. Manji ugradni widgeti, međutim, nisu bili. Brojevi komentara, "recent comments" ili "top pages" widgeti, itd., bi rado prikazivali broj koji je mogao biti zastareo i do jednog minuta.  

Sada svaki widget koji FastComments isporučuje se pretplaćuje na ažuriranja u realnom vremenu i odmah se osvežava :) Ovo uključuje i sažetke recenzija!  

### Koji Widgeti  

Svi od njih. Konkretno:  

- `FastCommentsCommentCount` - broj komentara po strani  
- `FastCommentsCommentCountBulk` - verzija koja ažurira mnogo brojeva na listi/arhiv stranici  
- `FastCommentsRecentComments` i `FastCommentsRecentCommentsV2`  
- `FastCommentsTopPages` i `FastCommentsTopPagesV2`  
- `FastCommentsRecentDiscussionsV2`  
- `FastCommentsReviewsSummaryWidget`  
- `FastCommentsFlyoverTrigger` (plutajući oznaka broja komentara)  
- `FastCommentsEmbedPageLikesFloating` (plutajuće lajkove + broj komentara)  

### Šta Trebate Da Uradite  

Ništa. Ako već imate neki od ovih ugradnih widgeta, osvežite stranicu jednom. Sledeći put kada se postavi, izmeni, obriše komentar, ili kada neko reaguje na stranicu, widget će se ažurirati.  

Stara `isLive: true` konfiguraciona zastavica na widgetima za broj komentara je sada suvišna - widgeti su uvek aktivni.  

Ako učitavate widget JS sa našeg CDN-a, imate novu verziju, uključujući ako koristite neku od naših wrapper biblioteka (React, Vue, itd).  

### Lajkovi Su Takođe Aktivni  

Plutajući lajkovi widget takođe reaguje na događaje lajkovanja i reagovanja. Kliknite na srce na stranici i druge otvorene kartice će videti promenu broja.  

### Kako To Funkcioniše  

Svaki widget otvara jednu WebSocket vezu. Widgeti koji prikazuju podatke za jednu specifičnu stranicu (`comment-count` (uključujući bulk), `reviews-summary`, `embed-page-likes-floating`) se pretplaćuju na tok događaja te stranice. Widgeti koji prikazuju podatke za više tenanata (`recent-comments`, `top-pages`, `recent-discussions`) se pretplaćuju na tanak puls tok po tenant-u koji šalje signal kada god se bilo šta u tom tenant-u promeni.  

Rezultat je da neaktivan widget praktično ne košta ništa, a aktivan widget prikazuje svež broj u roku od jedne ili dve sekunde od osnovne promene.  

### Koherentnost Keša  

Kešovi sa serverske strane koji podržavaju ove widgete su ranije isticali nakon 60 sekundi TTL. Sada se poništavaju trenutkom kada stigne relevantan događaj komentara ili reagovanja, tako da prvi zahtev nakon promene vraća sveže podatke, a ne keširanu verziju.  

### U Zaključku  

Drago nam je što smo mogli da odvojimo vreme da testiramo i optimizujemo ovu promenu kako bi naši korisnici mogli uživati u istoj ceni kao i do sada. Smatramo da su  
žive recenzije sažetka posebno kul diferencijator za nas.  

Obavestite nas u komentarima ako primetite bilo kakvu nepravilnost.  

Pozdrav!  

{{/isPost}}