---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa JustComments na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste saznali kako potpuno migrirati sa JustComments na FastComments.

Obično je reč o uklanjanju malog isječka koji vam daju i njegovom zamenom sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokretati JustComments i FastComments na istoj stranici kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći sa tim</a>.
{{/unless}}

{{#isPost}}

Počevši od 2021. godine, JustComments će prestati sa radom. Na FastComments-u smo učinili da prebacivanje na našu platformu bude jednostavno.

Otkrivaćete da FastComments nudi mnoge od istih funkcija na koje ste navikli, i još više.

## Razlike u cenama

Dok JustComments koristi sistem zasnovan na kreditima, FastComments koristi model sa više nivoa sa dostupna tri nivoa. Sa FastComments, naš plan od $5/mo
pokriva vas do 1M učitavanja stranica mesečno. Izvan toga su Pro i Enterprise planovi, koje možete pogledati na našoj <a href="https://fastcomments.com/traffic-pricing" target="_blank">stranici sa cenama</a>.

## Ako koristite WordPress

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak čini instalaciju, podešavanje i sinhronizaciju veoma jednostavnim. Međutim, JustComments ne sinhronizuje vaše komentare nazad u vašu WordPress instalaciju kao što to radi FastComments.
To znači da ćete nakon sinhronizacije morati da pratite korake za izvoz i uvoz u nastavku.

## Izvoz vaših postojećih komentara

FastComments uvoznik će migrirati vaše komentare, korisničke imena, korisničke avatare i inline slike. Premesti ćemo slike na naše servere bez problema.

Da biste preuzeli svoje podatke o komentarima sa JustComments, idite na stranicu vašeg naloga.

## Uvoz u FastComments Admin

Ne brinite o otvaranju rezultantne datoteke iz JustComments-a.

Ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>.

Izaberite JustComments iz padajućeg menija i otpremite svoju datoteku.

### Identifikatori stranica

Prilikom uvoza, videćete opciju izbora URL stranice ili "Item ID". Ako niste sigurni šta da izaberete, izaberite URL stranice. Ako imate integraciju sa JustComments
gde specifičete Item ID u konfiguraciji vidžeta, izaberite Item ID.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkronizam". To znači da su otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete sigurno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko je redova do sada uvezeno.

### Kada završi

Dobićete email kada uvoz završi - bez obzira na to da li je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe i vidite svoj uvoz na stranici uvoza. Imaće status poput "Zatraženo" i kada započne status će biti "U toku".

Sigurno je ponovo uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> kako bismo mogli da pomognemo.

### Zamenite JustComments kod sa FastComments

Ako ne koristite JustComments WordPress dodatak, tada je u pitanju jednostavno uklanjanje malog isječka koji vam daju i njegova zamena sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>.
Možete čak privremeno pokretati JustComments i FastComments na istoj stranici kako biste testirali i prilagodili izgled i osećaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći sa tim</a>.

### Migracija URL-ova u isto vreme

Komentari su po defaultu povezani sa "pageUrl" poljima u JustComments izvozu, tako da dokle god se vaši URL-ovi ne menjaju, prebacivanje je lako. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Pomoćna stranica omogućava otpremanje malih tekstualnih datoteka, tako da ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

## Rezime

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Ako niste na WordPress-u, zamenite JustComments JavaScript isječak sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

{{/isPost}}


---