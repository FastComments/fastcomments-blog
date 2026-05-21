---
[category:Features]
[category:Performance]
###### [postdate]
# [postlink]Svi FastComments widgeti su sada aktivni[/postlink]

{{#unless isPost}}
Svaki ugrađeni FastComments widget (broj komentara, nedavni komentari, najpopularnije stranice, nedavne diskusije, rezime recenzija, lebdeći lajkovi) sada se ažurira u realnom vremenu.
{{/unless}}

{{#isPost}}

### Šta je novo

Glavni widget za komentare je aktivan od prvog dana. Manji ugrađeni widgeti, međutim, nisu bili. Brojevi komentara, "nedavni komentari" ili "najpopularnije stranice" widgeti, itd., su sa zadovoljstvom prikazivali broj koji je bio zastareo do minut.

Sada svi widgeti koje FastComments isporučuje se pretplaćuju na ažuriranja u realnom vremenu i odmah se osvežavaju :) Ovo uključuje i rezime recenzija!

### Koji widgeti

Svi. Konkretno:

- `FastCommentsCommentCount` - broj komentara po stranici
- `FastCommentsCommentCountBulk` - verzija za više brojeva koja ažurira mnogo brojeva na listi/arhivnoj stranici
- `FastCommentsRecentComments` i `FastCommentsRecentCommentsV2`
- `FastCommentsTopPages` i `FastCommentsTopPagesV2`
- `FastCommentsRecentDiscussionsV2`
- `FastCommentsReviewsSummaryWidget`
- `FastCommentsFlyoverTrigger` (lebdeća oznaka za broj komentara)
- `FastCommentsEmbedPageLikesFloating` (lebdeći lajkovi + broj komentara)

### Šta trebate učiniti

Ništa. Ako već imate neki od ovih ugrađenih, osvežite stranicu jednom. Sledeći put kada se postavi, edituje, obriše komentar ili neko reaguje na stranicu, widget će se ažurirati.

Stari `isLive: true` konfiguracijski indikator na widgetima za broj komentara je sada suvišan - widgeti su uvek aktivni.

Ako učitavate widget JS iz naše CDN, imate novu verziju, uključujući ako koristite neku od naših wrapper biblioteka (React, Vue, itd).

### Lajkovi su takođe aktivni

Lebdeći widget za lajkove sada takođe reaguje na događaje lajkova i reakcija. Kliknite na srce na stranici i ostale otvorene kartice vide promenu broja.

### Kako to funkcioniše

Svaki widget otvara jednu jedinstvenu WebSocket vezu. Widgeti koji prikazuju podatke za jednu specifičnu stranicu (`comment-count` (uključujući bulk), `reviews-summary`, `embed-page-likes-floating`) se pretplaćuju na tok događaja te stranice. Widgeti koji prikazuju podatke koji obuhvataju jednog korisnika (`recent-comments`, `top-pages`, `recent-discussions`) se pretplaćuju na uski pulsni tok po korisniku koji šalje signal kad god se bilo šta u tom korisniku promeni.

Rezultat je da neaktivni widget praktično ne košta ništa, a aktivni widget pokazuje svež broj unutar jedne ili dve sekunde posle osnovne promene.

### Koherentnost keširanja

Kešovi na serverskoj strani koji podržavaju ove widgete ranije su istekli na 60-sekundnom TTL-u. Oni sada postaju nevažeći u trenutku kada stigne relevantni događaj komentara ili reakcije, tako da prvi zahtev posle promene vraća sveže podatke, a ne verziju iz keša.

### Na kraju

Drago nam je što smo mogli odvojiti vreme za testiranje i optimizaciju ove promene kako bi naši klijenti mogli da je uživaju po istoj ceni kao i uvek. Smatramo da su živi rezimei recenzija posebno kul diferencijator za nas.

Obavestite nas ispod ako primetite nešto neobično.

Pozdrav!

{{/isPost}}

---