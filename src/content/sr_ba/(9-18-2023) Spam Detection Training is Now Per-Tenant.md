---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Trening Detekcije Spama je Sada po Iznajmljivaču[/postlink]

{{#unless isPost}}
FastComments već godinama obučava svoj klasifikator za sprečavanje spama. Sada su mogućnosti
obuke unapređene.
{{/unless}}

{{#isPost}}

### Šta je Novo

Kada označite komentar kao spam ili ne-spam, FastComments uči iz toga za buduću
detekciju spama.

Međutim, ova obuka se do sada dešavala na istom mestu za sve. To znači da je obuka spama drugog
iznajmljivača uticala na vašu. Ima prednosti i mana u tome. Prvo, automatski koristite
ono što drugi moderatori smatraju spamom. Mana je što, ako naprave grešku ili imaju sadržaj
koji se razlikuje od vašeg.

Na primer, ako drugi iznajmljivač ima publiku koja se bavi simulatorima trka, mogli bi često
označavati komentare sa "crypto spam" kao spam. Kao rezultat toga, klasifikator počinje
da povezuje tekst vezan za kriptovalute kao spam.

Ali, da kažemo da imate sajt koji je orijentisan na kriptovalute. Sada mnogi od vaših komentara
počinju da budu označeni kao spam iako to nisu. Neki od njih mogu opravdano biti spam, ali mnogi možda nisu.

### Izolovana Obuka

Kada novi iznajmljivač pristupi FastComments-u, po defaultu će njihova detekcija spama biti obučena na
prethodnom radu drugih iznajmljivača.

Kako počinjete da označavate komentare kao spam/ne-spam, sistem će preći na korišćenje vašeg
vlastitog skupa za obuku.

### Ažuriranje 20. Septembar 2023

Otkrili smo da ova postavka nije bila idealna za sve po defaultu. Izolovana Obuka za Spam nije samo na zahtev.
Možete to omogućiti na stranici Podešavanja Moderacije tako što ćete izabrati "Izolovano" u opciji "Filter za Spam".

Defaultno je sada ponovo "Podeljena" obuka.

### Uživo

Obučeni skup za vaš iznajmljivač se sada uvek ponovo izgrađuje svaki put kada označite komentar kao spam ili ne-spam.

Prethodno je sistem povremeno obnavljao indeks spama. Ovo je učinjeno da bi se sistem zaštitio od
prekomerne opterećenosti. Nakon nekoliko godina, otkrili smo da opterećenje od kontinuirane obuke nije bilo veoma visoko, pa smo
ažurirali sistem da automatski ažurira indeks svaki put kada napravite promenu.

Ovi indeksi se čuvaju na ivici u našim aplikacionim serverima, i svi se nezavisno ažuriraju kako bi
sistem bio brz i responzivan.

### Kako to Dobiti

Ova funkcija je uvedena svim korisnicima!

### Na Zaključak

Kao i svi glavni izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---