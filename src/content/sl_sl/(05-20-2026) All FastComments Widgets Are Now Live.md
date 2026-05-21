[category:Features]  
[category:Performance]  
###### [postdate]  
# [postlink]Vsi FastComments pripomočki so zdaj v živo[/postlink]  

{{#unless isPost}}  
Vsak vdelani FastComments pripomoček (število komentarjev, nedavni komentarji, najboljše strani, nedavne razprave, povzetek ocen, plavajoči "všečki") se zdaj posodablja v realnem času.  
{{/unless}}  

{{#isPost}}  

### Kaj je novega  

Glavni pripomoček za komentarje je bil v živo od prvega dne. Manjši vdelani pripomočki pa niso bili. Pripomočki za število komentarjev, "nedavni komentarji" ali "najboljše strani", itd., so z veseljem prikazovali število, ki je bilo staro do minute.  

Zdaj se vsak pripomoček, ki ga FastComments izdaja, naroči na posodobitve v živo in se takoj osveži :) To vključuje tudi povzetke ocen!  

### Kateri pripomočki  

Vsi. Konkretno:  

- `FastCommentsCommentCount` - število komentarjev na strani  
- `FastCommentsCommentCountBulk` - različica za množično posodabljanje, ki posodablja več številk na seznamu/arhivski strani  
- `FastCommentsRecentComments` in `FastCommentsRecentCommentsV2`  
- `FastCommentsTopPages` in `FastCommentsTopPagesV2`  
- `FastCommentsRecentDiscussionsV2`  
- `FastCommentsReviewsSummaryWidget`  
- `FastCommentsFlyoverTrigger` (plavajoča oznaka za število komentarjev)  
- `FastCommentsEmbedPageLikesFloating` (plavajoči všečki + število komentarjev)  

### Kaj morate storiti  

Nič. Če imate že katerega od teh vdelanih, osvežite stran enkrat. Naslednjič, ko je komentar objavljen, urejen, izbrisan ali ko nekdo reagira na stran, se bo pripomoček posodobil.  

Stari konfiguracijski zastavici `isLive: true` na pripomočkih za število komentarjev zdaj ni več potrebno - pripomočki so vedno v živo.  

Če naložite JavaScript pripomočka iz našega CDN, imate novo različico, vključno, če uporabljate eno od naših wrapper knjižnic (React, Vue, itd).  

### Všečki so tudi v živo  

Plavajoči pripomoček za všečke se zdaj tudi odziva na dogodke običajnega in reakcijskega. Kliknite srce na strani in druge odprte zavihke vidite, da se števec spremeni.  

### Kako to deluje  

Vsak pripomoček odpre eno samo povezavo WebSocket. Pripomočki, ki prikazujejo podatke za eno specifično stran (`comment-count` (vključno z množičnim), `reviews-summary`, `embed-page-likes-floating`), se naročijo na tok dogodkov te strani. Pripomočki, ki prikazujejo podatke, ki zadevajo najemnika (`recent-comments`, `top-pages`, `recent-discussions`), se naročijo na ožji tok pulza na ravni najemnika, ki pošlje signal, kadar se kaj v tem najemniku spremeni.  

Rezultat je, da nedejavnemu pripomočku praktično ni stroškov, aktiven pripomoček pa prikaže svežo številko v sekundi ali dveh po osnovni spremembi.  

### Koherenca predpomnilnika  

Predpomnilniki na strežniški strani, ki podpirajo te pripomočke, so se prej izpraznili po 60-sekundnem TTL. Zdaj postanejo neveljavni v trenutku, ko pride do relevantnega komentarja ali dogodka reakcije, tako da prvi zahtevek po spremembi vrne sveže podatke, ne pa različice iz predpomnilnika.  

### Na koncu  

Veseli smo, da smo si lahko vzeli čas za testiranje in optimizacijo te spremembe, da lahko naši kupci uživajo v enakih cenah kot vedno. Menimo, da so  
živahni povzetki ocen še posebej zanimiv diferenciator za nas.  

Sporočite nam spodaj, če opazite kakšno nepravilnost.  

Na zdravje!  

{{/isPost}}