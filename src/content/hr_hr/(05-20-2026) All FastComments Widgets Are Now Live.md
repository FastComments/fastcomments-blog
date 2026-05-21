---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Svi FastComments widgeti su sada aktivni[/postlink]

{{#unless isPost}}
Svaki ugrađeni FastComments widget (broj komentara, nedavni komentari, najpopularnije stranice, nedavne rasprave, sažetak recenzija, plutajući lajkovi) sada se ažurira u stvarnom vremenu.
{{/unless}}

{{#isPost}}

### Što je novo

Glavni widget za komentare je bio aktivan od prvog dana. Manji ugrađeni widgeti, međutim, nisu bili. Broj komentara, widgeti "nedavnih komentara" ili "najpopularnijih stranica", itd., rado su prikazivali broj koji je bio star do jedne minute.

Sada svaki widget koji FastComments isporučuje preuzima žive ažuriranja i odmah se osvježava :) Ovo uključuje i sažetke recenzija!

### Koji widgeti

Svi. Konkretno:

- `FastCommentsCommentCount` - broj komentara po stranici
- `FastCommentsCommentCountBulk` - verzija za grupno ažuriranje koja ažurira mnoge brojeve na stranici s popisima/arhivima
- `FastCommentsRecentComments` i `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` i `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (plutajući oznaka za broj komentara)
- `FastCommentsEmbedPageLikesFloating` (plutajući lajkovi + broj komentara)

### Što trebate učiniti

Ništa. Ako već imate neki od ovih ugrađenih, osvježite stranicu jednom. Sljedeći put kada se komentira, uređuje, briše ili kada netko reagira na stranicu, widget će se ažurirati.

Stara `isLive: true` konfiguracijska oznaka na widgetima za broj komentara sada je suvišna - widgeti su uvijek aktivni.

Ako učitavate widget JS s našeg CDN-a, imate novu verziju, uključujući ako koristite neku od naših omotačkih biblioteka (React, Vue, itd.)

### Lajkovi su također aktivni

Plutajući widget za lajkove također reagira na događaje lajkova i reakcija. Kliknite na srce na stranici i druge otvorene kartice vide promjenu broja.

### Kako to funkcionira

Svaki widget otvara jednu WebSocket vezu. Widgeti koji prikazuju podatke za jednu specifičnu stranicu (`comment-count` (uključujući grupni), `reviews-summary`, `embed-page-likes-floating`) pretplaćuju se na događaje tog stranicu. Widgeti koji prikazuju podatke koji obuhvaćaju jednog korisnika (`recent-comments`, `top-pages`, `recent-discussions`) pretplaćuju se na uski signal događaja po korisniku koji šalje signal kad god se nešto u tom korisniku promijeni.

Rezultat je da neaktivni widget zapravo ne košta ništa, a aktivni widget prikazuje svjež broj u roku od sekunde ili dvije nakon promjene.

### Koherentnost cache-a

Kešovi na serverskoj strani koji podržavaju ove widgete ranije su istekli nakon 60 sekundi. Sada postaju nevažeći u trenutku kada se relevantni događaj komentara ili reakcije događa, tako da prvi zahtjev nakon promjene vraća svježe podatke, a ne verziju iz keša.

### U zaključku

Drago nam je što smo mogli odvojiti vrijeme za ispitivanje i optimizaciju ove promjene kako bi naši kupci mogli uživati u istoj cijeni kao i uvijek. Smatramo da su
živi sažeci recenzija posebno zanimljiva odlika za nas.

Obavijestite nas u nastavku ako primijetite nešto što nije u redu.

Živjeli!

{{/isPost}}

---