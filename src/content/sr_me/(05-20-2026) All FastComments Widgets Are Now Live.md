---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Svi FastComments widgeti su sada aktivni[/postlink]

{{#unless isPost}}
Svaki ugrađeni FastComments widget (broj komentara, nedavni komentari, najpopularnije stranice, nedavne diskusije, sažetak recenzija, leteći lajkovi) sada se ažurira u realnom vremenu.
{{/unless}}

{{#isPost}}

### Šta je novo

Glavni comment widget je aktivan od prvog dana. Međutim, manji ugrađeni widgeti nisu bili. Widgeti za broj komentara, "nedavne komentare" ili "najpopularnije stranice" i slično, srećno su prikazivali broj koji je mogao biti zastareo do minut.

Sada svakog widgeta koji FastComments isporučuje pretplatite se na žive ažuriranja i osvežavaju se odmah :) To uključuje i sažetke recenzija!

### Koji widgeti

Svi. Konkretno:

- `FastCommentsCommentCount` - broj komentara po stranici
- `FastCommentsCommentCountBulk` - verzija za više brojeva koja ažurira mnoge count-ove na listi/arhiv stranici
- `FastCommentsRecentComments` i `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` i `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (leteći bedž sa brojem komentara)
- `FastCommentsEmbedPageLikesFloating` (leteći lajkovi + broj komentara)

### Šta treba da uradite

Ništa. Ako već imate neki od ovih ugrađenih, osvežite stranicu jednom. Sledeći put kada se komentar postavi, izmeni, obriše ili kada neko reaguje na stranicu, widget će se ažurirati.

Stari `isLive: true` konfiguracioni flag na widgetima za broj komentara je sada suvišan - widgeti su uvek aktivni.

Ako učitavate JS widgeta sa našeg CDN-a, imate novu verziju, uključujući ako koristite jednu od naših wrapper biblioteka (React, Vue, itd).

### Lajkovi su takođe aktivni

Leteći widget lajkova takođe odgovara na događaje lajkova i reakcija sada. Kliknite na srce na stranici i drugi otvoreni tabovi vide kako se broj menja.

### Kako to funkcioniše

Svaki widget otvara jednu vezu preko WebSocket-a. Widgeti koji prikazuju podatke za jednu specifičnu stranicu (`comment-count` (uključujući bulk), `reviews-summary`, `embed-page-likes-floating`) pretplaćuju se na tok događaja te stranice. Widgeti koji prikazuju podatke koji obuhvataju jednog zakupca (`recent-comments`, `top-pages`, `recent-discussions`) pretplaćuju se na srednji tok pulsa po zakupcu koji šalje signal kad god se nešto u tom zakupcu promeni.

Rezultat je da neaktivan widget košta praktično ništa, a aktivan widget prikazuje svež broj u roku od sekunde ili dve nakon osnovne promene.

### Koherentnost keširanja

Keširanja na serveru koja podržavaju ove widgete ranije su isticale na 60-sekundnom TTL-u. Sada se nevažeće u trenutku kada relevantni komentar ili reakcija stigne, tako da prvi zahtev nakon promene vraća sveže podatke, a ne verziju iz keša.

### U zaključku

Drago nam je što smo mogli da odvojimo vreme za testiranje i optimizaciju ove promene kako bi naši korisnici mogli da uživaju u istoj ceni kao i uvek. Mislimo da su
živi sažeci recenzija posebno kul diferencijator za nas.

Obavestite nas ispod ako primetite nešto čudno.

Pozdrav!

{{/isPost}}