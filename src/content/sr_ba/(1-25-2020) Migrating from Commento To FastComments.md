---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa Commento na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da vidite kako da potpuno migrirate sa Commento na FastComments.

## Problemi

Commento nam ne daje potpune URL-ove. Ono što pružaju je samo ime domene kojoj komentar pripada - poput "fastcomments.com/some-page".
To znači da FastComments importer mora pretpostaviti koji je protokol, a podrazumevano koristi https. Ako pokrenete uvoz i ne vidite svoje podatke,
možda biste želeli da proverite da li je vaš sajt pravilno obezbeđen.
{{/unless}}

{{#isPost}}
### Izvezite postojeće komentare

Da biste izvezli podatke o komentarima i korisnicima vašeg sajta iz Commento, idite na Administratorsku kontrolnu table, zatim na General i zatim na Export Data.

Primetićete da rezultatni fajl koji dobijate putem emaila ima misterioznu "gz" ekstenziju. Ako ste malo dodatno tehnički upućeni, možda znate da to označava "gzip" i da je to popularan i efikasan način za kompresovanje fajlova.

### Ne otvarajte "gz" fajl

Podrazumevana instalacija Windows 10 neće moći da otvori fajl iz Commento. To je uredu, jer to ne morate raditi sa FastComments. Naš backend razume ovaj kompresovani fajl.

Nakon toga, ako ste prijavljeni možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Odaberite Commento iz padajućeg menija i otpremite svoj fajl.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkron". To znači da su otpremanje fajla i njegovo procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vašeg fajla, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete bezbedno osvežiti ovu stranicu da vidite status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada je gotovo

Dobićete email kada je uvoz završen - bez obzira da li je uspeo ili ne. Možete zatvoriti stranicu nakon što otpremite fajl i vidite svoj uvoz na stranici za Uvoze. Imaće status poput "Zatraženo" i kada počne status će biti "U toku".

Sigurno je ponovo uvesti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> kako bismo vam pomogli.

### Zamenite Commento kod sa FastComments

To je jednostavno pitanje uklanjanja malog isječka koji vam daje Commento i zamene sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno pokrenuti Commento i FastComments na istom sajtu radi testiranja i prilagođavanja izgleda i osećaja. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći oko toga</a>.

### Migracija URL-ova u isto vreme

Komentari su vezani za "link" polja u Commento izvozu, tako da sve dok se vaši URL-ovi ne menjaju, prelazak je lak. Ako želite migrirati URL-ove i zadržati svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica za pomoć omogućava otpremanje malih tekstualnih fajlova, tako da ako
migrate više od samo nekoliko URL-ova, napravite Excel tabelu.

### Rezime

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Zamenite Commento JavaScript isječak sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

## Problemi

Commento nam ne daje potpune URL-ove. Ono što pružaju je samo ime domene kojoj komentar pripada - poput "fastcomments.com/some-page".
To znači da FastComments importer mora pretpostaviti koji je protokol, a podrazumevano koristi https. Ako pokrenete uvoz i ne vidite svoje podatke,
možda biste želeli da proverite da li je vaš sajt pravilno obezbeđen.

## Zašto Commento neće da mi pošalje moj fajl?
Za veće sajtove, Commento možda neće biti u mogućnosti da kreira izvezen fajl zbog tehničkih ograničenja na njihovoj strani. Imamo mogućnost da preuzmemo vaš postojeći sajt i skinemo komentare sa njega, međutim ovo može biti
prilično prilagođeno i zbog vremena koje je potrebno zahtevati da imate paket podrške. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možete zatražiti pomoć oko ovoga ovde</a>.
{{/isPost}}

---