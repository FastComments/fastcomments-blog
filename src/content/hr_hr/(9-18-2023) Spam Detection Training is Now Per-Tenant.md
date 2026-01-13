---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Trening detekcije neželjene pošte je sada po stanaru[/postlink]

{{#unless isPost}}
FastComments trenira svoj klasifikator za sprječavanje neželjene pošte već godinama. Sada su
mogućnosti treniranja unaprijeđene.
{{/unless}}

{{#isPost}}

### Što je Novo

Kada označite komentar kao neželjenu poštu ili ne, FastComments uči iz toga za buduću
detekciju neželjene pošte.

Međutim, ovo učenje se događalo na istom mjestu za sve. To znači da je obuka neželjene pošte
drugog stanara utjecala na vašu. Ima prednosti i nedostataka. Prvo, automatski imate koristi od
onoga što drugi moderatori smatraju neželjenom poštom. Nedostatak je ako naprave grešku, ili ako
imaju sadržaj koji se razlikuje od vašeg.

Na primjer, ako drugi stanar ima publiku koja se bavi simulatorima automobila, oni bi mogli
označavati komentare sa "crypto spam" kao neželjenu poštu, često. Kao rezultat, klasifikator počinje
uzimati tekst vezan za kripto kao neželjenu poštu.

Ali, recimo da imate stranicu koja je orijentirana na kripto. Sada mnogi vaši komentari počinju
biti označeni kao neželjena pošta kada nisu. Neki od njih možda mogu biti opravdano neželjena pošta, ali mnogi možda nisu.

### Izolirani Trening

Kada novi stanar pridruži FastComments po defaultu, njihova detekcija neželjene pošte će se trenirati na
prošlom radu drugih stanara.

Kako počnete označavati komentare kao neželjenu poštu/ne neželjenu poštu, sustav će se prebaciti
na korištenje vašeg vlastitog seta za obuku.

### Ažuriranje 20. rujna 2023

Otkrili smo da ova postavka po defaultu nije idealna za svakoga. Izolirani trening neželjene pošte nije samo
opcija za prihvaćanje. Možete omogućiti ovo na stranici postavki za moderaciju odabirom "Izolirano" u
opcije "Filtriranje neželjene pošte".

Defaultno je sada opet "Dijeljeno" treniranje.

### Uživo

Sada se set za obuku za vašeg stanara uvijek ponovno gradi svaki put kada označite komentar kao
neželjenu poštu ili ne.

Prethodno je sustav povremeno rekreirao indeks neželjene pošte. To je učinjeno kako bi se zaštitio
sustav od prekomjernog opterećenja. Nakon nekoliko godina, otkrili smo da opterećenje od
kontinuiranog treniranja nije vrlo visoko, pa smo ažurirali sustav da automatski ažurira indeks svaki put kada
napravite promjenu.

Ovi indeksi se pohranjuju na rubu u našim aplikacijskim poslužiteljima, i svi neovisno
ažuriraju kako bi sustav bio brz i responzivan.

### Kako To Dobiti

Ova funkcija je dostupna svim kupcima!

### Na Zaključak

Kao i kod svih većih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju,
testiranje i ispravno objavljivanje ove funkcije. Javite nam u komentarima ispod ako
otkrijete neke probleme.

Pozdrav!

{{/isPost}}

---