---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Obuka za Detekciju Spama je Sada po Korisnicima[/postlink]

{{#unless isPost}}
FastComments već godinama obučava svoj klasifikator za prevenciju spama. Sada su unapređene mogućnosti obuke.
{{/unless}}

{{#isPost}}

### Šta je Novo

Kada označite komentar kao spam ili ne spam, FastComments uči iz ovog za buduću
detekciju spama.

Međutim, ovo učenje se dešavalo na istom mestu za sve. To znači da je obuka spama jednog
korisnika uticala na vašu. Ima prednosti i nedostataka. Prvo, automatski
profitirate od onoga što drugi moderatori smatraju spamom. Nedostatak je ako naprave grešku, ili ako
imaju sadržaj koji se razlikuje od vašeg.

Na primer, ako drugi korisnik ima publiku koja se bavi trkačkim simulatorima, mogli bi označavati komentare sa "crypto spam" kao spam, često. Kao rezultat, klasifikator počinje da
sagledava tekst povezan sa kriptovalutama kao spam.

Ali, recimo da imate sajt koji je orijentisan na kriptovalute. Sada mnogi vaši komentari počinju da se
označavaju kao spam kada to nisu. Neki od njih bi mogli opravdano biti spam, ali mnogi možda nisu.

### Izolovana Obuka

Kada novi korisnik pristupi FastComments-u, po defaultu će njihova detekcija spama biti obučena na
dosadašnjem radu drugih korisnika.

Kada počnete da označavate komentare kao spam/ne spam, sistem će preći da koristi vaš
vlastiti set obuke.

### Ažuriranje 20. Septembar 2023

Otkrili smo da ova postavka nije bila idealna za sve po defaultu. Izolovana Obuka za Spam nije samo po izboru.
Možete ovo omogućiti na stranici postavki moderacije selektovanjem "Izolovano" u opciji "Filtar za Spam".

Podrazumevano se sada vraća na "Deljena" obuku.

### Uživo

Set obuke za vašeg korisnika se sada uvek ponovo gradi svaki put kada označite komentar kao spam ili ne spam.

Prethodno je sistem periodično ponovo gradio indeks spama. Ovo je urađeno da bi se zaštitio sistem od
pretežkog opterećenja. Nakon nekoliko godina otkrili smo da opterećenje od kontinuirane obuke nije
bilo previše visoko, pa smo ažurirali sistem da automatski ažurira indeks svaki put kada napravite
promenu.

Ovi indeksi se čuvaju na ivici u našim aplikacionim serverima, i svi se nezavisno ažuriraju kako bi se
održao sistem brz i responsivan.

### Kako to Dobiti

Ova funkcija je uvedena svim korisnicima!

### U Zaključku

Kao i kod svih većih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---