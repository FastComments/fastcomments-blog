---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Trening Detekcije Spama Je Sada po Stanarima[/postlink]

{{#unless isPost}}
FastComments već godinama trenira svoj klasifikator za prevenciju spama. Sada su
mogućnosti treniranja unapređene.
{{/unless}}

{{#isPost}}

### Šta je Novo

Kada označite komentar kao spam, ili ne spam, FastComments uči iz toga za buduću
detekciju spama.

Međutim, ovo učenje se dešavalo na istom mestu za sve. Što znači da je trening spama
drugog stanara uticao na vaš. Ima prednosti i nedostatke. Prvo, automatski
dobijate koristi od onoga što drugi moderatori smatraju spamom. Nedostatak je ako naprave grešku,
ili ako imaju sadržaj koji se razlikuje od vašeg.

Na primer, ako drugi stanar ima publiku koja se bavi trkačkim simulatorima, mogli bi
označavati komentare sa "crypto spam" kao spam, često. Kao rezultat, klasifikator počinje da
povezuje tekst povezan sa kriptovalutama kao spam.

Ali, recimo da imate sajt koji je orijentisan na kriptovalute. Sada mnogi od vaših
komentara počinju da budu označeni kao spam kada nisu. Neki od njih bi mogli opravdano biti spam, ali mnogi možda nisu.

### Izolovano Trening

Kada novi stanar pristupi FastComments-u, po defoltu će njihova detekcija spama biti trenirana na
prošlom radu drugih stanara.

Kada počnete da označavate komentare kao spam/ne spam, sistem će preći na korišćenje vašeg
vlastitog skupa za treniranje.

### Ažuriranje 20. Septembar 2023

Otkrili smo da ova postavka nije idealna za sve po defoltu. Izolovano Trening Spama nije samo na zahtev.
Možete omogućiti ovo na stranici Podešavanja Moderacije tako što ćete izabrati "Izolovano" u opciji "Spam Filter".

Defolt je sada ponovo "Deljeno" treniranje.

### Uživo

Set treninga za vašeg stanara se sada uvek iznova gradi svaki put kada označite komentar kao spam ili ne spam.

Pre toga, sistem bi povremeno obnavljao indeks spama. To je rađeno da bi se zaštitio sistem od
prekomernog opterećenja. Nakon nekoliko godina, otkrili smo da opterećenje od kontinuiranog treniranja nije veoma visoko, tako da smo
ažurirali sistem da automatski osvežava indeks svaki put kada napravite promenu.

Ovi indeksi se čuvaju na ivici u našim aplikacijskim serverima, i svi se nezavisno ažuriraju kako bi
održali sistem brzim i responzivnim.

### Kako To Dobiti

Ova funkcija je dostupna svim kupcima!

### Na Zaključak

Kao i svi veliki izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---