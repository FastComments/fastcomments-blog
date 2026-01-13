---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa JustComments na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako potpuno migrirati sa JustComments na FastComments.

Obično se radi o uklanjanju malog koda koji vam daju i njegovom zamenom sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokretati JustComments i FastComments na istoj veb stranici kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.
{{/unless}}

{{#isPost}}

Počevši od 2021. godine, JustComments će se zatvoriti. U FastComments smo olakšali prelazak na našu platformu.

Primetićete da FastComments nudi mnoge iste funkcije na koje ste navikli, i još više.

## Razlike u cenama

Dok JustComments koristi sistem zasnovan na kreditima, FastComments koristi model sa nivoima sa tri dostupna nivoa. Sa FastComments, naš plan od 5 $/mesec pokriva vas do 1M učitavanja stranica mesečno. Iza toga su Pro i Enterprise planovi, koje možete pogledati na našoj <a href="https://fastcomments.com/traffic-pricing" target="_blank">stranici sa cenama</a>.

## Ako ste na WordPress-u

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak pojednostavljuje instalaciju, podešavanje i sinhronizaciju. Međutim, JustComments ne sinhronizuje vaše komentare nazad u vašu WordPress instalaciju kao što to radi FastComments. To znači da ćete nakon sinhronizacije morati da pratite sledeće korake za izvoz i unos.

## Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, avatare korisnika i slike u tekstu. Premestićemo slike na naše servere bez problema.

Da biste preuzeli podatke o svojim komentarima sa JustComments, idite na svoju stranicu sa računom.

## Uvezite u FastComments administraciju

Ne brinite o otvaranju rezultantnog fajla iz JustComments.

Ako ste prijavljeni, možete ići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>.

Izaberite JustComments iz padajućeg menija i otpremite svoj fajl.

### Identifikatori stranica

Kada uvozite, videćete opciju da izaberete URL stranice ili "ID stavke". Ako niste sigurni šta da izaberete, izaberite URL stranice. Ako imate integraciju sa JustComments gde određujete ID stavke u konfiguraciji dodatka, izaberite ID stavke.

### Sačekajte nekoliko minuta

Uvoz u FastComments je "asinkron". To znači da su otpremanje fajla i njegovo procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vašeg fajla, mogli biste odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu je tabelar - svaki red predstavlja pokušaj uvoza. 
Možete sigurno osvežiti ovu stranicu da vidite status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada završi

Dobićete email kada uvoz završi - bilo da je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje fajla uspe i vidite svoj uvoz na stranici Imports. Imaće status poput "Zahtevano", a kada počne, status će biti "U radu".

Sigurno možete ponovo uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> da bismo mogli da pomognemo.

### Zamenite JustComments kod sa FastComments

Ako ne koristite JustComments WordPress dodatak, onda je jednostavno pitanje uklanjanja malog koda koji vam daju i njegovom zamenom sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokretati JustComments i FastComments na istoj veb stranici kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

### Migracija URL-ova u isto vreme

Komentari sami su po defaultu vezani za "pageUrl" polja u izвозу JustComments, tako da sve dok vaši URL-ovi ne menjaju prebacivanje ide lako. Ako želite da migrirate URL-ove i zadržite svoje komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućava otpremanje malih tekstualnih fajlova, pa ako migrirate više od nekoliko URL-ova, napravite Excel tabelu.

## Rekapitulacija

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Ako niste na WordPress-u, zamenite JustComments JavaScript kod sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

{{/isPost}}