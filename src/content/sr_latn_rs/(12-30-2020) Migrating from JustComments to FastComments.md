---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa JustComments na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste saznali kako da potpuno migrirate sa JustComments na FastComments.

Obično se radi o uklanjanju malog snipeta koji vam daju i njegovom zamenom sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokretati JustComments i FastComments na istoj stranici kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći u tome</a>.
{{/unless}}

{{#isPost}}

Počevši od 2021. godine, JustComments će se ugasiti. Na FastComments smo olakšali prebacivanje na našu platformu.

Videćete da FastComments pruža mnoge od istih funkcija na koje ste navikli, i više.

## Razlike u cenama

Dok JustComments koristi sistem zasnovan na kreditima, FastComments koristi model sa nivoima sa tri dostupna nivoa. Sa FastComments, naš plan od $5/mesečno pokriva vas do 1M učitavanja stranica mesečno. Iznad toga su Pro i Enterprise planovi, koje možete pogledati na našoj <a href="https://fastcomments.com/traffic-pricing" target="_blank">stranici sa cenama</a>.

## Ako koristite WordPress

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak olakšava instalaciju, podešavanje i sinhronizaciju. Međutim, JustComments ne sinhronizuje vaše komentare nazad u vašu WordPress instalaciju kao što to radi FastComments. To znači da nakon sinhronizacije morate pratiti korake za izvoz i uvoz u nastavku.

## Izvezite vaše postojeće komentare

FastComments importer će migrirati vaše komentare, korisnička imena, korisničke avatare i inline slike. Premestićemo slike na naše servere bez problema.

Da biste preuzeli podatke o vašim komentarima iz JustComments, idite na vašu stranicu naloga.

## Uvezite u FastComments Administraciju

Ne brinite o otvaranju rezultantnog fajla iz JustComments.

Ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>.

Izaberite JustComments iz padajućeg menija i otpremite vaš fajl.

### Identifikatori stranica

Prilikom uvoza, videćete opciju da izaberete URL stranice ili "ID stavke". Ako niste sigurni šta da izaberete, izaberite URL stranice. Ako imate integraciju sa JustComments gde specificirate ID stavke u konfiguraciji vidžeta, izaberite ID stavke.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da su otpremanje fajla i njegovo procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vašeg fajla, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza. Možete bezbedno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada završi

Primite ćete e-mail kada se uvoz završi - bez obzira da li je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje fajla uspe i vidite svoj uvoz na stranici za Uvoze. Imaće status kao "Zahtevano" i kada počne status će biti "U toku".

Sigurno je ponovo uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite se nama</a> kako bismo mogli pomoći.

### Zamenite JustComments kod sa FastComments

Ako ne koristite JustComments WordPress dodatak, onda se sve svodi na uklanjanje malog snipeta koji vam daju i njegovu zamenu sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokretati JustComments i FastComments na istoj stranici kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći u tome</a>.

### Migracija URL-ova u isto vreme

Komentari su po defaultu vezani za polja "pageUrl" u JustComments izvozu, tako da je prebacivanje lako sve dok se vaši URL-ovi ne menjaju. Ako želite da migrirate URL-ove i zadržite svoje komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućava otpremanje malih tekstualnih fajlova, tako da ako migrirate više od nekoliko URL-ova, kreirajte Excel tabelu.

## Rekapitulacija

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Ako niste na WordPressu, zamenite JavaScript snipet JustComments-a sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

{{/isPost}}